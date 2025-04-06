---
title: 'Adding a `soft_delete` to Ecto Multi pipelines'
hero: ''
excerpt: ''
alt: ''
date: '2024-10-21'
tags: ["programming", "elixir"]
---

I'm a big fan of `Ecto,` Elixir's database wrapper. The `Multi` library lets you build up a series of operations that happen in order, if one fails the entire operation rolls back. Multi comes with the a lot of standard CRUD built in, `insert/4` , `update/4` , `delete/4` and their bulk counterparts `insert_all/5` , `update_all/5` and `delete_all/5` for acting on multiple records. 

 I've been working on a project where we make use of the soft delete pattern, rather than calling `delete/4` on a record we generally `update/4` the record passing in a `deleted_at` timestamp:
 
```elixir
|> Multi.update(:soft_delete, fn %{customer: customer} -> 
	Changeset.change(customer, %{deleted_at: now})
end)
```
 
This works fine, and even updating multiple records one could take this approach:
 
```elixir
|> Multi.update_all(:soft_delete, fn %{customers: customers} ->
	ids = Enum.map(customers, & &1.id)
	from(c in Customer, where: c.id in ^ids, update: [set: [deleted_at: ^now]])
end, [])
```
 
I was working on a new feature that will require a cascade of soft deletes, deleting multiple records, their associated records, their children, etc.  (As the second example above is doing).  Admittedly, I could have just utilized this `Multi.update_all/5` and put multiple steps into the `multi` . However; I thought continuously mapping specific ids, passing in `set: [deleted_at: ^now]` was a little cumbersome and not very idiomatic.  Mostly, I wanted to have a bit of fun wondering: "what if Ecto.Multi had a `soft_delete_all/5` function?" Of course it doesn't, this is a niche use case but it makes sense in this application so I dug in and found the task to be (as is the case with a lot of Elixir) surprisingly easy.
 
Just like `update_all/5` I wanted to make sure `soft_delete_all` would handle queries or functions passed in. Pattern matching here using the `is_function/1` guard. This made it a fairly straightforward operation:
 
```elixir
@spec soft_delete_all(Multi.t(), atom(), fun() | Query.t(), keyword()) :: Multi.t()
  def soft_delete_all(multi, name, func, opts \\ [])

  def soft_delete_all(multi, name, func, opts) when is_function(func) do
    Multi.run(
      multi,
      name,
      operation_fun({:soft_delete_all, func, [set: [deleted_at: Timex.now()]]}, opts)
    )
  end

  def soft_delete_all(multi, name, queryable, opts) do
    add_operation(multi, name, {:update_all, queryable, [set: [deleted_at: Timex.now()]], opts})
  end
```
 
The first function matches against functions while the second matches against a queryable. I'll explain the distinction between both. 

 Under the hood `Multi` is already equipped to handle functions or queryables; by reading the source of the `Multi` module I was able to,matches, forward along the proper structure for the Multi to run, and in another case recreate the same functionality that `Multi.update_all` uses. Both `operation_fun/2` and `add_operation/3` are nearly copy-pasted from the Multi core. 

 In the first instance the multi is passed a function, something like:
 
```elixir
|> soft_delete_all(:remove_customer, &remove_customer/1)
```
 
In this case Ecto adds a new Multi operation to the pipeline: `Multi.run/3` but it needs to run the function it's passed. It does this with `operation_fun/2` . The multi has several matchers for each of the bulk operations, in my case I only needed one `:soft_delete_all` .
 
```elixir
defp operation_fun({:soft_delete_all, fun, updates}, opts) do
    fn repo, changes ->
      {:ok, repo.update_all(fun.(changes), updates, opts)}
    end
  end
```
 
Again, this is identical (save the `:soft_delete_all` atom) to the Multi module. It runs our function which creates a query, it passes our update: `[set: [deleted_at: Timex.now()]]` to the query and then updates the record.
 
In cases where we pass a query in:
 
```elixir
|> soft_delete_all(:remove_customer, Query.from(c in Customer, where: c.id == 123))
```
 
We match on the next function head, here again I used Ecto's pattern writing my own custom `add_operation/3`
 
```elixir
defp add_operation(%Multi{} = multi, name, operation) do
    %{operations: operations, names: names} = multi

    if MapSet.member?(names, name) do
      raise "#{Kernel.inspect(name)} is already a member of the Ecto.Multi: \n#{Kernel.inspect(multi)}"
    else
      %{multi | operations: [{name, operation} | operations], names: MapSet.put(names, name)}
    end
  end
```
 
This is going to first check that the operation name isn't already in the Multi. If it's not, we append the operation into the Multi. This works because of the parameters we've passed it:
 
```elixir
add_operation(multi, name, {:update_all, queryable, [set: [deleted_at: Timex.now()]], opts})
  end
```
 
Specifically: `{:update_all, queryable, [set: [deleted_at: Timex.now()]], opts}` once again, we aren't doing anything fancy to soft delete these records, we are using Multi's ability to `:update_all` with our provided queryable. The update we are making is `[set: [deleted_at: Timex.now()]]` .
 
There you have it, it's `:update_all` all the way down, which makes sense because we are updating a record instead of deleting it, but I think it's a lot cleaner to write something like this:
 
```elixir
query1 = from(c in Customer, where: c.last_purchase <= ^old_date)
query2 = from(u in User, join: c in assoc(u, :customer), on: c.last_purchase <= ^old_date)

Multi.new()
|> soft_delete_all(:customers, query1)
|> soft_delete_all(:users, query2)
#👆don't judge this contrived example it's not production code
```

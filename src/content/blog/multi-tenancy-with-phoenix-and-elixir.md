---
title: 'Multi-tenancy with Phoenix and Elixir'
hero: ''
excerpt: ''
alt: '<span style="white-space: pre-wrap;">Photo by </span><a href="https://unsplash.com/@jentheodore?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit"><span style="white-space: pre-wrap;">Jen Theodore</span></a><span style="white-space: pre-wrap;"> / </span><a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit"><span style="white-space: pre-wrap;">Unsplash</span></a>'
date: '2025-06-04'
tags: ["programming", "elixir"]
---

There are lots of good places to start with multi-tenancy in Elixir (although I'd recommend Ecto's own docs for either [foreign keys](https://hexdocs.pm/ecto/multi-tenancy-with-foreign-keys.html) or [postgres schemas](https://hexdocs.pm/ecto/multi-tenancy-with-query-prefixes.html) ). Most of the write-ups and tutorials start the same way "generate a new Phoenix application with `mix phx.new` ". While, this is great if your starting an enterprise SASS app from scratch but it leaves something to be desired if you, like I was, are migrating an existing codebase with thousands of users, and products to a multi tenant application. I recently went through this with an enterprise client and there were enough pitfalls and interesting problems to solve that it seemed to warrant a detailed post. 

 I believe the solution I put together is both effective and elegant but it is not without it's pain points. Mainly, if you are going to use PostgreSQL schemas (which I did) you are going to have to migrate your existing data into said prefixes. There is no easy way around this, it's just a slog you have to do; more on that later.
 
## Schemas?
 
I went back and forth for a while, I finally settled on query prefixes as they felt a little more elegant; segmenting data without having to add new foreign keys to any columns. It also makes it easy to migrate or wipe customer data if needed. Admittedly, if your managing tens of thousands of tenants in a single database this approach will be a bottleneck. In my case that was not a concern; there are two current tenants and the client only expects to add a few tenants ever year if that.
As mentioned, Ecto has great docs on setting up schemas; however I opted to use a dependency called `Triplex` mostly for the sake of time (about a week in I realized I could have rewritten most the required features in a day or two but we had about a month to make this transition so a refactor at this point seemed like overkill). Schemas work because we are using PostgreSQL, you can kind of hack together "schemas" with MySQL but under the veil it's just separate databases, I can't vouch for that approach because my Elixir projects are mostly in Postgres.
 
The first big hurdle is ensuring that your queries are run in the the right schema. By default Ecto is going to run queries in the `public` schema. On any given query you can change this by passing in a `prefix:` option, ie: `Repo.one(query, prefix: "some_prefix")`. Now rewriting hundreds or thousands of `Repo` actions with a variable prefix is not exactly convenient but it's imperative to ensure queries are scoped to the correct schema. Just imagine the catastrophic breach if you had Customer A getting back Customer B's data!
 
Thankfully you do not have to rewrite all your queries explicitly calling a prefix. There are some handy built-in behaviours from `Ecto.Repo`. Enter Repo hooks! `Ecto.Repo` comes with some great behaviours that allow one to effectively write `Repo.one(query, prefix: "some_prefix")` without actually writing it for *every single* query! You can implement `prepare_query/3` which to filter and modify the prefix. You add these hooks to `YourApp.Repo` This is `prepare_query/3` in it's simplest form:
 
```elixir
@impl true 
def prepare_query(_operation, query, opts) do 
	opts = Keyword.put(opts, :prefix, "some_prefix")
	{query, opts}
end
```
 
Now all queries will be looking at the `some_prefix` prefix rather than the `public` prefix. In our app we had a few tables that we _wanted_ scoped to the `public` query? For example you may have an `admins` table, or possibly `oban_jobs` , `tenants` , etc. You can handle this in a few ways:
 
```elixir
@impl true 
def prepare_query(_operation, query, opts) do 
	if opts[:skip_prefix] do 
		{query, opts}
	else 
		opts = Keyword.put(opts, :prefix, "some_prefix")
		{query, opts}
	end 
end
```
 
This works although it necessitates passing `skip_prefix: true` to all your Repo calls; likely fewer then before but still kind of defeating the purpose of `prepare_query/3` .
 
```elixir
@sources ~w[admins oban_jobs oban_peers customer_pricing]

@impl true 
def prepare_query(_operation, %Ecto.Query{from: %{source: {source, _}}} = query, opts) when source in @sources do 
	{query, opts}
end 

def prepare_query(_operation, query, opts) do 
... 
end
```
 
By pattern matching on your allowed tables you can bypass your `prefix` override. I used a combination of both of the above approaches with a list of allowed source tables as well as the option to `skip_prefix` which adds an manual override to the API. In theory you shouldn't need it but you never know, tests, edge cases, shrugs...
 
## Tenant Selection
 
At this point we've converted every query in the application to use a dynamic prefix in about 10 lines of code. Not bad but it's also not dynamic, I've hard coded `some_prefix` into my queries. Before we make the actual hook dynamic we need to determine how Phoenix is going to recognize the tenant. There are many ways of doing this, in my case, for now, we are using subdomains. 

 Since the subdomain is available on the `conn.host`, I set up a plug to fetch the subdomain:
 
```elixir
defmodule MyApp.TenantPlug 
...

def selct_organization_from_domain(conn, _opts) do 
	subdomain =  get_subdomain(conn) 
	put_session(conn, :tenant, subdomain)
end

defp get_subdomain(%{host: host}) do 
	[subdomain | _] = String.split(host, ".")
	subdomain
end
```
 
This gets the subdomain and puts it in the session (which is not strictly necessary but is nice to have). Next lets pass it to Repo; as with the queries, one need not rewrite all `Repo` calls passing in a `:subdomain` option, here Elixir/Phoenix has your back. In Phoenix, each browser session is a unique process and that process can pass data to itself. Back in `Repo` I added these little helpers:
 
```elixir
@tenant_key {__MODULE__, :tenant}

def put_tenant_subdomain(subdomain) do 
	Process.put(@tennat_key, subdomain)
end	

def get_tenant_subdomain do 
	Process.get(@tenant_key)
end
```
 
Now back in the `TennatPlug` we can add the subdomain to the process:
 
```elixir
def selct_organization_from_domain(conn, _opts) do 
	subdomain =  get_subdomain(conn)
	Repo.put_tenant_subdomain(subdomain) 
	put_session(conn, :tenant, subdomain)
end
```
 
A second `Repo` behaviour can be used to pass options to the Repo call: `default_options/1` . Rather than explicitly writing `opts = Keyword.put(opts, :prefix, "some_prefix")` in the `prepare_query/3` hook `default_options/1` will set up your `opts` before the Repo function runs. From there we call `get_tenant_subdomain/0` to retrieve the subdomain/query prefix we set in the plug:
 
```elixir
@impl true 
def default_options(_operation) do 
	[prefix: get_tenant_subdomain()]
end 

@tenant_key {__MODULE__, :tenant_subdomain}
def get_tenant_subdomain, do: Process.get(@tenant_key)
```
 
Like `prepare_query/3` , `default_options/1` will run with every query.
 
With this implemented, navigating to a specific subdomain will set the tenant in the current process (as well as in the session) and any database queries in that session will be scoped to the tenant's schema. Putting it all together we have something like this in `repo.ex`
 
---

```elixir
@allowed_sources ~w[oban_jobs tenants]

  @impl true
  def default_options(_operation) do
    [prefix: get_tenant_subdomain.get()]
  end

  @impl true
  def prepare_query(_operation, %Ecto.Query{from: %{source: {source, _}}} = query, opts)
      when source in @allowed_sources do
    opts = Keyword.put(opts, :prefix, "public")
    {query, opts}
  end

  def prepare_query(_operation, query, opts) do 
  	if opts[:skip_prefix] do 
		{query, opts}
	else 
		opts = Keyword.put(opts, :prefix, "some_prefix")
		{query, opts}
	end 
  end 

  @tenant_key {__MODULE__, :tenant}

  def put_tenant_subdomain(subdomain) do 
	   Process.put(@tennat_key, subdomain)
  end	

  def get_tenant_subdomain do 
	   Process.get(@tenant_key)
  end
```
 
The simplified version of my `tenant_selection_plug.ex` looks like:
```
  def selct_organization_from_domain(conn, _opts) do 
	   subdomain =  get_subdomain(conn)
	   Repo.put_tenant_subdomain(subdomain) 
	   put_session(conn, :tenant, subdomain)
  end

  defp get_subdomain(%{host: host}) do 
   	[subdomain | _] = String.split(host, ".")
	  subdomain
  end
end
```

In production we are handling a lot more such as authorization with Guardian but this show how simple it is to get a subdomain and add it to the session. 
The above is a fairly bare-bones approach our final project had a lot more customization and ended up being organized a bit differently; for example, we extracted functions dealing with getting and setting `@tenant_key`s in the process to their own module. My hope is that the above lays the groundwork for anyone looking to do something similar.

 
## Data Migration
 
I wish I had a solution half as slick as Ecto's behaviours make querying database schemas. I was unable to find an elegant way to migrate relevant data to specific schemas so I was forced to do it with good old SQL.
 
```sql
-- compy customers
INSERT INTO salt_lake.locations SELECT * FROM public.locations WHERE id = 'salt_lake_location_id';

-- copy customers 
INSERT INTO salt_lake.customers SELECT * FROM public.customers WHERE location_id = 'salt_lake_location_id';
```
 
I had about 50 queries similar to this. Fortunately, tenants were mapped to locations and at the time of the migration the client only had two tenants (the system was migrating from a product business to a consulting business). I ran these queries twice replacing `salt_lake` with `bakersfield` on the second iteration. In my case due to the way the system was originally designed to work with an external system (look'en at you Quickbooks) and some changes the customer was making to how that system would be used this migration ended up being a bit more harry than expected.  I had to write several ad-hoc queries that looked less like the above and more like:
 
```sql
INSERT INTO salt_lake.qb_orders SELECT qb.* FROM qb_orders qb JOIN orders o ON o.qb_order_id = qb.id JOIN customers c on o.customer_id = c.id WHERE NOT EXISTS (SELECT 1 FROM salt_lake.qb_orders slcqb WHERE slcqb.id = qb.id) AND c.name ILIKE '%A Problematic Customer%'
```
 
Again, that's not the fault of the multi-tenancy setup, migrating data in any complex system is always going to have it's prickly bits. If anyone has ideas for a more elegant migration pattern (first two queries, ignore the last one that an unfortunate specific), I'm all ears, shoot me an email self[at]travisfantina.com.

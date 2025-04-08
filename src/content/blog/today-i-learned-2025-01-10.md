---
title: 'Today I Learned ~D[2025-01-10]'
hero: ''
excerpt: ''
alt: ''
date: '2025-01-10'
tags: ["til"]
---

Today's TIL has a twist ending... so stick around. 

 Elixir has a shortcut for creating anonymous functions. I've always written:
 
```elixir
greet = fn name -> "Hello, #{name}!" end 
# which can be invoked
greet.("Travis")
# returns
"Hello, Travis!"
```
 
However; I came across some tricky code with a case statement:
 
```elixir
docs = case type do 
	:billing -> &[billing_act: &1]
    :shipping -> &[shipping_act: &1]
end 

# invocation
type = :billing
docs.("some customer")
# returns 
[billing_act: "some customer"]
```
 
This was very confusing to me, the fact that the anonymous function was a `case` form only further obfuscated what was happening. I thought it might be some `case` magic. 

 No. Apparently you can short cut the aforementioned anonymous function declaration:
 
```elixir
greet = & "Hello, #{&1}!"
```
 
You treat this as any other anonymous function. You can even have multi-arity functions:
 
```elixir
greet = & "Hello, #{&1} #{&2}!"
# invocation 
greet.("Travis", "Fantina")
# returns 
"Hello, Travis Fantina!"
```
 
In my case the `case` statement could have also been written:
 
```elixir
docs = fn customer -> 
	case type do
		:billing -> [billing_act: customer]
    	:shipping -> [shipping_act: customer]
	end
end
```
 
Plot twist: This is not a TIL, apparently I learned this at least four years ago. That initial `case` function... the author was me four years ago!

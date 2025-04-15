---
title: 'Personal Heuristic: Make it Readable'
hero: ''
excerpt: ''
alt: ''
date: '2025-04-14'
tags: ["programming", "elixir"]
---

I wrote this post back in January, just dusted it off to post today as I attempt to get back on the blogging horse.
***
Today I was refactoring a small module that makes calls to an SAP endpoint. The compiler got hung up because it couldn't find the value `item`.  It was an easy fix, my code looked like this:
```elixir 
for itm <- data do
    %{"MATNR" => material, "PSTYV" => category, "VBELN" => so} = item
    %{material: material, category: category, so: so}
end
```
It's easy to spot (especially if the compiler tells you exactly where it is); in the function head I wrote `itm` but down below I'm looking for `item`. Simple; yet this is not the first time something similar has happened to me. It's also not the first time I've specifically confused `itm` with `item` which led me to this conclusion: just write `item` every time. There is an odd switch in my brain that thinks I'm penalized by the character, and leaving `e` out of `item` will somehow make my code more terse. 
While technically true, it's not worth it. It never is; just write `item`, everytime. People know what `item` is. `itm` is more ambiguous, not just because it only saves one letter, but it could be an abbreviation or some weird naming convention. Why put that mental load on someone, even yourself, reading through this code? 
This is a tiny example but it's magnified in function names. While `check_preq` may be quick to type and take up less horizontal space in an editor it's not immediately clear what this function does. I would argue that `get_purchase_requisition_number` is a much better function name; even if you know nothing about the function, the codebase, or programming in general you can read that and know what's supposed to happen.
Of course there are conventions, ie. `!` dangerous or `?` bankbook method endings in Ruby ie. `exitst?` will throw an error. These sorts of things require one to be a little familiar with the patterns of a language but that's ok that just means that I can write a function `get_purchase_requisition_number!` and anyone familiar with Ruby or Elixir will expect the function to raise or return an explicit value (as opposed to something wrapped in an `:ok` tuple).

Moving forward I'm calling things what they are even if it comes with a dash of verbosity.  

---
title: 'TIL UUIDv4 vs UUIDv7'
hero: ''
excerpt: ''
alt: ''
date: '2024-09-25'
tags: ["til", "programming"]
---

I've always run with UUID v4 because it's the default for the `Ecto.UUID` library in Elixir. However a coworker recommended UUID v7. Having never really looked into UUID other than to implement as a primary key the distinction was news to me. 

 Effectively;
 
- UUID v4 is a totally random hash that is generated and extremely unlikely to ever conflict with any other generated UUID.
- UUID v7 also contains a random hash but is also based on a timestamp, this means you can sort them and index them. 

 For further reference, yes there are UUIDs v1-v8 as of this writing. If you want a good description of each you can check out this [helpful link](https://www.ntietz.com/blog/til-uses-for-the-different-uuid-versions/) .

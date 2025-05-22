---
title: 'Today I Learned ~D[2025-05-22]'
hero: ''
excerpt: ''
alt: ''
date: '2025-05-22'
tags: ["til"]
---
There is only one `false` in Ruby... Or more broadly speaking since everything is an object, for the sake of efficency in memory management any object that can be referenced will be. Immutable primitives (such as `true`, `false`, `1`, `2`, etc.) will only ever reference themselves.  For example:
```ruby
false.object_id
=> 0
false.dup.object_id 
=> 0
val = false 
val.object_id 
=> 0
```
Duplicating `false` only creates a reference to `false`. As opposed to a mutable primitive like a string:
```ruby
train = "choo choo"
train.object_id 
=> 784160
train.dup.object_id
=> 784180
```
Of course this intuitively makes sense but I had never run up against it until I had a spec fail:
```ruby
expect(response[:enabled]).to be true
expect(response[:value]).to be "location"

=> expected #<String:140300> => "location"
  got #<String:140320> => "location"
```
I did a double take before I realized that the `object_ids` were different.  The first spec passes because `true` is in immutable object. The second one fails because `location` is not!
Fix that with: `expect(response[:value]).to eq "location"`
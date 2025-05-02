---
title: 'Weekly Roundup: May 2, 2025'
hero: ''
excerpt: ''
alt: ''
date: '2025-05-02'
tags: ["programming", "life"]
---
This week I formally transitioned from my fulltime consulting gig at [Objective](https://objective.dev) for a fulltime gig at [Built For Teams](https://www.builtapp.com/) more details on that in a future post.  However; broadly speaking it means that I'm dusting off my Ruby skills, diving deeper into the realm of OO programing then I ever have before. 

### Farewell ASDF
Last Friday night I pulled a Flutter repo I'm working on with a friend. I started having all kinds of issues trying to install Cocoapods. `gem install cocoapods` but then `flutter run` produced this error:
```
Warning: CocoaPods is installed but broken. Skipping pod install.
...
Error: CocoaPods not installed or not in valid state.
```
Ok. So do some more research throw in a `sudo`, no luck. `pod version` produces this error:
```
<internal:/Users/travis/.asdf/installs/ruby/3.3.5/lib/ruby/3.3.0/rubygems/core_ext/kernel_require.rb>:136:in `require': linked to incompatible /Users/travis/.asdf/installs/ruby/3.1.6/lib/libruby.3.1.dylib -
```
Ah! I've seen this more than once! Ever since I shifted to a Ruby focused team at the start of the year I feel like Ruby version management has been an uphill slog.  I've `reshim`'d multiple times, removed versions of Ruby, removed the Ruby plugin, and reinstalled ASDF. Things work for a time but eventually I run into errors like the above. My hunch, which may be ovbious, is that something was wrong with my setup that was placing versions of Ruby inside other versions (`ruby/3.3.5/lib/ruby/3.3.0`); I'm not sure if the path is supposed to look like that but it doesn't make sensee to me. 
I'm willing to take responsability here, it may be that my `$PATH` was misconfigured (although I attempted multiple times to proide a concise path for ASDF) or that something in _my_ system was messing with ASDF.  I love ASDF, it's served me very well for years.  Being able to remove `rvm` and `nvm` and seamlessly manage Elixir versions between projects was a breath of fresh air.  The docs are clear and concise, the tool provides enough functionality to get stuff done without getting in the way.  However; for whatever reason, the slog to get Ruby working just took its toll.  One of my coworkers mentioned Mise which is a drop in replacement for ASDF.  I installed it in about 30 seconds and in 45 seconds my project was running with Mise.  👏
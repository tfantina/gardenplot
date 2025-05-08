---
title: 'Class Configs with Lambdas in Ruby'
hero: ''
excerpt: ''
alt: ''
date: '2025-05-08'
tags: ["programming"]
---

I've been getting reacquainted with Ruby, diving into a well established project which has been blessed by numerous smart developers over the course of the past 10 years. I discovered an interesting pattern for gathering models (`ApplicationRecord` classes) that may or may not be eligible for some feature:
You start with a mixin that creates a method for your classes to pass options to; as well as a method for determining if those options enable the feature or not:
```ruby 
module ProvidesFeature 
    class_methods do 
        # pass this to the model class
        def features_provided(model, **opts)
            (@features ||= []) << [model, opts]
        end

        # call this to initialize class feature checks
        def feature_models(ctxt)
            features_provided.map do |args|
                DynamicFeature.new(ctxt, args)
            end
        end
    end 
end 
```
Here is an example `DynamicFeature` class instantiated above. This could be a bit simpler if you didn't want to pass any `context` in but a lot of the power of this approach comes from the flexibility an argument like context gives you:
```ruby
class DyanmicFeature do 
    def initialize(ctxt, config_args)
        @ctxt = ctxt
        configure(config_args)  
    end

    def configure(ctxt, args = {})
        @should_provide_feature = args.fetch(:should_feature_be_provided) do 
            -> (ctxt) { ctxt&.fetch(:person_is_admin, false) }
        end
    end 

    def can_feature?
        @should_provide_feature.call(@ctxt)
    end
end 
```
Pausing for a moment and breaking this down.  The `#configure` method is the main source of the magic.
First we try to get the keyword `:should_feature_be_provided` (implemented below).  If we get it we can return it's value; however, there is built in flexibility to this.  If `args` does not have a `:should_feature_be_provided` key then we can call a lambda with additional context.  Again, you don't need to pass anything else but I view this flexability as a strength if used strategically. 
Now implement; in an active record ie. `Person`
```ruby 
class Person < ApplicationRecord 
    include ProvidesFeature 

    features_provided :person, 
        should_feature_be_provided: -> (ctxt) { ctxt.person.is_admin? }
    
```

You can then easily gather any models that `ProvidesFeature`:
```ruby 
ApplicationRecord.subclasses.select { |klass| klass < ProvidesFeature }
```
Instantiate `DynamicFeature` on each class (note we are passing some context that assumes there is a `person` with an `is_admin?` method. It's a little contrived but it illustrates the point: you can pass additional context in when the `feature_models` are built.
```ruby
.flat_map { |klass| klass.feature_models(ctxt) }
```
Then filter with `can_feature?`
```ruby
.select { |klass| klass.can_feature? }
```

At the start of this post I said this was an "interesting pattern"; not necessarily saying it's a _good_ one. I'm still fairly new to Ruby (despite having built a few production projects back in 2016 and 2018) and the OO pattern. Personally; I found the above extremely difficult to grok and even though I understand it I've found that, within the context of the project I'm working on, I've myself treadmilling through various files. In some ways I feel like, clever, as it is, this pattern may obfuscate a little too much but I'm open to feedback from those who have been in the OO world longer.
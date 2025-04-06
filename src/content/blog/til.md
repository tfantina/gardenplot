---
title: 'TIL Struct matching in Guards'
hero: ''
excerpt: ''
alt: ''
date: '2024-10-10'
tags: ["til", "programming"]
---

Not so much a TIL but I always get confused with the proper syntax. You can pattern match on a struct and use it in a guard to only let through the structs you want:
 
```elixir
@spec address_formater(BillAddress.t() | ShipAddress.t()) :: String.t()
def address_formatter(%struct{} = address) when struct in [BillAddress, ShipAddress] do
 ...
end 

def address_formatter(_), do: raise "AddressError :: Not my address!"
```
 
As with a lot of my examples it may be a little contrived but it is *based* on a real world but I fixed today where `address_formatter/2` was getting an `%Ecto.Association.NotLoaded{}` and trying to format it.

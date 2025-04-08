---
title: 'TIL INSERT INTO with SELECT constraints'
hero: ''
excerpt: ''
alt: ''
date: '2024-09-18'
tags: ["til", "programming"]
---

In the past month I've had to write a lot of SQL to migrate a system and split existing "locations" into tenants ie. migrating data from a `public` schema to a tenant's schema is gets messy due to foreign key constraints. Order of operations is important but sometimes you still find yourself in a corner. 

 In instances where I already have data in the tenant schema, for example `customers` and I need to load a subset of data from another table, eg. `customer_addreses` it's possible to run the query with `tenant.customers` as a constraint for what your inserting:
 
```sql
INSERT INTO tenant.customer_addresses SELECT * FROM public.customer_addresses AS pc WHERE EXISTS (SELECT 1 FROM tenant.customers AS tc WHERE tc.id == pc.customer_id)
```
 
This will insert `public.customer_addresses` into `tenant.customer_addresses` for every `teant.customer` that already exists. I've gotten around a lot of tricky constraint issues with missing/incomplete data this way.

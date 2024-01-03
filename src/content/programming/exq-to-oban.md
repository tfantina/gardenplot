---
title: Exq to Oban
hero: ''
alt: 'Elixir and Phoenix Projects'
daterange: 'Sep 2022 - May 2023'
date: '2022-11-01'
tags: ['Elixir', 'Phoenix']
---

I'm the sole maintainer for a sales portal, processing about a million dollars a day in sales. The system was, historically, backed by Exq and Redis running on AWS. An order processing state machine is 
responsible for processing orders every five minutes. To go from a "new" order to a "completed" order the record passes through dozens of potential steps calling an SAP instance several times along the 
way creating documents and exhanging information. If I was archetecting this solution today, from the ground up, I might create dozens of GenServers to push each order along, however at the time 
the system was built background job processing similar to Ruby's Sidekiq made sense. 

Since the get-go we experienced the occasional instance where orders would halt enmasse. Solutions ranged from emptying the Exq queue, calling a full `FLUSHALL` in Redis, all the way to restarting the 
Redis server. The exact cause of the slowdown/halt was elusive at best and I was never able to pin down a sure fire solution. Although ever present, the slowdowns were so infrequent that switching job
processors was never a priority. However, in the summer of 2022 these order halts started happening almost weekly. Having worked with Oban on another sales platform I found the API 
to be a bit more intuitive and easier to troubleshoot than Exq. I also wanted to move away from Redis; I felt that removing Redis and AWS's Redis instance would pull unnecessiciary variables 
out of the equasion. 

Oban is such an easy library to work with. Working off a 40hr/month retainer and continuing to troubleshoot other issues and develop new features I manged to move the job processing entirely to
Oban over a period of several months. I didn't start with the orders queue, it was too critical to business operations, but over time I moved some other background jobs we had to Oban before 
pulling the plug in the order's queue in January of 2023. Since then I've found that the jobs queues are not only more flexible (Oban Cron lets us schedule jobs, we can more easily find a particular 
job in the database, etc.) but the entire system is far more reliable.  In the past year the orders queue has only halted once (compared to weekly in the summer of 2022) and that was because of a 
timeout we impossed on a specific queue. 

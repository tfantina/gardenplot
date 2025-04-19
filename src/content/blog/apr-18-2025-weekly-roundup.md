---
title: 'Weekly Roundup: Apr 18, 2025'
hero: ''
excerpt: ''
alt: ''
date: '2025-04-18'
tags: ["programming", "life"]
---
Working for a small agency I am fortunate to work on a number of fast moving projects simultaneously. For years I've failed to document what I do during the week but I'm going a little recap of my week. One part historical record, one part general interest. I'm posting it on my blog in the off chance that somebody reads it and, facing a similar problem will reach out I'm always happy to discuss what worked for me and what didn't work. It also doesn't hurt to put this stuff into the world to show that yes I actually _do_ work; I haven't always had the 
most active GitHub but most of my client projects a private/propriety. I'm easing into this, all week I was looking forward to this post; now, however, I realize I should have been working on this not cramming it in from memory on a Friday night.

This week was a balance between my ongoing Elixir projects and a newer (to me) Ruby project.

   * For the past five years I've either supported, or been the lead dev on a large B2B ecommerce platform which handles a few million in daily sales. Over the winter the company began consolidating their North American and European processes which includes using said platform for sales in the EU. Although the hope is that the European process will align with the North American there are some relevant differences. For example in North America the client's product is technically considered a "raw material" which means there is no "Value Added Tax" (VAT); however in Europe, depending on the country of origin and the destination VAT may be charged, other relevant changes are shipping across borders, truck loading calculations and different invoicing procedures. At this point we are still in the research and discovery phase but I've been working with another developer to scope this project out and write some preliminary tests as research. 
   * For another client I've been moving from a Quickbooks Online integration to Quickbooks Desktop, this is a multi-tenancy Elixir Phoenix app so I'll be keeping the Online functionality and just adding a connection to Quickbooks Desktop. The API docs for QBOnline are fairly good, this is not the case with QB Desktop, it's evident that Intuit either has the platform on life support or intentionally obfuscates the functionality to foster a consulting industry around the product. QB Desktop uses an SOAP XML type endpoint. Having wrangled fairly nasty endpoints with SAP I wanted to, if at all possible, avoid dealing directly with QB Desktop. I discovered a service called [Conductor](https://conductor.is/) that does the bulk of the heavy lifting and allows you to hit a very concise REST endpoint. 
   * Since the beginning of the year I've been transitioning from primarily Elixir projects at the agency to a single Ruby based product. On that front I've been involved in an ongoing integration with BambooHR; partnering with Bamboo to pull employee data from their endpoint.
   * On a personal front I finished the migration of this blog from Ghost back to markdown files. I still love Ghost but managing my own instance and integrating it with my Garden proved to be more management than I wanted.

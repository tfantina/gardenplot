---
title: SES Tests with Mox
hero: ''
alt: 'Elixir Mox Library'
daterange: 'Jul 2022'
date: '2022-07-30'
tags: ['Elixir', 'Phoenix', 'Mox', 'Bamboo']
---

 In my experience AWS SES offers little to no visibility into what emails are sending, how, when or to whom.
I was working on a large enterprise project that used SES for transactional emails. The volume was sizeable 
but not massive for a large organization, between somewhere between 2-5 thousand emails a day. For the most 
part these emails worked like a charm. However, one in every hundred emails or so would simply fail to send 
sometimes this would halt an order in the state machine causing a bit of a headache to debug.  Other times 
we (CC'd parties) would get confirmation emails but the intended customer would not.  I spent several 
hours trolling through dodgy looking "email verification" services trying to validate these addresses, I 
even sent a few test emails from my work email to ensure that the addresses in question were both existing 
and configured correctly, they were. 

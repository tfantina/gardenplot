---
title: 'Eon: Ruby Gem'
alt: 'Eon Gem'
daterange: 'May 2023'
date: '2023-05-16'
tags: ['Ruby']
---

Secure encrypting/decrypting of `.env` files.

For many years the team I'm on used the CodeShip Jet CLI tool for .env files.  Jet CLI generates a secure key then encrypts files with it. The general idea was that you could encrypt your `.env` file or other configurations and check them into version control. Storing the secure key in a company folder or using a secure server to send it to other employees all they would need to do is run `jet decrypt creds.env.encrypted creds.env` and voila project credentials are ready to go.

As we moved away from CodeShip I missed the Jet CLI and couldn't find a similar tool anywhere so I spent a few afternoons putting together something that would satisfy my own needs. It's been used on a few projects internally where I work.  I've never publicized it or anything but I'd love to hear your thoughts if you are looking for a tool like this.

Get it from [RubyGems](https://rubygems.org/gems/eon_crypt) or fork it on [GitHub](https://github.com/tfantina/eon)
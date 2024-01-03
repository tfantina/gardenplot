---
title: 'Eon: Ruby Gem'
hero: 'images/programming/kbyg/hero.png'
alt: 'Eon Gem'
daterange: 'May 2023'
date: '2023-05-16'
tags: ['Ruby']
---

Secure encrypting/decrypting of `.env` files.

For many years the team I'm on used the CodeShip Jet CLI tool which generates a secure key, and encrypts files with it. The general idea was that you could 
encrypt your `.env` file or other configurations and check them into version controll. Storing the secure key in a company folder or using a secure server
to send it to other employees they could then have all the secure `.env` credentials. 

As we moved away from CodeShip I missed the Jet CLI and couldn't find a similar tool anywhere so I spent a few afternoons putting together something that 
would satisfy my own needs. It's been used on a few projects internally where I work.  I've never publcized it or anything but I'd love to hear your
thoughts if you are looking for a tool like this.

Get it from [RubyGems](https://rubygems.org/gems/eon_crypt) or fork it on [GitHub](https://github.com/tfantina/eon)
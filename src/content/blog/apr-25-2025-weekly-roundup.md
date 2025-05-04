---
title: 'Weekly Roundup: Apr 25, 2025'
hero: ''
excerpt: ''
alt: ''
date: '2025-25-18'
tags: ["programming", "life"]
---

At the agency, we have a customer who has asked that customers accept terms of service *before* checking out. This is for an Elixir project; mostly fullstack Elixir however the frontend has an odd assortment of sprinkles: StimulusJS and React.  I created a `terms_and_conditions` versions table and an accompanying view helper which will check a `terms_version_accepted` on the `user` record if the last `terms_and_conditions.inserted_at` date matches the `terms_version_accepted` then the user is shown an active "proceed to checkout" button, if not the button is disabled and a note asking them to acccept the terms of service will display.  
Since most of the Elixir projects I work on are fullstack (Phoenix LiveView) I don't often get to write API endpoints. The API work on this was admittidly very small, a simpl endpoint that takes the user's ID and updates the `terms_version_accepted` timestamp when they click "accept" in the modal. It returns a URL which we then append to checkout link allowing the user to proceed.
This feature is due May 5th but I'm hoping to get onto the staging server on Monday or Tuesday.

## Internal Tooling:
I've been using `fzf` for a while but I've wanted to filter only unstaged files, ideally whenever I type `git add ` I just want to see a list of unstaged files that I can add. Admittidly I got some help from AI to do write this up:
```
function git_add_unstaged() {
    local files
    files=$(git diff --name-only --diff-filter=ACMR | fzf --multi --preview 'git diff --color=always -- {}')
    if [[ -n "$files" ]]; then
        BUFFER="git add $files"
        CURSOR=$#BUFFER
    fi
}

function git_add_unstaged_widget() {
    if [[ $BUFFER == 'git add' ]] && [[ $CURSOR -eq $#BUFFER ]]; then 
        git_add_unstaged 
        zle redisplay
    else 
        zle self-insert
    fi
}

zle -N git_add_unstaged_widget 
bindkey ' ' git_add_unstaged_widget
```
I'm wondering if I'll find the automatic `git add ` to be jarring or have situations such as a merge conflict where this may not work.  If so I can always fiddle with the `bindkey` but for right now I'm enjoying my new found `git add` speeds.


# GitHub Forks

This script reminds me to delete forks I have on my GitHub account because I
don't like keeping forks and GitHub auto-forks stuff for me every time I go and
fix a typo or something using the web editor, which is annoying.

I will add detection of the fork being actually WIP work, but it's really rare
for that to be the case on my account, so for now the simplest route has been
taken.

Uses [`github-api`](https://github.com/tomashubelbauer/github-api).

## Running

`node .`

## To-Do

### Check if the fork has non-parent work in it and report that

### Run this on my server and hook up the email notifications

### Send an email digest daily with a direct link to repo deletion page

### Consider deleting repos automatically if they meet criteria

Repos which have a PR open or closed (not known since the last check of the repo)
and have no other custom work can be safely deleted.

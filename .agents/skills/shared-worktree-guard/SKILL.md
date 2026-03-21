---
name: shared-worktree-guard
description: Prevent parallel minions from cross-contaminating git branches when sharing a working directory. Use when spawning 2+ minions that will create branches and commit.
metadata:
  author: blake-portfolio-team
  version: "1.0"
---

## Problem

When multiple minions share the same git working directory, they race on `git checkout`, `git add`, and `git commit`, causing commits to land on the wrong branch.

## Mitigation strategies (in order of preference)

### 1. Worktree isolation (preferred)
```
Agent(isolation: "worktree", ...)
```
Each agent gets its own copy of the repo. Best option.

### 2. Sequential branch setup by boss
Before spawning minions, the boss creates all branches:
```bash
for branch in feat/T001 feat/T002; do
  git checkout main
  git checkout -b $branch
  git push -u origin $branch
done
git checkout main
```

### 3. Minion self-guard
Add to minion prompts:
```
Before any git operation, run `git branch` to verify you are on YOUR branch.
After committing, run `git log --oneline -1` to verify the commit is on YOUR branch.
```

### 4. Boss finishes git ops
Accept that minions will write files but may fail at git. Boss reads output files, commits to correct branches, opens PRs. Costs 5-10 tool uses per minion.

---
name: clean-branch-fix
description: Create a clean feature branch when a PR branch has accumulated unrelated files from minion branch confusion. Use when a PR diff shows files that don't belong to its task.
metadata:
  author: blake-portfolio-team
  version: "1.0"
---

## When to activate

When a PR branch contains files from other tasks.

## Instructions

1. Identify which file(s) actually belong to this task.
2. Create a fresh branch from main:
   ```bash
   git checkout main
   git pull --rebase origin main
   git checkout -b feat/<task-id>-<name>-v2
   ```
3. Extract only the target files from the old branch:
   ```bash
   git show <old-branch>:path/to/file > path/to/file
   ```
4. Verify with `npm run build`.
5. Commit, push, open new PR.
6. Close the old PR:
   ```bash
   gh pr close <old-number> --comment "Superseded by PR #<new> — original branch had unrelated files"
   ```

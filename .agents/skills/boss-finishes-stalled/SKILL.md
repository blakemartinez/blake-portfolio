---
name: boss-finishes-stalled
description: Boss manually finishes a minion's remaining work after it stalls on permissions or hits rate limits. Use when a minion output shows it wrote code but couldn't commit/push/PR.
metadata:
  author: blake-portfolio-team
  version: "1.0"
---

## When to activate

When a background minion agent completes with status indicating it was blocked (permission denied, rate limit) but had already written files or made partial progress.

## Instructions

1. Read the minion's output file (last 50 lines) to understand where it stopped.
2. Check what it accomplished:
   - Files written locally? → `git diff` or `git status`
   - Committed but not pushed? → `git log --oneline <branch> ^origin/<branch>`
   - Pushed but no PR? → `gh pr create`
3. Finish the remaining steps manually:
   - If files exist locally: stage, commit, push, open PR
   - If branch pushed but no PR: `gh pr create`
   - If nothing was saved: recreate files from the output log
4. Update ORCHESTRATION.md with the task status.

## Cost comparison

| Approach | Tool uses | Risk |
|----------|-----------|------|
| Re-spawn full minion | 40-60 | May hit same blocker |
| Boss finishes last mile | 5-10 | Direct, no permission issues |

Always prefer boss-finishes over re-spawn when the minion completed >50% of its work.

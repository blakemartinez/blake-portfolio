---
name: watchdog-monitor
description: Monitor running background agents for loops and stalls. Use when spawning 3+ minions in parallel. Detects repeated errors, permission-denied retries, and no-progress stalls, then stops wasting agents via TaskStop.
metadata:
  author: blake-portfolio-team
  version: "1.0"
---

## When to activate

Spawn alongside every wave of 3+ parallel minions.

## Instructions

1. Receive a list of agent IDs and their output file paths.
2. Every 45 seconds, tail the last 30 lines of each agent's output file.
3. Stop an agent if ANY of these match:

| Pattern | Threshold | What it means |
|---------|-----------|---------------|
| Same error string repeated | 3+ times in last 50 lines | Agent stuck on same failure |
| Same tool called with identical input | 3+ consecutive times | Agent retrying without change |
| `permission denied` / `tool denied` followed by retry | 2+ retries of same command | Agent can't proceed, burning usage |
| No file writes or git commits | After 20+ tool uses | Agent spinning wheels |

4. On detection: kill immediately using `TaskStop(task_id: "<agentId>")`.
5. Report to boss: which agent stopped, what loop was detected, last meaningful action.

**IMPORTANT**: Ensure `TaskStop` is loaded in your session (use `ToolSearch` for `TaskStop` if needed).

## Boss follow-up after a stopped agent

- Read last 30 lines of the output file
- If minion wrote files but didn't commit: boss commits and pushes
- If fundamentally stuck: re-brief with a narrower prompt
- Update ORCHESTRATION.md status accordingly

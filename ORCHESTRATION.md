# blake-portfolio — Orchestration State

This file is the authoritative record for all orchestrated development tasks. The Boss (Claude) updates it before spawning minions. Minions update it upon task completion or blockers. All changes must be committed to main.

## How It Works

1. Tell the Boss (Claude) what feature or build step you want
2. Boss decomposes it into tasks, writes them here, spawns parallel minion agents
3. Each minion implements in an isolated git worktree → quality gate → PR
4. Boss reports PR links when done
5. Review and merge

See `.claude/prompts/boss.md` and `.claude/prompts/minion.md` for full orchestration logic.

---

## Active Tasks

| ID | Title | Status | Branch | PR | Depends On | Description |
|----|-------|--------|--------|----|------------|-------------|
*No active tasks.*

---

## Backlog

### Keebs Page

| ID | Title | Depends On | Description |
|----|-------|------------|-------------|
| T001 | Keebs flip-card showcase | — | Build out `src/pages/keebs.astro` with 3 CSS 3D flip cards — one per keyboard build. Front: photo + board name. Back: spec sheet (switches, keycaps, case, sound profile) + "hear it" YouTube link. Keep existing `<model-viewer>` somewhere on the page. Data-driven from a `src/data/keebs.ts` file. Responsive: 3-col on desktop, 1-col on mobile. |

---

## Completed

| ID | Title | PR | Merged |
|----|-------|----|--------|

---

## Session Log

| Date | Feature | Tasks | Outcome |
|------|---------|-------|---------|

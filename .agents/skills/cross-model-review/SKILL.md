---
name: cross-model-review
description: Review a PR using a different model than the one that wrote the code. Use when a minion has created a PR and it needs review before merge. Catches blind spots that same-model review misses.
metadata:
  author: blake-portfolio-team
  version: "1.0"
---

## When to activate

After any minion creates a PR and it's ready for review.

## Instructions

1. Determine which model wrote the code (check the PR's co-author trailer or session context).
2. The reviewer MUST be a different model:
   - If implementing model is Sonnet → reviewer is Opus
   - If implementing model is Opus → reviewer is Sonnet
3. Read the full PR diff: `gh pr diff <number>`
4. Check for:
   - **Correctness**: Does the code do what the task requires?
   - **Style**: Consistent with existing Astro component and CSS patterns?
   - **Responsive**: Layout works at mobile widths (< 636px)?
   - **A11y**: Alt text on images, keyboard accessible, sufficient contrast?
   - **Bugs**: Broken imports, missing null checks, animation edge cases?
   - **Over-engineering**: Unnecessary abstractions or dead code?
5. If clean: merge with `gh pr merge <number> --merge`
6. If issues found: post a comment with `gh pr comment <number> --body "<issues>"`

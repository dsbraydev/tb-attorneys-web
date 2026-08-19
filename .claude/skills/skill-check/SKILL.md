---
name: skill-check
description: This skill should be used at the start of every non-trivial task in this project — before writing code, running commands, or beginning multi-step work — to check whether an already-installed skill covers the task, and to recommend adding one when none does.
---

# Skill Check

Before starting any task in this project that involves more than a single trivial step (a one-line answer, a single grep, a quick clarifying question), do the following first:

1. **Check for a fit.** Look at the skills already listed as available this turn (project, user, and plugin skills), plus this project's `.claude/skills/` directory. Ask: does any installed skill's description reasonably cover this task?
2. **If yes:** invoke that skill via the Skill tool before doing anything else, instead of solving the task ad hoc.
3. **If no, and the task is the kind that would benefit from a packaged skill** — a repeatable workflow, a multi-step procedure specific to this project, something worth doing the same way again next time — say so briefly: name what a skill for this would cover and why it would help. Do not search for, install, or draft anything automatically; this is a recommendation only, left for the user to act on.
4. **If no skill fits and the task doesn't warrant one** — a one-off question, a small isolated edit, exploratory work — skip the recommendation entirely. Don't mention the check if it turned up nothing worth reporting; only surface output when it changes what happens next (step 2) or produces an actual recommendation (step 3).

Keep this check lightweight — one sentence when there's something to report, silence otherwise.

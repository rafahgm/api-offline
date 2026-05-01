---
name: logical-commits
description: Group current Git changes into coherent, reviewable commits and create commit messages using the Conventional Commits format. Use when the user asks Codex to organize uncommitted work, split mixed diffs, stage changes selectively, make one or more commits, write commit messages, or follow Conventional Commits while committing.
---

# Logical Commits

## Goal

Turn an uncommitted working tree into a small sequence of logical commits. Each commit must represent one intent, be easy to review, and use a valid Conventional Commits subject.

## Workflow

1. Inspect repository state before staging anything:
   - Run `git status --short`.
   - Run `git diff --stat`, `git diff --name-only`, and `git diff`.
   - Include staged changes with `git diff --cached` when present.
   - For untracked files, inspect names and contents before deciding where they belong.

2. Identify logical groups by user-facing intent:
   - Keep behavior changes separate from tests, docs, formatting-only edits, generated files, dependency updates, and config/tooling changes when they are independently meaningful.
   - Keep unrelated features or fixes in separate commits even if they touch nearby files.
   - Keep tightly coupled implementation and tests together when the test exists to validate that specific change.
   - Avoid mixing mechanical refactors with behavior changes unless separation would produce broken intermediate commits.

3. Protect existing work:
   - Treat pre-existing staged changes as user-owned unless the user explicitly asks to include or modify them.
   - Never discard, reset, or checkout changes to make grouping easier.
   - If unrelated changes are already present in files that must be partially staged, use patch staging carefully and verify the staged diff.
   - If a clean grouping is impossible without guessing intent, ask one concise question before committing.

4. Stage one group at a time:
   - Prefer explicit path staging for whole-file groups: `git add -- path`.
   - Use `git add -p` or equivalent selective staging for files containing multiple logical changes.
   - After staging each group, run `git diff --cached --stat` and `git diff --cached` to verify the commit contains only the intended changes.
   - Run relevant formatting or tests before committing when the repository provides an obvious command and the change is risky enough to warrant it.

5. Commit each verified group:
   - Use `git commit -m "<type>(<scope>): <description>"`.
   - Add a body when it helps explain motivation, tradeoffs, migrations, breaking changes, or follow-up constraints.
   - After each commit, run `git status --short` and continue until all intended changes are committed or only explicitly excluded changes remain.

## Commit Message Rules

Use Conventional Commits:

```text
<type>(optional-scope): <short imperative description>

optional body

optional footer(s)
```

Choose the type by intent:

- `feat`: new user-visible capability.
- `fix`: bug fix or correctness repair.
- `docs`: documentation-only change.
- `style`: formatting or style-only code change with no behavior change.
- `refactor`: code restructuring with no intended behavior change.
- `perf`: performance improvement.
- `test`: test-only change.
- `build`: dependencies, packaging, build system, or release artifacts.
- `ci`: CI/CD workflow change.
- `chore`: maintenance that does not fit another type.
- `revert`: revert of a previous commit.

Prefer a short scope when it clarifies ownership, such as `api`, `auth`, `db`, `deps`, `docker`, `docs`, `tests`, or a package/module name used by the repository.

Write the subject in English unless the repository history clearly uses another language. Keep it lowercase after the colon, imperative, specific, and under 72 characters when practical. Do not end the subject with a period.

For breaking changes, include `!` before the colon and a footer:

```text
feat(api)!: require signed webhook payloads

BREAKING CHANGE: unsigned webhook requests are now rejected.
```

## Suggested Grouping Heuristics

Use these patterns when deciding split boundaries:

- Implementation plus directly matching tests: one `feat`, `fix`, or `refactor` commit.
- Same bug fixed across multiple layers: one `fix` commit if the layers are inseparable.
- Dependency bump plus lockfile: one `build(deps)` commit.
- CI config and scripts used only by CI: one `ci` commit.
- Documentation for a just-added feature: include with the feature if it explains that exact behavior; separate as `docs` if it is broad or independently reviewable.
- Pure formatting across many files: separate `style` commit.
- Generated files: commit with their source change only when the project expects generated artifacts to be versioned.

## Final Response

Summarize the commits created with hashes and subjects. Mention tests or checks run, and clearly state any remaining uncommitted changes that were intentionally left out.

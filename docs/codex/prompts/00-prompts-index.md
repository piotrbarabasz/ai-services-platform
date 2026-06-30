# Codex Prompts Index

## Purpose

This file indexes reusable Codex prompts for the AI Services Platform repository.

Use these prompts to keep planning, documentation and implementation work small, reviewable and aligned with the MVP scope.

This file is the prompt index. The reusable prompt files currently start at `01-`.

---

## Prompt Metadata

- **[01-plan-mvp-0-foundation.md](01-plan-mvp-0-foundation.md)**
  - Group: Planning
  - Documentation-only: Yes
  - Can edit files: No
  - When to use: Before implementing MVP 0 foundation work

- **[02-implement-readme.md](02-implement-readme.md)**
  - Group: Documentation
  - Documentation-only: Yes
  - Can edit files: Yes
  - When to use: To create or update the root `README.md` after the MVP 0 plan is reviewed

- **[03-plan-backend-foundation.md](03-plan-backend-foundation.md)**
  - Group: Planning
  - Documentation-only: Yes
  - Can edit files: No
  - When to use: Before implementing the MVP 0 backend foundation

---

## Planning Prompts

### [01-plan-mvp-0-foundation.md](01-plan-mvp-0-foundation.md)

Use this prompt to analyze the repository and prepare an MVP 0 implementation plan.

- Documentation-only: Yes
- Can edit files: No
- Scope: MVP 0 planning for repository structure, README, frontend foundation, backend foundation,
  contact form, lead capture, local development and GCP deployment preparation

### [03-plan-backend-foundation.md](03-plan-backend-foundation.md)

Use this prompt to prepare a detailed backend foundation implementation plan before writing backend code.

- Documentation-only: Yes
- Can edit files: No
- Scope: backend structure, dependencies, `/health`, configuration, logging, tests and Docker plan

---

## Documentation Prompts

### [02-implement-readme.md](02-implement-readme.md)

Use this prompt to create or update the root `README.md`.

- Documentation-only: Yes
- Can edit files: Yes
- Scope: root README content and links

---

## Implementation Prompts

No dedicated implementation prompt files are currently committed in this directory.

Use implementation prompts only after the relevant plan has been reviewed and MVP scope is clear.

---

## Review Prompts

No dedicated review prompt files are currently committed in this directory.

When adding a review prompt, mark whether it is documentation-only and whether it can edit files.

---

## Prompt Usage Rules

- Read `AGENTS.md` and relevant `docs/` files before using a prompt.
- Keep each task small and scoped to the current MVP.
- Do not implement future MVP features unless explicitly requested.
- For planning prompts, do not edit files.
- For implementation prompts, summarize changed files and validation steps.

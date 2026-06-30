# Codex Prompt - Implement README

Use this prompt after the MVP 0 foundation plan is reviewed.

---

## Prompt

```text
You are working in the ai-services-platform repository.

First, read:

AGENTS.md
docs/00-overview.md
docs/requirements/01-mvp-0-foundation-landing-page.md
docs/backlog/01-mvp-0-implementation-backlog.md
docs/architecture/01-mvp-0-architecture.md

Task:

Create or update the root README.md file for this repository.

The README should describe:

- project name
- project purpose
- current status
- MVP roadmap summary
- documentation structure
- planned technical architecture
- local development status
- current next steps

Requirements:

- Keep the README concise but useful.
- Do not duplicate all docs content.
- Link to relevant docs files.
- Mention that implementation is in early MVP planning stage.
- Do not claim that frontend/backend are implemented if they are not present.

Out of scope:

- Do not create frontend code.
- Do not create backend code.
- Do not change MVP requirements.
- Do not add CI/CD.

After making changes, return:

1. Summary of changes
2. Files changed
3. Why the changes were made
4. Suggested next Codex task
```

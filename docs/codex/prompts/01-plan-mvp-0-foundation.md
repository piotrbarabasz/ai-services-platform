# Codex Prompt - Plan MVP 0 Foundation

Use this prompt in Codex Plan Agent mode.

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
docs/operations/00-local-development.md
docs/operations/00-deployment.md

Do not edit files yet.

Analyze the current repository and prepare an implementation plan for MVP 0.

MVP 0 goal:

Create the project foundation for a public AI services landing page with a contact form, backend API foundation, lead capture foundation, local development setup and initial GCP deployment preparation.

Scope:

- repository structure review
- missing files review
- README plan
- frontend application foundation plan
- backend API foundation plan
- contact form plan
- lead capture plan
- local development plan
- GCP deployment preparation plan

Out of scope:

- chatbot widget
- /api/chat endpoint
- LLM integration
- RAG
- multi-client support
- admin panel
- voice assistant
- payment integration
- CRM integration

Return the answer in this structure:

1. Current repository state
2. Documentation files found
3. MVP 0 implementation plan
4. Recommended implementation order
5. Files to create
6. Files to update
7. Technical decisions needed before implementation
8. Risks
9. Validation steps
10. Suggested first implementation task

Be specific. Do not write code yet.
```

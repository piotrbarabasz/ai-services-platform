# Codex Prompt - Plan Backend Foundation

Use this prompt before implementing backend code.

---

## Prompt

```text
You are working in the ai-services-platform repository.

First, read:

AGENTS.md
docs/requirements/01-mvp-0-foundation-landing-page.md
docs/backlog/01-mvp-0-implementation-backlog.md
docs/architecture/01-mvp-0-architecture.md
docs/operations/00-local-development.md
docs/operations/00-deployment.md

Do not edit files yet.

Task:

Prepare a detailed implementation plan for the MVP 0 backend foundation.

Backend goal:

Create a simple backend API foundation with:

- application entrypoint,
- /health endpoint,
- future-ready /api/contact endpoint plan,
- configuration module,
- basic logging,
- tests structure,
- Docker readiness.

Assume backend framework:

FastAPI

Scope:

- backend folder structure
- Python dependencies
- /health endpoint
- configuration approach
- logging approach
- tests
- Dockerfile plan
- local run command

Out of scope:

- LLM integration
- chatbot endpoint
- database integration
- email sending
- authentication
- admin panel

Return:

1. Backend implementation plan
2. Proposed backend file structure
3. Dependencies to add
4. Endpoints to implement
5. Test plan
6. Docker plan
7. Risks
8. Suggested implementation prompt

Do not implement code yet.
```

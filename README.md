# AI Services Platform

This repository contains the planning and early implementation foundation for an AI services website
and future automation platform.

The project is planned through MVP-based documentation in [`docs/`](docs/README.md). Treat the
documentation as the source of truth before adding implementation files.

---

## Current Status

The project is in the planning and early implementation phase.

Current focus:

1. MVP 0 - Foundation & Landing Page
2. MVP 1 - AI Chatbot Demo

MVP 2 and later items are future planning only. Do not implement later MVP scope unless explicitly requested.

Current MVP 0 backend status:

- FastAPI backend exists in [`backend/`](backend/).
- `GET /health` and `POST /api/contact` are implemented and covered by backend tests.
- Contact payload validation covers required fields, email format, allowed service type values and consent.
- Contact submissions are accepted by the backend and handled through a lead service in log-only mode; no database or email notifications are implemented yet.
- A final custom API error response envelope is still pending; validation errors currently use FastAPI's default error response shape.
- Backend Docker support exists for future Cloud Run deployment preparation.
- Cloud Run deployment has not been executed.

Current MVP 0 frontend status:

- Vite, React and TypeScript frontend foundation exists in [`frontend/`](frontend/).
- Routes `/` and `/privacy` are available locally.
- Landing page sections exist but final content and styling are still pending.
- Contact form submission to `POST /api/contact` is implemented with frontend validation and user-facing loading, success and error states.
- The contact flow works locally when the backend runs on `http://localhost:8000` and the frontend runs on `http://localhost:4200`.
- The future chatbot demo area is placeholder-only; no chatbot widget, LLM integration or RAG is implemented.
- Final legally reviewed privacy copy, SEO polish, spam/rate limiting strategy or implementation, and production deployment are still pending.

---

## Start Here

Recommended entry points:

1. [Repository instructions](AGENTS.md)
2. [Documentation index](docs/README.md)
3. [Project overview](docs/00-overview.md)
4. [MVP 0 requirements](docs/requirements/01-mvp-0-foundation-landing-page.md)
5. [MVP 0 implementation backlog](docs/backlog/01-mvp-0-implementation-backlog.md)
6. [MVP 0 architecture](docs/architecture/01-mvp-0-architecture.md)
7. [Local development](docs/operations/00-local-development.md)
8. [Codex workflow](docs/codex/00-codex-workflow.md)

---

## Documentation Map

| Area | Link |
|---|---|
| Repository instructions | [AGENTS.md](AGENTS.md) |
| Documentation index | [docs/README.md](docs/README.md) |
| Project overview | [docs/00-overview.md](docs/00-overview.md) |
| Requirements index | [docs/requirements/00-requirements-index.md](docs/requirements/00-requirements-index.md) |
| Roadmap | [docs/roadmap/00-roadmap-overview.md](docs/roadmap/00-roadmap-overview.md) |
| Backlog and epics | [docs/backlog/00-epics.md](docs/backlog/00-epics.md) |
| Architecture | [docs/architecture/01-mvp-0-architecture.md](docs/architecture/01-mvp-0-architecture.md) |
| ADR backlog | [docs/decisions/00-adr-backlog.md](docs/decisions/00-adr-backlog.md) |
| Risk register | [docs/risks/00-risk-register.md](docs/risks/00-risk-register.md) |
| Operations | [docs/operations/00-local-development.md](docs/operations/00-local-development.md) |
| Codex workflow | [docs/codex/00-codex-workflow.md](docs/codex/00-codex-workflow.md) |
| Codex prompts | [docs/codex/prompts/00-prompts-index.md](docs/codex/prompts/00-prompts-index.md) |

---

## Implementation Notes

- Do not commit secrets or real credentials.
- Do not expose API keys in frontend code.
- Keep MVP 0 focused on the website, contact flow, backend foundation and deployment preparation.
- Keep MVP 1 focused on the chatbot demo after MVP 0 foundations are ready.

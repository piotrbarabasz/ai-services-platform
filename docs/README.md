# Documentation Index

## Purpose

This directory contains the planning and technical documentation for the AI Services Platform.

Use this index to find the current source-of-truth documents before planning or implementation work.
For repository-level context, see the root [README](../README.md) and [AGENTS instructions](../AGENTS.md).

---

## Current MVP Focus

The project is in the planning and early implementation phase.

Current focus:

1. MVP 0 - Foundation & Landing Page
2. MVP 1 - AI Chatbot Demo

MVP 2 and later items are future planning only. Do not implement later MVPs unless explicitly requested.

Current implementation snapshot:

- MVP 0 backend foundation is implemented with FastAPI.
- Backend endpoints available locally: `GET /health` and `POST /api/contact`.
- Backend contact payload validation covers required fields, email format, allowed service type values and consent.
- Lead handling is log-only for now; durable storage and email notifications are not implemented.
- A final custom API error response envelope is still pending; validation errors currently use FastAPI's default error response shape.
- Backend Docker support exists for future Cloud Run deployment preparation.
- MVP 0 frontend foundation exists with Vite, React and TypeScript.
- Frontend routes `/` and `/privacy` are available locally.
- Contact form submission to `POST /api/contact` is implemented with frontend validation and user-facing loading, success and error states.
- The local end-to-end contact flow works when the frontend uses `VITE_API_BASE_URL=http://localhost:8000`.
- The future chatbot area is placeholder-only; chatbot, LLM and RAG functionality are not implemented.
- Final landing content, final legally reviewed privacy copy, spam/rate limiting strategy or implementation, SEO polish and production deployment are still pending.

---

## Recommended Reading Order

For most MVP 0 tasks, read documents in this order:

1. [Project overview](00-overview.md)
2. [Requirements index](requirements/00-requirements-index.md)
3. [MVP 0 requirements](requirements/01-mvp-0-foundation-landing-page.md)
4. [MVP 0 implementation backlog](backlog/01-mvp-0-implementation-backlog.md)
5. [MVP 0 architecture](architecture/01-mvp-0-architecture.md)
6. [ADR backlog](decisions/00-adr-backlog.md)
7. [Local development](operations/00-local-development.md)
8. [Deployment](operations/00-deployment.md)
9. [Risk register](risks/00-risk-register.md)
10. [Codex workflow](codex/00-codex-workflow.md)

For MVP 1 chatbot planning, also read:

1. [MVP 1 requirements](requirements/02-mvp-1-chatbot-demo.md)
2. [MVP 1 implementation backlog](backlog/02-mvp-1-implementation-backlog.md)
3. [MVP 1 chatbot architecture](architecture/02-mvp-1-chatbot-architecture.md)
4. [AI risk register](risks/01-ai-risk-register.md)
5. [LLM cost control](operations/03-llm-cost-control.md)

For prompt-based work, read the [Codex prompts index](codex/prompts/00-prompts-index.md).

---

## Documentation Map

Related documents are listed in the sections below the map.

| Area | Where to Start | Notes |
|---|---|---|
| Project overview | [Overview][overview] | Product vision, MVP sequence and documentation structure |
| Requirements | [Requirements index][requirements-index] | MVP 0 first, MVP 1 next; MVP 2+ requirements are not started |
| Roadmap | [Roadmap overview][roadmap-overview] | Future MVPs remain future-only until explicitly requested |
| Architecture | [MVP 0 architecture][mvp0-architecture] | Use MVP-specific architecture docs for current work |
| Backlog | [Initial epics][epics] | Do not create GitHub Issues without review |
| Decisions | [ADR backlog][adr-backlog] | Accepted ADRs and candidate ADRs |
| Risks | [Risk register][risk-register] | General risks plus MVP 1 AI-specific risks |
| Operations | [Local development][local-development] | Deployment, monitoring and cost docs are linked below |
| Codex workflow | [Codex workflow][codex-workflow] | Repository-specific Codex usage and reusable prompts |

[overview]: 00-overview.md
[requirements-index]: requirements/00-requirements-index.md
[roadmap-overview]: roadmap/00-roadmap-overview.md
[mvp0-architecture]: architecture/01-mvp-0-architecture.md
[epics]: backlog/00-epics.md
[adr-backlog]: decisions/00-adr-backlog.md
[risk-register]: risks/00-risk-register.md
[local-development]: operations/00-local-development.md
[codex-workflow]: codex/00-codex-workflow.md

---

## Key Documents

### Requirements

- [Requirements index](requirements/00-requirements-index.md)
- [MVP 0 - Foundation & Landing Page](requirements/01-mvp-0-foundation-landing-page.md)
- [MVP 1 - AI Chatbot Demo](requirements/02-mvp-1-chatbot-demo.md)

### Architecture

- [Architecture overview](architecture/00-architecture-overview.md)
- [MVP 0 architecture](architecture/01-mvp-0-architecture.md)
- [MVP 1 chatbot architecture](architecture/02-mvp-1-chatbot-architecture.md)

### Backlog

- [Initial epics](backlog/00-epics.md)
- [MVP 0 implementation backlog](backlog/01-mvp-0-implementation-backlog.md)
- [MVP 1 implementation backlog](backlog/02-mvp-1-implementation-backlog.md)
- [MVP 0 GitHub issues plan](backlog/03-mvp-0-github-issues-plan.md)

### Risks

- [Risk register](risks/00-risk-register.md)
- [AI risk register](risks/01-ai-risk-register.md)

### Decisions

- [ADR backlog](decisions/00-adr-backlog.md)
- [ADR 0001: Use GitHub as Documentation Source](decisions/0001-use-github-as-documentation-source.md)
- [ADR 0002: Use Google Cloud Platform as Cloud Platform](decisions/0002-use-gcp-as-cloud-platform.md)

### Operations

- [Local development](operations/00-local-development.md)
- [Deployment](operations/00-deployment.md)
- [Monitoring](operations/01-monitoring.md)
- [Cost control](operations/02-cost-control.md)
- [LLM cost control](operations/03-llm-cost-control.md)
- [MVP 0 smoke test checklist](operations/04-mvp-0-smoke-test-checklist.md)

### Codex

- [Codex workflow](codex/00-codex-workflow.md)
- [Codex prompts index](codex/prompts/00-prompts-index.md)
- [Plan MVP 0 foundation prompt](codex/prompts/01-plan-mvp-0-foundation.md)
- [Implement README prompt](codex/prompts/02-implement-readme.md)
- [Plan backend foundation prompt](codex/prompts/03-plan-backend-foundation.md)

---

## Notes

- `docs/` is the documentation source of truth.
- Keep MVP scope clear when adding or updating documentation.
- Update related index files when adding new documentation.
- Do not commit secrets or real credentials in documentation examples.

# Documentation Index

## Purpose

This directory contains the planning and technical documentation for the AI Services Platform.

Use this index to find the current source-of-truth documents before planning or implementation work.

---

## Current MVP Focus

The project is in the planning and early implementation phase.

Current focus:

1. MVP 0 — Foundation & Landing Page
2. MVP 1 — AI Chatbot Demo

Do not implement later MVPs unless explicitly requested.

---

## Recommended Reading Order

For most tasks, read documents in this order:

1. [Project overview](00-overview.md)
2. [MVP 0 requirements](requirements/01-mvp-0-foundation-landing-page.md)
3. [MVP 0 implementation backlog](backlog/01-mvp-0-implementation-backlog.md)
4. [MVP 0 architecture](architecture/01-mvp-0-architecture.md)
5. [MVP 1 requirements](requirements/02-mvp-1-chatbot-demo.md)
6. [MVP 1 implementation backlog](backlog/02-mvp-1-implementation-backlog.md)
7. [MVP 1 chatbot architecture](architecture/02-mvp-1-chatbot-architecture.md)
8. [Local development](operations/00-local-development.md)
9. [Deployment](operations/00-deployment.md)
10. [Risk register](risks/00-risk-register.md)
11. [Codex workflow](codex/00-codex-workflow.md)

For prompt-based work, also read the [Codex prompts index](codex/prompts/00-prompts-index.md).

---

## Documentation Map

| Area | Where to Start | Notes |
|---|---|---|
| Project overview | [00-overview.md](00-overview.md) | Product vision, planned MVPs and documentation structure |
| MVP requirements | [requirements/00-requirements-index.md](requirements/00-requirements-index.md) | Index for MVP requirement documents |
| Roadmap | [roadmap/00-roadmap-overview.md](roadmap/00-roadmap-overview.md) | MVP sequence and high-level phases |
| Architecture | [architecture/01-mvp-0-architecture.md](architecture/01-mvp-0-architecture.md) | MVP 0 architecture and MVP 1 chatbot architecture |
| Backlog | [backlog/00-epics.md](backlog/00-epics.md) | Epic overview and MVP implementation backlogs |
| MVP 0 backlog | [backlog/01-mvp-0-implementation-backlog.md](backlog/01-mvp-0-implementation-backlog.md) | Detailed MVP 0 implementation backlog |
| MVP 1 backlog | [backlog/02-mvp-1-implementation-backlog.md](backlog/02-mvp-1-implementation-backlog.md) | Detailed MVP 1 chatbot demo backlog |
| ADRs | [decisions/0001-use-github-as-documentation-source.md](decisions/0001-use-github-as-documentation-source.md) | Architecture decision records |
| Risks | [risks/00-risk-register.md](risks/00-risk-register.md) | Risk register and mitigation rules |
| Operations | [operations/00-local-development.md](operations/00-local-development.md) | Local development and deployment notes |
| Codex workflow | [codex/00-codex-workflow.md](codex/00-codex-workflow.md) | How Codex should be used in this repository |
| Codex prompts | [codex/prompts/00-prompts-index.md](codex/prompts/00-prompts-index.md) | Reusable prompt index |

---

## Key Documents

### Requirements

- [Requirements index](requirements/00-requirements-index.md)
- [MVP 0 — Foundation & Landing Page](requirements/01-mvp-0-foundation-landing-page.md)
- [MVP 1 — AI Chatbot Demo](requirements/02-mvp-1-chatbot-demo.md)

### Architecture

- [Architecture overview](architecture/00-architecture-overview.md)
- [MVP 0 architecture](architecture/01-mvp-0-architecture.md)
- [MVP 1 chatbot architecture](architecture/02-mvp-1-chatbot-architecture.md)

### Backlog

- [Initial epics](backlog/00-epics.md)
- [MVP 0 implementation backlog](backlog/01-mvp-0-implementation-backlog.md)
- [MVP 1 implementation backlog](backlog/02-mvp-1-implementation-backlog.md)

### Risks

- [Risk register](risks/00-risk-register.md)
- [AI risk register](risks/01-ai-risk-register.md)

### Decisions

- [ADR 0001: Use GitHub as Documentation Source](decisions/0001-use-github-as-documentation-source.md)
- [ADR 0002: Use Google Cloud Platform as Cloud Platform](decisions/0002-use-gcp-as-cloud-platform.md)

### Operations

- [Local development](operations/00-local-development.md)
- [Deployment](operations/00-deployment.md)
- [Monitoring](operations/01-monitoring.md)
- [Cost control](operations/02-cost-control.md)
- [LLM cost control](operations/03-llm-cost-control.md)

### Codex

- [Codex workflow](codex/00-codex-workflow.md)
- [Codex prompts index](codex/prompts/00-prompts-index.md)

---

## Notes

- `docs/` is the documentation source of truth.
- Keep MVP scope clear when adding or updating documentation.
- Update related index files when adding new documentation.
- Do not commit secrets or real credentials in documentation examples.

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

| Area | Where to Start | Related Documents | Notes |
|---|---|---|---|
| Project overview | [00-overview.md](00-overview.md) | [Roadmap overview](roadmap/00-roadmap-overview.md) | Product vision, MVP sequence and documentation structure |
| Requirements | [requirements/00-requirements-index.md](requirements/00-requirements-index.md) | [MVP 0 requirements](requirements/01-mvp-0-foundation-landing-page.md), [MVP 1 requirements](requirements/02-mvp-1-chatbot-demo.md) | MVP 0 first, MVP 1 next; MVP 2+ requirements are not started |
| Architecture | [architecture/01-mvp-0-architecture.md](architecture/01-mvp-0-architecture.md) | [Architecture overview](architecture/00-architecture-overview.md), [MVP 1 chatbot architecture](architecture/02-mvp-1-chatbot-architecture.md) | Architecture overview is a placeholder; use MVP-specific architecture docs for current work |
| Backlog | [backlog/00-epics.md](backlog/00-epics.md) | [MVP 0 backlog](backlog/01-mvp-0-implementation-backlog.md), [MVP 1 backlog](backlog/02-mvp-1-implementation-backlog.md), [MVP 0 GitHub issues plan](backlog/03-mvp-0-github-issues-plan.md) | Do not create GitHub Issues without review |
| Decisions | [decisions/00-adr-backlog.md](decisions/00-adr-backlog.md) | [ADR 0001](decisions/0001-use-github-as-documentation-source.md), [ADR 0002](decisions/0002-use-gcp-as-cloud-platform.md) | Accepted ADRs and candidate ADRs |
| Risks | [risks/00-risk-register.md](risks/00-risk-register.md) | [AI risk register](risks/01-ai-risk-register.md) | General risks plus MVP 1 AI-specific risks |
| Operations | [operations/00-local-development.md](operations/00-local-development.md) | [Deployment](operations/00-deployment.md), [Monitoring](operations/01-monitoring.md), [Cost control](operations/02-cost-control.md), [LLM cost control](operations/03-llm-cost-control.md) | Monitoring and general cost-control docs are placeholders |
| Codex workflow | [codex/00-codex-workflow.md](codex/00-codex-workflow.md) | [Codex prompts index](codex/prompts/00-prompts-index.md) | Repository-specific Codex usage and reusable prompts |

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

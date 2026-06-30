# Requirements Index

## 1. Purpose

This section contains product and technical requirements for each MVP of the AI Services Website & Automation Platform.

The goal is to define the project scope before creating the implementation backlog.

Start from the main [documentation index](../README.md) for broader project navigation.

---

## 2. Current Requirement Focus

Current requirement work is focused on:

1. [MVP 0 - Foundation & Landing Page](01-mvp-0-foundation-landing-page.md)
2. [MVP 1 - AI Chatbot Demo](02-mvp-1-chatbot-demo.md)

MVP 2 and later requirement files are not started and should be treated as future planning only.

---

## 3. Requirement Categories

Each MVP document should include:

1. Goal
2. Scope
3. Out of scope
4. Functional requirements
5. Technical requirements
6. Non-functional requirements
7. Acceptance criteria
8. Risks
9. Final deliverables
10. Proposed epics

---

## 4. MVP Documents

| MVP | Document | Status |
|---|---|---|
| MVP 0 | [01-mvp-0-foundation-landing-page.md](01-mvp-0-foundation-landing-page.md) | Draft |
| MVP 1 | [02-mvp-1-chatbot-demo.md](02-mvp-1-chatbot-demo.md) | Draft |
| MVP 2 | `03-mvp-2-lead-mail-automation.md` | Future planning only; not started |
| MVP 3 | `04-mvp-3-multi-client-platform.md` | Future planning only; not started |
| MVP 4 | `05-mvp-4-rag-knowledge-base.md` | Future planning only; not started |
| MVP 5 | `06-mvp-5-admin-panel.md` | Future planning only; not started |
| MVP 6 | `07-mvp-6-voice-assistant.md` | Future planning only; not started |
| MVP 7 | `08-mvp-7-production-hardening.md` | Future planning only; not started |

Related planning documents:

- [Project overview](../00-overview.md)
- [Roadmap overview](../roadmap/00-roadmap-overview.md)
- [Initial epics](../backlog/00-epics.md)
- [MVP 0 implementation backlog](../backlog/01-mvp-0-implementation-backlog.md)
- [MVP 1 implementation backlog](../backlog/02-mvp-1-implementation-backlog.md)
- [MVP 0 architecture](../architecture/01-mvp-0-architecture.md)
- [MVP 1 chatbot architecture](../architecture/02-mvp-1-chatbot-architecture.md)
- [ADR backlog](../decisions/00-adr-backlog.md)
- [Risk register](../risks/00-risk-register.md)
- [AI risk register](../risks/01-ai-risk-register.md)
- [Local development](../operations/00-local-development.md)
- [Deployment](../operations/00-deployment.md)

---

## 5. Requirement ID Convention

Requirements should use the following prefixes:

| Prefix | Area |
|---|---|
| WEB | Website / Landing Page |
| API | Backend API |
| CHAT | AI Chatbot |
| LEAD | Lead capture |
| MAIL | Mail automation |
| CLIENT | Multi-client configuration |
| RAG | Knowledge base / RAG |
| ADMIN | Admin panel |
| VOICE | Voice assistant |
| GCP | Google Cloud Platform |
| SEC | Security |
| OBS | Observability |
| COST | Cost control |

Example:

```text
WEB-001: The landing page must include a hero section.
CHAT-003: The backend must expose a /api/chat endpoint.
GCP-004: The backend must run on Cloud Run.
```

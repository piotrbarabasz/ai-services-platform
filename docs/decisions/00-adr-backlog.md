# ADR Backlog

## 1. Purpose

This document tracks architecture decisions that should be written as Architecture Decision Records before
implementation and deployment work moves too far ahead.

It does not make the decisions. Each item is a candidate ADR that should be researched, discussed and documented separately.

Related documents:

- [Project overview](../00-overview.md)
- [MVP 0 architecture](../architecture/01-mvp-0-architecture.md)
- [MVP 0 implementation backlog](../backlog/01-mvp-0-implementation-backlog.md)
- [Deployment](../operations/00-deployment.md)
- [Local development](../operations/00-local-development.md)
- [ADR 0001: Use GitHub as Documentation Source](0001-use-github-as-documentation-source.md)
- [ADR 0002: Use Google Cloud Platform as Cloud Platform](0002-use-gcp-as-cloud-platform.md)
- [MVP 1 requirements](../requirements/02-mvp-1-chatbot-demo.md)
- [MVP 1 chatbot architecture](../architecture/02-mvp-1-chatbot-architecture.md)
- [LLM cost control](../operations/03-llm-cost-control.md)

---

## 2. Priority Scale

| Priority | Meaning |
|---|---|
| P0 | Required before MVP 0 implementation starts. |
| P1 | Required before MVP 0 public deployment. |
| P2 | Required before MVP 1 implementation starts. |
| P3 | Future decision, not needed for MVP 0 or MVP 1. |

---

## 3. Existing Accepted ADRs

- **[ADR 0001](0001-use-github-as-documentation-source.md) - Use GitHub as documentation source**
  - Status: Accepted
  - Notes: Establishes `docs/` as the source of truth.

- **[ADR 0002](0002-use-gcp-as-cloud-platform.md) - Use Google Cloud Platform as cloud platform**
  - Status: Accepted
  - Notes: Establishes GCP as the main cloud direction.

---

## 4. MVP 0 Required ADR Candidates

These decisions are needed for MVP 0 implementation or MVP 0 public deployment.

### ADR-CAND-001 - Choose frontend framework

- MVP: MVP 0
- Priority: P0
- Why it matters: The frontend framework determines project structure, routing, build tooling,
  environment variable handling, local commands and hosting compatibility.
- Relevant docs:
  - [MVP 0 architecture](../architecture/01-mvp-0-architecture.md)
  - [MVP 0 backlog](../backlog/01-mvp-0-implementation-backlog.md)
  - [Local development](../operations/00-local-development.md)

### ADR-CAND-002 - Choose backend framework

- MVP: MVP 0
- Priority: P0
- Why it matters: The backend framework determines API structure, validation approach, testing setup,
  local run commands, container image shape and future chatbot endpoint integration.
- Relevant docs:
  - [MVP 0 architecture](../architecture/01-mvp-0-architecture.md)
  - [MVP 0 backlog](../backlog/01-mvp-0-implementation-backlog.md)
  - [Local development](../operations/00-local-development.md)

### ADR-CAND-003 - Choose initial lead storage strategy

- MVP: MVP 0
- Priority: P0
- Why it matters: Contact form submissions need a clear handling strategy before production use,
  even if MVP 0 starts with log-only or temporary storage.
- Relevant docs:
  - [MVP 0 architecture](../architecture/01-mvp-0-architecture.md)
  - [MVP 0 backlog](../backlog/01-mvp-0-implementation-backlog.md)
  - [Deployment](../operations/00-deployment.md)

### ADR-CAND-004 - Choose environment configuration strategy

- MVP: MVP 0
- Priority: P0
- Why it matters: The project needs consistent local, dev and prod configuration before backend and frontend code are created.
- Relevant docs: [Local development](../operations/00-local-development.md), [Deployment](../operations/00-deployment.md)

### ADR-CAND-005 - Choose secret management strategy

- MVP: MVP 0
- Priority: P0
- Why it matters: Secrets must stay out of source control and frontend code; local and GCP secret handling
  should be defined before deployment preparation.
- Relevant docs:
  - [MVP 0 architecture](../architecture/01-mvp-0-architecture.md)
  - [Deployment](../operations/00-deployment.md)
  - [ADR 0002](0002-use-gcp-as-cloud-platform.md)

### ADR-CAND-006 - Choose frontend hosting strategy

- MVP: MVP 0
- Priority: P1
- Why it matters: Hosting affects frontend build output, routing, environment variables, deployment workflow,
  caching and whether the project stays fully inside GCP.
- Relevant docs:
  - [Deployment](../operations/00-deployment.md)
  - [ADR 0002](0002-use-gcp-as-cloud-platform.md)

### ADR-CAND-007 - Choose backend deployment strategy

- MVP: MVP 0
- Priority: P1
- Why it matters: GCP is accepted, but the backend deployment workflow still needs decisions for Cloud Run setup,
  image builds, regions, service accounts and rollback.
- Relevant docs:
  - [MVP 0 architecture](../architecture/01-mvp-0-architecture.md)
  - [Deployment](../operations/00-deployment.md)
  - [ADR 0002](0002-use-gcp-as-cloud-platform.md)

### ADR-CAND-008 - Choose logging strategy

- MVP: MVP 0
- Priority: P1
- Why it matters: The backend needs consistent application logs without exposing personal data, secrets
  or full contact messages unnecessarily.
- Relevant docs:
  - [MVP 0 architecture](../architecture/01-mvp-0-architecture.md)
  - [MVP 0 backlog](../backlog/01-mvp-0-implementation-backlog.md)
  - [Deployment](../operations/00-deployment.md)

### ADR-CAND-009 - Choose monitoring strategy

- MVP: MVP 0
- Priority: P1
- Why it matters: Public deployment needs health checks, error visibility, basic uptime monitoring and cost-aware alerting expectations.
- Relevant docs: [Deployment](../operations/00-deployment.md), [ADR 0002](0002-use-gcp-as-cloud-platform.md)

---

## 5. MVP 1 Required ADR Candidates

These decisions can wait until MVP 1 planning is complete, but should be written before chatbot implementation starts.

### ADR-CAND-010 - Choose LLM provider strategy for MVP 1

- MVP: MVP 1
- Priority: P2
- Why it matters: The provider choice affects API integration, model configuration, cost controls,
  latency, logging, privacy and failure handling.
- Relevant docs:
  - [MVP 1 requirements](../requirements/02-mvp-1-chatbot-demo.md)
  - [MVP 1 chatbot architecture](../architecture/02-mvp-1-chatbot-architecture.md)
  - [LLM cost control](../operations/03-llm-cost-control.md)

### ADR-CAND-011 - Choose chatbot session handling strategy for MVP 1

- MVP: MVP 1
- Priority: P2
- Why it matters: Session handling affects context quality, cost, privacy, frontend/backend responsibilities
  and whether chat history is stored.
- Relevant docs:
  - [MVP 1 requirements](../requirements/02-mvp-1-chatbot-demo.md)
  - [MVP 1 chatbot architecture](../architecture/02-mvp-1-chatbot-architecture.md)
  - [LLM cost control](../operations/03-llm-cost-control.md)

---

## 6. Future ADR Candidates

These decisions should stay separate from MVP 0 and MVP 1. They should not block the current implementation phase.

### Email provider and email automation strategy

- Future MVP: MVP 2
- Reason to defer: Email automation is outside MVP 0 and MVP 1.

### Multi-client configuration model

- Future MVP: MVP 3
- Reason to defer: MVP 1 is a single chatbot demo, not a multi-client platform.

### RAG storage and vector database strategy

- Future MVP: MVP 4
- Reason to defer: RAG and document retrieval are outside MVP 1.

### Admin authentication and authorization strategy

- Future MVP: MVP 5
- Reason to defer: Admin panel work is outside MVP 0 and MVP 1.

### Voice provider strategy

- Future MVP: MVP 6
- Reason to defer: Voice assistant work is explicitly deferred.

### CI/CD strategy

- Future MVP: MVP 7 or later MVP 0 hardening
- Reason to defer: Manual deployment notes are enough until implementation and deployment needs are clearer.

---

## 7. Suggested ADR Writing Order

Recommended order before MVP 0 implementation:

1. `0003-choose-frontend-framework.md`
2. `0004-choose-backend-framework.md`
3. `0005-choose-environment-configuration-strategy.md`
4. `0006-choose-secret-management-strategy.md`
5. `0007-choose-initial-lead-storage-strategy.md`

Recommended order before MVP 0 public deployment:

1. `0008-choose-frontend-hosting-strategy.md`
2. `0009-choose-backend-deployment-strategy.md`
3. `0010-choose-logging-strategy.md`
4. `0011-choose-monitoring-strategy.md`

Recommended order before MVP 1 implementation:

1. `0012-choose-llm-provider-strategy.md`
2. `0013-choose-chatbot-session-handling-strategy.md`

---

## 8. ADR Readiness Checklist

Before writing an ADR from this backlog:

- confirm the related MVP requirements are current,
- list at least two realistic options,
- include consequences and tradeoffs,
- avoid selecting paid services without an explicit cost note,
- keep future MVP scope out of MVP 0 decisions,
- update related documentation after an ADR is accepted.

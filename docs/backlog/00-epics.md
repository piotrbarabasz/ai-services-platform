# Initial Epics

## 1. Purpose

This document contains the initial list of epics derived from the MVP requirements.

The epics will later be converted into GitHub Issues or GitHub Project items.

---

## 2. Epic List

| Epic ID | Name | Related MVP |
|---|---|---|
| EPIC-01 | Project Documentation Foundation | MVP 0 |
| EPIC-02 | Landing Page Implementation | MVP 0 |
| EPIC-03 | Contact Form & Lead Capture | MVP 0 |
| EPIC-04 | Backend API Foundation | MVP 0 |
| EPIC-05 | Initial GCP Setup | MVP 0 |
| EPIC-06 | Basic Security & Privacy | MVP 0 |
| EPIC-07 | Chatbot Widget UI | MVP 1 |
| EPIC-08 | Chat API | MVP 1 |
| EPIC-09 | LLM Provider Integration | MVP 1 |
| EPIC-10 | Chatbot Prompt & Guardrails | MVP 1 |
| EPIC-11 | Chatbot Logging & Cost Control | MVP 1 |
| EPIC-12 | Lead Handling & Mail Automation | MVP 2 |
| EPIC-13 | Multi-client Configuration | MVP 3 |
| EPIC-14 | Knowledge Base / RAG | MVP 4 |
| EPIC-15 | Admin Panel | MVP 5 |
| EPIC-16 | Voice Assistant | MVP 6 |
| EPIC-17 | Production Monitoring & Hardening | MVP 7 |

---

## 3. Epic Details

### EPIC-01 — Project Documentation Foundation

**Goal:**  
Create the initial documentation structure for requirements, roadmap, architecture, backlog, decisions and risks.

**Initial tasks:**

- create `docs/` structure,
- add project overview,
- add requirements index,
- add roadmap overview,
- add architecture overview,
- add initial risk register,
- add initial ADRs.

---

### EPIC-02 — Landing Page Implementation

**Goal:**  
Build the first version of the public landing page.

**Initial tasks:**

- create landing page layout,
- implement hero section,
- implement services section,
- implement benefits section,
- implement process section,
- implement FAQ section,
- implement contact section,
- add responsive styling,
- add SEO metadata.

---

### EPIC-03 — Contact Form & Lead Capture

**Goal:**  
Allow potential clients to submit contact requests.

**Initial tasks:**

- create contact form UI,
- validate form fields,
- create backend contact endpoint,
- validate backend payload,
- store or log lead data,
- show success and error states,
- add basic spam protection plan.

---

### EPIC-04 — Backend API Foundation

**Goal:**  
Create the initial backend API structure.

**Initial tasks:**

- create backend application,
- add `/health` endpoint,
- add `/api/contact` endpoint,
- add configuration management,
- add error handling,
- add logging,
- add tests for core endpoints.

---

### EPIC-05 — Initial GCP Setup

**Goal:**  
Prepare the project for deployment to Google Cloud Platform.

**Initial tasks:**

- create GCP project,
- configure billing budget,
- prepare Cloud Run deployment,
- prepare Artifact Registry,
- configure Secret Manager,
- document deployment process.

---

### EPIC-06 — Basic Security & Privacy

**Goal:**  
Add initial security and privacy foundations.

**Initial tasks:**

- ensure secrets are not committed,
- configure environment variables,
- add privacy policy page,
- limit CORS,
- define logging rules for personal data,
- prepare rate limiting approach.

---

### EPIC-07 — Chatbot Widget UI

**Goal:**  
Add a chatbot widget to the website.

**Initial tasks:**

- create chat widget component,
- add message list,
- add input field,
- add loading state,
- add error state,
- connect widget to backend API.

---

### EPIC-08 — Chat API

**Goal:**  
Create backend API for chatbot conversations.

**Initial tasks:**

- add `/api/chat` endpoint,
- validate chat requests,
- return structured chat responses,
- handle provider errors,
- add tests for chat endpoint.

---

### EPIC-09 — LLM Provider Integration

**Goal:**  
Connect the backend with an AI model provider.

**Initial tasks:**

- create LLM service interface,
- create provider adapter,
- configure model settings,
- load API key securely,
- handle timeouts and errors.

---

### EPIC-10 — Chatbot Prompt & Guardrails

**Goal:**  
Define safe and useful chatbot behavior.

**Initial tasks:**

- create system prompt,
- describe service offer,
- define pricing rules,
- define unsupported question behavior,
- define lead capture behavior,
- document chatbot limitations.

---

### EPIC-11 — Chatbot Logging & Cost Control

**Goal:**  
Control chatbot usage and future costs.

**Initial tasks:**

- log chat request status,
- define message length limits,
- define session message limits,
- prepare token and cost tracking,
- prepare rate limiting.

---

### EPIC-12 — Lead Handling & Mail Automation

**Goal:**  
Automate selected parts of lead processing and email follow-up.

**Initial tasks:**

- define lead status model,
- classify incoming leads,
- generate internal lead summary,
- prepare email notification flow,
- prepare draft response generation,
- define manual approval rules.

---

### EPIC-13 — Multi-client Configuration

**Goal:**  
Prepare the system for creating personalized chatbot configurations for multiple clients.

**Initial tasks:**

- define client entity,
- define client configuration model,
- define chatbot configuration model,
- prepare client-specific prompt configuration,
- define client-level limits,
- design embeddable widget approach.

---

### EPIC-14 — Knowledge Base / RAG

**Goal:**  
Allow chatbots to answer using client-specific documents and knowledge sources.

**Initial tasks:**

- define knowledge source model,
- define document ingestion process,
- define chunking strategy,
- define embedding strategy,
- define retrieval flow,
- define grounded response rules.

---

### EPIC-15 — Admin Panel

**Goal:**  
Create an internal panel for managing clients, leads, chatbots and knowledge sources.

**Initial tasks:**

- define admin user needs,
- design admin navigation,
- define client management views,
- define lead management views,
- define chatbot configuration views,
- define access control requirements.

---

### EPIC-16 — Voice Assistant

**Goal:**  
Prepare future support for AI voice assistants.

**Initial tasks:**

- research voice provider options,
- define call flow,
- define transcription flow,
- define text-to-speech flow,
- define call summary model,
- define human handoff approach,
- define compliance requirements.

---

### EPIC-17 — Production Monitoring & Hardening

**Goal:**  
Improve reliability, security, cost control and operational readiness.

**Initial tasks:**

- define uptime monitoring,
- define backend alerting,
- define cost alerts,
- define logging rules,
- define incident response process,
- prepare CI/CD hardening,
- prepare security checklist.

---

## 4. MVP 0 Priority Epics

The first implementation focus should be:

1. EPIC-01 — Project Documentation Foundation
2. EPIC-02 — Landing Page Implementation
3. EPIC-03 — Contact Form & Lead Capture
4. EPIC-04 — Backend API Foundation
5. EPIC-05 — Initial GCP Setup
6. EPIC-06 — Basic Security & Privacy

---

## 5. Next Step

The next step is to create a detailed implementation backlog for MVP 0 in:

```text
docs/backlog/01-mvp-0-implementation-backlog.md
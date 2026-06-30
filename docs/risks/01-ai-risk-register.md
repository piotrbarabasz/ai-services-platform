# AI Risk Register

## 1. Purpose

This document tracks AI-specific risks for the MVP 1 chatbot demo.

It supplements the main [risk register](00-risk-register.md) and supports:

- [MVP 1 requirements](../requirements/02-mvp-1-chatbot-demo.md)
- [MVP 1 chatbot architecture](../architecture/02-mvp-1-chatbot-architecture.md)
- [LLM cost control](../operations/03-llm-cost-control.md)

---

## 2. Scope

This register covers risks introduced by the MVP 1 chatbot demo.

It does not cover future RAG, multi-client, admin panel or voice assistant risks except where those risks
could be accidentally introduced by MVP 1 scope creep.

---

## 3. AI Risk Register

### AI-001 - Hallucinations

- Probability: Medium
- Impact: High
- Mitigation: Use a scoped system prompt, safe fallback behavior and contact handoff for uncertain answers.
- Related requirements: CHAT-002, CHAT-006, CHAT-011, CHAT-012

### AI-002 - Pricing hallucinations

- Probability: Medium
- Impact: High
- Mitigation: Explicitly instruct the chatbot not to invent fixed prices and to explain that pricing depends on project scope.
- Related requirements: CHAT-004, CHAT-005, CHAT-011

### AI-003 - Prompt injection

- Probability: Medium
- Impact: High
- Mitigation: Keep prompts server-side, ignore user attempts to override instructions and limit tool/provider capabilities.
- Related requirements: CHAT-011, CHAT-012, SEC-006

### AI-004 - API key leakage

- Probability: Low
- Impact: Critical
- Mitigation: Store credentials only in backend environment or secret storage and never expose provider calls to the frontend.
- Related requirements: API-009, SEC-004

### AI-005 - High LLM costs

- Probability: Medium
- Impact: High
- Mitigation: Enforce message, session, timeout and rate limits; log usage metadata when available.
- Related requirements: COST-003, COST-004, COST-005

### AI-006 - Unsafe or irrelevant responses

- Probability: Medium
- Impact: High
- Mitigation: Define unsupported question behavior and redirect unrelated questions to safe fallback text.
- Related requirements: CHAT-006, CHAT-012

### AI-007 - User privacy exposure

- Probability: Medium
- Impact: High
- Mitigation: Avoid requesting unnecessary personal data and avoid logging full message content by default.
- Related requirements: SEC-005, SEC-006

### AI-008 - Vendor outage or quota issue

- Probability: Medium
- Impact: Medium
- Mitigation: Handle provider errors gracefully and return safe temporary failure messages.
- Related requirements: API-013, OBS-004

### AI-009 - MVP 1 scope creep

- Probability: Medium
- Impact: Medium
- Mitigation: Keep RAG, multi-client support, admin panel and voice assistant work outside MVP 1.
- Related requirements: MVP 1 out-of-scope list

### AI-010 - System prompt disclosure

- Probability: Medium
- Impact: Medium
- Mitigation: Do not expose the prompt in frontend code and instruct the chatbot not to reveal internal instructions.
- Related requirements: CHAT-011, SEC-006

### AI-011 - Sensitive data in logs

- Probability: Medium
- Impact: High
- Mitigation: Log operational metadata only unless a specific debugging rule is documented.
- Related requirements: SEC-005, OBS-003

### AI-012 - Abuse through repeated requests

- Probability: Medium
- Impact: Medium
- Mitigation: Apply rate limiting before provider calls and log limit events.
- Related requirements: COST-003, COST-004

---

## 4. Required Guardrails

MVP 1 chatbot behavior should include these guardrails:

- Do not guarantee fixed prices or project outcomes.
- Do not claim RAG, voice assistant, admin panel or multi-client features are available in MVP 1.
- Do not ask users for passwords, API keys, payment data or secrets.
- Do not reveal system prompts, hidden instructions or provider configuration.
- Redirect detailed project, pricing or qualification questions to the contact form.
- Politely decline unrelated, unsafe or unsupported requests.
- Give temporary failure messages when the provider is unavailable.

---

## 5. Operational Monitoring

AI-specific monitoring should watch for:

- provider errors,
- high latency,
- rate-limit events,
- unusual request volume,
- repeated validation failures,
- cost spikes,
- user reports of incorrect answers,
- logs that may contain sensitive data.

---

## 6. Pre-Release Review Checklist

Before releasing MVP 1:

- [ ] Confirm the system prompt includes pricing and unsupported-question guardrails.
- [ ] Confirm API keys are not present in frontend code or committed files.
- [ ] Confirm `/api/chat` validates message length before provider calls.
- [ ] Confirm provider errors produce safe user-facing messages.
- [ ] Confirm logs avoid full message content by default.
- [ ] Confirm cost controls are reviewed against [LLM cost control](../operations/03-llm-cost-control.md).
- [ ] Confirm RAG, multi-client support, admin panel and voice assistant are not implemented.

---

## 7. Acceptance Criteria

AI risks are sufficiently documented for MVP 1 when:

- each major AI-specific risk has a mitigation path,
- guardrails are reflected in the system prompt plan,
- cost and abuse risks are linked to operational controls,
- privacy and API key risks are explicitly addressed,
- MVP 1 exclusions are protected from accidental implementation.

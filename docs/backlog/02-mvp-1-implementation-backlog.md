# MVP 1 - Implementation Backlog

## 1. Purpose

This document breaks the MVP 1 chatbot demo requirements into implementation epics, technical tasks and acceptance criteria.

Source documents:

- [MVP 1 requirements](../requirements/02-mvp-1-chatbot-demo.md)
- [Initial epics](00-epics.md)
- [MVP 1 chatbot architecture](../architecture/02-mvp-1-chatbot-architecture.md)
- [LLM cost control](../operations/03-llm-cost-control.md)
- [AI risk register](../risks/01-ai-risk-register.md)

---

## 2. MVP 1 Goal

MVP 1 adds a working AI chatbot demo to the public website.

The chatbot should answer basic questions about the AI services offer, explain service categories, avoid making unsupported guarantees and encourage qualified visitors to use the contact form.

---

## 3. Scope

MVP 1 includes:

- chatbot widget on the public website,
- backend `/api/chat` endpoint,
- LLM provider integration through a backend adapter,
- server-side system prompt and chatbot guardrails,
- short session-level conversation context,
- loading, success and error states,
- basic chat usage logging,
- limits to control cost and abuse,
- documentation for AI-specific risks and cost controls.

---

## 4. Out of Scope

MVP 1 does not include:

- RAG or knowledge base retrieval,
- document upload,
- client-specific chatbots,
- multi-client support,
- admin panel,
- voice assistant,
- automatic email sending,
- advanced analytics,
- payments or subscriptions,
- exposing API keys, prompts or provider credentials to frontend code,
- committing real API keys or secrets to the repository.

---

## 5. Epics

| Epic ID | Name | Goal | Related Requirements |
|---|---|---|---|
| EPIC-07 | Chatbot Widget UI | Add a usable chatbot widget to the website. | CHAT-001, CHAT-008, CHAT-010 |
| EPIC-08 | Chat API | Create a validated backend endpoint for chat requests. | API-006, API-007, API-011, API-012, API-013 |
| EPIC-09 | LLM Provider Integration | Connect the backend to a configured model provider. | API-008, API-009, API-010, SEC-004 |
| EPIC-10 | Chatbot Prompt & Guardrails | Define safe, scoped chatbot behavior. | CHAT-002, CHAT-003, CHAT-004, CHAT-005, CHAT-006, CHAT-007, CHAT-011, CHAT-012 |
| EPIC-11 | Chatbot Logging & Cost Control | Limit abuse and track operational behavior. | OBS-003, OBS-004, COST-003, COST-004, COST-005 |

---

## 6. Technical Tasks

### EPIC-07 - Chatbot Widget UI

| Task | Description | Acceptance Criteria |
|---|---|---|
| Widget entry point | Add a visible chatbot entry point on the website. | Users can open and close the chatbot from the public website. |
| Message layout | Render user and assistant messages clearly. | Chat history is readable on desktop and mobile. |
| Input handling | Add a text input and submit action. | Empty messages cannot be submitted. |
| Loading state | Show progress while a response is pending. | Users can tell when the chatbot is processing a message. |
| Error state | Show a friendly error when the backend or provider fails. | Users are not shown raw provider errors or stack traces. |
| Contact guidance | Include a route back to the contact form when appropriate. | The chatbot can encourage users to submit a contact request. |
| Frontend secret safety | Ensure the widget calls only the backend API. | No LLM API keys, provider secrets or system prompts are present in frontend code. |

### EPIC-08 - Chat API

| Task | Description | Acceptance Criteria |
|---|---|---|
| Request contract | Define the MVP 1 `/api/chat` request shape. | The endpoint accepts a user message and bounded session context. |
| Response contract | Define structured success and error responses. | The frontend can handle success, validation errors and provider failures predictably. |
| Validation | Validate message length and required fields. | Invalid payloads return clear 4xx responses. |
| Service boundary | Route chat logic through a backend chat service. | Endpoint code does not directly contain provider-specific logic. |
| Provider error handling | Convert provider errors to safe application errors. | Provider failures do not expose credentials or internal details. |
| Endpoint tests | Add tests for success, validation and provider failure paths. | Core `/api/chat` behavior can be verified before release. |

### EPIC-09 - LLM Provider Integration

| Task | Description | Acceptance Criteria |
|---|---|---|
| Provider interface | Define an internal LLM service interface. | The chat service is not tightly coupled to one provider SDK. |
| Provider adapter | Implement the first configured provider adapter. | The backend can request a model response through the adapter. |
| Model configuration | Load provider and model settings from configuration. | Provider and model can be changed without frontend changes. |
| Secret loading | Load API credentials from environment or secret storage. | API keys are not committed and are not exposed to the browser. |
| Timeout behavior | Apply request timeout handling. | Slow provider calls fail gracefully. |
| Usage metadata | Capture provider usage metadata when available. | Token or usage data can support basic cost tracking. |

### EPIC-10 - Chatbot Prompt & Guardrails

| Task | Description | Acceptance Criteria |
|---|---|---|
| System prompt | Create a server-side system prompt for the AI services chatbot. | The prompt describes the offer and MVP 1 behavior boundaries. |
| Service scope | Define which topics the chatbot should answer. | The chatbot focuses on AI services, chatbot demos and contact guidance. |
| Pricing guardrails | Define rules for pricing questions. | The chatbot does not invent fixed prices or guarantee exact costs. |
| Unsupported questions | Define behavior for unrelated or unsupported requests. | The chatbot politely declines or redirects out-of-scope questions. |
| Safety guidance | Define unsafe, sensitive and privacy-related behavior. | The chatbot avoids requesting secrets, credentials or unnecessary personal data. |
| Contact handoff | Define when the chatbot should suggest the contact form. | Qualified or detailed project questions are routed toward contact. |

### EPIC-11 - Chatbot Logging & Cost Control

| Task | Description | Acceptance Criteria |
|---|---|---|
| Request logging | Log chat request status and operational metadata. | Logs include status, timestamp and latency without unnecessary sensitive content. |
| Message length limit | Enforce a maximum user message length. | Oversized messages are rejected before provider calls. |
| Session message limit | Limit messages retained or accepted per session. | Long sessions cannot grow without bounds. |
| Rate limiting | Add or prepare request rate limits. | Basic abuse and cost spikes can be controlled. |
| Cost tracking | Record usage data when the provider returns it. | Usage data is available for cost monitoring where supported. |
| Cost alerts plan | Document budget and usage alert expectations. | Operators know which cost signals should trigger review. |

---

## 7. Acceptance Criteria

MVP 1 is ready when:

- the public website includes a working chatbot widget,
- the widget sends messages only to the backend `/api/chat` endpoint,
- `/api/chat` validates input before calling the LLM provider,
- the backend calls the configured provider through an adapter or service boundary,
- LLM API keys are stored only in backend configuration or secret storage,
- the system prompt is maintained server-side,
- the chatbot can answer basic questions about the service offer,
- the chatbot does not claim guaranteed prices or unsupported capabilities,
- unsupported questions receive a safe fallback response,
- session context is bounded and limited to MVP 1 needs,
- user-facing errors are friendly and do not expose internal details,
- basic logging exists for status, latency and provider failures,
- message, session and rate limits are documented and enforced or prepared,
- no RAG, multi-client support, admin panel or voice assistant functionality is added.

---

## 8. Delivery Checklist

- [ ] EPIC-07 chatbot widget tasks completed.
- [ ] EPIC-08 `/api/chat` tasks completed.
- [ ] EPIC-09 LLM provider integration tasks completed.
- [ ] EPIC-10 prompt and guardrail tasks completed.
- [ ] EPIC-11 logging and cost-control tasks completed.
- [ ] MVP 1 acceptance criteria verified.
- [ ] AI risks reviewed against [AI risk register](../risks/01-ai-risk-register.md).
- [ ] Cost controls reviewed against [LLM cost control](../operations/03-llm-cost-control.md).
- [ ] Documentation updated if implementation decisions differ from this backlog.

---

## 9. Suggested Implementation Order

1. Confirm `/api/chat` request and response contracts.
2. Define system prompt and guardrails before connecting a provider.
3. Implement backend chat service boundaries and validation.
4. Add the LLM provider adapter and secure configuration.
5. Add cost-control limits and operational logging.
6. Build the frontend chatbot widget against the backend contract.
7. Verify error states, unsupported questions and pricing guardrails.
8. Review MVP 1 exclusions before release.


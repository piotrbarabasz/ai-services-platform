# MVP 1 — AI Chatbot Demo

## 1. Goal

The goal of MVP 1 is to add a working AI chatbot demo to the website.

The chatbot should demonstrate how a personalized AI assistant can answer questions about the offered AI services and guide potential clients toward contacting the business.

---

## 2. Scope

MVP 1 includes:

- chatbot widget on the website,
- backend chat endpoint,
- integration with an LLM provider,
- system prompt for the website assistant,
- basic session-based conversation history,
- error handling,
- basic usage logging,
- limits to control cost and abuse.

---

## 3. Out of Scope

MVP 1 does not include:

- client-specific chatbots,
- RAG / knowledge base,
- document upload,
- admin panel,
- voice assistant,
- automatic email sending,
- advanced analytics,
- payment or subscription plans.

---

## 4. Functional Requirements

| ID | Requirement |
|---|---|
| CHAT-001 | The website must include an AI chatbot widget. |
| CHAT-002 | The chatbot must answer questions about offered AI services. |
| CHAT-003 | The chatbot must explain available service categories. |
| CHAT-004 | The chatbot must suggest contacting the business when a user shows buying intent. |
| CHAT-005 | The chatbot must not provide guaranteed prices unless pricing is explicitly configured. |
| CHAT-006 | The chatbot must be able to say that final pricing depends on project scope. |
| CHAT-007 | The chatbot must handle unsupported questions politely. |
| CHAT-008 | The chatbot must maintain conversation context during a single session. |
| CHAT-009 | The chatbot must display loading and error states in the UI. |
| CHAT-010 | The chatbot must encourage users to submit a contact form when appropriate. |

---

## 5. Technical Requirements

| ID | Requirement |
|---|---|
| API-006 | The backend must expose a `/api/chat` endpoint. |
| API-007 | The chat endpoint must validate incoming messages. |
| API-008 | The backend must call the configured LLM provider. |
| API-009 | The backend must hide all LLM API keys from the frontend. |
| API-010 | The backend must include a service layer for LLM calls. |
| API-011 | The backend must support configurable model/provider settings. |
| API-012 | The backend must return structured chat responses. |
| API-013 | The backend must handle LLM provider errors gracefully. |
| CHAT-011 | The chatbot must use a system prompt describing the business offer. |
| CHAT-012 | The chatbot must include guardrails for pricing, unsupported claims and data privacy. |

---

## 6. Non-functional Requirements

| ID | Requirement |
|---|---|
| SEC-004 | The chat endpoint must include basic rate limiting or be prepared for it. |
| SEC-005 | The chatbot must not ask for sensitive personal data unnecessarily. |
| SEC-006 | The chatbot must not expose internal prompts or configuration. |
| OBS-003 | Chat requests should be logged with status and timestamp. |
| OBS-004 | LLM errors should be logged. |
| COST-003 | The chatbot should have a maximum message length. |
| COST-004 | The chatbot should have a maximum number of messages per session. |
| COST-005 | The selected LLM model should be configurable by environment. |

---

## 7. Acceptance Criteria

MVP 1 is considered complete when:

- the chatbot widget is visible on the website,
- the user can send a message,
- the backend receives the message through `/api/chat`,
- the backend calls the configured LLM provider,
- the chatbot returns a useful response,
- the chatbot handles errors gracefully,
- the API key is not exposed to the frontend,
- basic logging exists,
- basic usage limits are defined,
- chatbot behavior is documented.

---

## 8. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| LLM costs grow too quickly | Higher operating costs | Add message/session limits |
| Chatbot hallucinates prices | Business risk | Add prompt rules and avoid hard pricing |
| User expects human-level consulting | Miscommunication | Clearly label the chatbot as AI assistant |
| API key leakage | Security risk | Keep all keys in backend/secret storage |
| Poor chatbot answers | Weak demo quality | Improve prompt and service descriptions |

---

## 9. Final Deliverables

At the end of MVP 1, the project should include:

- chatbot UI widget,
- `/api/chat` backend endpoint,
- LLM provider integration,
- system prompt,
- error handling,
- basic logging,
- basic usage limits,
- chatbot documentation.

---

## 10. Proposed Epics

| Epic | Name |
|---|---|
| EPIC-07 | Chatbot Widget UI |
| EPIC-08 | Chat API |
| EPIC-09 | LLM Provider Integration |
| EPIC-10 | Chatbot Prompt & Guardrails |
| EPIC-11 | Chatbot Logging & Cost Control |
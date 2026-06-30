# MVP 1 Chatbot Architecture

## 1. Purpose

This document describes the planned MVP 1 architecture for the AI chatbot demo.

It supports the [MVP 1 requirements](../requirements/02-mvp-1-chatbot-demo.md) and the [MVP 1 implementation backlog](../backlog/02-mvp-1-implementation-backlog.md).

---

## 2. Scope

MVP 1 architecture covers:

- public website chatbot widget,
- backend `/api/chat` endpoint,
- backend chat service,
- LLM provider adapter,
- server-side prompt management,
- bounded session context,
- basic error handling,
- operational logging,
- cost-control boundaries.

MVP 1 architecture does not include:

- RAG or knowledge base retrieval,
- multi-client chatbot configuration,
- admin panel,
- voice assistant,
- document ingestion,
- payments,
- client-specific prompt management.

---

## 3. High-Level Architecture

```text
User
  |
  v
Website Chatbot Widget
  |
  | POST /api/chat
  v
Backend Chat API
  |
  +--> Request validation
  +--> Cost and abuse limits
  +--> Session context trimming
  +--> Prompt builder
  |
  v
LLM Provider Adapter
  |
  v
Configured LLM Provider
  |
  v
Backend Chat API
  |
  +--> Safe response shaping
  +--> Logging
  |
  v
Website Chatbot Widget
```

---

## 4. Components

| Component | Responsibility | Notes |
|---|---|---|
| Chatbot widget | Presents the chat UI and sends messages to the backend. | Must not contain API keys, provider credentials or system prompts. |
| `/api/chat` endpoint | Validates requests and returns structured chat responses. | Should expose only the application contract, not provider details. |
| Chat service | Coordinates validation, prompt building, session context and provider calls. | Keeps endpoint code small and testable. |
| LLM provider adapter | Translates internal chat requests into provider-specific requests. | Allows provider changes without changing the widget. |
| Prompt builder | Combines the server-side system prompt with bounded session context. | Keeps guardrails server-side. |
| Session context handler | Limits conversation history used in a request. | MVP 1 context is session-level only. |
| Logging and cost controls | Records operational metadata and enforces limits. | Supports abuse prevention and cost review. |
| Secret configuration | Stores LLM credentials outside source control. | Use backend environment variables or cloud secret storage. |

---

## 5. Frontend Widget Responsibilities

The chatbot widget should:

- render user and assistant messages,
- accept a user message,
- prevent empty submissions,
- show loading and error states,
- call the backend `/api/chat` endpoint,
- display safe backend error messages,
- guide qualified users toward the contact form,
- work on desktop and mobile.

The chatbot widget should not:

- call the LLM provider directly,
- contain API keys,
- contain backend secrets,
- contain the system prompt,
- implement RAG,
- implement admin or multi-client configuration.

---

## 6. Backend `/api/chat` Responsibilities

The backend chat endpoint should:

- accept the MVP 1 chat request contract,
- validate required fields and message length,
- enforce cost and abuse limits before provider calls,
- pass work to the backend chat service,
- return structured success responses,
- return safe structured error responses,
- avoid exposing provider errors, stack traces or secrets.

The endpoint should be the only browser-facing entry point for chatbot provider calls.

---

## 7. LLM Provider Adapter

The provider adapter should:

- hide provider-specific SDK or HTTP details from the chat service,
- use backend configuration for provider and model selection,
- load credentials only from backend environment or secret storage,
- apply request timeouts,
- map provider errors to application-level errors,
- return response text and usage metadata when available.

Initial configuration names may include:

```text
LLM_PROVIDER
LLM_MODEL
LLM_API_KEY
LLM_REQUEST_TIMEOUT_SECONDS
```

Real values must not be committed to the repository.

---

## 8. Prompt Management

The system prompt should be owned by the backend.

The prompt should:

- explain the chatbot's role as an AI services website assistant,
- limit answers to the MVP 1 service offer and related discovery questions,
- explain that pricing depends on project scope,
- avoid fixed price promises or guaranteed outcomes,
- avoid requesting secrets or unnecessary personal data,
- redirect unsupported questions safely,
- encourage use of the contact form for detailed project discussions.

The prompt should not:

- be embedded in frontend code,
- include real credentials,
- claim RAG, voice assistant or admin capabilities are available in MVP 1,
- make client-specific claims.

---

## 9. Session Context

MVP 1 uses bounded session-level context only.

Session context should:

- include recent conversation turns needed for a coherent answer,
- be limited by message count or token budget,
- be trimmed before provider calls,
- avoid storing long-term user profiles,
- avoid adding client-specific knowledge.

Persistent chat history and cross-session identity are outside MVP 1.

---

## 10. Error Handling

The backend should handle:

| Error Type | Expected Behavior |
|---|---|
| Invalid request | Return a clear validation error without calling the provider. |
| Message too long | Reject the request and ask the user to shorten the message. |
| Rate limit exceeded | Return a safe limit message and avoid provider calls. |
| Provider timeout | Return a friendly temporary failure message. |
| Provider error | Log operational metadata and return a safe generic error. |
| Missing configuration | Fail closed and avoid exposing configuration details. |

The frontend should display friendly error text and allow the user to retry when appropriate.

---

## 11. Logging

MVP 1 logging should capture operational metadata, such as:

- timestamp,
- request status,
- latency,
- validation failure reason,
- provider error category,
- model identifier,
- token or usage metadata when available.

Logs should avoid storing full message content by default unless a documented debugging need exists. Sensitive personal data, credentials and secrets must not be logged.

---

## 12. Cost Controls

MVP 1 cost controls should include:

- maximum user message length,
- bounded session context,
- request timeout,
- rate limiting or a documented rate-limiting implementation path,
- model selection through backend configuration,
- usage metadata logging when the provider returns it,
- budget and alert expectations documented in [LLM cost control](../operations/03-llm-cost-control.md).

---

## 13. Future Extension Points

The architecture should leave room for later MVPs, but should not implement them in MVP 1.

Future extension points may include:

- RAG and knowledge base retrieval,
- client-specific chatbot configuration,
- admin-managed prompts,
- analytics dashboards,
- voice assistant flows,
- per-client cost controls.

These are explicitly outside MVP 1 and require separate requirements before implementation.

---

## 14. Acceptance Criteria

The MVP 1 architecture is acceptable when:

- the frontend calls only the backend `/api/chat` endpoint,
- the backend owns provider calls and prompt management,
- API keys remain outside frontend code and source control,
- session context is bounded,
- provider errors are handled safely,
- cost limits are defined before production use,
- logging supports debugging without exposing sensitive data,
- MVP 1 exclusions remain unimplemented.


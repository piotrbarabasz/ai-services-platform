# Codex Workflow

## 1. Purpose

This document describes how Codex should be used in this repository.

Codex should help with:

- analyzing the repository,
- planning implementation steps,
- creating small changes,
- updating documentation,
- generating implementation files,
- preparing GitHub Issues,
- validating changes where possible.

---

## 2. Recommended Workflow

Use Codex in small, focused tasks.

Recommended flow:

```text
1. Ask Codex to analyze the current repo state.
2. Ask Codex to prepare a plan.
3. Review the plan.
4. Ask Codex to implement one epic or one small group of tasks.
5. Ask Codex to run checks.
6. Review the diff.
7. Commit manually after review.
```

---

## 3. Do Not Use Codex For

Avoid giving Codex very broad tasks such as:

- Build the whole platform.
- Implement all MVPs.
- Create frontend, backend, GCP, chatbot and voice assistant at once.

These tasks are too large and may produce messy changes.

---

## 4. Good Codex Task Size

Good task examples:

- Create the initial backend FastAPI structure with `/health` endpoint.
- Create the first frontend landing page skeleton with placeholder sections.
- Add contact form API contract and validation model.
- Update documentation after choosing the frontend framework.

---

## 5. Planning Prompt Template

Use this template when asking Codex to plan:

```text
You are working in the ai-services-platform repository.

First, read AGENTS.md and the relevant docs in docs/.

Task:
<describe the task>

Please do not edit files yet.

Return:
1. Summary of current repo state
2. Relevant docs found
3. Proposed implementation plan
4. Files that should be changed or created
5. Risks and open questions
6. Validation steps
```

---

## 6. Implementation Prompt Template

Use this template when asking Codex to implement:

```text
You are working in the ai-services-platform repository.

Read AGENTS.md and the relevant docs before making changes.

Task:
<describe the implementation task>

Scope:
<define what is included>

Out of scope:
<define what must not be changed>

Requirements:
<list key requirements>

After implementation:
1. Summarize changes
2. List changed files
3. Explain how to run locally
4. Explain how to test
5. Mention any follow-up tasks
```

---

## 7. Review Prompt Template

Use this template when asking Codex to review changes:

```text
Review the current diff.

Check for:
- scope creep,
- missing requirements,
- broken documentation links,
- inconsistent naming,
- missing validation steps,
- security issues,
- secrets or credentials,
- unnecessary dependencies.

Return:
1. Summary
2. Issues found
3. Suggested fixes
4. Whether the change is ready to commit
```

---

## 8. Commit Message Style

Use conventional-style commit messages:

```text
docs: add Codex workflow documentation
docs: add MVP 0 implementation backlog
feat: add backend health endpoint
feat: add landing page skeleton
chore: add project tooling
```

---

## 9. Current Recommended Codex Usage

The next recommended Codex tasks are:

1. Keep MVP 0 documentation aligned with the current local implementation.
2. Implement the final custom backend API error response envelope.
3. Create the contact form spam/rate limiting strategy ADR before public exposure.
4. Finalize MVP 0 landing page content and styling.
5. Replace placeholder privacy copy with approved legal/privacy content.
6. Prepare and validate the first dev deployment without claiming production deployment is complete.

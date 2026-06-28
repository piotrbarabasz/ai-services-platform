# AI Services Website & Automation Platform

## 1. Project Purpose

The purpose of this project is to build a Google Cloud Platform based website and technical foundation for offering AI services to small and medium businesses.

The initial business offer includes:

- websites with personalized AI chatbots,
- AI-powered lead handling,
- email automation,
- customer support automation,
- knowledge-based chatbots,
- future 24/7 voice assistants.

The project should start as a marketing and lead-generation website with working AI demos, and later evolve into a reusable platform for delivering AI solutions to multiple clients.

---

## 2. Product Vision

The long-term vision is to create a modular AI service platform that allows fast delivery of AI-powered business automations.

The platform should make it possible to:

- present AI services on a professional landing page,
- collect leads from potential clients,
- demonstrate AI chatbot capabilities,
- create personalized chatbots for clients,
- connect chatbots with client-specific knowledge bases,
- automate selected email workflows,
- optionally support voice assistants in the future.

---

## 3. Development Approach

The project will be developed using an MVP-based approach.

Each MVP should have:

- business goal,
- functional scope,
- technical scope,
- requirements,
- acceptance criteria,
- risks,
- proposed epics.

The documentation in this repository should be the source of truth for future backlog planning and implementation work.

---

## 4. Planned MVPs

| MVP | Name | Goal |
|---|---|---|
| MVP 0 | Foundation & Landing Page | Build the basic website and GCP foundation |
| MVP 1 | AI Chatbot Demo | Add a working chatbot demo to the website |
| MVP 2 | Lead Capture & Mail Automation | Collect leads and support basic email automation |
| MVP 3 | Multi-client Chatbot Platform | Support multiple client chatbot configurations |
| MVP 4 | Knowledge Base / RAG | Allow chatbots to answer using client-specific knowledge |
| MVP 5 | Admin Panel | Manage clients, leads, chatbots and knowledge sources |
| MVP 6 | Voice Assistant 24/7 | Add voice-based AI assistant capabilities |
| MVP 7 | Production Hardening | Improve monitoring, security, CI/CD and cost control |

---

## 5. Initial Technical Direction

The initial technical direction assumes:

- GitHub as the source of truth for code and documentation,
- Google Cloud Platform as the main cloud provider,
- Cloud Run for backend services,
- containerized backend deployment,
- static or server-rendered frontend hosting,
- Secret Manager for API keys and sensitive configuration,
- Cloud Logging and Cloud Monitoring for observability,
- a modular architecture that can later support multiple clients.

---

## 6. Documentation Structure

The documentation is organized as follows:

```text
docs/
  requirements/   # MVP requirements and acceptance criteria
  roadmap/        # Product roadmap and release plan
  architecture/   # Technical architecture
  backlog/        # Epics, user stories and technical tasks
  decisions/      # Architecture Decision Records
  risks/          # Risk register and mitigation plans
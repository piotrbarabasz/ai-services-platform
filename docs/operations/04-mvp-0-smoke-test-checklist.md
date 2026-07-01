# MVP 0 Smoke Test Checklist

## 1. Purpose

Use this checklist before preparing a dev deployment of MVP 0.

The goal is to confirm that the local backend, local frontend, contact flow, Docker backend image,
documentation and basic security posture are ready for a dev deployment attempt.

MVP 0 validation does not require the MVP 1 chatbot, `/api/chat`, LLM integration, RAG, voice
assistant or admin features.

## 2. Prerequisites

- [ ] Python 3.12 or compatible Python 3 is installed.
- [ ] Node.js and npm are installed.
- [ ] Docker Desktop is installed and running for Docker checks.
- [ ] Backend dependencies can be installed from `backend/requirements.txt`.
- [ ] Frontend dependencies can be installed from `frontend/package.json`.
- [ ] Local backend target is `http://localhost:8000`.
- [ ] Local frontend target is `http://localhost:4200`.
- [ ] `backend/.env.example` and `frontend/.env.example` exist.
- [ ] No real `.env` files or secrets are required to run the MVP 0 local smoke test.

## 3. Backend Local Checks

Run backend tests:

```cmd
cd backend
.\.venv\Scripts\python.exe -m pytest
```

Expected result:

- [ ] Test suite passes.
- [ ] Health and contact endpoint behavior is covered.

Start the backend locally:

```cmd
cd backend
python -m venv .venv
.venv\Scripts\activate
python -m pip install -r requirements.txt
set ALLOWED_ORIGINS=http://localhost:4200
set FRONTEND_URL=http://localhost:4200
set LEAD_STORAGE_MODE=log
python -m uvicorn app.main:app --reload --port 8000
```

Expected result:

- [ ] Backend starts at `http://localhost:8000`.
- [ ] No secrets are printed during startup.
- [ ] CORS allows the local frontend origin.

In another terminal, verify health:

```cmd
curl.exe http://localhost:8000/health
```

Expected result:

- [ ] Response includes `"status":"ok"` or `"status": "ok"`.
- [ ] Response includes `"service":"ai-services-platform"` or `"service": "ai-services-platform"`.

Verify a valid contact request:

```cmd
curl.exe -i -X POST http://localhost:8000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Smoke Test\",\"email\":\"smoke@example.com\",\"companyName\":\"Example Company\",\"phone\":\"+48123123123\",\"serviceType\":\"Lead handling automation\",\"message\":\"Smoke test contact request.\",\"consent\":true}"
```

Expected result:

- [ ] HTTP status is `200 OK`.
- [ ] Response includes `"status":"success"` or `"status": "success"`.
- [ ] Response includes `"message":"Contact request received."` or `"message": "Contact request received."`.
- [ ] Backend logs show contact request metadata only, not full name, email, phone or message content.

Verify backend validation rejects missing consent:

```cmd
curl.exe -i -X POST http://localhost:8000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Smoke Test\",\"email\":\"smoke@example.com\",\"serviceType\":\"Lead handling automation\",\"message\":\"Smoke test contact request.\",\"consent\":false}"
```

Expected result:

- [ ] HTTP status is `422 Unprocessable Entity`.
- [ ] Response indicates validation failed.
- [ ] Backend does not create a lead for the rejected request.

Verify backend validation rejects an unsupported service type:

```cmd
curl.exe -i -X POST http://localhost:8000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Smoke Test\",\"email\":\"smoke@example.com\",\"serviceType\":\"Unsupported service\",\"message\":\"Smoke test contact request.\",\"consent\":true}"
```

Expected result:

- [ ] HTTP status is `422 Unprocessable Entity`.
- [ ] Response indicates validation failed.
- [ ] Backend does not create a lead for the rejected request.

## 4. Frontend Local Checks

Install dependencies if needed:

```cmd
cd frontend
npm install
```

Expected result:

- [ ] Dependencies install without errors.
- [ ] No secrets are required by the install step.

Run the frontend production build validation:

```cmd
cd frontend
npm run build
```

Expected result:

- [ ] TypeScript check passes.
- [ ] Vite production build succeeds.
- [ ] Build output is created under `frontend/dist/`.

Start the frontend locally:

```cmd
cd frontend
npm run dev
```

Expected result:

- [ ] Frontend starts at `http://localhost:4200`.
- [ ] Homepage route `/` loads.
- [ ] Privacy route `/privacy` loads.
- [ ] Page title and meta description are present.
- [ ] Landing route has one main H1.

## 5. End-to-End Contact Flow

Before testing:

- [ ] Backend is running on `http://localhost:8000`.
- [ ] Frontend is running on `http://localhost:4200`.
- [ ] `VITE_API_BASE_URL` points to `http://localhost:8000`.
- [ ] Backend `ALLOWED_ORIGINS` includes `http://localhost:4200`.

Manual browser validation:

1. Open `http://localhost:4200`.
2. Navigate to the contact form.
3. Fill the form with valid data.
4. Check the consent checkbox.
5. Submit the form.
6. Confirm the submit button shows a loading state while the request is pending.
7. Confirm a success message is visible after submission.
8. Submit an invalid email and confirm frontend validation is visible.
9. Submit without consent and confirm frontend validation is visible.
10. Open `http://localhost:4200/privacy` and confirm the privacy placeholder page is readable.
11. Check backend logs.

Expected result:

- [ ] Valid contact submission reaches `POST /api/contact`.
- [ ] User sees a success message after a valid submission.
- [ ] Invalid email is blocked by frontend validation.
- [ ] Missing consent is blocked by frontend validation.
- [ ] Backend requires consent even if the frontend is bypassed.
- [ ] Backend logs do not contain full personal data such as full name, email, phone or message.

## 6. Docker Backend Check

This repository includes `backend/Dockerfile`, so run the Docker backend smoke test before dev
deployment preparation.

Build the image:

```cmd
cd backend
docker build -t ai-services-backend .
```

Expected result:

- [ ] Docker image builds successfully.
- [ ] Build does not require secrets.

Run the container:

```cmd
cd backend
docker run --rm -p 8000:8000 -e PORT=8000 -e ALLOWED_ORIGINS=http://localhost:4200 -e FRONTEND_URL=http://localhost:4200 -e LEAD_STORAGE_MODE=log ai-services-backend
```

Expected result:

- [ ] Container starts successfully.
- [ ] Uvicorn listens on `0.0.0.0:8000`.
- [ ] No secrets are printed during startup.

In another terminal, verify the container health endpoint:

```cmd
curl.exe http://localhost:8000/health
```

Expected result:

- [ ] Response includes `"status":"ok"` or `"status": "ok"`.

Stop the container with `Ctrl+C` after validation.

## 7. Documentation Check

Review documentation before dev deployment preparation:

- [ ] Root `README.md` states that backend and frontend contact flow are implemented locally.
- [ ] `backend/README.md` documents `/health`, `/api/contact`, tests and Docker commands.
- [ ] `frontend/README.md` documents `VITE_API_BASE_URL`, build validation and current frontend status.
- [ ] `docs/operations/00-local-development.md` matches the current local run flow.
- [ ] `docs/operations/00-deployment.md` does not claim Cloud Run deployment has been executed.
- [ ] `docs/backlog/01-mvp-0-implementation-backlog.md` does not mark unfinished MVP 0 items as complete.
- [ ] Documentation does not claim MVP 1 chatbot, LLM integration, RAG, multi-client support, admin panel or voice assistant are implemented.

Expected result:

- [ ] Docs are consistent with the current local implementation.
- [ ] Production deployment is still described as pending.

## 8. Security/Secrets Check

Check Git status:

```cmd
git status --short
```

Expected result:

- [ ] Only intended files are changed.
- [ ] No local `.env` files are staged or committed.
- [ ] No generated dependency or build output is unintentionally staged.

Check for environment files:

```cmd
git status --short --ignored
```

Expected result:

- [ ] Real `.env` files, if present locally, are ignored.
- [ ] `.env.example` files remain trackable documentation files.

Search for common secret-like names before commit:

```cmd
rg -n "API_KEY|SECRET|PASSWORD|TOKEN|PRIVATE_KEY|CLIENT_SECRET" .
```

Expected result:

- [ ] Matches are documentation placeholders, example variable names or generated dependency content only.
- [ ] No real credential values are present.

Security behavior checks:

- [ ] Frontend uses only `VITE_` public environment variables.
- [ ] `VITE_API_BASE_URL` does not contain secrets.
- [ ] Backend CORS allowed origins are explicit for local or dev validation.
- [ ] Contact-flow logs avoid full personal data.
- [ ] Durable lead storage and email notifications are not implied as implemented.

## 9. MVP 0 Completion Gate

MVP 0 can move toward dev deployment preparation when all required smoke checks pass and these
conditions are true:

- [ ] Backend tests pass with `.\.venv\Scripts\python.exe -m pytest`.
- [ ] Frontend build passes with `npm run build`.
- [ ] Backend `/health` works locally.
- [ ] Backend `/api/contact` accepts a valid contact request.
- [ ] Backend `/api/contact` rejects invalid requests, including missing or false consent.
- [ ] Frontend contact form submits to the backend locally.
- [ ] User-facing loading, success and validation states are visible.
- [ ] Privacy route exists and is linked from the contact form or footer.
- [ ] Basic title, meta description and heading structure are present.
- [ ] Docker backend image builds and serves `/health`.
- [ ] No secrets are committed.
- [ ] Documentation accurately describes current MVP 0 status.
- [ ] Production deployment is not claimed as complete.
- [ ] MVP 1 chatbot is not required for MVP 0 completion.

Known MVP 0 follow-ups that may still remain after this smoke test:

- final landing page content and styling,
- final legally reviewed privacy policy copy,
- final custom API error response envelope,
- spam/rate limiting strategy or implementation before public exposure,
- production URL metadata,
- production or dev deployment execution.

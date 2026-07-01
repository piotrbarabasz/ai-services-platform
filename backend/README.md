# Backend

FastAPI backend foundation for MVP 0.

Current status:

- `GET /health` and `POST /api/contact` are implemented.
- Contact requests are validated and converted into log-only lead records.
- Durable lead storage and email notifications are not implemented yet.
- Production Cloud Run deployment has not been executed.

## Local Run

```cmd
cd backend
python -m venv .venv
.venv\Scripts\activate
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```

Configuration is read from runtime environment variables. The `.env.example` file documents the
supported local variable names; do not commit real `.env` files or secrets.

The API should be available at:

```text
http://localhost:8000
```

Health check:

```text
GET /health
```

Expected response:

```json
{
  "status": "ok",
  "service": "ai-services-platform",
  "environment": "local"
}
```

Contact endpoint:

```text
POST /api/contact
```

Example request:

```json
{
  "name": "Jan Kowalski",
  "email": "jan@example.com",
  "companyName": "Example",
  "phone": "+48123123123",
  "serviceType": "Website with AI chatbot",
  "message": "I need a landing page with automation.",
  "consent": true
}
```

Expected response:

```json
{
  "status": "success",
  "message": "Contact request received."
}
```

Current behavior:

- required fields, email format and consent are validated by the backend,
- accepted submissions are converted into internal lead objects,
- lead handling currently uses `LEAD_STORAGE_MODE=log`,
- normal contact-flow logs include lead metadata but not full personal data,
- no durable database storage or email notification is implemented yet.

## Docker

Build the backend image from the backend directory:

```cmd
cd backend
docker build -t ai-services-backend .
```

Run it locally:

```cmd
docker run --rm -p 8000:8000 -e PORT=8000 ai-services-backend
```

The container runs Uvicorn on `0.0.0.0` and reads the `PORT` environment variable with a fallback
to `8000`, matching the expected Cloud Run runtime pattern.

Verify the container:

```cmd
curl.exe http://localhost:8000/health
```

## Tests

```cmd
cd backend
python -m pytest
```

## Configuration

Supported MVP 0 backend variables:

```text
APP_ENV=local
APP_NAME=ai-services-platform
BACKEND_PORT=8000
FRONTEND_URL=http://localhost:4200
ALLOWED_ORIGINS=http://localhost:4200
LEAD_STORAGE_MODE=log
LOG_LEVEL=INFO
```

`ALLOWED_ORIGINS` accepts a comma-separated list of frontend origins for CORS.
For local frontend contact form testing, keep `http://localhost:4200` in `ALLOWED_ORIGINS`.

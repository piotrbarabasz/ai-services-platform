import logging

import pytest
from fastapi.testclient import TestClient

from app.config import get_settings
from app.main import create_app
from app.models.contact import ALLOWED_SERVICE_TYPES


EXPECTED_ALLOWED_SERVICE_TYPES = (
    "Website with AI chatbot",
    "Email automation",
    "Lead handling automation",
    "Customer support chatbot",
    "Voice assistant",
    "Not sure yet",
    "Other",
)


def create_test_client(monkeypatch, lead_storage_mode: str = "log") -> TestClient:
    monkeypatch.setenv("LEAD_STORAGE_MODE", lead_storage_mode)
    get_settings.cache_clear()
    app = create_app()
    return TestClient(app)


def valid_payload() -> dict[str, object]:
    return {
        "name": "Jan Kowalski",
        "email": "jan@example.com",
        "companyName": "Example",
        "phone": "+48123123123",
        "serviceType": "Website with AI chatbot",
        "message": "I need a landing page with automation.",
        "consent": True,
    }


def test_contact_accepts_valid_request(monkeypatch) -> None:
    client = create_test_client(monkeypatch)

    response = client.post("/api/contact", json=valid_payload())

    assert response.status_code == 200
    assert response.json() == {
        "status": "success",
        "message": "Contact request received.",
    }


def test_contact_accepts_request_without_optional_fields(monkeypatch) -> None:
    client = create_test_client(monkeypatch)
    payload = valid_payload()
    payload.pop("companyName")
    payload.pop("phone")

    response = client.post("/api/contact", json=payload)

    assert response.status_code == 200
    assert response.json()["status"] == "success"


def test_contact_service_type_allowlist_matches_frontend_options() -> None:
    assert ALLOWED_SERVICE_TYPES == EXPECTED_ALLOWED_SERVICE_TYPES


@pytest.mark.parametrize("service_type", EXPECTED_ALLOWED_SERVICE_TYPES)
def test_contact_accepts_allowed_service_types(monkeypatch, service_type: str) -> None:
    client = create_test_client(monkeypatch)
    payload = valid_payload()
    payload["serviceType"] = service_type

    response = client.post("/api/contact", json=payload)

    assert response.status_code == 200
    assert response.json()["status"] == "success"


def test_contact_rejects_unsupported_service_type(monkeypatch) -> None:
    client = create_test_client(monkeypatch)
    payload = valid_payload()
    payload["serviceType"] = "Custom unsupported service"

    response = client.post("/api/contact", json=payload)

    assert response.status_code == 422
    assert "Unsupported service type." in response.text


@pytest.mark.parametrize("field", ["name", "email", "serviceType", "message", "consent"])
def test_contact_rejects_missing_required_fields(monkeypatch, field: str) -> None:
    client = create_test_client(monkeypatch)
    payload = valid_payload()
    payload.pop(field)

    response = client.post("/api/contact", json=payload)

    assert response.status_code == 422


@pytest.mark.parametrize(
    ("field", "value"),
    [
        ("name", "   "),
        ("email", "not-an-email"),
        ("serviceType", ""),
        ("message", "   "),
        ("consent", False),
    ],
)
def test_contact_rejects_invalid_fields(monkeypatch, field: str, value: object) -> None:
    client = create_test_client(monkeypatch)
    payload = valid_payload()
    payload[field] = value

    response = client.post("/api/contact", json=payload)

    assert response.status_code == 422


def test_contact_allows_configured_cors_origin(monkeypatch) -> None:
    monkeypatch.setenv("ALLOWED_ORIGINS", "http://localhost:4200")
    client = create_test_client(monkeypatch)

    response = client.options(
        "/api/contact",
        headers={
            "Origin": "http://localhost:4200",
            "Access-Control-Request-Method": "POST",
        },
    )

    assert response.status_code == 200
    assert response.headers["access-control-allow-origin"] == "http://localhost:4200"


def test_contact_logs_no_full_personal_data(monkeypatch, caplog) -> None:
    client = create_test_client(monkeypatch)
    caplog.set_level(logging.INFO)

    response = client.post("/api/contact", json=valid_payload())

    assert response.status_code == 200
    assert "Jan Kowalski" not in caplog.text
    assert "jan@example.com" not in caplog.text
    assert "+48123123123" not in caplog.text
    assert "I need a landing page with automation." not in caplog.text


def test_contact_returns_generic_error_for_unsupported_storage_mode(monkeypatch) -> None:
    client = create_test_client(monkeypatch, lead_storage_mode="unsupported")

    response = client.post("/api/contact", json=valid_payload())

    assert response.status_code == 500
    assert response.json() == {"detail": "Contact request could not be processed."}

import logging
from datetime import datetime, timezone
from uuid import uuid4

from app.config import Settings
from app.models.contact import ContactRequest
from app.models.lead import (
    LEAD_SOURCE_WEBSITE_CONTACT_FORM,
    LEAD_STATUS_NEW,
    Lead,
)

logger = logging.getLogger(__name__)


class LeadStorageModeError(RuntimeError):
    pass


class LeadService:
    def __init__(self, settings: Settings) -> None:
        self._settings = settings

    def create_lead(self, contact_request: ContactRequest) -> Lead:
        lead = Lead(
            id=str(uuid4()),
            name=contact_request.name,
            email=contact_request.email,
            company_name=contact_request.company_name,
            phone=contact_request.phone,
            service_type=contact_request.service_type,
            message=contact_request.message,
            consent=contact_request.consent,
            source=LEAD_SOURCE_WEBSITE_CONTACT_FORM,
            status=LEAD_STATUS_NEW,
            created_at=datetime.now(timezone.utc),
        )

        self._handle_lead(lead)
        return lead

    def _handle_lead(self, lead: Lead) -> None:
        storage_mode = self._settings.lead_storage_mode.lower()
        if storage_mode != "log":
            raise LeadStorageModeError(
                f"Unsupported lead storage mode: {self._settings.lead_storage_mode}"
            )

        logger.info(
            "Lead captured in log storage mode lead_id=%s source=%s status=%s storage_mode=%s created_at=%s",
            lead.id,
            lead.source,
            lead.status,
            storage_mode,
            lead.created_at.isoformat(),
        )

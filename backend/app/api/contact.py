import logging

from fastapi import APIRouter, HTTPException, Request, status

from app.models.contact import ContactRequest, ContactResponse
from app.services.lead_service import LeadService, LeadStorageModeError

router = APIRouter(prefix="/api", tags=["contact"])
logger = logging.getLogger(__name__)


@router.post("/contact", response_model=ContactResponse)
def submit_contact(contact_request: ContactRequest, request: Request) -> ContactResponse:
    settings = request.app.state.settings
    lead_service = LeadService(settings)

    try:
        lead = lead_service.create_lead(contact_request)
    except LeadStorageModeError as exc:
        logger.exception(
            "Lead processing failed",
            extra={"storage_mode": settings.lead_storage_mode},
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Contact request could not be processed.",
        ) from exc

    logger.info("Contact request accepted", extra={"lead_id": lead.id})
    return ContactResponse()

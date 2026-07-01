from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field

LEAD_SOURCE_WEBSITE_CONTACT_FORM = "website_contact_form"
LEAD_STATUS_NEW = "new"


class Lead(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    id: str
    name: str
    email: str
    company_name: Optional[str] = Field(default=None, alias="companyName")
    phone: Optional[str] = None
    service_type: str = Field(alias="serviceType")
    message: str
    consent: bool
    source: str = LEAD_SOURCE_WEBSITE_CONTACT_FORM
    status: str = LEAD_STATUS_NEW
    created_at: datetime = Field(alias="createdAt")

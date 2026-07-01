import re
from typing import Annotated, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, field_validator

EMAIL_PATTERN = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")

# Keep aligned with frontend/src/models/contact.ts until a shared schema exists.
ALLOWED_SERVICE_TYPES: tuple[str, ...] = (
    "Website with AI chatbot",
    "Email automation",
    "Lead handling automation",
    "Customer support chatbot",
    "Voice assistant",
    "Not sure yet",
    "Other",
)
ALLOWED_SERVICE_TYPES_SET = frozenset(ALLOWED_SERVICE_TYPES)


class ContactRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    name: Annotated[str, Field(min_length=1, max_length=120)]
    email: Annotated[str, Field(min_length=3, max_length=254)]
    company_name: Annotated[
        Optional[str],
        Field(default=None, alias="companyName", max_length=160),
    ]
    phone: Annotated[Optional[str], Field(default=None, max_length=40)]
    service_type: Annotated[
        str,
        Field(alias="serviceType", min_length=1, max_length=120),
    ]
    message: Annotated[str, Field(min_length=1, max_length=3000)]
    consent: bool

    @field_validator("name", "service_type", "message", mode="before")
    @classmethod
    def strip_required_text(cls, value: object) -> object:
        if not isinstance(value, str):
            return value

        value = value.strip()
        if not value:
            raise ValueError("Field must not be blank.")

        return value

    @field_validator("email", mode="before")
    @classmethod
    def validate_email(cls, value: object) -> object:
        if not isinstance(value, str):
            return value

        value = value.strip()
        if not EMAIL_PATTERN.match(value):
            raise ValueError("Invalid email format.")

        return value

    @field_validator("service_type")
    @classmethod
    def validate_service_type(cls, value: str) -> str:
        if value not in ALLOWED_SERVICE_TYPES_SET:
            raise ValueError("Unsupported service type.")

        return value

    @field_validator("company_name", "phone", mode="before")
    @classmethod
    def strip_optional_text(cls, value: object) -> object:
        if value is None or not isinstance(value, str):
            return value

        value = value.strip()
        return value or None

    @field_validator("consent")
    @classmethod
    def consent_must_be_true(cls, value: bool) -> bool:
        if value is not True:
            raise ValueError("Consent is required.")

        return value


class ContactResponse(BaseModel):
    status: Literal["success"] = "success"
    message: str = "Contact request received."

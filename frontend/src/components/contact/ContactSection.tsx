import { type ChangeEvent, type FormEvent, useState } from "react";
import type { ContactRequest, ContactServiceType } from "../../models/contact";
import { submitContactRequest } from "../../services/apiClient";

const SERVICE_TYPE_OPTIONS: ContactServiceType[] = [
  "Website with AI chatbot",
  "Email automation",
  "Lead handling automation",
  "Customer support chatbot",
  "Voice assistant",
  "Not sure yet",
  "Other"
];

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

interface ContactFormValues {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  serviceType: string;
  message: string;
  consent: boolean;
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
type TextFieldName = Exclude<keyof ContactFormValues, "consent">;
type SubmitState = "idle" | "success" | "error";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  companyName: "",
  phone: "",
  serviceType: "",
  message: "",
  consent: false
};

function validateForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.serviceType) {
    errors.serviceType = "Select a service type.";
  }

  if (!values.message.trim()) {
    errors.message = "Describe what you need help with.";
  }

  if (!values.consent) {
    errors.consent = "Consent is required before sending the request.";
  }

  return errors;
}

function createContactRequest(values: ContactFormValues): ContactRequest {
  const companyName = values.companyName.trim();
  const phone = values.phone.trim();
  const payload: ContactRequest = {
    name: values.name.trim(),
    email: values.email.trim(),
    serviceType: values.serviceType as ContactServiceType,
    message: values.message.trim(),
    consent: values.consent
  };

  if (companyName) {
    payload.companyName = companyName;
  }

  if (phone) {
    payload.phone = phone;
  }

  return payload;
}

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function resetSubmitMessage() {
    if (submitState !== "idle" || statusMessage) {
      setSubmitState("idle");
      setStatusMessage(null);
    }
  }

  function clearFieldError(fieldName: keyof ContactFormValues) {
    setErrors((currentErrors) => {
      if (!currentErrors[fieldName]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[fieldName];
      return nextErrors;
    });
  }

  function handleTextChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const fieldName = event.currentTarget.name as TextFieldName;

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: event.currentTarget.value
    }));
    clearFieldError(fieldName);
    resetSubmitMessage();
  }

  function handleConsentChange(event: ChangeEvent<HTMLInputElement>) {
    setValues((currentValues) => ({
      ...currentValues,
      consent: event.currentTarget.checked
    }));
    clearFieldError("consent");
    resetSubmitMessage();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const validationErrors = validateForm(values);
    setErrors(validationErrors);
    setSubmitState("idle");
    setStatusMessage(null);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitContactRequest(createContactRequest(values));
      setValues(INITIAL_VALUES);
      setErrors({});
      setSubmitState("success");
      setStatusMessage(response.message || "Contact request received.");
    } catch {
      setSubmitState("error");
      setStatusMessage(
        "We could not send your request right now. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
    >
      <div className="field-grid">
        <div className="form-field">
          <label htmlFor="contact-name">Name *</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            value={values.name}
            onChange={handleTextChange}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name ? (
            <p className="field-error" id="contact-name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">Email *</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={values.email}
            onChange={handleTextChange}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email ? (
            <p className="field-error" id="contact-email-error">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="contact-company">Company</label>
          <input
            id="contact-company"
            type="text"
            name="companyName"
            placeholder="Company name"
            autoComplete="organization"
            value={values.companyName}
            onChange={handleTextChange}
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-phone">Phone</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="+48 123 123 123"
            autoComplete="tel"
            value={values.phone}
            onChange={handleTextChange}
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-service">Service *</label>
          <select
            id="contact-service"
            name="serviceType"
            value={values.serviceType}
            onChange={handleTextChange}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.serviceType)}
            aria-describedby={
              errors.serviceType ? "contact-service-error" : undefined
            }
          >
            <option value="">Select a service</option>
            {SERVICE_TYPE_OPTIONS.map((serviceType) => (
              <option value={serviceType} key={serviceType}>
                {serviceType}
              </option>
            ))}
          </select>
          {errors.serviceType ? (
            <p className="field-error" id="contact-service-error">
              {errors.serviceType}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Message *</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Briefly describe your project"
          value={values.message}
          onChange={handleTextChange}
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <p className="field-error" id="contact-message-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label className="consent-row" htmlFor="contact-consent">
          <input
            id="contact-consent"
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={handleConsentChange}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={
              errors.consent ? "contact-consent-error" : undefined
            }
          />
          <span>
            I agree to be contacted about this request and understand that my
            data will be processed according to the{" "}
            <a href="/privacy">privacy policy</a>.
          </span>
        </label>
        {errors.consent ? (
          <p className="field-error" id="contact-consent-error">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {statusMessage ? (
        <p
          className={`form-status form-status-${submitState}`}
          role={submitState === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {statusMessage}
        </p>
      ) : null}

      <button className="button button-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send contact request"}
      </button>
    </form>
  );
}

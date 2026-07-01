export const CONTACT_SERVICE_TYPES = [
  "Website with AI chatbot",
  "Email automation",
  "Lead handling automation",
  "Customer support chatbot",
  "Voice assistant",
  "Not sure yet",
  "Other"
] as const;

export type ContactServiceType = (typeof CONTACT_SERVICE_TYPES)[number];

export interface ContactRequest {
  name: string;
  email: string;
  companyName?: string;
  phone?: string;
  serviceType: ContactServiceType;
  message: string;
  consent: boolean;
}

export interface ContactResponse {
  status: "success";
  message: string;
}

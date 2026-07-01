export type ContactServiceType =
  | "ai_website"
  | "website_chatbot"
  | "lead_automation"
  | "email_automation"
  | "support_automation"
  | "other";

export interface ContactRequest {
  name: string;
  email: string;
  companyName?: string;
  phone?: string;
  serviceType: ContactServiceType;
  message: string;
  consent: boolean;
}

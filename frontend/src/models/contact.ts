export type ContactServiceType =
  | "Website with AI chatbot"
  | "Email automation"
  | "Lead handling automation"
  | "Customer support chatbot"
  | "Voice assistant"
  | "Not sure yet"
  | "Other";

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

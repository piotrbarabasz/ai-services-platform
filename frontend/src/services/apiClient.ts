import type { ContactRequest, ContactResponse } from "../models/contact";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

function buildApiUrl(path: string): string {
  const baseUrl = API_BASE_URL.replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}

export async function submitContactRequest(
  payload: ContactRequest
): Promise<ContactResponse> {
  const response = await fetch(buildApiUrl("/api/contact"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Contact request failed.");
  }

  return response.json() as Promise<ContactResponse>;
}

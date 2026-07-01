import { ContactSection } from "../contact/ContactSection";

export function ContactCtaSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div>
          <p className="section-kicker">Contact CTA</p>
          <h2>Prepare the next conversation.</h2>
          <p>
            This area reserves the future contact form integration point for
            the existing backend `/api/contact` endpoint.
          </p>
        </div>
        <ContactSection />
      </div>
    </section>
  );
}

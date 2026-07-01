import { ContactSection } from "../contact/ContactSection";

export function ContactCtaSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Send a project inquiry.</h2>
          <p>
            Use the MVP 0 contact form to describe your needs. The request is
            sent to the backend contact endpoint when the local API is running.
          </p>
        </div>
        <ContactSection />
      </div>
    </section>
  );
}

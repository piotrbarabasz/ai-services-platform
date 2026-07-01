const services = [
  {
    title: "AI-ready websites",
    description:
      "Public website foundations prepared for contact capture and future AI-assisted experiences."
  },
  {
    title: "Personalized chatbots",
    description:
      "A planned MVP 1 direction for answering visitor questions from business-specific context."
  },
  {
    title: "Lead handling automation",
    description:
      "Structured contact intake designed to support follow-up workflows without adding CRM complexity yet."
  },
  {
    title: "Support automation",
    description:
      "A future service area for reducing repetitive support work after the website foundation is stable."
  }
];

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section-kicker">Services</p>
        <h2>Offer areas for the MVP 0 landing page.</h2>
        <div className="section-grid">
          {services.map((service) => (
            <article className="info-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section section-band">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">MVP 0 public website foundation</p>
          <h1>AI services for websites, lead handling and automation.</h1>
          <p className="hero-text">
            A concise public website foundation for presenting AI services,
            capturing interest and preparing the next chatbot demo step.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#contact">
              Start a project
            </a>
            <a className="button button-secondary" href="#services">
              View services
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Website foundation status">
          <div>
            <span className="status-pill">Backend ready</span>
            <strong>Health and contact API</strong>
            <p>FastAPI receives validated contact requests from the MVP 0 form.</p>
          </div>
          <div>
            <span className="status-pill status-muted">Frontend skeleton</span>
            <strong>Landing routes and sections</strong>
            <p>Initial pages are in place for the MVP 0 website buildout.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

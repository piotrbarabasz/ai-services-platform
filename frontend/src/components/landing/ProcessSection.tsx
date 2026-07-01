const steps = [
  {
    title: "Define the offer",
    description: "Shape the service sections around real client problems."
  },
  {
    title: "Capture interest",
    description: "Prepare the contact area for validated lead submission."
  },
  {
    title: "Add automation",
    description: "Extend the foundation with chatbot and workflow features later."
  }
];

export function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="container">
        <p className="section-kicker">Process</p>
        <h2>How the MVP 0 website moves from structure to lead flow.</h2>
        <div className="timeline">
          {steps.map((step, index) => (
            <article className="timeline-item" key={step.title}>
              <span className="step-number">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

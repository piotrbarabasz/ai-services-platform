const benefits = [
  "Clear service positioning for visitors.",
  "A contact path that can later connect to the backend.",
  "Room for a chatbot demo without changing the frontend stack.",
  "Simple structure that stays easy to review."
];

export function BenefitsSection() {
  return (
    <section className="section section-alt" id="benefits">
      <div className="container split-section">
        <div>
          <p className="section-kicker">Benefits</p>
          <h2>A foundation that supports the first sales conversation.</h2>
        </div>
        <ul className="check-list">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

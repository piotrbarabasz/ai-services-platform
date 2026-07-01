const faqs = [
  {
    question: "Is the chatbot implemented now?",
    answer:
      "No. MVP 0 only prepares the website and contact flow. Chatbot work belongs to MVP 1."
  },
  {
    question: "Does the frontend send contact requests yet?",
    answer:
      "No. This skeleton keeps the contact area visible but does not call the backend."
  },
  {
    question: "Are analytics or tracking included?",
    answer:
      "No. The frontend skeleton does not add analytics, tracking scripts or third-party forms."
  }
];

export function FaqSection() {
  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <p className="section-kicker">FAQ</p>
        <h2>Common MVP 0 boundaries.</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Is the chatbot implemented now?",
    answer:
      "No. MVP 0 only prepares the website and contact flow. Chatbot work belongs to MVP 1."
  },
  {
    question: "Can I send a contact request now?",
    answer:
      "Yes. The form sends contact requests to the MVP 0 backend when VITE_API_BASE_URL points to the running API."
  },
  {
    question: "Are analytics or tracking included?",
    answer:
      "No. The frontend does not add analytics, tracking scripts or third-party forms."
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

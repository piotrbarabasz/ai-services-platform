export function ContactSection() {
  return (
    <div className="contact-placeholder" aria-label="Contact form placeholder">
      <div className="field-grid">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" disabled />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" disabled />
        </label>
        <label>
          Company
          <input type="text" name="companyName" placeholder="Company name" disabled />
        </label>
        <label>
          Service
          <select name="serviceType" disabled defaultValue="">
            <option value="">Select a service</option>
            <option value="ai_website">AI-ready website</option>
            <option value="website_chatbot">Website chatbot</option>
            <option value="lead_automation">Lead automation</option>
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Briefly describe your project"
          disabled
        />
      </label>
      <label className="consent-row">
        <input type="checkbox" name="consent" disabled />
        I agree to be contacted about this request.
      </label>
      <button className="button button-primary" type="button" disabled>
        Form integration pending
      </button>
    </div>
  );
}

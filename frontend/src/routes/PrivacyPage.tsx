export function PrivacyPage() {
  return (
    <section className="section page-section">
      <div className="container narrow">
        <p className="section-kicker">Privacy</p>
        <h1>Privacy information placeholder</h1>
        <p>
          This MVP 0 page explains how contact form data is expected to be
          handled during local development and early validation. It is not a
          final legal privacy policy and should be reviewed before production
          launch.
        </p>

        <div className="policy-block">
          <h2>Purpose of this page</h2>
          <p>
            The purpose of this page is to give visitors clear basic information
            before they submit a contact request through the website.
          </p>
        </div>

        <div className="policy-block">
          <h2>What data is collected</h2>
          <ul className="check-list">
            <li>Name.</li>
            <li>Email address.</li>
            <li>Selected service type.</li>
            <li>Message content.</li>
            <li>Optional company name.</li>
            <li>Optional phone number.</li>
            <li>Consent confirmation.</li>
          </ul>
        </div>

        <div className="policy-block">
          <h2>Why the data is collected</h2>
          <p>
            Submitted contact data is used to understand the inquiry and respond
            to the person who sent it. It is not collected for email marketing
            automation in MVP 0.
          </p>
        </div>

        <div className="policy-block">
          <h2>How data is handled in MVP 0</h2>
          <p>
            Contact requests are sent to the backend contact endpoint and
            converted into internal lead records. The current MVP 0 handling is
            log-only and avoids logging full personal data by default.
          </p>
        </div>

        <div className="policy-block">
          <h2>What is not implemented yet</h2>
          <ul className="check-list">
            <li>No production-grade legal review has been completed yet.</li>
            <li>No external CRM integration is implemented.</li>
            <li>No email marketing consent or automation is implemented.</li>
            <li>No analytics, tracking scripts or cookie banner are added.</li>
            <li>
              No chatbot, RAG or voice assistant data processing is implemented
              in MVP 0.
            </li>
          </ul>
        </div>

        <div className="policy-block">
          <h2>Contact information placeholder</h2>
          <p>
            Add the final business contact details here before public launch so
            visitors know where to send privacy-related questions or deletion
            requests.
          </p>
        </div>

        <div className="policy-block">
          <h2>Production and legal review note</h2>
          <p>
            This page is implementation-oriented placeholder content. It should
            be reviewed and replaced with approved legal copy before the site is
            used as a public production service.
          </p>
        </div>
      </div>
    </section>
  );
}

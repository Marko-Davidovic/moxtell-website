// Privacy / Terms / Security pages. Each HTML page sets window.LEGAL_SLUG.
// All three placeholder pages are intentionally short — they're meant to be
// replaced with finalized counsel-reviewed copy.

function LegalShell({ title, effective, intro, children }) {
  const ref = useReveal();
  return (
    <>
      <Nav />
      <main className="about-page" ref={ref}>
        <section className="about-hero about-story-hero wrap">
          <a className="journal-back reveal" href="index.html">← Back to home</a>
          <div className="eyebrow reveal" style={{ marginTop: 20 }}>◦ Moxtell</div>
          <h1 className="h-display reveal reveal-delay-1" style={{ marginTop: 16 }}>
            {title}
          </h1>
          <p className="reveal reveal-delay-2" style={{
            marginTop: 14,
            color: "var(--muted)",
            fontFamily: "var(--f-mono)",
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            {effective}
          </p>
        </section>

        <section className="about-story wrap reveal">
          <article className="about-story-card">
            {intro && <p className="about-story-lede">{intro}</p>}
            {children}
            <div className="about-story-separator" />
            <p style={{ fontStyle: "italic", color: "var(--muted)" }}>
              This page is an early-stage placeholder. A finalized counsel-reviewed version is in
              progress and will replace this text.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      effective="Effective June 2026"
      intro="Moxtell Labs, Inc. (“Moxtell,” “we,” “us”) builds AI voice assistants for veterinary clinics. This policy describes the personal information we collect, how we use it, and the choices you have."
    >
      <p><b>What we collect.</b></p>
      <p>
        We collect three categories of information. <b>Information you give us</b> when you fill out a form
        or contact us — your name, work email, role, and any details you share. <b>Information from your
        clinic</b> when you deploy Moxtell — call audio, transcripts, and structured call data such as
        appointment requests, refill questions, and caller identity, used to provide the service. <b>Usage
        information</b> — basic site analytics including pages visited, browser, and country, used to
        improve the product.
      </p>

      <p><b>How we use it.</b></p>
      <p>
        We use this information to operate the service, communicate with you, prevent abuse, and improve
        Moxtell. We do not sell your data. We share information only with the subprocessors required
        to run the service (cloud hosting, telephony providers, model providers) and only as needed to
        deliver the product.
      </p>

      <p><b>Your choices.</b></p>
      <p>
        You can request a copy of your data, ask us to correct it, or ask us to delete it. Contact us at
        privacy@moxtell.ai and we will respond within 30 days.
      </p>
    </LegalShell>
  );
}

function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      effective="Effective June 2026"
      intro="By using Moxtell (“the service”), you agree to these terms. If you do not agree, do not use the service."
    >
      <p><b>Use of the service.</b></p>
      <p>
        The service is provided to veterinary clinics for answering phone calls and supporting related
        operational tasks. You agree to use the service in compliance with applicable law and not to
        misuse it, reverse engineer it, or use it to harm others.
      </p>

      <p><b>Account responsibility.</b></p>
      <p>
        You are responsible for the activity in your account and for keeping login credentials safe.
        Notify us promptly of any unauthorized access.
      </p>

      <p><b>Your data.</b></p>
      <p>
        Call audio and transcripts processed through the service are subject to our Privacy Policy. You
        retain ownership of your clinic's data. We process it only to provide and improve the service.
      </p>

      <p><b>Limitation of liability.</b></p>
      <p>
        The service is provided on an as-is basis. To the maximum extent permitted by law, Moxtell
        Labs, Inc. is not liable for indirect, incidental, or consequential damages.
      </p>

      <p><b>Changes.</b></p>
      <p>
        We may update these terms from time to time. Material changes will be communicated by email or
        in-product notice. Continued use of the service after a change indicates acceptance of the
        updated terms.
      </p>

      <p>Contact: legal@moxtell.ai.</p>
    </LegalShell>
  );
}

function SecurityPage() {
  return (
    <LegalShell
      title="Security"
      effective="Last updated June 2026"
      intro="We take the protection of your clinic's data seriously. This page summarizes our current security practices. We expect this page to grow as our compliance work matures."
    >
      <p><b>Encryption.</b></p>
      <p>
        All data is encrypted in transit using TLS 1.2 or higher. Call audio, transcripts, and stored
        data are encrypted at rest using industry-standard ciphers.
      </p>

      <p><b>Access control.</b></p>
      <p>
        Access to production systems is limited to authorized engineers, gated by single sign-on with
        mandatory multi-factor authentication, and audit-logged. Production data is never accessed for
        debugging without an explicit, time-bound approval.
      </p>

      <p><b>Vendor management.</b></p>
      <p>
        We work only with subprocessors that meet recognized security standards. A current list of
        subprocessors is available on request.
      </p>

      <p><b>Data isolation.</b></p>
      <p>
        Each clinic's data is logically isolated. Call audio and transcripts are stored separately from
        account data and accessed under per-clinic credentials.
      </p>

      <p><b>Vulnerability management.</b></p>
      <p>
        We monitor dependencies for known vulnerabilities, run regular internal security reviews, and
        welcome responsible disclosure of any issues at security@moxtell.ai.
      </p>

      <p><b>Incident response.</b></p>
      <p>
        We notify affected customers of any confirmed security incident within applicable timelines.
        For a deeper review (SOC 2 status, DPA, audit reports), contact security@moxtell.ai.
      </p>
    </LegalShell>
  );
}

const LEGAL_COMPONENTS = {
  privacy:  PrivacyPage,
  terms:    TermsPage,
  security: SecurityPage,
};

const slug = (typeof window !== "undefined" && window.LEGAL_SLUG) || "privacy";
const Page = LEGAL_COMPONENTS[slug] || PrivacyPage;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);

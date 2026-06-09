// Clinic-type landing pages. Each HTML file sets window.CLINIC_SLUG before this loads.

function ClinicShell({ title, kicker, children }) {
  const ref = useReveal();
  return (
    <>
      <Nav />
      <main className="about-page" ref={ref}>
        <section className="about-hero about-story-hero wrap">
          <a className="journal-back reveal" href="index.html">← Back to home</a>
          <div className="eyebrow reveal" style={{ marginTop: 20 }}>◦ Moxtell for Veterinary Clinics</div>
          <h1 className="h-display reveal reveal-delay-1" style={{ marginTop: 16 }}>{title}</h1>
          <p className="reveal reveal-delay-2" style={{
            marginTop: 18,
            color: "var(--muted)",
            fontSize: "clamp(18px, 1.6vw, 22px)",
            maxWidth: 740,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.5,
            textAlign: "center",
          }}>{kicker}</p>
        </section>
        <section className="about-story wrap reveal">
          <article className="about-story-card">
            {children}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

function BenefitList({ items }) {
  return (
    <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function ClinicCTA() {
  return (
    <div style={{ marginTop: 48, padding: "32px", background: "var(--bg-2)", borderRadius: 16, textAlign: "center" }}>
      <p style={{ fontSize: 18, color: "var(--ink)", fontWeight: 500, marginBottom: 20 }}>
        Whether you operate a single clinic or a growing veterinary group, Emily helps ensure every call is answered, every opportunity is captured, and every client receives exceptional service.
      </p>
      <a
        href="https://cal.com/dental-clinic/30min?overlayCalendar=true"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ display: "inline-flex", padding: "14px 32px", fontSize: 16 }}
      >
        Book a Demo
      </a>
    </div>
  );
}

function ClinicGP() {
  return (
    <ClinicShell
      title="Emily for GP Clinics"
      kicker="Never miss an opportunity to serve a pet owner."
    >
      <p>Emily answers calls instantly, schedules appointments, answers common questions, sends confirmations, and captures new client inquiries 24/7. By handling routine phone traffic, your team can spend more time with pets and clients instead of being tied to the phone.</p>
      <h2>Benefits</h2>
      <BenefitList items={[
        "More appointments booked",
        "Fewer missed calls during peak hours",
        "Reduced front-desk workload",
        "Better client experience",
        "Support after hours and weekends",
      ]} />
      <ClinicCTA />
    </ClinicShell>
  );
}

function ClinicEmergency() {
  return (
    <ClinicShell
      title="Emily for Emergency Hospitals"
      kicker="When every minute matters, Emily ensures calls are answered immediately."
    >
      <p>The system collects critical information, identifies urgent situations, and helps direct pet owners to the appropriate level of care. Even during busy periods, no caller is left waiting or sent to voicemail.</p>
      <h2>Benefits</h2>
      <BenefitList items={[
        "Faster response to urgent calls",
        "Improved client communication",
        "Reduced hold times",
        "Better call handling during peak periods",
        "24/7 availability",
      ]} />
      <ClinicCTA />
    </ClinicShell>
  );
}

function ClinicSpecialty() {
  return (
    <ClinicShell
      title="Emily for Specialty Practices"
      kicker="Specialty hospitals often manage referrals, consultations, and complex scheduling."
    >
      <p>Emily helps coordinate appointments, collect referral information, answer client questions, and keep communication organized throughout the patient journey.</p>
      <h2>Benefits</h2>
      <BenefitList items={[
        "Streamlined referral management",
        "Easier scheduling for consultations",
        "Reduced administrative burden",
        "Improved client communication",
        "Consistent follow-up experience",
      ]} />
      <ClinicCTA />
    </ClinicShell>
  );
}

function ClinicMultiLocation() {
  return (
    <ClinicShell
      title="Emily for Multi-Location Groups"
      kicker="Manage every location from a single intelligent phone system."
    >
      <p>Emily can identify the correct clinic, route callers appropriately, schedule appointments at the right location, and provide a consistent experience across your entire organization.</p>
      <h2>Benefits</h2>
      <BenefitList items={[
        "Consistent client experience across locations",
        "Intelligent call routing",
        "Centralized appointment management",
        "Reduced staffing pressure",
        "Scalable support as your organization grows",
      ]} />
      <ClinicCTA />
    </ClinicShell>
  );
}

const CLINIC_COMPONENTS = {
  gp:            ClinicGP,
  emergency:     ClinicEmergency,
  specialty:     ClinicSpecialty,
  multiLocation: ClinicMultiLocation,
};

(function mount() {
  const slug = window.CLINIC_SLUG;
  const Component = CLINIC_COMPONENTS[slug];
  if (!Component) { document.body.innerHTML = "<p>Page not found.</p>"; return; }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(React.createElement(Component));
})();

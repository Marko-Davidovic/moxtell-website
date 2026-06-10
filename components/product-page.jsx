function SolIcon({ children }) {
  return (
    <svg
      width="28" height="28" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      style={{ color: "var(--teal)" }}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const PROD_ICONS = {
  phone: <SolIcon><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></SolIcon>,
  calendar: <SolIcon><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></SolIcon>,
  clipboard: <SolIcon><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></SolIcon>,
  refresh: <SolIcon><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></SolIcon>,
  pill: <SolIcon><path d="M10.5 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v4.5"/><path d="M10.5 15a4.5 4.5 0 019 0v4.5a4.5 4.5 0 01-9 0V15z"/><line x1="10.5" y1="15" x2="19.5" y2="15"/></SolIcon>,
  moon: <SolIcon><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></SolIcon>,
  message: <SolIcon><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></SolIcon>,
  globe: <SolIcon><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></SolIcon>,
  file: <SolIcon><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></SolIcon>,
};

const CAPS_ALL = [
  { icon: "phone",     tag: "Caller ID",    title: "Recognizes returning callers.",       body: "Surfaces client name, pet name, and history at the start of the call so every conversation feels personal and prepared." },
  { icon: "clipboard", tag: "New Intake",   title: "Collects new client information.",    body: "Gathers owner name, contact details, pet name, species, breed, and reason for visit before the call ends — no follow-up needed." },
  { icon: "calendar",  tag: "Booking",      title: "Books appointments in real time.",    body: "Checks live calendar availability, offers matching slots, confirms the booking, and stores the appointment record automatically." },
  { icon: "refresh",   tag: "Reschedule",   title: "Handles rescheduling requests.",      body: "Finds a new slot, updates the calendar, and notifies the client with a confirmation — all without pulling staff away." },
  { icon: "pill",      tag: "Refills",      title: "Supports refill requests.",           body: "Collects medication details, blocks unsafe promises, flags controlled substances, and routes requests to the right person for review." },
  { icon: "moon",      tag: "After Hours",  title: "After-hours coverage.",               body: "Keeps scheduling and information collection available when the clinic is closed, and routes emergencies to the right phone path." },
  { icon: "message",   tag: "SMS",          title: "SMS follow-up.",                      body: "Sends booking confirmations, appointment reminders, refill updates, and recovery texts after missed or dropped calls." },
  { icon: "globe",     tag: "Bilingual",    title: "Bilingual memory.",                   body: "Saves each caller's language preference and continues future calls in Spanish, English, or beyond — automatically." },
  { icon: "file",      tag: "Records",      title: "Every call, structured.",             body: "Bookings, summaries, pet details, appointment IDs, and follow-up data are saved automatically and searchable for your team." },
];

function ProcessCardGrid({ steps }) {
  return (
    <div className="process-card-grid">
      {steps.map((item, i) => (
        <article key={item.title} className="process-card">
          <div className="process-card-num">{i + 1}</div>
          <div className="process-card-divider" />
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function ProductPage() {
  const ref = useReveal();
  const steps = [
    {
      title: "Connect your phone and calendar.",
      body: "Emily receives calls through your existing phone workflow and checks your live availability. No new hardware.",
    },
    {
      title: "Train Emily on your clinic rules.",
      body: "Hours, doctors, services, emergency rules, refill policy, booking rules, tone, set the policy, Emily follows it.",
    },
    {
      title: "Every call updates the client record.",
      body: "Bookings, call summaries, pet details, appointment IDs, and follow-up data are stored for the next call.",
    },
  ];
  const benefits = [
    "More calls answered",
    "Fewer missed appointment requests",
    "Less voicemail backlog",
    "Less repetitive work for receptionists",
    "Lower staff burnout risk",
    "Faster answers for pet owners",
    "Cleaner call summaries",
    "A calmer check-in experience",
  ];
  const integration = [
    {
      label: "Phone workflow",
      text: "We help route eligible calls to Moxtell so routine calls can be answered even when the front desk is busy.",
    },
    {
      label: "Clinic rules",
      text: "You provide the rules: hours, services, doctors, booking preferences, escalation steps, and what should never be automated.",
    },
    {
      label: "Calendar or PIMS support",
      text: "Where possible, Moxtell can support calendar/PIMS workflows or collect structured information for staff review.",
    },
    {
      label: "Human handoff",
      text: "Urgent, unclear, or sensitive calls can be routed to the right person instead of being treated like routine questions.",
    },
  ];
  const timeline = [
    { time: "30-45 min", label: "Workflow discovery" },
    { time: "2-5 days", label: "Setup and tuning" },
    { time: "1 week", label: "Typical first launch window" },
    { time: "Ongoing", label: "Review, improve, and expand" },
  ];

  return (
    <>
      <Nav />
      <main className="seo-page product-page" ref={ref}>
        <section className="seo-hero wrap">
          <div className="eyebrow reveal">◦ How it works</div>
          <h1 className="h-display reveal reveal-delay-1">
            Your clinic keeps caring.<br/>
            Moxtell handles the routine calls.
          </h1>
          <p className="seo-lede reveal reveal-delay-2">
            Moxtell is an AI phone assistant for veterinary clinics. It answers routine
            calls, collects client and pet details, supports appointment requests, routes urgent
            calls, and gives your front desk more time for the people standing in the clinic.
          </p>
          <div className="product-actions reveal reveal-delay-3">
            <a className="btn btn-primary" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            <button
              className="btn product-demo-button"
              onClick={() => {
                if (window.startWaveDemo) {
                  window.startWaveDemo();
                } else {
                  window.dispatchEvent(new CustomEvent("pawline:start-demo"));
                }
              }}
            >
              <span className="product-demo-play"><Icon name="play" /></span>
              <span>Hear Demo</span>
            </button>
          </div>
        </section>

        <section className="product-capabilities wrap">
          <div className="seo-capabilities-head reveal">
            <div className="eyebrow">◦ The process</div>
            <h2 className="h-xl" style={{ marginTop: 16 }}>
              Three steps.<br/>
              No <span className="serif-italic" style={{ color: "var(--accent-ink)" }}>rip-and-replace</span>.
            </h2>
          </div>
          <ProcessCardGrid steps={steps} />
        </section>

        <section className="product-outcomes wrap">
          <div className="product-outcome-copy reveal">
            <div className="eyebrow">◦ How it applies to your clinic</div>
            <h2 className="h-xl" style={{ marginTop: 16 }}>
              Built around your calls, your rules, and your staff.
            </h2>
            <p>
              Every clinic has a different front desk rhythm. Moxtell is configured
              around how your team answers questions, books visits, handles refills, escalates
              urgent cases, and welcomes pet owners.
            </p>
          </div>
          <div className="product-integration-list">
            {integration.map((item, i) => (
              <article key={item.label} className={`product-integration reveal reveal-delay-${i % 4}`}>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="product-before-after wrap">
          <div className="seo-capabilities-head reveal">
            <div className="eyebrow">◦ Setup timeline</div>
            <h2 className="h-xl" style={{ marginTop: 16 }}>
              Simple enough to start quickly.<br/>
              Flexible enough to keep improving.
            </h2>
          </div>
          <div className="product-timeline">
            {timeline.map((item, i) => (
              <div key={item.label} className={`product-time reveal reveal-delay-${i % 4}`}>
                <strong>{item.time}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="solution" style={{ background: "transparent" }}>
          <div className="solution-head">
            <div className="eyebrow reveal">◦ What your clinic gets</div>
            <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16 }}>
              Everything Emily does,<br/>
              <span className="serif-italic" style={{ color: "var(--accent-ink)" }}>for your clinic.</span>
            </h2>
            <p className="reveal reveal-delay-2" style={{ marginTop: 16, color: "var(--muted)", maxWidth: 600, marginLeft: "auto", marginRight: "auto", fontSize: 17, lineHeight: 1.55 }}>
              The goal is not to replace your front desk. The goal is to remove the repetitive phone work that steals attention from clients, pets, and the team inside the clinic.
            </p>
          </div>
          <div className="solution-grid solution-grid--static">
            {CAPS_ALL.map((c, i) => (
              <div key={c.tag} className={`solution-card reveal reveal-delay-${i % 4}`}>
                <div className="solution-emoji" aria-hidden="true">{PROD_ICONS[c.icon]}</div>
                <div className="solution-tag">◦ {c.tag}</div>
                <h3 className="solution-title">{c.title}</h3>
                <p className="solution-body">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <Trust />

        {/* PIMS Integrations */}
        <section className="pims-section wrap reveal">
          <div className="pims-head">
            <div className="eyebrow">◦ Integrations</div>
            <h2 className="h-xl" style={{ marginTop: 16 }}>
              Works with your <span className="serif-italic" style={{ color: "var(--teal)" }}>existing PIMS.</span>
            </h2>
            <p className="lede" style={{ marginTop: 16, color: "var(--ink-2)", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
              Emily connects to the practice management systems used by 79% of North American veterinary clinics.
            </p>
          </div>

          <div className="pims-grid">
            {[
              { name: "Avimark",      badge: "Covetrus",  share: "25.4%" },
              { name: "Cornerstone",  badge: "IDEXX",     share: "19.5%" },
              { name: "ezyVet",       badge: "IDEXX",     share: "16.5%" },
              { name: "Pulse",        badge: "Covetrus",  share: "7.4%"  },
              { name: "Shepherd",     badge: "Cloud",     share: "4.2%"  },
              { name: "Neo",          badge: "IDEXX",     share: "4.0%"  },
              { name: "DaySmart",     badge: "Cloud",     share: "4.0%"  },
              { name: "Vetspire",     badge: "Cloud",     share: "3.2%"  },
            ].map(p => (
              <div key={p.name} className="pims-card">
                <div className="pims-card-name">{p.name}</div>
                <div className="pims-card-meta">
                  <span className="pims-badge">{p.badge}</span>
                  <span className="pims-share">{p.share} market share</span>
                </div>
              </div>
            ))}
          </div>

          <p className="pims-footnote">
            Source: Kynetec PRJ17655, n=1,155 — North American PIMS Share of Market, April 2026.
            Don't see your PIMS? <a href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Ask us about your system →</a>
          </p>
        </section>

        <section className="seo-cta wrap reveal">
          <h2 className="h-xl">Want to see how it would work for your clinic?</h2>
          <p>Bring your phone workflow, appointment rules, and common call types. We will show how Moxtell can fit your front desk.</p>
          <a className="btn btn-primary" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a Demo</a>
        </section>
      </main>
      <Demo />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductPage />);

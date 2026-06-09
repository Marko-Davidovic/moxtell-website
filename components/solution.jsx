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

const SOL_ICONS = {
  phone: (
    <SolIcon>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </SolIcon>
  ),
  calendar: (
    <SolIcon>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </SolIcon>
  ),
  clipboard: (
    <SolIcon>
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      <line x1="9" y1="12" x2="15" y2="12"/>
      <line x1="9" y1="16" x2="13" y2="16"/>
    </SolIcon>
  ),
  refresh: (
    <SolIcon>
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
    </SolIcon>
  ),
  pill: (
    <SolIcon>
      <path d="M10.5 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v4.5"/>
      <path d="M10.5 15a4.5 4.5 0 019 0v4.5a4.5 4.5 0 01-9 0V15z"/>
      <line x1="10.5" y1="15" x2="19.5" y2="15"/>
    </SolIcon>
  ),
  moon: (
    <SolIcon>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </SolIcon>
  ),
  message: (
    <SolIcon>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </SolIcon>
  ),
  globe: (
    <SolIcon>
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </SolIcon>
  ),
  file: (
    <SolIcon>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
      <line x1="9" y1="17" x2="13" y2="17"/>
    </SolIcon>
  ),
};

function Solution() {
  const ref = useReveal();
  const caps = [
    { icon: "calendar",  tag: "Booking",     title: "Books appointments in real time.", body: "Checks Google Calendar availability, offers matching slots, books confirmed appointments, and stores the appointment record." },
    { icon: "pill",      tag: "Refills",     title: "Supports refill requests.",        body: "Collects medication details, blocks unsafe promises, flags controlled substances, and routes requests for review." },
    { icon: "moon",      tag: "After hours", title: "After-hours coverage.",            body: "Keeps scheduling available when the clinic is closed and routes emergencies to the right phone path." },
    { icon: "message",   tag: "SMS",         title: "SMS follow-up.",                   body: "Sends booking confirmations, reminders, refill messages, recovery texts after dropped calls, and no-show workflows." },
    { icon: "globe",     tag: "Bilingual",   title: "Bilingual memory.",                body: "Saves language preference and continues future calls in the caller's preferred language like Spanish, English, and beyond." },
    { icon: "file",      tag: "Records",     title: "Every call, structured.",          body: "Bookings, summaries, pet details, appointment IDs, and follow-up data are saved automatically, searchable for your team." },
  ];

  return (
    <section id="solution" className="solution" ref={ref}>
      <div className="solution-head">
        <div className="eyebrow reveal">◦ Solution</div>
        <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16 }}>
          Meet <span className="serif-italic" style={{ color: "var(--accent-ink)" }}>Emily</span>.
        </h2>
        <p className="lede reveal reveal-delay-2" style={{ marginTop: 20, color: "var(--ink-2)", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          A veterinary phone agent that actually does the work.
        </p>
        <p className="reveal reveal-delay-3" style={{ marginTop: 16, color: "var(--muted)", maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontSize: 17, lineHeight: 1.55 }}>
          Emily is trained around real veterinary front-desk workflows. She doesn't just take messages, she recognizes callers, collects clean intake, checks the calendar, books appointments, sends confirmations, and leaves the team with structured call history.
        </p>
      </div>

      <div className="solution-grid">
        {caps.map((c, i) =>
          <div key={c.tag} className={`solution-card reveal reveal-delay-${i % 4}`}>
            <div className="solution-emoji" aria-hidden="true">{SOL_ICONS[c.icon]}</div>
            <div className="solution-tag">◦ {c.tag}</div>
            <h3 className="solution-title">{c.title}</h3>
            <p className="solution-body">{c.body}</p>
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { Solution });

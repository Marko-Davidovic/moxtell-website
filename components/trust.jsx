function Trust() {
  const ref = useReveal();
  const items = [
    {
      tag: "Guardrails",
      title: "Built with guardrails.",
      body: "Emily does not diagnose, approve medications, or replace clinical judgment. She routes emergencies, collects structured information, and keeps staff in control.",
    },
    {
      tag: "Logging",
      title: "Every action is logged.",
      body: "Appointments, summaries, call IDs, SMS events, and customer updates are saved for review. Full audit trail per call.",
    },
    {
      tag: "Sessions",
      title: "Caller-safe session handling.",
      body: "Each call is isolated by call ID, so simultaneous callers never cross customer records. Safe under peak load.",
    },
  ];
  return (
    <section id="trust" className="trust wrap" ref={ref}>
      <div className="trust-head">
        <div className="eyebrow reveal">◦ Trust &amp; safety</div>
        <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16, maxWidth: 880 }}>
          Built with <span className="serif-italic" style={{ color: "var(--accent-ink)" }}>guardrails</span><br/>
          because veterinary medicine demands them.
        </h2>
      </div>

      <div className="trust-grid">
        {items.map((it, i) => (
          <div key={it.tag} className={`trust-card reveal reveal-delay-${i}`}>
            <div className="trust-tag">◦ {it.tag}</div>
            <h3 className="trust-title">{it.title}</h3>
            <p className="trust-body">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Trust });

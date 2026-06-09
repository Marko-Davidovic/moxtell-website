function HowItWorks() {
  const ref = useReveal();
  const steps = [
    {
      n: "1",
      title: "Connect your phone and calendar.",
      body: "Emily receives calls through your existing phone workflow and checks your live availability. o new hardware.",
    },
    {
      n: "2",
      title: "Train Emily on your clinic rules.",
      body: "Hours, doctors, services, emergency rules, refill policy, booking rules, tone, set the policy, Emily follows it.",
    },
    {
      n: "3",
      title: "Every call updates the client record.",
      body: "Bookings, call summaries, pet details, appointment IDs, and follow-up data are stored for the next call.",
    },
  ];
  return (
    <section id="how" className="how wrap" ref={ref}>
      <div className="how-head">
        <div className="eyebrow reveal">◦ How it works</div>
        <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16 }}>
          Three steps.<br/>
          No <span className="serif-italic" style={{ color: "var(--accent-ink)" }}>rip-and-replace</span>.
        </h2>
      </div>

      <div className="how-grid">
        {steps.map((s, i) => (
          <div key={s.n} className={`how-card reveal reveal-delay-${i}`}>
            <div className="how-num">{s.n}</div>
            <div className="how-rail" aria-hidden="true" />
            <h3 className="how-title">{s.title}</h3>
            <p className="how-body">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}




Object.assign(window, { HowItWorks });

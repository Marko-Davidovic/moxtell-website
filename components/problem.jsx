function Problem() {
  const ref = useReveal();
  const cards = [
    {
      n: "01",
      tag: "Peak-hour overload",
      title: "Phones ring nonstop. Peak hours pressure.",
      body: "During mornings, lunch breaks, and end-of-day rush.",
      result: "Calls go to voicemail or stay unanswered.",
    },
    {
      n: "02",
      tag: "After-hours gaps",
      title: "Pet owners call when the clinic is closed.",
      body: "Many owners call after work, on weekends, or during emergencies.",
      result: "Lost new clients and missed bookings.",
    },
    {
      n: "03",
      tag: "Staff burnout",
      title: "Receptionists carry too much pressure.",
      body: "Front desk are overwhelmed by nonstop phone calls.",
      result: "Stress, mistakes, turnover, and poor client experience.",
    },
    {
      n: "04",
      tag: "Revenue leakage",
      title: "Missed calls become missed appointments.",
      body: "A missed call is not just a phone problem. It lost revenue.",
      result: "Fewer booked visits and weaker client retention.",
    },
  ];

  return (
    <section id="problem" className="problem" ref={ref}>
      <div className="problem-head">
        <div className="eyebrow reveal">◦ The problem</div>
        <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16, maxWidth: 920 }}>
          The front desk problem is not your staff.<br/>
          It is the <span className="serif-italic" style={{ color: "var(--accent-ink)" }}>call volume.</span>
        </h2>
      </div>

      <div className="problem-card-grid">
        {cards.map((card, index) => (
          <article className={`problem-card reveal reveal-delay-${index}`} key={card.n}>
            <div className="problem-card-top">
              <span className="problem-card-num">{card.n}</span>
              <span className="problem-card-tag">{card.tag}</span>
            </div>
            <h3>{card.title}</h3>
            <p className="problem-card-body">{card.body}</p>
            <div className="problem-card-result">
              <span className="problem-result-label">Result</span>
              <span className="problem-result-text">{card.result}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="problem-note reveal">
        The front desk problem is not your staff. It is the call volume.
        <span className="problem-note-sub">Fixes this problem and turns your lost calls into profit.</span>
        <a className="hero-book-btn problem-note-btn" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
          Book Consultation
        </a>
      </div>
    </section>
  );
}

Object.assign(window, { Problem });

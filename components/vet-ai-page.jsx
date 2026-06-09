function VetAIPage() {
  const ref = useReveal();
  const sections = [
    {
      eyebrow: "The front desk problem",
      title: "Veterinary teams are asked to be present and interrupted at the same time.",
      body: "A clinic receptionist may be checking in a pet owner, taking a payment, updating the schedule, answering a refill question, and fielding a ringing phone within the same few minutes. Even great staff can feel rushed when calls never stop.",
    },
    {
      eyebrow: "The AI phone assistant",
      title: "Moxtell handles routine calls before they become interruptions.",
      body: "Moxtell can answer common questions, collect client and pet information, support appointment requests, route urgent concerns, and help keep call details organized for the clinic team.",
    },
    {
      eyebrow: "The clinic experience",
      title: "More time for the people and pets in front of the team.",
      body: "When repetitive calls are handled in the background, the front desk can welcome clients by name, guide check-in, answer in-person questions, and create a warmer first impression.",
    },
  ];
  const capabilities = [
    "Routine call answering",
    "Appointment request support",
    "Client and pet information collection",
    "Refill and follow-up intake",
    "Urgent call routing",
    "After-hours call support",
    "Calendar or workflow coordination",
    "Structured call summaries",
  ];

  return (
    <>
      <Nav />
      <main className="seo-page" ref={ref}>
        <section className="seo-hero wrap">
          <div className="eyebrow reveal">◦ Veterinary AI phone assistant</div>
          <h1 className="h-display reveal reveal-delay-1">
            AI phone answering built for veterinary clinics.
          </h1>
          <p className="seo-lede reveal reveal-delay-2">
            Moxtell helps veterinary clinics answer routine calls, support appointment
            requests, collect client and pet details, and reduce pressure on the front desk.
          </p>
        </section>

        <section className="seo-story wrap">
          {sections.map((section, i) => (
            <article key={section.title} className={`seo-story-row reveal reveal-delay-${i}`}>
              <div className="eyebrow">◦ {section.eyebrow}</div>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </section>

        <section className="seo-capabilities wrap">
          <div className="seo-capabilities-head reveal">
            <div className="eyebrow">◦ What it can support</div>
            <h2 className="h-xl" style={{ marginTop: 16 }}>
              Routine phone work handled with clinic context.
            </h2>
          </div>
          <div className="seo-capability-grid">
            {capabilities.map((capability, i) => (
              <div key={capability} className={`seo-capability reveal reveal-delay-${i % 4}`}>
                <Icon name="phone" width="15" height="15" />
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="seo-cta wrap reveal">
          <h2 className="h-xl">Modernize your veterinary front desk.</h2>
          <p>Let your team focus on pets and owners while Moxtell handles routine calls.</p>
          <a className="btn btn-primary" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a Demo <Icon name="arrow-right" /></a>
        </section>
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<VetAIPage />);

function FAQPage() {
  const ref = useReveal();
  const groups = [
    {
      title: "Product",
      items: [
        {
          q: "What is Moxtell?",
          a: "Moxtell is an AI phone assistant for veterinary clinics. It answers routine calls, collects client and pet information, supports appointment requests, and helps reduce front desk pressure.",
        },
        {
          q: "Who is Moxtell built for?",
          a: "Moxtell is built for veterinary clinics, animal hospitals, and multi-location veterinary groups that want fewer missed calls, faster routing, and a calmer front desk.",
        },
        {
          q: "Does Moxtell replace receptionists?",
          a: "No. Moxtell supports receptionists by handling repetitive calls in the background so the front desk can focus on pets, owners, check-ins, and in-person care.",
        },
      ],
    },
    {
      title: "Call handling",
      items: [
        {
          q: "What kinds of calls can Moxtell handle?",
          a: "Moxtell can help with appointment requests, rescheduling, basic clinic questions, refill requests, client and pet information collection, follow-ups, and routing urgent calls to the right person.",
        },
        {
          q: "Can Moxtell help with appointment booking?",
          a: "Yes. Moxtell can collect appointment intent, gather relevant client and pet details, and book or route appointment requests depending on the clinic workflow.",
        },
        {
          q: "Can urgent calls still reach a human?",
          a: "Yes. Moxtell is designed to route urgent or sensitive calls to the right staff member or protocol instead of treating every call like a routine request.",
        },
      ],
    },
    {
      title: "Clinic impact",
      items: [
        {
          q: "How does Moxtell help the front desk?",
          a: "It reduces the repetitive phone work that interrupts check-ins, payments, schedule updates, and client conversations. The goal is a calmer front desk and a better clinic experience.",
        },
        {
          q: "Does Moxtell work after hours?",
          a: "Moxtell can support after-hours call handling so pet owners receive helpful direction even when the clinic is closed or the team is unavailable.",
        },
        {
          q: "Why is AI phone answering useful for veterinary clinics?",
          a: "Veterinary clinics often receive a high volume of repetitive calls. AI phone answering helps prevent missed calls, reduce staff stress, and give pet owners faster answers.",
        },
      ],
    },
    {
      title: "Setup and pricing",
      items: [
        {
          q: "How long does integration take?",
          a: "Most clinic setups are completed in 2-4 weeks. The exact timeline depends on clinic size, call volume, workflows, phone setup, and how much customization is needed.",
        },
        {
          q: "How do you customize Moxtell for our clinic?",
          a: "We customize Moxtell around your clinic's needs: your greeting, your tone, your rules, your services, your doctors, your appointment preferences, your escalation steps, and your clinic data. Everything is configured by us for you.",
        },
        {
          q: "How is pricing structured?",
          a: "Pricing is based on clinic size, call volume, and the number of veterinarians or locations. Book a free consultation to get a personalized quote for your clinic.",
        },
        {
          q: "What does our clinic need to provide?",
          a: "We usually start with your hours, services, appointment rules, common questions, refill process, emergency protocol, team preferences, and any call examples that help Emily understand how your clinic communicates.",
        },
        {
          q: "Can Moxtell be updated after launch?",
          a: "Yes. Your clinic rules, call flows, services, doctors, hours, and answers can be updated as your clinic changes. The system is designed to keep improving after launch.",
        },
      ],
    },
  ];

  return (
    <>
      <Nav />
      <main className="seo-page" ref={ref}>
        <section className="seo-hero wrap">
          <div className="eyebrow reveal">◦ FAQ</div>
          <h1 className="h-display reveal reveal-delay-1">
            Questions about AI voice support for veterinary clinics.
          </h1>
          <p className="seo-lede reveal reveal-delay-2">
            Clear answers about how Moxtell handles routine calls, supports the front desk,
            and helps clinics create a calmer experience for pet owners.
          </p>
        </section>

        <section className="seo-faq wrap">
          {groups.map((group, groupIndex) => (
            <div key={group.title} className={`seo-faq-group reveal reveal-delay-${groupIndex}`}>
              <h2>{group.title}</h2>
              <div className="seo-faq-items">
                {group.items.map((item) => (
                  <article key={item.q} className="seo-faq-item">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="seo-cta wrap reveal">
          <h2 className="h-xl">Ready to reduce front desk pressure?</h2>
          <p>See how Moxtell can handle routine calls while your team focuses on pets and owners.</p>
          <a className="btn btn-primary" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a Demo <Icon name="arrow-right" /></a>
        </section>
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FAQPage />);

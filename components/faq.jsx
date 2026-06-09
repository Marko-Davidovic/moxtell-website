function FAQ() {
  const ref = useReveal();
  const [open, setOpen] = useState(null);

  const questions = [
    {
      q: "What is Moxtell?",
      a: "Moxtell is an AI phone assistant for veterinary clinics. It answers routine calls, collects client and pet information, supports appointment requests, and helps reduce front desk pressure.",
    },
    {
      q: "How does Moxtell improve clinic ROI?",
      a: "Moxtell helps reduce lost revenue from missed calls, missed appointments, and no-shows. By answering 24/7, capturing appointment requests, sending confirmations, and helping new clients reach the clinic faster, it turns more phone traffic into booked visits while reducing pressure on the front desk.",
    },
    {
      q: "Does Moxtell replace receptionists?",
      a: "No. Moxtell supports the front desk by handling repetitive phone work so staff can focus on in-person clients, pets, and higher value care.",
    },
    {
      q: "What calls can Moxtell handle?",
      a: "Moxtell can help with routine calls such as appointment requests, rescheduling, basic clinic questions, refill requests, client and pet information collection, and routing urgent calls to the right team.",
    },
    {
      q: "Who is Moxtell built for?",
      a: "Moxtell is built for veterinary clinics, animal hospitals, and multi-location veterinary groups that want fewer missed calls and a calmer front desk.",
    },
    {
      q: "How quickly can we get started?",
      a: "Most clinics go live within one week. Setup includes a 30–45 minute workflow discovery call, followed by 2–5 days of configuration and tuning before launch.",
    },
    {
      q: "Does it work after hours?",
      a: "Yes. Moxtell is available around the clock. It can book appointments, collect information, and route urgent calls even when the clinic is closed.",
    },
  ];

  return (
    <section id="faq" className="faq wrap" ref={ref}>
      <div className="faq-head">
        <div className="eyebrow reveal">◦ Common questions</div>
        <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16 }}>
          Common questions
        </h2>
      </div>
      <div className="faq-accordion">
        {questions.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className={`faq-row${isOpen ? " open" : ""}`}
              onClick={() => setOpen(isOpen ? null : i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <div className="faq-row-top">
                <span className="faq-row-q">{item.q}</span>
                <span className="faq-row-chevron" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </div>
              <div className="faq-row-body">
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

Object.assign(window, { FAQ });

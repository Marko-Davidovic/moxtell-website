function AboutPage() {
  const ref = useReveal();

  return (
    <>
      <Nav />
      <main className="about-page" ref={ref}>
        <section className="about-hero about-story-hero wrap">
          <div className="eyebrow reveal">◦ About Moxtell</div>
          <h1 className="h-display reveal reveal-delay-1">
            We believe the veterinary front desk should feel more Hospitable.
          </h1>
        </section>

        <section className="about-story wrap reveal">
          <article className="about-story-card">
            <p className="about-story-lede">
              Moxtell Intelligence was built around a simple belief:<br/>
              Veterinary clinics should not feel like call centers. They should feel like places of care.
            </p>
            <p>
              Every day, front desk teams are asked to do too much at once. They answer constant
              phone calls, book appointments, handle refills, update schedules, take payments,
              check messages, help doctors and technicians, and still try to greet every pet owner
              with patience and warmth.
            </p>
            <p>
              The problem is not that the team does not care. The problem is that the phone never
              stops. When routine calls take over the day, the people standing inside the clinic
              can start to feel like interruptions instead of the reason the clinic exists.
            </p>
            <p>
              That is what we want to change.
            </p>
            <p>
              <b>Our mission</b> is to help veterinary clinics create a calmer, more welcoming front desk
              by moving repetitive phone work into the background. Moxtell Intelligence can answer
              routine calls, collect client and pet information, support appointment requests, handle common
              questions, and route urgent or sensitive calls to the right person.
            </p>
            <p>
              We are not building technology to replace the front desk. We are building technology
              to give the front desk their time, focus, and friendliness back.
            </p>
            <p>
              When the phone is handled better, the whole clinic feels different. Staff have more
              room to breathe. Pet owners get answers faster. Appointment requests are captured
              instead of missed. Voicemail becomes lighter. Check-in feels less rushed. The team can
              spend more attention on the pets and people in front of them.
            </p>
              <div className="about-story-separator" />
            <p>
              <b>Our goal </b>is to make veterinary clinics feel more organized, more responsive, and more
              human. We believe AI should do the repetitive work quietly in the background, so people
              can do the work that requires care, judgment, empathy, and trust.
            </p>
            <p>
              <b>Our goal</b> is to help veterinary clinics create a warmer, more welcoming experience for every 
              pet owner — both new and returning clients.
              We believe the veterinary front desk should feel less like a busy check-in counter and more 
              like a hospitality experience. Instead of clients waiting in line or feeling rushed,
              the receptionist can step forward, greet pets and owners with a smile,
              and guide them through the clinic with care.
            </p>
            <div className="about-story-separator" />
            <p>
              <b>Our vision</b> is to transform the front desk into a more personal, concierge-style 
              experience — similar to a maître d at a restaurant or a personal assistant in a premium 
              service environment.
            </p>
            <p>
              The receptionist becomes the welcoming face of the clinic, making every client feel seen, expected, 
              and cared for from the moment they walk in.
            </p>
            <p>
              With routine phone calls handled by Moxtell Intelligence, the front desk team has more time to focus on people 
              and pets in the lobby — creating a calmer, friendlier, and more memorable clinic experience.
            </p>
            <div className="about-story-separator" />
            <p>
              <b>For us</b>, Moxtell Intelligence is not just about answering more calls. It is about helping a
              clinic protect its culture. It is about reducing pressure on good staff before burnout
              becomes normal. It is about helping pet owners feel seen from the first moment they
              reach out. And it is about giving veterinary teams a front desk experience that finally
              matches the level of care they already work so hard to provide.
            </p>
            <p className="about-story-close">
              We are here to help clinics move from phone pressure to front desk presence.
            </p>
          </article>
        </section>

        <section className="about-cta" id="book">
          <div className="wrap about-cta-inner reveal">
            <div className="eyebrow">◦ Our vision</div>
            <h2 className="h-xl" style={{ marginTop: 16 }}>
              Emily handle the routine voice calls.<br/>
              Your team focus on care and connection.
            </h2>
            <p>
              Moxtell helps veterinary clinics answer more calls, reduce front desk pressure,
              and create a warmer experience for every pet owner who reaches out.
            </p>
            <a className="btn btn-primary" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              Book a Demo <Icon name="arrow-right" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AboutPage />);

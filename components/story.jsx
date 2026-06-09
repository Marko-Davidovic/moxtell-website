function useTypewriter(phrases, speed = 35, hold = 2200) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    let cancel = false;
    const phrase = phrases[idx];
    setText("");
    let i = 0;
    const type = () => {
      if (cancel) return;
      if (i <= phrase.length) {
        setText(phrase.slice(0, i));
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => { if (!cancel) setIdx((v) => (v + 1) % phrases.length); }, hold);
      }
    };
    type();
    return () => { cancel = true; };
  }, [idx, phrases, speed, hold]);
  return text;
}

function StoryStep({ time, eyebrow, title, body, frame, reverse }) {
  return (
    <div className={`story-step ${reverse ? "reverse" : ""}`}>
      <div className="copy reveal">
        <div className="story-time">{time}</div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</div>
        <h3 className="h-lg" style={{ marginBottom: 20 }}>{title}</h3>
        <p className="lede" style={{ color: "var(--muted)" }}>{body}</p>
      </div>
      <div className="reveal reveal-delay-1">{frame}</div>
    </div>
  );
}

function Dashboard() {
  const targets = useMemo(() => ({ calls: 47, after: 94, appts: 31 }), []);
  const [vals, setVals] = useState({ calls: 0, after: 0, appts: 0 });
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((ents) => {
      if (ents[0].isIntersecting) {
        const start = performance.now();
        const dur = 1500;
        const tick = (now) => {
          const t = Math.min(1, (now - start) / dur);
          const e = 1 - Math.pow(1 - t, 3);
          setVals({ calls: targets.calls * e, after: targets.after * e, appts: targets.appts * e });
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [targets]);

  // Rotating AI transcription phrases + matching chips
  const cases = useMemo(() => ([
    { q: "Do you have anything this afternoon for a vaccine?", chips: [["green","Routine"], ["green","Appt offered"]] },
    { q: "My dog just ate chocolate — he's a 40-lb golden…", chips: [["red","Urgent triage"], ["red","Vet paged"]] },
    { q: "Can I refill Whiskey's pain meds before Friday?", chips: [["blue","Rx refill"], ["green","Auto-queued"]] },
    { q: "She's been limping for two days on her left hind leg.", chips: [["amber","Priority"], ["green","Same-day slot"]] },
    { q: "Do you take rabbits? It's our first time at a vet.", chips: [["blue","New client"], ["green","Appt offered"]] },
  ]), []);
  const [caseIdx, setCaseIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCaseIdx((v) => (v + 1) % cases.length), 4200);
    return () => clearInterval(id);
  }, [cases.length]);
  const typed = useTypewriter(cases.map(c => c.q), 32, 2400);
  const activeChips = cases[caseIdx].chips;

  // Recent calls — rotating with incoming row
  const pool = useMemo(() => ([
    { who: "Maria L.", pet: "Coco · Poodle", sub: "Annual checkup", status: "booked", label: "Booked" },
    { who: "Tom P.", pet: "Buddy · Beagle", sub: "Follow-up", status: "scheduled", label: "Scheduled" },
    { who: "Sophie R.", pet: "Whiskey · Cat", sub: "Vaccine refill", status: "booked", label: "Booked" },
    { who: "David K.", pet: "Rex · Shepherd", sub: "Emergency", status: "urgent", label: "Urgent" },
    { who: "Elena M.", pet: "Milo · Tabby", sub: "Dental cleaning", status: "scheduled", label: "Scheduled" },
    { who: "Jordan T.", pet: "Nova · Husky", sub: "Limping 2 days", status: "urgent", label: "Urgent" },
    { who: "Priya R.", pet: "Biscuit · Rabbit", sub: "First visit", status: "booked", label: "Booked" },
    { who: "Chris A.", pet: "Luna · Frenchie", sub: "Vomiting", status: "urgent", label: "Urgent" },
    { who: "Kate W.", pet: "Pepper · Labrador", sub: "Nail trim", status: "booked", label: "Booked" },
  ]), []);
  const [rows, setRows] = useState(() => pool.slice(0, 4));
  const cursorRef = useRef(4);
  useEffect(() => {
    const id = setInterval(() => {
      const next = pool[cursorRef.current % pool.length];
      cursorRef.current++;
      setRows((prev) => [next, ...prev.slice(0, 3)]);
    }, 3000);
    return () => clearInterval(id);
  }, [pool]);

  // toast booking counter ticks up
  const [booked, setBooked] = useState(12);
  useEffect(() => {
    const id = setInterval(() => setBooked(b => b + 1), 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="dash-frame" ref={ref}>
      <div className="dash-toast">
        <div className="t-ico"><Icon name="calendar" width="18" height="18" /></div>
        <div className="t-text">
          <strong>+{booked} booked overnight</strong>
          <span>While your team slept 🌙</span>
        </div>
      </div>
      <div className="dash-inner">
        <div className="dash-titlebar">
          <span className="dash-dot r" />
          <span className="dash-dot y" />
          <span className="dash-dot g" />
          <div className="dash-title-text">Moxtell — Live Dashboard</div>
        </div>
        <div className="dash-body">
          <div className="dash-stats">
            <div className="dash-stat"><div className="v">{Math.round(vals.calls)}</div><div className="l">Calls Today</div></div>
            <div className="dash-stat green"><div className="v">{Math.round(vals.after)}%</div><div className="l">After Hours</div></div>
            <div className="dash-stat purple"><div className="v">{Math.round(vals.appts)}</div><div className="l">Appts Booked</div></div>
          </div>

          <div className="dash-ai">
            <div className="dash-ai-head">
              <Icon name="mic" width="11" height="11" /> AI TRANSCRIPTION · ACTIVE
              <span className="bars">
                {[0,1,2,3].map(i => <span key={i} style={{ animationDelay: `${i*0.15}s`, height: `${40 + (i*17)%60}%` }} />)}
              </span>
            </div>
            <div className="dash-ai-quote">"{typed}"</div>
            <div className="dash-chips">
              {activeChips.map(([c, label], i) => (
                <span key={`${caseIdx}-${i}`} className={`chip ${c}`}>{label}</span>
              ))}
            </div>
          </div>

          <div className="dash-calls-head">RECENT CALLS</div>
          <div className="dash-calls">
            {rows.map((c, i) => (
              <div key={`${c.who}-${c.pet}-${i}`} className="dash-call">
                <div className="ico"><Icon name="phone" width="13" height="13" /></div>
                <div className="info">
                  <div className="who">{c.who} · {c.pet}</div>
                  <div className="sub">{c.sub}</div>
                </div>
                <div className={`status ${c.status}`}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame({ variant, label, photo, children }) {
  return (
    <div className={`story-frame ${variant}`}>
      {photo && <img className="photo" src={photo} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />}
      {photo && <div className="scrim" />}
      {children}
      <div className="frame-label">{label}</div>
    </div>
  );
}

function Story() {
  const revealRef = useReveal();
  return (
    <section id="how" className="story wrap" ref={revealRef}>
      <div className="story-head">
        <div className="eyebrow reveal">How it works</div>
        <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16 }}>
          One night in <span className="serif-italic" style={{ color: "var(--accent-ink)" }}>the life</span><br/>
          of a clinic that never sleeps.
        </h2>
      </div>

      <div className="story-steps">
        <StoryStep
          time="02:47 AM"
          eyebrow="The call comes in"
          title="Someone is worried. Right now."
          body="A pet parent dials the clinic after hours. Before the second ring, Moxtell answers — warm, unhurried, speaking in their language."
          frame={
            <Frame variant="warm" label="golden retriever · 02:47" photo="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=80">
              <div className="float-card" style={{ top: 24, left: 24 }}>
                <div className="fc-head"><span className="ring-dot" /> Incoming call</div>
                <div className="fc-body"><strong>+1 (415) 555 0142</strong><br/><span style={{ color: "var(--muted)", fontSize: 12 }}>New caller · not in system</span></div>
              </div>
            </Frame>
          }
        />

        <StoryStep
          reverse
          time="02:47:08 AM"
          eyebrow="Natural conversation"
          title="It listens. Really listens."
          body="Moxtell picks up intent from plain speech — 'he ate chocolate,' 'she's been limping,' 'do you take rabbits?' — and asks the right follow-ups the way a great receptionist would."
          frame={
            <Frame variant="dark" label="transcript · live" photo="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=900&q=80">
              <div className="float-card" style={{ top: 24, right: 24, background: "#1a1a1c", color: "#fff" }}>
                <div className="fc-head" style={{ color: "rgba(255,255,255,0.5)" }}>Moxtell · thinking</div>
                <div className="fc-body" style={{ color: "#fff" }}>Chocolate toxicity<br/><span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>40lb dog · small bar · ~50mg/kg</span></div>
              </div>
              <div className="float-card" style={{ bottom: 80, left: 24, animationDelay: "1s" }}>
                <div className="fc-head">Caller · verbatim</div>
                <div className="fc-body">"A small bar. He's a 40-lb golden."</div>
              </div>
            </Frame>
          }
        />

        <StoryStep
          time="02:47:42 AM"
          eyebrow="Triage + dispatch"
          title="Urgent? The right person wakes up."
          body="When something is time-sensitive, Moxtell escalates on protocols you set: page the on-call vet, text the owner directions, pre-fill the intake form. Everything else gets handled itself."
          frame={
            <Frame variant="cool" label="on-call · Dr. Lin" photo="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80">
              <div className="float-card" style={{ top: 24, right: 24 }}>
                <div className="fc-head"><span className="ring-dot" /> Escalating</div>
                <div className="fc-body"><strong>Dr. Lin paged</strong><br/><span style={{ color: "var(--muted)", fontSize: 12 }}>ETA 12min · chart pre-filled</span></div>
              </div>
              <div className="float-card" style={{ bottom: 24, left: 24, animationDelay: "1.5s" }}>
                <div className="fc-head">SMS · sent to caller</div>
                <div className="fc-body">Head to 1201 Bayside. Door code 4417. Dr. Lin meets you in 12.</div>
              </div>
            </Frame>
          }
        />

        <StoryStep
          reverse
          time="08:12 AM"
          eyebrow="The morning after"
          title="Your team shows up to calm."
          body="Every call is summarized, categorized, and waiting. Appointments are on the calendar. Prescriptions are queued. Nothing slipped through the night."
          frame={<Dashboard />}
        />
      </div>
    </section>
  );
}

Object.assign(window, { Story });

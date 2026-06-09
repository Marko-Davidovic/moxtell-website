// Animated dashboard card for the "One of One" section
function OneOfOneDashboard() {
  const transcripts = useMemo(() => ([
    { q: "Hi, my dog Max hasn't eaten in two days", chips: [["urgent","🔴 Urgent triage"], ["green","✓ Appt offered"]] },
    { q: "I need to reschedule Bella's appointment for next week", chips: [["blue","📅 Reschedule"], ["green","✓ Slot found"]] },
    { q: "Can I get a refill on Buddy's heart medication?", chips: [["amber","💊 Rx refill"], ["green","✓ Queued"]] },
    { q: "Hola, quisiera una cita para mi gato Luna", chips: [["blue","🌎 Spanish"], ["green","✓ Booked"]] },
    { q: "It's 9PM — does anyone do dental cleanings?", chips: [["amber","🌙 After hours"], ["green","✓ Scheduled"]] },
  ]), []);

  const callPool = useMemo(() => ([
    { who: "Maria L.", pet: "Coco · Poodle", sub: "Annual checkup", status: "booked", label: "Booked" },
    { who: "Tom P.", pet: "Buddy · Beagle", sub: "Follow-up", status: "scheduled", label: "Scheduled" },
    { who: "Sophie R.", pet: "Whiskey · Cat", sub: "Vaccine refill", status: "booked", label: "Booked" },
    { who: "David K.", pet: "Rex · Shepherd", sub: "Emergency", status: "urgent", label: "Urgent" },
    { who: "Elena M.", pet: "Milo · Tabby", sub: "Dental cleaning", status: "scheduled", label: "Scheduled" },
    { who: "Jordan T.", pet: "Nova · Husky", sub: "Limping 2 days", status: "urgent", label: "Urgent" },
    { who: "Priya R.", pet: "Biscuit · Rabbit", sub: "First visit", status: "booked", label: "Booked" },
    { who: "Chris A.", pet: "Luna · Frenchie", sub: "Vomiting", status: "urgent", label: "Urgent" },
  ]), []);

  // typewriter
  const [tIdx, setTIdx] = useState(0);
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let cancel = false;
    const phrase = transcripts[tIdx].q;
    setTyped("");
    let i = 0;
    const tick = () => {
      if (cancel) return;
      if (i <= phrase.length) {
        setTyped(phrase.slice(0, i));
        i++;
        setTimeout(tick, 32);
      } else {
        setTimeout(() => { if (!cancel) setTIdx((v) => (v + 1) % transcripts.length); }, 2400);
      }
    };
    tick();
    return () => { cancel = true; };
  }, [tIdx, transcripts]);

  // rotating recent calls
  const [rows, setRows] = useState(() => callPool.slice(0, 4));
  const cur = useRef(4);
  useEffect(() => {
    const id = setInterval(() => {
      const next = callPool[cur.current % callPool.length];
      cur.current++;
      setRows((p) => [next, ...p.slice(0, 3)]);
    }, 3200);
    return () => clearInterval(id);
  }, [callPool]);

  // counters
  const [vals, setVals] = useState({ calls: 0, after: 0, appts: 0 });
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((ents) => {
      if (ents[0].isIntersecting) {
        const start = performance.now();
        const dur = 1500;
        const tgt = { calls: 47, after: 94, appts: 31 };
        const tick = (now) => {
          const t = Math.min(1, (now - start) / dur);
          const e = 1 - Math.pow(1 - t, 3);
          setVals({ calls: tgt.calls * e, after: tgt.after * e, appts: tgt.appts * e });
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // overnight booked counter
  const [booked, setBooked] = useState(12);
  useEffect(() => {
    const id = setInterval(() => setBooked((b) => b + 1), 5400);
    return () => clearInterval(id);
  }, []);

  const chips = transcripts[tIdx].chips;

  return (
    <div className="ofo-dash-wrap" ref={ref}>
      {/* floating booked toast */}
      <div className="ofo-toast">
        <div className="ofo-toast-ico">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
        </div>
        <div className="ofo-toast-body">
          <strong>+{booked} booked overnight</strong>
          <span>While your team slept 🌙</span>
        </div>
      </div>

      <div className="ofo-dash">
        <div className="ofo-titlebar">
          <span className="ofo-dot r" />
          <span className="ofo-dot y" />
          <span className="ofo-dot g" />
          <div className="ofo-title-text">Moxtell — Live Dashboard</div>
        </div>

        <div className="ofo-body">
          <div className="ofo-stats">
            <div className="ofo-stat blue"><div className="v">{Math.round(vals.calls)}</div><div className="l">Calls Today</div></div>
            <div className="ofo-stat green"><div className="v">{Math.round(vals.after)}%</div><div className="l">After Hours</div></div>
            <div className="ofo-stat purple"><div className="v">{Math.round(vals.appts)}</div><div className="l">Appts Booked</div></div>
          </div>

          <div className="ofo-ai">
            <div className="ofo-ai-head">
              <span className="ofo-ai-mic">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v3"/>
                </svg>
              </span>
              AI TRANSCRIPTION · ACTIVE
              <span className="ofo-bars">
                {[0,1,2,3].map(i => <span key={i} style={{ animationDelay: `${i*0.15}s`, height: `${40 + (i*17)%60}%` }} />)}
              </span>
            </div>
            <div className="ofo-ai-quote">"{typed}<span className="ofo-caret">|</span>"</div>
            <div className="ofo-chips">
              {chips.map(([c, label], i) => (
                <span key={`${tIdx}-${i}`} className={`ofo-chip ${c}`}>{label}</span>
              ))}
            </div>
          </div>

          <div className="ofo-calls-head">RECENT CALLS</div>
          <div className="ofo-calls">
            {rows.map((c, i) => (
              <div key={`${c.who}-${c.pet}-${i}`} className="ofo-call">
                <div className="ofo-call-ico">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="ofo-call-info">
                  <div className="ofo-call-who">{c.who} · {c.pet}</div>
                  <div className="ofo-call-sub">{c.sub}</div>
                </div>
                <div className={`ofo-call-status ${c.status}`}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* dog pill — positioned outside the card so it doesn't overlap */}
      <div className="ofo-pill">
        <span className="ofo-pill-check">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22a06b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M8 12.5l3 3 5-6"/>
          </svg>
        </span>
        <span className="ofo-pill-text">All calls handled today</span>
        <span className="ofo-pill-dog" aria-hidden="true">🐕</span>
      </div>
    </div>
  );
}

function OneOfOne() {
  const ref = useReveal();
  const [openIdx, setOpenIdx] = useState(null);
  const items = [
    { letter: "A", tag: "Bespoke", emoji: "🛠️", title: "Each voice agent is built from scratch.", body: "We engineer her prompt, her workflows, her integrations, and her guardrails for one clinic. Your hours. Your doctors. Your services. Your refill policy. Your emergency rules." },
    { letter: "B", tag: "Your voice", emoji: "🎙️", title: "She sounds like your team.", body: "Agent speaks the way your clinic speaks. We tune her tone, pacing, and language to match how your front desk actually talks to clients friendly, calm, professional. Bilingual where you need her to be." },
    { letter: "C", tag: "Done for you", emoji: "📦", title: "You review. We ship.", body: "No DIY dashboards. No prompt engineering. We build the full agent, integrate your calendar or PIMS, wire the SMS flows, and bring you a finished agent. You listen to her, give notes, we iterate, and we go live." },
    { letter: "D", tag: "Partner", emoji: "🤝", title: "We stay with you after launch.", body: "New doctor joining? Refill policy changed? Adding boarding services? We update your Agent. We watch the calls with you, find friction, and fix it. Direct line to the team that built to help desk ticket queue." },
  ];

  return (
    <section id="oneofone" className="ofo" ref={ref}>
      <div className="ofo-inner">
        <div className="ofo-head">
          <div className="eyebrow reveal">◦ One-of-one</div>
          <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16 }}>
            We don't ship a product.<br/>
            We <span className="serif-italic" style={{ color: "var(--teal)" }}>build your Voice Solution.</span>
          </h2>
          <p className="lede reveal reveal-delay-2" style={{ marginTop: 22, color: "var(--ink-2)", maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
           A voice solution built for your clinic: your data, your voice, your workflows, continuously tuned as you grow.
          </p>
        </div>

        <div className="ofo-split">
          <div className="ofo-split-left reveal reveal-delay-1">
            <OneOfOneDashboard />
          </div>

          <div className="ofo-split-right">
            {items.map((it, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={it.letter}
                  className={`ofo-item reveal reveal-delay-${i % 4}${isOpen ? " ofo-item--open" : ""}`}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <div className="ofo-letter">{it.letter}</div>
                  <div className="ofo-item-body">
                    <div className="ofo-item-tag">{it.emoji} {it.tag}</div>
                    <h3 className="ofo-item-title">
                      {it.title}
                      <span className="ofo-item-chevron" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </span>
                    </h3>
                    <p className="ofo-item-text">{it.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ofo-foot reveal">
          <p>
            An <span className="serif-italic" style={{ color: "var(--teal)" }}>employee</span>, not a vendor.<br/>
            Your clinic's voice intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { OneOfOne });

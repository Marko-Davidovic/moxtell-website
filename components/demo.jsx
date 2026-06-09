// Full-screen demo overlay — black background, sequenced animation
// Triggered by window.startWaveDemo() from CTAs, with the legacy event kept as a fallback.

function DemoWaveBars({ count = 64, intensity = 1 }) {
  const bars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const seed = (Math.sin(i * 9.871) * 43758.5453) % 1;
      const r = Math.abs(seed);
      arr.push({
        h: 24 + r * 76,
        delay: -(r * 2.4).toFixed(2) + "s",
        dur: (1.5 + r * 1.2).toFixed(2) + "s",
      });
    }
    return arr;
  }, [count]);
  return (
    <div className="demo-wave" data-intensity={intensity} aria-hidden="true">
      {bars.map((b, i) => (
        <span key={i} style={{ "--h": b.h + "%", animationDelay: b.delay, animationDuration: b.dur }} />
      ))}
    </div>
  );
}

const REAL_DEMO_AUDIO = "assets/demo/royal-vet-demo-new.mp3";
// Timings (at = start, dur = spoken duration) come from observability traces
// for the actual call recording — agent_speaking / user_speaking spans.
const REAL_DEMO_SCRIPT = [
  { role: "ai",   at: 0,      dur: 4.73,  text: "Thank you for calling Royal Vet Miami Beach, this is Emily. How can I help you and your pet today?" },
  { role: "user", at: 6.20,   dur: 6.69,  text: "Hi, Emily. Hi. My name is Marko. I have a dog, and my dog needs a dental cleaning. Can you help me with that, please?" },
  { role: "ai",   at: 14.94,  dur: 10.18, text: "Of course, Marko. We can help with dental cleanings for your dog. A dental visit lets the doctor check the teeth and gums and recommend the right next step. Were you hoping for today, or is another day better?", chips: [{ id: "request" }] },
  { role: "user", at: 26.55,  dur: 7.54,  text: "Let's do if you have anything available tomorrow at, let's say, 2 PM, around 2 PM." },
  { role: "ai",   at: 36.29,  dur: 1.93,  text: "One moment while I check.", chips: [{ id: "lookup" }] },
  { role: "ai",   at: 40.08,  dur: 13.78, text: "Tomorrow is Saturday, so we're open from 9 AM to 5 PM. I have a couple of options around 2 PM: 1:30 PM, 2:00 PM, and 2:30 PM with Dr. Michael Arencibia. Would you like the 2:00 PM slot?", chips: [{ id: "booking" }, { id: "booking2" }] },
  { role: "user", at: 56.15,  dur: 1.14,  text: "Yeah. Let's do it, 2 PM." },
  { role: "ai",   at: 59.08,  dur: 5.20,  text: "Great, I can reserve that. I'll make a quick profile for your dog so I can book the spot. Is that okay?", chips: [{ id: "contact" }] },
  { role: "user", at: 65.55,  dur: 0.29,  text: "Yes." },
  { role: "ai",   at: 67.93,  dur: 1.93,  text: "May I have your last name, please?" },
  { role: "user", at: 71.70,  dur: 0.24,  text: "Smith." },
  { role: "ai",   at: 73.92,  dur: 2.26,  text: "Thank you. And what is your dog's name?" },
  { role: "user", at: 77.85,  dur: 0.49,  text: "Mona." },
  { role: "ai",   at: 79.96,  dur: 1.12,  text: "What breed is Mona?" },
  { role: "user", at: 82.65,  dur: 0.74,  text: "Pomeranian.", chips: [{ id: "patient" }] },
  { role: "ai",   at: 85.04,  dur: 2.01,  text: "Is Mona taking any medications?" },
  { role: "user", at: 88.40,  dur: 0.24,  text: "No." },
  { role: "ai",   at: 90.04,  dur: 0.64,  text: "Great." },
  { role: "ai",   at: 90.77,  dur: 2.60,  text: "Perfect, one moment while I reserve that.", chips: [{ id: "action2" }] },
  { role: "ai",   at: 95.11,  dur: 8.02,  text: "Mona is all set for tomorrow at 2 PM with Dr. Michael Arencibia for a dental cleaning. You'll get a text confirmation shortly. Can I help you with anything else today?", chips: [{ id: "confirm" }, { id: "action1" }] },
  { role: "user", at: 104.50, dur: 2.33,  text: "No. That's it. Thank you so much." },
  { role: "ai",   at: 108.62, dur: 4.64,  text: "You're very welcome, Marko. Have a wonderful day, and we'll see you and Mona tomorrow!" },
  { role: "user", at: 115.25, dur: 0.19,  text: "Bye." },
];

function dispatchDemoStart() {
  try {
    const evt = typeof Event === "function"
      ? new Event("pawline:start-demo")
      : document.createEvent("Event");
    if (evt.initEvent) evt.initEvent("pawline:start-demo", true, true);
    window.dispatchEvent(evt);
  } catch (e) {}
}

if (typeof window !== "undefined") {
  window.startWaveDemo = dispatchDemoStart;
}

const CHIP_DEFS = {
  request:   { icon: "tooth",     label: "Request Type:",     v1: "Dental Cleaning", v2: "New Patient" },
  lookup:    { icon: "bolt",      label: "Action:",           v1: "Checking Availability", one: true },
  booking:   { icon: "calendar",  label: "Booking Time:",     v1: "Tomorrow",         v2: "2:00 PM" },
  booking2:  { icon: "calendar",  label: "Doctor:",           v1: "Dr. Michael Arencibia", v2: "Dental" },
  insurance: { icon: "plus",      label: "Pet Insurance:",    v1: "Trupanion",        v2: "Not Accepted" },
  offer:     { icon: "tag",       label: "Special Offer:",    v1: "Dental Special",   v2: "$89.00" },
  patient:   { icon: "paw",       label: "Patient Info:",     v1: "Mona",             v2: "Pomeranian" },
  contact:   { icon: "phone",     label: "Caller:",           v1: "Marko Smith",  v2: "New Client" },
  confirm:   { icon: "check",     label: "Appt. Confirmation:", v1: "Booked",         v2: "SMS Sent" },
  action1:   { icon: "bolt",      label: "Action:",           v1: "Sent SMS to Owner",  one: true },
  action2:   { icon: "bolt",      label: "Action:",           v1: "Updated Practice Schedule", one: true },
  action3:   { icon: "bolt",      label: "Action:",           v1: "Emailed Practice of Booking", one: true },
  parking:   { icon: "tag",       label: "Clinic Info:",      v1: "Parking",          v2: "Answered" },
  handoff:   { icon: "phone",     label: "Escalation:",       v1: "Staff Transfer Offered", one: true },
};

function ChipIcon({ name }) {
  const sw = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const fl = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "#fff" };
  switch (name) {
    case "tooth":    return (<svg {...sw}><path d="M7 3c-2 0-3 1.4-3 3.5 0 2 .8 3 1.4 5.5.6 2.4.5 6 1.7 8 .9 1.4 2.4 1 2.7-1 .3-2 .4-4 1.2-4s.9 2 1.2 4c.3 2 1.8 2.4 2.7 1 1.2-2 1.1-5.6 1.7-8C17.2 9.5 18 8.5 18 6.5 18 4.4 17 3 15 3c-1.5 0-2.4 1-3 1s-1.5-1-3-1z"/></svg>);
    case "calendar":return (<svg {...sw}><rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 10.5h18"/></svg>);
    case "plus":    return (<svg {...fl}><path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z"/></svg>);
    case "tag":     return (<svg {...sw}><path d="M20 12V4h-8L3 13l8 8 9-9z"/><circle cx="15" cy="9" r="1.4" fill="#fff"/></svg>);
    case "paw":     return (<svg {...fl}><circle cx="6" cy="9" r="2"/><circle cx="10.5" cy="6" r="2"/><circle cx="13.5" cy="6" r="2"/><circle cx="18" cy="9" r="2"/><path d="M12 11c-3 0-6 2.5-6 5.5 0 1.7 1.3 2.5 2.7 2.5 1.2 0 1.8-.5 3.3-.5s2.1.5 3.3.5c1.4 0 2.7-.8 2.7-2.5 0-3-3-5.5-6-5.5z"/></svg>);
    case "phone":   return (<svg {...sw}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
    case "check":   return (<svg {...sw}><path d="M5 12.5l5 5 9-11"/></svg>);
    case "bolt":    return (<svg {...fl}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>);
    default: return null;
  }
}

function Chip({ defKey }) {
  const d = CHIP_DEFS[defKey];
  if (!d) return null;
  return (
    <div className="dchip">
      <span className="dchip-ico"><ChipIcon name={d.icon} /></span>
      <span className="dchip-body">
        <span className="dchip-label">{d.label}</span>
        {d.one ? (
          <span className="dchip-val">{d.v1}</span>
        ) : (
          <span className="dchip-vals">
            <span className="dchip-v1">{d.v1}</span>
            <span className="dchip-sep">|</span>
            <span className="dchip-v2">{d.v2}</span>
          </span>
        )}
      </span>
    </div>
  );
}

function speak(text, voiceMatch = /Samantha|Karen|Google US English|Female|Allison/i, opts = {}) {
  try {
    if (!("speechSynthesis" in window)) return null;
    const u = new SpeechSynthesisUtterance(text);
    u.pitch = opts.pitch ?? 1.05;
    u.rate = opts.rate ?? 1.02;
    u.volume = opts.volume ?? 0.95;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find((v) => voiceMatch.test(v.name)) || voices[0];
    if (preferred) u.voice = preferred;
    window.speechSynthesis.speak(u);
    return u;
  } catch (e) { return null; }
}

function Demo() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState("idle");
  // phases: idle | starting | busy | pickup | call | done
  const [lineIdx, setLineIdx] = useState(-1);
  const [wordCount, setWordCount] = useState(0);
  const [activeChips, setActiveChips] = useState([]);
  const timersRef = useRef([]);
  const transcriptRafRef = useRef(null);
  const transcriptStartRef = useRef(0);
  const audioRef = useRef(null);

  const clearAll = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    if (transcriptRafRef.current) {
      cancelAnimationFrame(transcriptRafRef.current);
      transcriptRafRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.muted = false;
    }
    try { window.speechSynthesis?.cancel(); } catch (e) {}
  };
  const schedule = (fn, t) => { const id = setTimeout(fn, t); timersRef.current.push(id); };

  const lineWords = (idx) => {
    const line = REAL_DEMO_SCRIPT[idx];
    if (!line) return [];
    return line.text.match(/\S+/g) || [];
  };
  const lineDuration = (idx) => {
    const line = REAL_DEMO_SCRIPT[idx];
    if (!line) return 0;
    // Prefer the real spoken duration from traces. Falls back to gap-to-next
    // for safety, or word-count estimate for the last line.
    if (typeof line.dur === "number" && line.dur > 0) return line.dur;
    const next = REAL_DEMO_SCRIPT[idx + 1];
    if (next) return Math.max(0.4, next.at - line.at);
    return Math.max(2, lineWords(idx).length * 0.3);
  };

  const updateTranscriptAt = (t) => {
    let nextIdx = -1;
    for (let i = 0; i < REAL_DEMO_SCRIPT.length; i++) {
      if (REAL_DEMO_SCRIPT[i].at <= t) nextIdx = i;
      else break;
    }
    setLineIdx((prev) => (prev === nextIdx ? prev : nextIdx));
    if (nextIdx >= 0) {
      const line = REAL_DEMO_SCRIPT[nextIdx];
      const words = lineWords(nextIdx);
      const dur = lineDuration(nextIdx);
      const progress = Math.max(0, Math.min(1, (t - line.at) / dur));
      const wc = Math.min(words.length, Math.ceil(progress * words.length));
      setWordCount((prev) => (prev === wc ? prev : wc));
    } else {
      setWordCount((prev) => (prev === 0 ? prev : 0));
    }
    return nextIdx;
  };
  const startTranscriptClock = () => {
    if (transcriptRafRef.current) cancelAnimationFrame(transcriptRafRef.current);
    transcriptStartRef.current = performance.now();
    const lastLineAt = REAL_DEMO_SCRIPT[REAL_DEMO_SCRIPT.length - 1].at;
    const tick = () => {
      const audio = audioRef.current;
      const t = audio && !audio.paused
        ? audio.currentTime
        : (performance.now() - transcriptStartRef.current) / 1000;
      updateTranscriptAt(t);
      if (t >= lastLineAt + 5) {
        setPhase("done");
        transcriptRafRef.current = null;
        return;
      }
      transcriptRafRef.current = requestAnimationFrame(tick);
    };
    transcriptRafRef.current = requestAnimationFrame(tick);
  };

  // --- Lifecycle: listen for the start event ---
  useEffect(() => {
    const onStart = () => { setOpen(true); start(); };
    window.addEventListener("pawline:start-demo", onStart);
    return () => window.removeEventListener("pawline:start-demo", onStart);
    // eslint-disable-next-line
  }, []);
  useEffect(() => () => clearAll(), []);

  const close = () => {
    clearAll();
    setOpen(false);
    setPhase("idle");
    setLineIdx(-1);
    setWordCount(0);
    setActiveChips([]);
  };

  const start = () => {
    clearAll();
    setLineIdx(-1);
    setWordCount(0);
    setActiveChips([]);

    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.muted = true;
      audio.play()
        .catch(() => {
          audio.muted = false;
        });
    }

    setPhase("starting");
    schedule(() => setPhase("busy"),    4200);
    schedule(() => setPhase("pickup"),  11400);
    schedule(() => {
      setPhase("call");
      runCall();
    }, 15600);
  };

  useEffect(() => {
    window.startWaveDemo = () => {
      setOpen(true);
      start();
    };
    return () => {
      window.startWaveDemo = dispatchDemoStart;
    };
  });

  const runCall = () => {
    const audio = audioRef.current;
    setLineIdx(-1);
    setWordCount(0);
    setActiveChips([]);
    updateTranscriptAt(0);
    startTranscriptClock();
    if (!audio) return;
    audio.currentTime = 0;
    audio.muted = false;
    if (audio.paused) {
      audio.play().catch(() => {
        startTranscriptClock();
      });
    }
  };

  const syncTranscript = () => {
    const audio = audioRef.current;
    if (!audio) return;
    updateTranscriptAt(audio.currentTime);
  };

  useEffect(() => {
    if (lineIdx < 0) return;
    const line = REAL_DEMO_SCRIPT[lineIdx];
    if (!line?.chips?.length) return;
    setActiveChips((prev) => {
      const next = [...prev];
      line.chips.forEach((c) => { if (!next.includes(c.id)) next.push(c.id); });
      return next; // keep all action chips visible for the rest of the demo
    });
  }, [lineIdx]);

  if (!open) {
    return (
      <section
        id="demo"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <audio ref={audioRef} src={REAL_DEMO_AUDIO} preload="auto" />
      </section>
    );
  }

  // show the most recent 4 lines as transcript stack
  const recent = lineIdx >= 0 ? REAL_DEMO_SCRIPT.slice(Math.max(0, lineIdx - 3), lineIdx + 1) : [];

  return (
    <section id="demo" className="demo-overlay" role="dialog" aria-modal="true">
      <audio
        ref={audioRef}
        src={REAL_DEMO_AUDIO}
        preload="auto"
        onTimeUpdate={syncTranscript}
        onEnded={() => {
          if (transcriptRafRef.current) cancelAnimationFrame(transcriptRafRef.current);
          transcriptRafRef.current = null;
          setPhase("done");
        }}
      />
      {/* Top nav inside demo — mirrors the main Nav component */}
      <div className="demo-topnav">
        <a href="index.html" className="demo-logo">
          <img className="demo-logo-mark" src="assets/wave-voice-ai-sound-bars-blue.svg" alt="" />
          <span>Moxtell</span>
        </a>
        <div className="demo-nav-links">
          <a href="Product.html">How It Works</a>
          <a href="About.html">About</a>
          <a href="FAQ.html">FAQ</a>
        </div>
        <div className="demo-nav-actions">
          <a className="demo-nav-login" href="Login.html">Login</a>
          <a className="demo-bookbtn" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book Demo</a>
        </div>
      </div>

      {/* Phase: starting */}
      {phase === "starting" && (
        <div className="demo-stage center fade-in">
          <div className="demo-bigtext">Starting real call demo…</div>
          <div className="demo-subtext">
            First, imagine the front desk is busy.<br />Then Moxtell answers the call.
          </div>
          <div className="demo-fineprint">Turn your volume on. Transcript will follow the audio.</div>
        </div>
      )}

      {/* Phase: busy */}
      {phase === "busy" && (
        <div className="demo-stage center fade-in">
          <div className="busy-orb">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7l10 10M17 9V7h-2M7 15v2h2"/>
            </svg>
          </div>
          <div className="demo-bigtext" style={{ marginTop: 36 }}>
            Front desk is busy.<br />The phone still gets answered.
          </div>
          <div className="demo-subtext">
            The receptionist is tied up with a walk-in client.<br />
            The phone keeps ringing — and another caller waits.
          </div>
        </div>
      )}

      {/* Phase: pickup */}
      {phase === "pickup" && (
        <div className="demo-stage center fade-in">
          <div className="pickup-mark">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
              <circle cx="6" cy="9" r="2"/><circle cx="10.5" cy="6" r="2"/>
              <circle cx="13.5" cy="6" r="2"/><circle cx="18" cy="9" r="2"/>
              <path d="M12 11c-3 0-6 2.5-6 5.5 0 1.7 1.3 2.5 2.7 2.5 1.2 0 1.8-.5 3.3-.5s2.1.5 3.3.5c1.4 0 2.7-.8 2.7-2.5 0-3-3-5.5-6-5.5z"/>
            </svg>
          </div>
          <div className="demo-bigtext" style={{ marginTop: 40 }}>
            Moxtell picks up!<br />and handles the call 24/7 for you.
          </div>
        </div>
      )}

      {/* Phase: call */}
      {phase === "call" && (
        <div className="demo-stage call-stage">
          <DemoWaveBars count={56} />
          <div className="demo-chips">
            {activeChips.map((id) => (
              <div key={id} className="dchip-wrap">
                <Chip defKey={id} />
              </div>
            ))}
          </div>
          <div className="demo-transcript-arini">
            {recent.map((l, i) => {
              const realIdx = lineIdx - recent.length + 1 + i;
              const isCurrent = realIdx === lineIdx;
              const words = l.text.match(/\S+/g) || [];
              const shown = isCurrent ? words.slice(0, wordCount).join(" ") : l.text;
              return (
                <div
                  key={realIdx}
                  className={`tr-line ${l.role} ${isCurrent ? "current" : "past"}`}
                >
                  <span className="tr-speaker">{l.role === "ai" ? "Emily" : "Caller"}</span>
                  {shown}
                  {isCurrent && wordCount < words.length && <span className="tr-caret">▍</span>}
                </div>
              );
            })}
          </div>
          <button className="skip-btn" onClick={close}>
            <span className="skip-ico">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M9 9l6 6M15 9l-6 6"/>
              </svg>
            </span>
            Skip Demo
          </button>
        </div>
      )}

      {/* Phase: done */}
      {phase === "done" && (
        <div className="demo-stage call-stage">
          <DemoWaveBars count={56} />
          <div className="demo-stage-center fade-in">
            <div className="demo-bigtext" style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}>
              One call handled.<br />Appointment booked.
            </div>
            <button className="demo-bookbtn-big" onClick={close}>Close Demo</button>
            <div className="scroll-hint">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <span>Scroll to learn more about Moxtell…</span>
            </div>
          </div>
          <button className="skip-btn replay" onClick={start}>
            <span className="skip-ico">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </span>
            Replay Demo?
          </button>
        </div>
      )}
    </section>
  );
}

Object.assign(window, { Demo });

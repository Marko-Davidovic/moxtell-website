function MiniWave({ count = 20, dark }) {
  return (
    <div className="mini-wave">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ animationDelay: `${(i * 90) % 1400}ms`, height: `${20 + (i * 13) % 80}%` }} />
      ))}
    </div>
  );
}

function CalendarMini() {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const booked = new Set([2, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27]);
  const today = 15;
  return (
    <div className="calendar-mini">
      {days.map((d) => (
        <div key={d} className={`day ${d === today ? "today" : booked.has(d) ? "booked" : ""}`}>
          {d}
        </div>
      ))}
    </div>
  );
}

function GlobeViz() {
  const pts = [
    { x: 20, y: 35, d: 0 },
    { x: 38, y: 55, d: 0.5 },
    { x: 60, y: 28, d: 1 },
    { x: 72, y: 58, d: 1.5 },
    { x: 50, y: 72, d: 2 },
    { x: 86, y: 40, d: 2.5 },
  ];
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .12 }}>
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10 0H0V10" stroke="currentColor" strokeWidth="0.3" fill="none" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
        <ellipse cx="50" cy="50" rx="45" ry="20" stroke="currentColor" strokeWidth="0.3" fill="none" />
        <ellipse cx="50" cy="50" rx="45" ry="35" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>
      {pts.map((p, i) => (
        <div key={i} className="globe-dot" style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${p.d}s` }} />
      ))}
    </div>
  );
}

function Features() {
  const ref = useReveal();
  return (
    <section id="features" className="features wrap" ref={ref}>
      <div className="features-head">
        <div>
          <div className="eyebrow reveal">Built for the way clinics actually work</div>
          <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16, maxWidth: 720 }}>
            Six things your<br/>front desk will love.
          </h2>
        </div>
        <p className="lede reveal reveal-delay-2" style={{ maxWidth: 380, color: "var(--muted)" }}>
          Not a chatbot. Not an IVR tree. A voice that sounds like someone who cares, wired to your PMS.
        </p>
      </div>

      <div className="bento">
        <div className="cell span-3 row-2 dark reveal">
          <div>
            <div className="cell-tag">◦ Real voice</div>
            <div className="cell-title" style={{ fontSize: 34, marginTop: 16, maxWidth: 340 }}>
              Sounds human. <span className="serif-italic" style={{ color: "var(--accent)" }}>Actually.</span>
            </div>
            <div className="cell-sub" style={{ marginTop: 12, maxWidth: 320 }}>
              Sub-400ms latency, interruptible, with tone that matches your clinic — warm, professional, bilingual if you want.
            </div>
          </div>
          <MiniWave count={40} />
        </div>

        <div className="cell span-3 accent reveal reveal-delay-1">
          <div>
            <div className="cell-tag">◦ Booking</div>
            <div className="cell-title">Books directly into your calendar.</div>
            <div className="cell-sub" style={{ color: "rgba(255,255,255,0.8)", marginTop: 8 }}>
              Native integrations with ezyVet, Cornerstone, Avimark, and ten more. No copy-paste.
            </div>
          </div>
          <CalendarMini />
        </div>

        <div className="cell span-3 reveal reveal-delay-2">
          <div>
            <div className="cell-tag">◦ Triage</div>
            <div className="cell-title">Knows an emergency when it hears one.</div>
            <div className="cell-sub" style={{ marginTop: 8 }}>
              Protocol-driven escalation. Chocolate toxicity, GDV, blocked cat — paged to whoever is on-call.
            </div>
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 20 }}>
            {["URGENT", "SOON", "ROUTINE", "FAQ"].map((t, i) => (
              <span key={t} style={{
                fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".1em",
                padding: "6px 10px", borderRadius: 999,
                background: i === 0 ? "var(--ink)" : "var(--bg-2)",
                color: i === 0 ? "var(--bg)" : "var(--muted)"
              }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="cell span-2 reveal">
          <div>
            <div className="cell-tag">◦ Languages</div>
            <div className="cell-title" style={{ fontSize: 20 }}>11 languages, one line.</div>
          </div>
          <div style={{ position: "relative", height: 100, marginTop: 8, color: "var(--ink)" }}>
            <GlobeViz />
          </div>
        </div>

        <div className="cell span-2 reveal reveal-delay-1">
          <div>
            <div className="cell-tag">◦ Summaries</div>
            <div className="cell-title" style={{ fontSize: 20 }}>Every call, summarized.</div>
          </div>
          <div style={{ marginTop: 12, fontSize: 13, color: "var(--ink-2)", background: "var(--bg-2)", padding: 12, borderRadius: 10, fontFamily: "var(--f-mono)" }}>
            Mrs. K · golden · limping 2d<br/>
            → booked Tue 10:30<br/>
            → note: check left hip
          </div>
        </div>

        <div className="cell span-2 reveal reveal-delay-2">
          <div>
            <div className="cell-tag">◦ Compliance</div>
            <div className="cell-title" style={{ fontSize: 20 }}>HIPAA-grade. SOC 2 Type II.</div>
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
            {["HIPAA", "SOC 2", "GDPR"].map((t) => (
              <span key={t} style={{
                fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".1em",
                padding: "6px 10px", borderRadius: 6,
                border: "1px solid var(--line)", color: "var(--muted)"
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Features });

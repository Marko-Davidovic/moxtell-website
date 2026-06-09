// Animated background waveform — vertical bars in blue, breathing
function HeroWave({ count = 64 }) {
  const bars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const s1 = Math.abs((Math.sin(i * 12.9898 + 0.5) * 43758.5453) % 1);
      const s2 = Math.abs((Math.sin(i * 78.233  + 1.3) * 43758.5453) % 1);
      const s3 = Math.abs((Math.sin(i * 3.1415  + 2.7) * 43758.5453) % 1);
      const base = s1 * 0.55 + s2 * 0.30 + s3 * 0.15;
      arr.push({
        h: 4 + base * 88,
        delay: -((s1 * 1.6).toFixed(2)) + "s",
        dur:  (0.5 + s2 * 1.2).toFixed(2) + "s",
      });
    }
    return arr;
  }, [count]);

  return (
    <div className="hero-wave" aria-hidden="true">
      {bars.map((b, i) => (
        <span
          key={i}
          style={{
            "--h": b.h + "%",
            animationDelay: b.delay,
            animationDuration: b.dur,
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reveal on mount (above the fold)
    const id = setTimeout(() => {
      el.querySelectorAll(".reveal").forEach((n) => n.classList.add("visible"));
    }, 60);
    return () => clearTimeout(id);
  }, []);

  const goDemo = (e) => {
    e.preventDefault();
    if (window.startWaveDemo) {
      window.startWaveDemo();
    } else {
      window.dispatchEvent(new CustomEvent("pawline:start-demo"));
    }
  };

  return (
    <header className="hero-arini" ref={ref}>
      <HeroWave count={180} />
      <div className="hero-arini-inner">
        <h1 className="hero-arini-title reveal">
          The AI Front Desk<br/>
          <span className="muted-fragment">for Veterinary Clinics.</span><br/>
          <span>Zero missed calls, 24/7.</span>
        </h1>

        <div className="hero-arini-cta reveal reveal-delay-2">
          <div className="hero-hear-wrap">
            <div className="hero-cta-hint" aria-hidden="true">
              <span>click to listen</span>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" style={{display:"block", overflow:"visible"}}>
                <path d="M6 6 C14 10 28 20 36 34" stroke="#6B7280" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                <path d="M36 34 L27 32" stroke="#6B7280" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                <path d="M36 34 L34 25" stroke="#6B7280" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <button className="see-action-btn" onClick={goDemo} aria-label="Hear demo">
              <span className="see-action-play">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="see-action-label">Hear Demo</span>
            </button>
          </div>
          <a className="hero-book-btn" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" aria-label="Book demo">
            Book Demo
          </a>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Hero });

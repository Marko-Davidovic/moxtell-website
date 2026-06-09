function AnimatedNum({ target, suffix = "", duration = 1400, decimals = 0 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(target * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{decimals ? val.toFixed(decimals) : Math.round(val)}{suffix}</span>;
}

function Metrics() {
  const ref = useReveal();
  return (
    <section className="metrics wrap" ref={ref}>
      <div className="reveal">
        <div className="eyebrow">◦ By the numbers</div>
        <h2 className="h-lg" style={{ marginTop: 16, maxWidth: 720 }}>
          Clinics on Moxtell answer more calls,<br/>book more visits, and close on time.
        </h2>
      </div>
      <div className="metrics-grid" style={{ marginTop: 56 }}>
        <div className="metric reveal">
          <div className="num"><AnimatedNum target={100} />%<sup>†</sup></div>
          <div className="label">of calls answered, 24/7, with no voicemail.</div>
        </div>
        <div className="metric reveal reveal-delay-1">
          <div className="num"><AnimatedNum target={38} />%</div>
          <div className="label">more appointments booked after hours.</div>
        </div>
        <div className="metric reveal reveal-delay-2">
          <div className="num"><AnimatedNum target={11} /></div>
          <div className="label">languages, spoken natively — from Tagalog to Tamil.</div>
        </div>
        <div className="metric reveal reveal-delay-3">
          <div className="num"><AnimatedNum target={48} />h</div>
          <div className="label">from signature to live on your main line.</div>
        </div>
      </div>
      <div style={{ marginTop: 24, color: "var(--muted)", fontSize: 12, fontFamily: "var(--f-mono)" }}>
        † Averaged across 420 active clinics, Q1 2026.
      </div>
    </section>
  );
}

Object.assign(window, { Metrics });

function CTA() {
  const ref = useReveal();
  return (
    <section id="book" className="big-cta" ref={ref}>
      <div className="cta-photo" aria-hidden="true" />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="eyebrow reveal" style={{ marginBottom: 28 }}>◦ Final word</div>
        <h2 className="h-display reveal reveal-delay-1">
          Give your front desk<br/><em>breathing room</em>.
        </h2>
        <p className="lede reveal reveal-delay-2" style={{ maxWidth: 720, margin: "28px auto 0" }}>
          Let Emily answer the next call, book the next appointment, and keep your team focused on care.
        </p>
        <div className="big-cta-actions reveal reveal-delay-3">
          <a
            href="#"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              if (window.startWaveDemo) {
                window.startWaveDemo();
              } else {
                window.dispatchEvent(new CustomEvent("pawline:start-demo"));
              }
            }}
          >
            Hear the demo <Icon name="arrow-right" />
          </a>
          <a href="#" className="btn btn-ghost">Book a clinic walkthrough</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CTA });

const PIMS_LIST = [
  { name: "Avimark",     vendor: "Covetrus", color: "#2D7D46" },
  { name: "Cornerstone", vendor: "IDEXX",    color: "#0071E3" },
  { name: "ezyVet",      vendor: "IDEXX",    color: "#0071E3" },
  { name: "Pulse",       vendor: "Covetrus", color: "#2D7D46" },
  { name: "Shepherd",    vendor: "Cloud",    color: "#7C3AED" },
  { name: "Neo",         vendor: "IDEXX",    color: "#0071E3" },
  { name: "DaySmart",    vendor: "Cloud",    color: "#D97706" },
  { name: "Vetspire",    vendor: "Cloud",    color: "#0891B2" },
  { name: "Impromed",    vendor: "Covetrus", color: "#2D7D46" },
];

function PimsTile({ name }) {
  return (
    <div className="pims-ticker-tile">
      <span className="pims-ticker-name">{name}</span>
    </div>
  );
}

function Pims() {
  const ref = useReveal();
  const doubled = [...PIMS_LIST, ...PIMS_LIST];
  return (
    <section className="pims-home" id="integrations" ref={ref}>
      <div className="pims-home-head reveal wrap">
        <div className="eyebrow">◦ Integrations</div>
        <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16 }}>
          Works with the PIMS<br/>
          <span className="serif-italic" style={{ color: "var(--teal)" }}>your clinic already uses.</span>
        </h2>
        <p className="lede reveal reveal-delay-2" style={{ marginTop: 16, color: "var(--ink-2)", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          Emily connects to the systems used by 79% of North American veterinary clinics.<br/>
          We work with your PIMS system already!
        </p>
      </div>

      <div className="pims-ticker-outer reveal reveal-delay-1">
        <div className="pims-ticker-track">
          {doubled.map((p, i) => (
            <PimsTile key={p.name + i} {...p} />
          ))}
        </div>
      </div>

      <p className="pims-home-note reveal wrap">
        Source: Kynetec PRJ17655, n=1,155 — North American PIMS market share, April 2026<br/>
        <a href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
          Don't see yours? Ask us →
        </a>
      </p>
    </section>
  );
}

Object.assign(window, { Pims });

const PIMS_LIST = [
  { name: "Avimark",     vendor: "Covetrus", color: "#2D7D46", share: "25.4%" },
  { name: "Cornerstone", vendor: "IDEXX",    color: "#0071E3", share: "19.5%" },
  { name: "ezyVet",      vendor: "IDEXX",    color: "#0071E3", share: "16.5%" },
  { name: "Pulse",       vendor: "Covetrus", color: "#2D7D46", share: "7.4%"  },
  { name: "Shepherd",    vendor: "Cloud",    color: "#7C3AED", share: "4.2%"  },
  { name: "Neo",         vendor: "IDEXX",    color: "#0071E3", share: "4.0%"  },
  { name: "DaySmart",    vendor: "Cloud",    color: "#D97706", share: "4.0%"  },
  { name: "Vetspire",    vendor: "Cloud",    color: "#0891B2", share: "3.2%"  },
  { name: "Impromed",    vendor: "Covetrus", color: "#2D7D46", share: "5.8%"  },
];

function PimsLogo({ name, vendor, color }) {
  const initials = name.slice(0, 2).toUpperCase();
  return (
    <div className="pims-logo-tile">
      <div className="pims-logo-mark" style={{ background: color + "14", color }}>
        {initials}
      </div>
      <div className="pims-logo-name">{name}</div>
      <div className="pims-logo-vendor" style={{ color }}>{vendor}</div>
    </div>
  );
}

function Pims() {
  const ref = useReveal();
  return (
    <section className="pims-home wrap" ref={ref}>
      <div className="pims-home-head reveal">
        <div className="eyebrow">◦ Integrations</div>
        <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16 }}>
          Works with the PIMS<br/>
          <span className="serif-italic" style={{ color: "var(--teal)" }}>your clinic already uses.</span>
        </h2>
        <p className="lede reveal reveal-delay-2" style={{ marginTop: 16, color: "var(--ink-2)", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          Emily connects to the systems used by 79% of North American veterinary clinics — no rip-and-replace required.
        </p>
      </div>

      <div className="pims-logo-grid reveal reveal-delay-1">
        {PIMS_LIST.map(p => (
          <PimsLogo key={p.name} {...p} />
        ))}
      </div>

      <p className="pims-home-note reveal">
        Source: Kynetec PRJ17655, n=1,155 — North American PIMS market share, April 2026. &nbsp;
        <a href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
          Don't see yours? Ask us →
        </a>
      </p>
    </section>
  );
}

Object.assign(window, { Pims });

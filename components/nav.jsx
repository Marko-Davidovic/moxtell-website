function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "Product.html", label: "How It Works" },
    { href: "About.html",   label: "About" },
    { href: "FAQ.html",     label: "FAQ" },
  ];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="index.html" className="logo">
          <img className="logo-mark" src="assets/wave-voice-ai-sound-bars-blue.svg" alt="" />
          <span>Moxtell</span>
        </a>

        <div className="nav-links" role="menubar">
          {links.map(l => (
            <a key={l.href} className="nav-link" href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="nav-link nav-login-action" href="Login.html">Login</a>
          <a className="btn btn-primary" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
            style={{ padding: "9px 18px", fontSize: 13.5, whiteSpace: "nowrap" }}>
            Book Demo
          </a>
          <button
            className={`nav-hamburger${open ? " nav-hamburger--open" : ""}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile-menu" role="menu">
          {links.map(l => (
            <a key={l.href} className="nav-mobile-link" href={l.href}
              onClick={() => setOpen(false)} role="menuitem">
              {l.label}
            </a>
          ))}
          <div className="nav-mobile-divider" />
          <a className="nav-mobile-link" href="Login.html"
            onClick={() => setOpen(false)}>Login</a>
          <a className="btn btn-primary nav-mobile-cta" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)}>Book Demo</a>
        </div>
      )}
    </nav>
  );
}
Object.assign(window, { Nav });

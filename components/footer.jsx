function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="index.html" className="logo" style={{ color: "#fff" }}>
              <img className="logo-mark" src="assets/wave-voice-ai-sound-bars-blue.svg" alt="" />
              <span>Moxtell</span>
            </a>
            <p>The vet clinic's voice, always on. Built by a team of veterinarians, voice engineers, and one very patient golden retriever named Otis.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="veterinary-ai-phone-assistant.html">Voice Agent</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Clinics</h4>
            <ul>
              <li><a href="clinics-gp.html">For GP clinics</a></li>
              <li><a href="clinics-emergency.html">For emergency</a></li>
              <li><a href="clinics-specialty.html">For specialty</a></li>
              <li><a href="clinics-multi-location.html">For multi-location</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="About.html">About</a></li>
              <li><a href="FAQ.html">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="Privacy.html">Privacy</a></li>
              <li><a href="Terms.html">Terms</a></li>
              <li><a href="Security.html">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="big-mark">Moxtell.</div>
        <div className="footer-bottom">
          <div>© 2026 Moxtell Labs, Inc.</div>
          <div>Made with care in Miami, FL · 🐾</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });

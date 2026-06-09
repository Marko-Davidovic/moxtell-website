function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-panel">
        <a href="index.html" className="login-brand">
          <img className="logo-mark" src="assets/wave-voice-ai-sound-bars-blue.svg" alt="" />
          <span>Moxtell</span>
        </a>

        <div className="login-form-wrap">
          <div className="eyebrow">◦ Client portal</div>
          <h1>Log in to Moxtell.</h1>
          <p>Access your clinic dashboard, call history, appointment activity, and voice assistant settings.</p>

          <form className="login-form">
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@clinic.com" autoComplete="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" placeholder="Enter your password" autoComplete="current-password" />
            </label>
            <button className="btn btn-primary login-submit" type="submit">Log In</button>
          </form>

          <div className="login-divider"><span>or</span></div>

          <button className="google-login" type="button">
            <span className="google-mark" aria-hidden="true">G</span>
            Log in with Google
          </button>
        </div>
      </section>

      <section className="login-visual">
        <div className="login-visual-inner">
          <img src="assets/wave-voice-ai-sound-bars-blue.svg" alt="" />
          <h2>AI voice intelligence for veterinary clinics.</h2>
          <p>Answer more calls, capture appointment requests, and give your front desk breathing room.</p>
          <div className="login-stats" aria-hidden="true">
            <span>24/7 call coverage</span>
            <span>Appointment routing</span>
            <span>Front desk relief</span>
          </div>
        </div>
      </section>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LoginPage />);

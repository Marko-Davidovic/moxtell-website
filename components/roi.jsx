function ROI() {
  const ref = useReveal();
  const [missedDay,   setMissedDay]   = useState("");
  const [afterWeek,   setAfterWeek]   = useState("");
  const [visitValue,  setVisitValue]  = useState("");

  const md  = parseFloat(missedDay)  || 0;
  const aw  = parseFloat(afterWeek)  || 0;
  const vv  = parseFloat(visitValue) || 0;

  const REBOOKING_LOSS = 0.75; // ~75% of missed vet callers don't leave a voicemail and never rebook

  const missedPerMonth    = md * 30;
  const afterPerMonth     = aw * 4.33;
  const totalMissed       = missedPerMonth + afterPerMonth;
  const lostBookings      = Math.round(totalMissed * REBOOKING_LOSS);
  const lostPerMonth      = Math.round(lostBookings * vv);
  const lostPerYear       = lostPerMonth * 12;

  const hasInput = md > 0 || aw > 0 || vv > 0;
  const hasResult = lostPerMonth > 0;

  const fmt = (n) => n.toLocaleString("en-US");

  return (
    <section className="roi" ref={ref}>
      <div className="roi-inner wrap">
        <div className="roi-head reveal">
          <div className="eyebrow">◦ ROI Calculator</div>
          <h2 className="h-xl" style={{ marginTop: 16, fontSize: "clamp(28px, 3.6vw, 52px)" }}>
                How Much Revenue Are Missed Calls Costing Your Clinic?
          </h2>
          <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 17, lineHeight: 1.55, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Fill in what applies to your clinic. We'll show you the revenue impact.
          </p>
        </div>

        <div className="roi-form reveal reveal-delay-1">
          <div className="roi-field">
            <label className="roi-label">
              Missed calls per day
              <span className="roi-hint">Calls that go to voicemail or ring out</span>
            </label>
            <div className="roi-input-wrap">
              <input
                type="number"
                className="roi-input"
                placeholder="e.g. 15"
                min="0"
                value={missedDay}
                onChange={e => setMissedDay(e.target.value)}
              />
              <span className="roi-unit">calls / day</span>
            </div>
          </div>

          <div className="roi-field">
            <label className="roi-label">
              After-hours calls per week
              <span className="roi-hint">Calls your clinic misses after closing</span>
            </label>
            <div className="roi-input-wrap">
              <input
                type="number"
                className="roi-input"
                placeholder="e.g. 8"
                min="0"
                value={afterWeek}
                onChange={e => setAfterWeek(e.target.value)}
              />
              <span className="roi-unit">calls / week</span>
            </div>
          </div>

          <div className="roi-field">
            <label className="roi-label">
              Average visit value
              <span className="roi-hint">Typical revenue per booked appointment</span>
            </label>
            <div className="roi-input-wrap">
              <span className="roi-prefix">$</span>
              <input
                type="number"
                className="roi-input roi-input-dollar"
                placeholder="e.g. 85"
                min="0"
                value={visitValue}
                onChange={e => setVisitValue(e.target.value)}
              />
              <span className="roi-unit">per visit</span>
            </div>
          </div>
        </div>

        <div className={`roi-result${hasResult ? " roi-result-active" : ""}`}>
          {hasResult ? (
            <>
              <div className="roi-result-grid">
                <div className="roi-stat">
                  <span className="roi-stat-num">{fmt(Math.round(totalMissed))}</span>
                  <span className="roi-stat-label">missed calls / month</span>
                </div>
                <div className="roi-stat-divider" />
                <div className="roi-stat">
                  <span className="roi-stat-num">{fmt(lostBookings)}</span>
                  <span className="roi-stat-label">lost bookings / month</span>
                </div>
                <div className="roi-stat-divider" />
                <div className="roi-stat roi-stat-highlight">
                  <span className="roi-stat-num">${fmt(lostPerMonth)}</span>
                  <span className="roi-stat-label">lost revenue / month</span>
                </div>
              </div>
              <div className="roi-annual">
                That's <strong>${fmt(lostPerYear)}</strong> per year left on the table.
              </div>
              <a className="roi-cta btn btn-primary" href="https://cal.com/dental-clinic/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                See how Moxtell pays for itself
              </a>
            </>
          ) : (
            <div className="roi-empty">
              {hasInput
                ? "Add your average visit value to see the full picture."
                : "Fill in the fields above to see your estimated revenue impact."}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ROI });

const CALL_EXAMPLES = [
{
  key: "dental",
  label: "Dental cleaning booking",
  duration: "1:42",
  quote: "Hi, I'd like to book a dental cleaning for Bella.",
  summary: "Emily checks Monday's calendar, offers two slots with Dr. Gonzalez, books 12:30 PM, and sends an SMS confirmation — all before the caller can ask follow-up questions.",
  actions: [
  "Identified caller and pulled owner + pet record",
  "Confirmed reason for visit (dental cleaning)",
  "Checked Google Calendar for Dr. Gonzalez availability",
  "Booked Monday 12:30 PM appointment",
  "Sent SMS confirmation with date and time",
  "Saved structured call summary to client record"]

},
{
  key: "returning",
  label: "Returning client",
  duration: "0:38",
  quote: "Hi Emily, when's my next appointment for Charlie?",
  summary: "Emily recognizes the returning caller from their phone number, pulls up Charlie's upcoming visit, and confirms the date, time, and doctor — no intake required.",
  actions: [
  "Recognized returning caller by phone number",
  "Pulled owner profile and active pets",
  "Looked up upcoming appointments for Charlie",
  "Confirmed date, time, and assigned doctor",
  "Closed call with friendly recap"]

},
{
  key: "afterhours",
  label: "After-hours request",
  duration: "2:14",
  quote: "It's 9 PM and I really need to get my dog in for a dental cleaning this week.",
  summary: "Emily takes the call after hours, checks tomorrow's availability, books the slot, and sends a confirmation — all without waking up the clinic.",
  actions: [
  "Answered call outside clinic hours",
  "Confirmed non-emergency intent",
  "Checked next-day calendar availability",
  "Booked appointment and saved to PIMS",
  "Sent SMS confirmation immediately",
  "Logged call summary for morning team review"]

},
{
  key: "refill",
  label: "Refill request",
  duration: "1:28",
  quote: "I need a refill on Buddy's heart medication.",
  summary: "Emily collects the medication name, dosage, and pharmacy, blocks any controlled-substance promises, and routes the request to staff for review with full context.",
  actions: [
  "Collected medication name and dosage",
  "Verified VCPR status with the clinic",
  "Blocked controlled substance auto-approval",
  "Captured pharmacy preference and notes",
  "Submitted refill request to staff queue",
  "Sent SMS update to client: under review"]

},
{
  key: "reschedule",
  label: "Reschedule",
  duration: "1:09",
  quote: "I need to move Bella's Tuesday appointment to next week.",
  summary: "Emily looks up the existing appointment, matches it by date and pet, finds an open slot the following week, and updates the record without double-booking.",
  actions: [
  "Identified caller and active appointment",
  "Matched the right appointment by pet and date",
  "Searched calendar for next available slot",
  "Confirmed new date and time with caller",
  "Updated appointment record + sent SMS update"]

},
{
  key: "emergency",
  label: "Emergency routing",
  duration: "0:54",
  quote: "My dog just ate something and is acting weird — what do I do?",
  summary: "Emily detects emergency intent immediately, stops the booking flow, provides the after-hours emergency line, and logs the call for clinical follow-up.",
  actions: [
  "Detected emergency keywords in caller intent",
  "Stopped scheduling flow immediately",
  "Provided clinic emergency contact line",
  "Routed call per clinic emergency policy",
  "Flagged call summary as URGENT for staff"]

},
{
  key: "spanish",
  label: "Spanish-speaking caller",
  duration: "1:36",
  quote: "Hola, quisiera hacer una cita para mi gato.",
  summary: "Emily switches to Spanish on detection, completes the intake, books the appointment, and saves the language preference — so future calls open in Spanish automatically.",
  actions: [
  "Detected Spanish on first turn",
  "Switched conversation language seamlessly",
  "Completed full intake in Spanish",
  "Booked appointment and confirmed details",
  "Saved language preference to client record",
  "Sent SMS confirmation in Spanish"]

}];


function Examples() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const ex = CALL_EXAMPLES[active];

  return (
    <section id="examples" className="examples" ref={ref}>
      <div className="examples-head">
        <div className="eyebrow reveal">◦ Demo / examples</div>
        <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16 }}>
          Real <span className="serif-italic" style={{ color: "var(--accent-ink)" }}>call examples</span>.
        </h2>
        <p className="lede reveal reveal-delay-2" style={{ marginTop: 16, color: "var(--muted)", maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
          Hear the calls your team no longer has to handle.
        </p>
      </div>

      <div className="examples-tabs reveal" role="tablist">
        {CALL_EXAMPLES.map((c, i) =>
        <button
          key={c.key}
          role="tab"
          aria-selected={i === active}
          className={`examples-tab ${i === active ? "active" : ""}`}
          onClick={() => setActive(i)}>
          
            {c.label}
          </button>
        )}
      </div>

      <div key={ex.key} className="examples-panel">
        <div className="examples-panel-left">
          <div className="examples-meta">
            <span className="examples-num">{String(active + 1).padStart(2, "0")}</span>
            <span className="examples-sep" />
            <span className="examples-duration">
              <span className="examples-dot" /> {ex.duration}
            </span>
          </div>
          <h3 className="examples-title">{ex.label}</h3>
          <p className="examples-quote">"{ex.quote}"</p>
          <p className="examples-summary">{ex.summary}</p>
        </div>

        <div className="examples-panel-right">
          <div className="examples-actions-head">What Emily did</div>
          <ul className="examples-actions">
            {ex.actions.map((a, i) =>
            <li key={i} className="examples-action">
                <span className="examples-check" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5l5 5 9-11" />
                  </svg>
                </span>
                <span>{a}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Examples });
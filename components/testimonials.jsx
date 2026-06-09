function Testimonials() {
  const quotes = [
    {
      text: <>"Our receptionists used to arrive at 8AM to <span className="serif-italic">forty-two</span> voicemails. Now they arrive to a calendar that's already full — and we haven't hired anyone."</>,
      who: "Dr. Priya Desai",
      role: "Owner · Bayside Veterinary, San Jose",
      init: "PD",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80",
    },
    {
      text: <>"The first week it handled a <span className="serif-italic">GDV call at 3AM</span> and paged me before I could think. We saved the dog. I'm never turning it off."</>,
      who: "Dr. Marcus Chen",
      role: "Emergency Medicine · North Seattle Animal Hospital",
      init: "MC",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80",
    },
    {
      text: <>"My front desk used to burn out by Thursday. Moxtell took phones off their plate entirely. <span className="serif-italic">Turnover dropped to zero</span> last year."</>,
      who: "Kayla Ramirez",
      role: "Practice Manager · Prairie Paws Group (6 locations)",
      init: "KR",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    },
  ];
  const [idx, setIdx] = useState(0);
  const q = quotes[idx];
  const ref = useReveal();
  return (
    <section id="stories" className="testimonials" ref={ref}>
      <div className="wrap">
        <div className="eyebrow reveal">◦ Stories from the clinic</div>
        <div style={{ marginTop: 28 }}>
          <blockquote key={idx} className="quote reveal">
            {q.text}
          </blockquote>
          <div className="quote-author reveal reveal-delay-1">
            <div className="avatar"><img src={q.img} alt={q.who} /></div>
            <div className="quote-meta">
              <div className="who">{q.who}</div>
              <div className="role">{q.role}</div>
            </div>
          </div>
          <div className="quote-nav reveal reveal-delay-2">
            <button className="qnav-btn" onClick={() => setIdx((i) => (i - 1 + quotes.length) % quotes.length)} aria-label="Previous">
              <Icon name="arrow-left" />
            </button>
            <button className="qnav-btn" onClick={() => setIdx((i) => (i + 1) % quotes.length)} aria-label="Next">
              <Icon name="arrow-right" />
            </button>
            <div style={{ display: "flex", alignItems: "center", marginLeft: 20, color: "var(--muted)", fontFamily: "var(--f-mono)", fontSize: 12 }}>
              {String(idx + 1).padStart(2,"0")} / {String(quotes.length).padStart(2,"0")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials });

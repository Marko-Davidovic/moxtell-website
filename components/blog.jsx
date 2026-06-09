function Blog() {
  const posts = [
    {
      href: "journal-ai-receptionist-vet.html",
      tag: "Industry",
      title: "How AI receptionists help veterinary clinics.",
      sub: "More answered calls, less front desk burnout, and a better experience for every pet owner — from the first ring.",
      meta: ["9 min read", "Jun 2026"],
      img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=900&q=80",
    },
    {
      href: "journal-receptionist.html",
      tag: "Field notes",
      title: "What a great receptionist does that AI finally can, too.",
      sub: "Eight micro-behaviors we studied across 40 clinics — and how we taught them to a voice model.",
      meta: ["8 min read", "Apr 2026"],
      img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=900&q=80",
    },
    {
      href: "journal-sub-400ms.html",
      tag: "Product",
      title: "Sub-400ms voice: the engineering story.",
      sub: "Why latency is the whole game in a conversation, and the stack we rebuilt to get there.",
      meta: ["12 min read", "Mar 2026"],
      img: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=900&q=80",
    },
    {
      href: "journal-prairie-paws.html",
      tag: "Case study",
      title: "Prairie Paws answered 7,400 calls in a quarter.",
      sub: "How a six-clinic group went from 19% missed calls to zero — without hiring.",
      meta: ["6 min read", "Mar 2026"],
      img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&q=80",
    },
  ];
  const ref = useReveal();
  return (
    <section id="journal" className="blog wrap" ref={ref}>
      <div className="features-head">
        <div>
          <div className="eyebrow reveal">◦ The Moxtell Journal</div>
          <h2 className="h-xl reveal reveal-delay-1" style={{ marginTop: 16 }}>
            Writing about <span className="serif-italic" style={{ color: "var(--accent-ink)" }}>voice</span>,<br/>
            pets, and the work.
          </h2>
        </div>
        <a className="btn btn-ghost reveal reveal-delay-2" href="#" style={{ alignSelf: "end" }}>
          All articles <Icon name="arrow-right" />
        </a>
      </div>

      <div className="blog-grid">
        {posts.map((p, i) => (
          <a key={p.title} href={p.href} className={`post post-link reveal reveal-delay-${i + 1}`}>
            <div className="post-cover">
              <img src={p.img} alt="" loading="lazy" />
              <span className="tag">{p.tag}</span>
            </div>
            <div className="post-body">
              <h3 className="post-title">{p.title}</h3>
              <div className="post-sub">{p.sub}</div>
              <div className="post-meta">
                <span>{p.meta[0]}</span>
                <span>{p.meta[1]}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Blog });

function PhotoStrip() {
  const tiles = [
    { img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80", cap: "Golden · Otis" },
    { img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=700&q=80", cap: "Orange tabby" },
    { img: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=700&q=80", cap: "Rabbit · exam" },
    { img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=700&q=80", cap: "Frenchie · puppy" },
    { img: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=700&q=80", cap: "Vet · stethoscope" },
    { img: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=700&q=80", cap: "Black lab" },
    { img: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=700&q=80", cap: "Corgi · smile" },
    { img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=700&q=80", cap: "Pup · nap" },
  ];
  const doubled = [...tiles, ...tiles];
  return (
    <section className="photo-strip">
      <div className="marquee">
        <div className="track">
          {doubled.map((t, i) => (
            <div className="tile" key={i}>
              <img src={t.img} alt={t.cap} loading="lazy" />
              <span className="cap">{t.cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { PhotoStrip });

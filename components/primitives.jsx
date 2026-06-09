// Shared primitives + hooks
const { useState, useEffect, useRef, useMemo, useCallback } = React;

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Icon({ name, ...p }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", ...p };
  switch (name) {
    case "arrow-right": return (<svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "arrow-left": return (<svg {...common}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>);
    case "play": return (<svg {...common} fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg>);
    case "pause": return (<svg {...common} fill="currentColor" stroke="none"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>);
    case "phone": return (<svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
    case "mic": return (<svg {...common}><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v3"/></svg>);
    case "mic-off": return (<svg {...common}><path d="M1 1l22 22M9 9v2a3 3 0 0 0 5.12 2.12M15 9.34V5a3 3 0 0 0-5.94-.6M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23M12 19v3"/></svg>);
    case "shield": return (<svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
    case "bolt": return (<svg {...common}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>);
    case "globe": return (<svg {...common}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>);
    case "calendar": return (<svg {...common}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>);
    case "chart": return (<svg {...common}><path d="M3 3v18h18M7 14l4-4 4 4 5-5"/></svg>);
    case "clock": return (<svg {...common}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>);
    case "check": return (<svg {...common}><path d="M5 12.5l5 5 9-11"/></svg>);
    case "hand": return (<svg {...common}><path d="M8 3v9M12 3v10M16 5v8M20 9v6a5 5 0 0 1-5 5h-3l-5-5a2 2 0 0 1 3-3l2 2V5a2 2 0 1 1 4 0v7"/></svg>);
    case "sparkle": return (<svg {...common}><path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"/></svg>);
    default: return null;
  }
}

// Cursor-following glow in hero
function CursorGlow({ active }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!active) return;
    const el = ref.current;
    let raf;
    let x = window.innerWidth / 2, y = 300, tx = x, ty = y;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.12; y += (ty - y) * 0.12;
      if (el) el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    loop();
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, [active]);
  if (!active) return null;
  return <div className="cursor-glow" ref={ref} />;
}

Object.assign(window, { useReveal, Icon, CursorGlow });

import Image from "next/image";

const PLATFORMS = ["Netflix", "YouTube", "Disney+", "Prime Video", "Hulu", "Max", "Mubi", "Crunchyroll"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 text-center overflow-hidden">
      {/* Background glow orbs */}
      <div className="glow-orb" style={{ width: 600, height: 600, top: -100, left: "50%", transform: "translateX(-50%)", background: "rgba(99,102,241,0.12)" }} />
      <div className="glow-orb" style={{ width: 400, height: 400, bottom: 0, right: "10%", background: "rgba(139,92,246,0.07)" }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="section-label mb-8">Free Chrome Extension</div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6" style={{ letterSpacing: "-0.03em" }}>
          Learn any language through{" "}
          <span className="gradient-text">the shows you already love.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          DualCap puts live bilingual captions on Netflix, YouTube, and more — with grammar breakdowns,
          word lookup, and a personal dictionary. No app switching. Just watch and absorb.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "16px", padding: "16px 32px", borderRadius: "14px" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Add to Chrome — it&apos;s free
          </a>
          <a href="#how-it-works" className="btn-ghost">
            See how it works
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Supporting line */}
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
          Free forever · Requires a free Groq API key · No account needed
        </p>

        {/* Hero screenshot / mockup */}
        <div className="mt-16 relative mx-auto max-w-3xl">
          <div
            className="img-placeholder rounded-2xl overflow-hidden"
            style={{ height: 420, border: "1.5px dashed rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}
          >
            {/* Placeholder — replace with actual screenshot */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: 13 }}>Hero screenshot — drop image here</span>
          </div>
          {/* Glow under screenshot */}
          <div style={{ position: "absolute", bottom: -40, left: "50%", transform: "translateX(-50%)", width: "70%", height: 80, background: "rgba(99,102,241,0.15)", filter: "blur(40px)", borderRadius: "50%", pointerEvents: "none" }} />
        </div>

        {/* Platform chips */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          <span className="text-sm mr-2" style={{ color: "rgba(255,255,255,0.3)", lineHeight: "36px" }}>Works on</span>
          {PLATFORMS.map((p) => (
            <span key={p} className="platform-chip">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const PLATFORMS = ["Netflix", "YouTube", "Disney+", "Prime Video", "Hulu", "Max", "Mubi", "Crunchyroll"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 text-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span
            className="section-label"
            style={{ padding: "4px 12px", border: "1px solid var(--border)", background: "var(--bg-surface)" }}
          >
            Free Chrome Extension
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 cursor"
          style={{ letterSpacing: "-0.03em" }}
        >
          Learn any language through{" "}
          <span className="gradient-text">the shows you already love.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          DualCap puts live bilingual captions on Netflix, YouTube, and more — with grammar breakdowns,
          word lookup, and a personal dictionary. No app switching. Just watch and absorb.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
          <a
            href="https://chromewebstore.google.com/detail/mcpgmmonidbjafiaffeokmmipfimnkbn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center"
            style={{ fontSize: "13px", padding: "14px 28px" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            ADD TO CHROME — IT&apos;S FREE
          </a>
          <a href="/#how-it-works" className="btn-ghost justify-center" style={{ fontSize: "12px" }}>
            SEE HOW IT WORKS
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Supporting line */}
        <div
          className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-xs"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--text-faint)",
            letterSpacing: "0.06em",
          }}
        >
          <span>FREE_FOREVER</span>
          <span>·</span>
          <span>REQUIRES_GROQ_API_KEY</span>
          <span>·</span>
          <span>NO_ACCOUNT</span>
        </div>

        {/* Product Hunt badge */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://www.producthunt.com/products/dualcap/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-dualcap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              <source
                srcSet="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1230743&theme=dark"
                media="(prefers-color-scheme: light)"
              />
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1230743&theme=light"
                alt="DualCap - Bilingual Captions &amp; Language Learning | Product Hunt"
                width={210}
                height={46}
                style={{ display: "block" }}
              />
            </picture>
          </a>
        </div>

        {/* Hero screenshot */}
        <div className="mt-14 relative mx-auto max-w-5xl">
          <div
            className="relative z-10 overflow-hidden"
            style={{
              border: "1px solid var(--border)",
              borderRadius: 4,
              boxShadow: "4px 4px 0 var(--border)",
            }}
          >
            <Image
              src="/screenshot-hero.png"
              alt="DualCap showing bilingual captions and grammar breakdown on a video"
              width={1667}
              height={943}
              priority
              className="w-full h-auto block"
              style={{ display: "block" }}
            />
          </div>
        </div>

        {/* Platform chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <span
            className="text-xs mr-1"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--text-faint)",
              lineHeight: "32px",
              letterSpacing: "0.06em",
            }}
          >
            WORKS_ON
          </span>
          {PLATFORMS.map((p) => (
            <span key={p} className="platform-chip">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

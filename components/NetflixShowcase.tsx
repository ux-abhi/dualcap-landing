import Image from "next/image";

export default function NetflixShowcase() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="section-label mb-4">In action</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>
            Watch and learn. No switching tabs.
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
            Click any translated line. The video pauses. A full grammar breakdown appears — tense, word roles, CEFR level, key insight.
          </p>
        </div>

        {/* Screenshot */}
        <div
          className="relative overflow-hidden"
          style={{
            border: "1px solid var(--border)",
            borderRadius: 4,
            boxShadow: "4px 4px 0 var(--border)",
          }}
        >
          <Image
            src="/screenshot-netflix.png"
            alt="DualCap showing grammar breakdown overlay on a Netflix video in fullscreen"
            width={1668}
            height={943}
            className="w-full h-auto block"
          />

          {/* Callout chips */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {[
              { label: "Grammar panel", desc: "Tense · CEFR · Word roles" },
              { label: "Side panel", desc: "All captions live" },
              { label: "Bilingual overlay", desc: "EN + DE on screen" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 2,
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                <span style={{ color: "var(--text)" }}>{chip.label}</span>
                <span style={{ color: "var(--text-faint)" }}>— {chip.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

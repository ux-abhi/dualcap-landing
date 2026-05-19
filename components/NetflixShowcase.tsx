import Image from "next/image";

export default function NetflixShowcase() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Subtle glow */}
      <div className="glow-orb" style={{ width: 600, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(99,102,241,0.06)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-label mb-5">In action</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ letterSpacing: "-0.025em" }}>
            Watch and learn. No switching tabs.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Click any translated line. The video pauses. A full grammar breakdown appears — tense, word roles, CEFR level, key insight.
          </p>
        </div>

        {/* Full-width Netflix screenshot */}
        <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)" }}>
          <Image
            src="/screenshot-netflix.png"
            alt="DualCap showing grammar breakdown overlay on a Netflix video in fullscreen"
            width={1668}
            height={943}
            className="w-full h-auto block"
          />
          {/* Dark overlay gradient at bottom for label */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, rgba(6,6,13,0.85), transparent)", pointerEvents: "none" }} />

          {/* Callout chips over the image */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
            {[
              { label: "Grammar panel", desc: "Tense · CEFR · Word roles" },
              { label: "Side panel", desc: "All captions live" },
              { label: "Bilingual overlay", desc: "EN + DE on screen" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
                style={{ background: "rgba(6,6,13,0.75)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#818cf8" }} />
                <span className="text-white">{chip.label}</span>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>— {chip.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

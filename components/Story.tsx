export default function Story() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="glow-orb" style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(99,102,241,0.06)" }} />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="card-glass rounded-2xl p-10 md:p-14 text-center">
          {/* Quote mark */}
          <div className="text-6xl font-black mb-6 leading-none" style={{ color: "rgba(99,102,241,0.3)", fontFamily: "Georgia, serif" }}>&ldquo;</div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            Built by a designer learning German through Netflix.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.52)" }}>
            I was watching German series to learn the language — immersion works, but every tool I tried
            was either expensive, clunky, or both. So I built my own.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.52)" }}>
            DualCap started as a weekend project. Now it&apos;s a full learning system — translation, grammar,
            dictionary, all inside the browser while you watch. No app switching, no subscriptions, no friction.
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            {/* Avatar placeholder */}
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#6366f1,#818cf8)", fontSize: 16, fontWeight: 700, color: "white" }}
            >
              A
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm text-white">Abhishek Jha</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Designer & product builder · <a href="https://uxabhi.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">uxabhi.com</a> · @uxabhi_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

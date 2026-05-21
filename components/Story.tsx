export default function Story() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-3xl mx-auto">
        <div
          className="p-8 md:p-12"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: 2,
            borderLeft: "3px solid var(--accent)",
          }}
        >
          {/* Quote mark */}
          <div
            className="text-5xl font-black mb-5 leading-none"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--accent)",
              opacity: 0.5,
            }}
          >
            &ldquo;
          </div>

          <h2
            className="text-xl sm:text-2xl font-bold mb-5 leading-snug"
            style={{ letterSpacing: "-0.02em" }}
          >
            Built by a designer learning German through Netflix.
          </h2>

          <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
            I was watching German series to learn the language — immersion works, but every tool I tried
            was either expensive, clunky, or both. So I built my own.
          </p>

          <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
            DualCap started as a weekend project. Now it&apos;s a full learning system — translation, grammar,
            dictionary, all inside the browser while you watch. No app switching, no subscriptions, no friction.
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm"
              style={{
                background: "var(--accent)",
                color: "var(--accent-fg)",
                borderRadius: 2,
                fontFamily: "var(--font-jetbrains-mono), monospace",
              }}
            >
              A
            </div>
            <div>
              <div
                className="font-bold text-sm"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text)" }}
              >
                Abhishek Jha
              </div>
              <div className="text-xs" style={{ color: "var(--text-faint)" }}>
                Designer & product builder ·{" "}
                <a href="https://uxabhi.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
                  uxabhi.com
                </a>{" "}
                · @uxabhi_
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

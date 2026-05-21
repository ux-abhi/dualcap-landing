const STEPS = [
  {
    num: "01",
    title: "Install DualCap",
    body: "Add it to Chrome from the Web Store in one click. No account, no sign-up required.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Add your free Groq API key",
    body: "DualCap uses Groq's AI for translation and grammar. Get a free key at console.groq.com — no credit card needed. Paste it into Settings inside the extension.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Open a video and turn on subtitles",
    body: "Go to YouTube or Netflix, turn on subtitles in the player, and DualCap instantly shows both lines — original on top, translated below. Click any word to look it up. Click the translation for a full grammar breakdown.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 px-4 sm:px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="section-label mb-4">How it works</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>
            Up and running in 3 steps
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
            No backend, no account, no friction. Your data stays in your browser.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-px" style={{ border: "1px solid var(--border)", background: "var(--border)" }}>
          {STEPS.map((step, i) => (
            <div key={i} className="card-glass p-7 relative" style={{ border: "none", borderRadius: 0 }}>
              {/* Step label */}
              <div
                className="flex items-center gap-2 mb-5"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: "var(--text-faint)", letterSpacing: "0.1em" }}
              >
                <span style={{ color: "var(--accent)" }}>[{step.num}]</span>
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 flex items-center justify-center mb-4"
                style={{
                  background: "var(--accent-bg)",
                  border: "1px solid var(--accent-border)",
                  borderRadius: 2,
                  color: "var(--accent)",
                }}
              >
                {step.icon}
              </div>

              <h3
                className="text-base font-bold mb-3"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "-0.01em" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.body}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-6 flex items-center gap-2"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: "var(--text-faint)", letterSpacing: "0.04em" }}
        >
          <span style={{ color: "var(--success)" }}>✓</span>
          <span>That&apos;s it — start watching</span>
        </div>
      </div>
    </section>
  );
}

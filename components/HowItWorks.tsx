const STEPS = [
  {
    num: "01",
    title: "Install DualCap",
    body: "Add it to Chrome from the Web Store in one click. No account, no sign-up required.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-5">How it works</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ letterSpacing: "-0.025em" }}>
            Up and running in 3 steps
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            No backend, no account, no friction. Your data stays in your browser.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div key={i} className="card-glass p-7 relative overflow-hidden">
              {/* Step number watermark */}
              <span className="absolute top-4 right-5 text-6xl font-black" style={{ color: "rgba(255,255,255,0.03)", lineHeight: 1, userSelect: "none" }}>
                {step.num}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)", color: "#818cf8" }}>
                  {step.icon}
                </div>

                <h3 className="text-lg font-semibold mb-3 text-white tracking-tight">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Connector line on desktop */}
        <div className="hidden md:flex items-center justify-center mt-10 gap-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span className="text-sm">That&apos;s it — start watching</span>
        </div>
      </div>
    </section>
  );
}

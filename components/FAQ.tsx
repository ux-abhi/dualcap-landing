"use client";

const FAQS = [
  {
    q: "Is DualCap free?",
    a: "Yes. The extension is free. You need a Groq API key for translations — Groq's free tier is generous and doesn't require a credit card.",
  },
  {
    q: "Does it work on Netflix?",
    a: "Yes. Enable subtitles in the Netflix player first, then DualCap translates them in real time.",
  },
  {
    q: "Which languages are supported?",
    a: "Any language Netflix or YouTube has subtitles for. Translation supports: English, German, French, Spanish, Italian, Portuguese, Dutch, Polish, Russian, Japanese, Chinese, Korean, Arabic, Hindi, Turkish, Swedish, Ukrainian, Vietnamese, and more.",
  },
  {
    q: "Does DualCap collect any data?",
    a: "No. DualCap does not track you, collect browsing history, or store anything outside your browser. Subtitle text is sent to Groq's API for translation only. See the Privacy Policy for full details.",
  },
  {
    q: "Why do I need a Groq API key?",
    a: "Groq powers the AI translation and grammar explanations. Rather than build a backend (which would require accounts and subscriptions), DualCap lets you use your own free key directly — faster, cheaper, and more private.",
  },
  {
    q: "Does it work in fullscreen?",
    a: "Yes. The overlay moves into the fullscreen container automatically.",
  },
  {
    q: "Can I export my saved vocabulary?",
    a: "Yes. Open the Dictionary tab in the side panel and click ↓ PDF. You'll get a formatted document with all your saved words, definitions, and examples.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-16 sm:py-24 px-4 sm:px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="section-label mb-4">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ letterSpacing: "-0.025em" }}>
            Common questions
          </h2>
        </div>

        <div
          className="flex flex-col"
          style={{ border: "1px solid var(--border)", borderRadius: 2 }}
        >
          {FAQS.map((item, i) => (
            <details
              key={i}
              className="group"
              style={{
                borderBottom: i < FAQS.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <summary className="text-sm font-bold select-none" style={{ color: "var(--text)" }}>
                {item.q}
                {/* + icon that becomes × when open via CSS rotate(45deg) */}
                <svg
                  className="chevron"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </summary>
              <div className="faq-body">{item.a}</div>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex items-center gap-3">
          <span
            className="text-sm"
            style={{ color: "var(--text-faint)", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12 }}
          >
            Still have questions?
          </span>
          <a
            href="mailto:hello@uxabhi.com"
            className="btn-ghost"
            style={{ fontSize: 12, padding: "8px 16px" }}
          >
            hello@uxabhi.com
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

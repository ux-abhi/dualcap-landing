import Image from "next/image";

const FEATURES = [
  {
    title: "Bilingual captions, live",
    body: "Original and translated subtitles side by side, directly on the video. Draggable, resizable, works in fullscreen. No delay — translations arrive in under 100ms.",
    tag: "CORE",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Grammar breakdowns — A2 to C2",
    body: "Click the translated caption and the video pauses. A panel shows tense, sentence structure, word-by-word roles, CEFR difficulty level, a key insight, and example sentences.",
    tag: "AI",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Word lookup on tap",
    body: "Tap any word in the captions. Get the definition, pronunciation, part of speech, grammatical gender (crucial for German, French, Spanish), and two example sentences.",
    tag: "DICT",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Personal dictionary",
    body: "Save any caption with one tap. DualCap automatically fetches the meaning and stores it with the original, translation, definition, and examples. Download as PDF.",
    tag: "SAVE",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: "Loop mode",
    body: "Press L to loop the current sentence. The best technique for training your ear and practising pronunciation — used by polyglots worldwide.",
    tag: "LOOP",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    title: "Works where you watch",
    body: "Netflix · YouTube · Disney+ · Amazon Prime Video · Hulu · Max · Mubi · Crunchyroll",
    tag: "COMPAT",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24 px-4 sm:px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="section-label mb-4">Features</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>
            Everything you need to actually learn
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
            No other extension combines live captions, grammar AI, and a personal dictionary.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: "1px solid var(--border)", background: "var(--border)" }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="card-glass p-6 flex flex-col gap-4"
              style={{
                border: "none",
                borderRadius: 0,
                ...(i === 0 ? { gridColumn: "1 / -1" } : {}),
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "var(--accent-bg)",
                      border: "1px solid var(--accent-border)",
                      borderRadius: 2,
                      color: "var(--accent)",
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    className="font-bold text-sm leading-snug"
                    style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text)" }}
                  >
                    {f.title}
                  </h3>
                </div>
                <span
                  className="text-xs font-bold flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    padding: "2px 8px",
                    border: "1px solid var(--accent-border)",
                    borderRadius: 2,
                    color: "var(--accent)",
                    background: "var(--accent-bg)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {f.tag}
                </span>
              </div>

              {i !== 0 && (
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.body}</p>
              )}

              {i === 0 && (
                <div className="mt-1 grid md:grid-cols-2 gap-6 items-center">
                  <p className="text-sm leading-relaxed md:hidden" style={{ color: "var(--text-muted)" }}>{f.body}</p>
                  <div
                    className="relative overflow-hidden"
                    style={{ border: "1px solid var(--border)", borderRadius: 2 }}
                  >
                    <Image
                      src="/screenshot-ui.png"
                      alt="DualCap extension panel showing bilingual captions"
                      width={1024}
                      height={1536}
                      className="w-full h-auto block"
                    />
                  </div>
                  <div className="hidden md:flex flex-col gap-4">
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.body}</p>
                    <ul className="flex flex-col gap-2 text-sm">
                      {["Draggable & resizable overlay", "Works in fullscreen", "Under 100ms translation", "Save any caption instantly"].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2"
                          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: "var(--text-muted)" }}
                        >
                          <span style={{ color: "var(--accent)" }}>→</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

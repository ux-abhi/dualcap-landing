import Image from "next/image";

const FEATURES = [
  {
    title: "Bilingual captions, live",
    body: "Original and translated subtitles side by side, directly on the video. Draggable, resizable, works in fullscreen. No delay — translations arrive in under 100ms.",
    tag: "Core",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    wide: true,
    imgHint: "Bilingual caption overlay screenshot",
  },
  {
    title: "Grammar breakdowns — A2 to C2",
    body: "Click the translated caption and the video pauses. A panel shows tense, sentence structure, word-by-word roles, CEFR difficulty level, a key insight, and example sentences using the same pattern.",
    tag: "AI-powered",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    wide: false,
    imgHint: "Grammar panel screenshot",
  },
  {
    title: "Word lookup on tap",
    body: "Tap any word in the captions. Get the definition, pronunciation, part of speech, grammatical gender (crucial for German, French, Spanish), and two example sentences. Instantly.",
    tag: "Dictionary",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    wide: false,
    imgHint: "Word lookup popup screenshot",
  },
  {
    title: "Personal dictionary",
    body: "Save any caption with one tap. DualCap automatically fetches the meaning and stores it with the original, translation, definition, and examples. Browse, search, and download your dictionary as a PDF.",
    tag: "Learning",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    wide: false,
    imgHint: "Dictionary panel screenshot",
  },
  {
    title: "Loop mode",
    body: "Press L to loop the current sentence. The best technique for training your ear and practising pronunciation — used by polyglots worldwide.",
    tag: "Practice",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    wide: false,
    imgHint: "Loop mode UI screenshot",
  },
  {
    title: "Works where you watch",
    body: "Netflix · YouTube · Disney+ · Amazon Prime Video · Hulu · Max · Mubi · Crunchyroll",
    tag: "Compatibility",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    wide: false,
    imgHint: "Platform logos",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Core": "rgba(99,102,241,0.15)",
  "AI-powered": "rgba(139,92,246,0.15)",
  "Dictionary": "rgba(16,185,129,0.15)",
  "Learning": "rgba(245,158,11,0.15)",
  "Practice": "rgba(239,68,68,0.15)",
  "Compatibility": "rgba(59,130,246,0.15)",
};
const TAG_TEXT: Record<string, string> = {
  "Core": "#a5b4fc",
  "AI-powered": "#c4b5fd",
  "Dictionary": "#6ee7b7",
  "Learning": "#fcd34d",
  "Practice": "#fca5a5",
  "Compatibility": "#93c5fd",
};

export default function Features() {
  return (
    <section id="features" className="relative py-28 px-6">
      <div className="glow-orb" style={{ width: 500, height: 500, top: "30%", left: -100, background: "rgba(99,102,241,0.07)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-5">Features</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ letterSpacing: "-0.025em" }}>
            Everything you need to actually learn
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            No other extension combines live captions, grammar AI, and a personal dictionary.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="card-glass p-6 flex flex-col gap-4"
              style={i === 0 ? { gridColumn: "1 / -1" } : {}}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.18)", color: "#818cf8" }}>
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-base text-white leading-snug">{f.title}</h3>
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ background: TAG_COLORS[f.tag] || "rgba(99,102,241,0.12)", color: TAG_TEXT[f.tag] || "#818cf8" }}
                >
                  {f.tag}
                </span>
              </div>

              {i !== 0 && <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>{f.body}</p>}

              {/* Extension UI screenshot in the wide bilingual-captions card */}
              {i === 0 && (
                <div className="mt-2 grid md:grid-cols-2 gap-6 items-center">
                  <p className="text-sm leading-relaxed md:hidden" style={{ color: "rgba(255,255,255,0.48)" }}>{f.body}</p>
                  <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                    <Image
                      src="/screenshot-ui.png"
                      alt="DualCap extension panel showing bilingual captions"
                      width={1024}
                      height={1536}
                      className="w-full h-auto block"
                    />
                  </div>
                  <div className="hidden md:flex flex-col gap-4">
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>{f.body}</p>
                    <ul className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {["Draggable & resizable overlay", "Works in fullscreen", "Under 100ms translation", "Save any caption instantly"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span style={{ color: "#818cf8" }}>✓</span> {item}
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

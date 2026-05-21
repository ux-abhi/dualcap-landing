interface TutorialItem {
  id: string;
  title: string;
  intro?: string;
  steps: { n: string; text: string }[];
  tip?: string;
  note?: string;
  end?: string;
}

const TUTORIALS: TutorialItem[] = [
  {
    id: "groq",
    title: "How to get your free Groq API key",
    intro: "DualCap uses Groq's AI for translations and grammar explanations. Groq offers a generous free tier — no credit card required.",
    steps: [
      { n: "1", text: "Go to console.groq.com and create a free account." },
      { n: "2", text: 'Click "API Keys" in the left sidebar, then click "Create API Key". Give it any name (e.g. "DualCap").' },
      { n: "3", text: 'Copy the key — it starts with gsk_.' },
      { n: "4", text: 'Open DualCap in Chrome → click the icon in your toolbar → click "Settings" → paste your key in the API Key field → click Save.' },
    ],
    end: "→ That's it. You're ready to start.",
  },
  {
    id: "youtube",
    title: "How to use DualCap on YouTube",
    steps: [
      { n: "1", text: "Open any YouTube video." },
      { n: "2", text: "Click the CC button in the video player to enable captions." },
      { n: "3", text: "DualCap automatically detects the subtitle language and shows both lines." },
      { n: "4", text: "Change languages anytime from the side panel (click the DualCap icon → Side panel)." },
    ],
    tip: "Press C on YouTube to quickly toggle captions on and off.",
  },
  {
    id: "netflix",
    title: "How to use DualCap on Netflix",
    steps: [
      { n: "1", text: "Open any Netflix show or movie." },
      { n: "2", text: "Click the dialogue icon in the Netflix player and choose a subtitle language." },
      { n: "3", text: "DualCap overlays the translation above the native subtitles." },
      { n: "4", text: "Click any translated line to pause and read the grammar breakdown." },
    ],
    note: "Choose a subtitle language different from your target learning language for best results. For example, if you're learning German, watch a German show with German subtitles and translate to English.",
  },
  {
    id: "dictionary",
    title: "How to build your personal dictionary",
    steps: [
      { n: "1", text: "Watch any video with DualCap running." },
      { n: "2", text: "When a sentence appears that you want to remember — click Save to dictionary." },
      { n: "3", text: "DualCap automatically fetches the definition, part of speech, gender, and examples." },
      { n: "4", text: "Open the Dictionary tab in the side panel to browse all saved entries." },
      { n: "5", text: "Click ↓ PDF to download your full dictionary as a formatted document." },
    ],
  },
];

export default function Tutorial() {
  return (
    <section id="tutorial" className="relative py-16 sm:py-24 px-4 sm:px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="section-label mb-4">Guides</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>
            Getting started
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
            Step-by-step instructions for everything you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px" style={{ border: "1px solid var(--border)", background: "var(--border)" }}>
          {TUTORIALS.map((tut) => (
            <div key={tut.id} className="card-glass p-6 flex flex-col gap-4" style={{ border: "none", borderRadius: 0 }}>
              <h3
                className="text-sm font-bold leading-snug"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text)" }}
              >
                {tut.title}
              </h3>

              {tut.intro && (
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{tut.intro}</p>
              )}

              <ol className="flex flex-col gap-3">
                {tut.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="step-number text-xs">{s.n}</span>
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", paddingTop: 6 }}>{s.text}</span>
                  </li>
                ))}
              </ol>

              {tut.tip && (
                <div
                  className="text-xs px-3 py-2.5"
                  style={{
                    background: "var(--accent-bg)",
                    border: "1px solid var(--accent-border)",
                    borderRadius: 2,
                    color: "var(--accent)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    letterSpacing: "0.02em",
                  }}
                >
                  <span className="font-bold">TIP: </span>{tut.tip}
                </div>
              )}

              {tut.note && (
                <div
                  className="text-xs px-3 py-2.5"
                  style={{
                    background: "var(--bg-raised)",
                    border: "1px solid var(--border-strong)",
                    borderRadius: 2,
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    letterSpacing: "0.02em",
                  }}
                >
                  <span className="font-bold" style={{ color: "var(--text)" }}>NOTE: </span>{tut.note}
                </div>
              )}

              {tut.end && (
                <p
                  className="text-xs font-bold"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--success)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tut.end}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

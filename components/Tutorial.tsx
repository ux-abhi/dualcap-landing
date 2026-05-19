const TUTORIALS = [
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
    end: "That's it. You're ready to start.",
  },
  {
    id: "youtube",
    title: "How to use DualCap on YouTube",
    intro: "",
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
    intro: "",
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
    intro: "",
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
    <section id="tutorial" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mb-5">Guides</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ letterSpacing: "-0.025em" }}>
            Getting started
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Step-by-step instructions for everything you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TUTORIALS.map((tut) => (
            <div key={tut.id} className="card-glass p-7 flex flex-col gap-5">
              <h3 className="text-base font-semibold text-white leading-snug">{tut.title}</h3>

              {tut.intro && (
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{tut.intro}</p>
              )}

              <ol className="flex flex-col gap-3.5">
                {tut.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="step-number text-sm">{s.n}</span>
                    <span className="text-sm leading-relaxed pt-2" style={{ color: "rgba(255,255,255,0.55)" }}>{s.text}</span>
                  </li>
                ))}
              </ol>

              {(tut as { tip?: string }).tip && (
                <div className="rounded-xl px-4 py-3 text-sm" style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)", color: "#a5b4fc" }}>
                  <span className="font-semibold">Tip: </span>{(tut as { tip?: string }).tip}
                </div>
              )}

              {(tut as { note?: string }).note && (
                <div className="rounded-xl px-4 py-3 text-sm" style={{ background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.15)", color: "#fcd34d" }}>
                  <span className="font-semibold">Note: </span>{(tut as { note?: string }).note}
                </div>
              )}

              {(tut as { end?: string }).end && (
                <p className="text-sm font-medium" style={{ color: "#6ee7b7" }}>{(tut as { end?: string }).end}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

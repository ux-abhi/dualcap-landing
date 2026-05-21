import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — DualCap",
  description: "DualCap does not collect your data. It does not track you. It has no servers of its own. Everything stays on your device.",
};

const PERMISSIONS = [
  { perm: "activeTab", purpose: "Read subtitle text from the current video tab" },
  { perm: "storage", purpose: "Save your preferences and dictionary locally" },
  { perm: "tabs", purpose: "Open the learning side panel on the current tab" },
  { perm: "sidePanel", purpose: "Display the grammar and dictionary panel" },
];

export default function PrivacyPage() {
  return (
    <main>
      <Nav />
      <article className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <div className="mb-10">
          <div className="section-label mb-4">Legal</div>
          <h1 className="text-3xl font-bold mb-2" style={{ letterSpacing: "-0.025em" }}>Privacy Policy</h1>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text-faint)", letterSpacing: "0.06em" }}
          >
            LAST_UPDATED: May 2026
          </p>
        </div>

        {/* Summary card */}
        <div
          className="p-5 mb-10"
          style={{
            background: "var(--accent-bg)",
            border: "1px solid var(--accent-border)",
            borderLeft: "3px solid var(--accent)",
            borderRadius: 2,
          }}
        >
          <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
            DualCap does not collect your data. It does not track you. It has no servers of its own. Everything stays on your device.
          </p>
        </div>

        <div className="flex flex-col gap-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <Section title="What DualCap does">
            DualCap is a Chrome extension that reads subtitle text from video streaming sites and sends it to Groq&apos;s API to generate translations and grammar explanations. That is the full extent of its external communication.
          </Section>

          <Section title="Data we collect">
            <strong style={{ color: "var(--text)" }}>None.</strong> DualCap does not collect, store, transmit, or sell any personal data. There are no analytics, no telemetry, no crash reports, no usage tracking of any kind.
          </Section>

          <Section title="Data sent to third parties">
            <p>The only external service DualCap communicates with is <strong style={{ color: "var(--text)" }}>Groq</strong> (api.groq.com).</p>
            <p className="mt-3"><strong style={{ color: "var(--text)" }}>What is sent:</strong> the subtitle text currently visible on your screen — the words of the video you are watching — for the purpose of translation and grammar analysis.</p>
            <p className="mt-3"><strong style={{ color: "var(--text)" }}>What is not sent:</strong> your identity, browsing history, IP address, device information, account details, or any other personal data.</p>
            <p className="mt-3">Groq processes this text under their own privacy policy, available at groq.com/privacy.</p>
          </Section>

          <Section title="Your Groq API key">
            Your Groq API key is stored locally in Chrome&apos;s built-in sync storage (chrome.storage.sync). It is encrypted and managed by Chrome. It is only ever sent to Groq&apos;s API endpoints — never to DualCap or any other server.
          </Section>

          <Section title="Data stored locally">
            <p>The following is stored on your device only, using Chrome&apos;s storage APIs:</p>
            <ul className="mt-3 flex flex-col gap-1.5 pl-2">
              {["Your Groq API key", "Language preferences (source and target language)", "Display settings (theme, font size, caption position)", "Your saved dictionary entries", "Per-site overlay position"].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span style={{ color: "var(--accent)", flexShrink: 0, fontFamily: "var(--font-jetbrains-mono), monospace" }}>–</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">None of this leaves your browser except the API key (sent only to Groq).</p>
          </Section>

          <Section title="Permissions and why we need them">
            <div
              className="mt-2 overflow-hidden"
              style={{ border: "1px solid var(--border)", borderRadius: 2 }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--bg-raised)", borderBottom: "1px solid var(--border)" }}>
                    <th className="text-left px-4 py-3 font-bold" style={{ color: "var(--text)" }}>Permission</th>
                    <th className="text-left px-4 py-3 font-bold" style={{ color: "var(--text)" }}>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {PERMISSIONS.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < PERMISSIONS.length - 1 ? "1px solid var(--border)" : "none" }}>
                      <td
                        className="px-4 py-3 font-mono text-xs"
                        style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains-mono), monospace" }}
                      >
                        {row.perm}
                      </td>
                      <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">We do not request permissions beyond what is listed above.</p>
          </Section>

          <Section title="Host permissions">
            <p>DualCap only injects into the following video streaming sites:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["netflix.com", "youtube.com", "disneyplus.com", "primevideo.com", "amazon.com", "hulu.com", "max.com", "mubi.com", "crunchyroll.com"].map((h) => (
                <span key={h} className="platform-chip" style={{ fontSize: 11, padding: "4px 10px" }}>{h}</span>
              ))}
            </div>
            <p className="mt-3">And communicates only with: api.groq.com</p>
            <p className="mt-1">DualCap does not run on any other website.</p>
          </Section>

          <Section title="Children&apos;s privacy">
            DualCap does not knowingly collect any data from anyone, including children. There is no data collection.
          </Section>

          <Section title="Changes to this policy">
            If this policy changes in a meaningful way, we will update the &ldquo;Last updated&rdquo; date at the top and note the change in the extension&apos;s release notes.
          </Section>

          <Section title="Contact">
            <p>If you have any questions about this privacy policy:</p>
            <div className="mt-3">
              <p className="font-medium" style={{ color: "var(--text)" }}>Abhishek Jha</p>
              <a href="mailto:hello@uxabhi.com" style={{ color: "var(--accent)", textDecoration: "none" }}>hello@uxabhi.com</a>
              <br />
              <a href="https://uxabhi.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>uxabhi.com</a>
            </div>
          </Section>
        </div>
      </article>
      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="text-sm font-bold mb-3"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text)", letterSpacing: "0.02em" }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}

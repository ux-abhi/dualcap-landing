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
        <div className="mb-12">
          <div className="section-label mb-5">Legal</div>
          <h1 className="text-4xl font-bold tracking-tight mb-3" style={{ letterSpacing: "-0.025em" }}>Privacy Policy</h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Last updated: May 2026</p>
        </div>

        {/* Short version */}
        <div className="card-glass rounded-xl p-6 mb-10" style={{ borderColor: "rgba(99,102,241,0.2)", background: "rgba(99,102,241,0.06)" }}>
          <p className="text-base font-medium" style={{ color: "#a5b4fc" }}>
            DualCap does not collect your data. It does not track you. It has no servers of its own. Everything stays on your device.
          </p>
        </div>

        <div className="flex flex-col gap-10 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          <Section title="What DualCap does">
            DualCap is a Chrome extension that reads subtitle text from video streaming sites and sends it to Groq&apos;s API to generate translations and grammar explanations. That is the full extent of its external communication.
          </Section>

          <Section title="Data we collect">
            <strong className="text-white">None.</strong> DualCap does not collect, store, transmit, or sell any personal data. There are no analytics, no telemetry, no crash reports, no usage tracking of any kind.
          </Section>

          <Section title="Data sent to third parties">
            <p>The only external service DualCap communicates with is <strong className="text-white">Groq</strong> (api.groq.com).</p>
            <p className="mt-3"><strong className="text-white">What is sent:</strong> the subtitle text currently visible on your screen — the words of the video you are watching — for the purpose of translation and grammar analysis.</p>
            <p className="mt-3"><strong className="text-white">What is not sent:</strong> your identity, browsing history, IP address, device information, account details, or any other personal data.</p>
            <p className="mt-3">Groq processes this text under their own privacy policy, available at groq.com/privacy.</p>
          </Section>

          <Section title="Your Groq API key">
            Your Groq API key is stored locally in Chrome&apos;s built-in sync storage (chrome.storage.sync). It is encrypted and managed by Chrome. It is only ever sent to Groq&apos;s API endpoints — never to DualCap or any other server.
          </Section>

          <Section title="Data stored locally">
            <p>The following is stored on your device only, using Chrome&apos;s storage APIs:</p>
            <ul className="mt-3 flex flex-col gap-1.5 pl-4">
              {["Your Groq API key", "Language preferences (source and target language)", "Display settings (theme, font size, caption position)", "Your saved dictionary entries", "Per-site overlay position"].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span style={{ color: "#818cf8", flexShrink: 0 }}>–</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">None of this leaves your browser except the API key (sent only to Groq).</p>
          </Section>

          <Section title="Permissions and why we need them">
            <div className="mt-2 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <th className="text-left px-4 py-3 font-semibold text-white">Permission</th>
                    <th className="text-left px-4 py-3 font-semibold text-white">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {PERMISSIONS.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < PERMISSIONS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                      <td className="px-4 py-3 font-mono text-xs" style={{ color: "#818cf8" }}>{row.perm}</td>
                      <td className="px-4 py-3" style={{ color: "rgba(255,255,255,0.55)" }}>{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">We do not request permissions beyond what is listed above. We do not request access to your browsing history, microphone, camera, location, or any other sensitive data.</p>
          </Section>

          <Section title="Host permissions">
            <p>DualCap only injects into the following video streaming sites:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["netflix.com", "youtube.com", "disneyplus.com", "primevideo.com", "amazon.com", "hulu.com", "max.com", "mubi.com", "crunchyroll.com"].map((h) => (
                <span key={h} className="platform-chip text-xs" style={{ fontSize: 12, padding: "5px 12px" }}>{h}</span>
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
              <p className="text-white font-medium">Abhishek Jha</p>
              <a href="mailto:hello@uxabhi.com" className="hover:text-white transition-colors">hello@uxabhi.com</a>
              <br />
              <a href="https://uxabhi.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">uxabhi.com</a>
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
      <h2 className="text-base font-semibold text-white mb-3">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

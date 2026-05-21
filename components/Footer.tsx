import Image from "next/image";
import FooterSupportButton from "./FooterSupportButton";

export default function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="DualCap"
                width={28}
                height={28}
                style={{ borderRadius: 6, display: "block" }}
              />
              <span
                className="font-bold text-sm"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text)", letterSpacing: "0.02em" }}
              >
                DualCap
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Learn any language through the shows you already love. Free Chrome extension.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-8 sm:gap-10">
            <div>
              <h4
                className="text-xs font-bold uppercase mb-4"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--text-faint)",
                  letterSpacing: "0.1em",
                }}
              >
                Extension
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <li>
                  <a href="https://chromewebstore.google.com/detail/mcpgmmonidbjafiaffeokmmipfimnkbn" target="_blank" rel="noopener noreferrer" className="nav-link">
                    Add to Chrome
                  </a>
                </li>
                <li><a href="/#how-it-works" className="nav-link">How it works</a></li>
                <li><a href="/#features" className="nav-link">Features</a></li>
                <li><a href="/#faq" className="nav-link">FAQ</a></li>
                <li className="md:hidden"><FooterSupportButton /></li>
              </ul>
            </div>
            <div>
              <h4
                className="text-xs font-bold uppercase mb-4"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--text-faint)",
                  letterSpacing: "0.1em",
                }}
              >
                Legal
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li><a href="/privacy" className="nav-link">Privacy Policy</a></li>
                <li><a href="mailto:hello@uxabhi.com" className="nav-link">Contact</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4
                className="text-xs font-bold uppercase mb-4"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--text-faint)",
                  letterSpacing: "0.1em",
                }}
              >
                Made by
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li><a href="https://uxabhi.com" target="_blank" rel="noopener noreferrer" className="nav-link">uxabhi.com</a></li>
                <li><a href="https://twitter.com/uxabhi_" target="_blank" rel="noopener noreferrer" className="nav-link">@uxabhi_</a></li>
                <li className="pt-1">
                  <a
                    href="https://buymeacoffee.com/abhishekjhx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bmc inline-flex items-center gap-1.5"
                  >
                    ☕ Buy me a coffee
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider mb-6" />

        <div
          className="flex flex-col sm:flex-row justify-between gap-3 text-xs"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--text-faint)",
            letterSpacing: "0.04em",
          }}
        >
          <p>DualCap is an independent project. Not affiliated with Netflix, YouTube, Google, or any streaming platform.</p>
          <p className="flex-shrink-0">© 2026 Abhishek Jha</p>
        </div>
      </div>
    </footer>
  );
}

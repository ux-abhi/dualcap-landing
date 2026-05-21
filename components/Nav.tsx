import Image from "next/image";
import NavClient from "./NavClient";

export default function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0" style={{ textDecoration: "none" }}>
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
        </a>

        {/* Center nav links — desktop only */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="/#how-it-works" className="nav-link">how-it-works</a>
          <a href="/#features" className="nav-link">features</a>
          <a href="/#faq" className="nav-link">faq</a>
          <a href="/privacy" className="nav-link">privacy</a>
          <NavClient />
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="https://buymeacoffee.com/abhishekjhx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bmc hidden lg:flex items-center gap-1.5"
          >
            ☕ coffee
          </a>
          <a
            href="https://chromewebstore.google.com/detail/mcpgmmonidbjafiaffeokmmipfimnkbn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-shrink-0"
            style={{ padding: "8px 14px", fontSize: "11px", width: "auto" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="hidden sm:inline">ADD TO CHROME</span>
            <span className="sm:hidden">INSTALL</span>
          </a>
        </div>
      </div>
    </header>
  );
}

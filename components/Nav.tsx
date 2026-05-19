import NavClient from "./NavClient";

export default function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "rgba(6,6,13,0.75)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#6366f1,#818cf8)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="4" width="12" height="3" rx="1.5" fill="white" opacity="0.9" />
              <rect x="2" y="9" width="8" height="3" rx="1.5" fill="white" opacity="0.55" />
            </svg>
          </div>
          <span className="font-semibold text-base tracking-tight text-white">DualCap</span>
        </a>

        {/* Center nav links — desktop only */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm flex-1 justify-center"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          {/* Support button lives here — client island */}
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
            ☕ Buy me a coffee
          </a>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-shrink-0"
            style={{ padding: "9px 14px", fontSize: "13px", borderRadius: "9px" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="hidden sm:inline">Add to Chrome</span>
            <span className="sm:hidden">Install</span>
          </a>
        </div>
      </div>
    </header>
  );
}

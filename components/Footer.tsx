export default function Footer() {
  return (
    <footer className="relative py-16 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#6366f1,#818cf8)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="4" width="12" height="3" rx="1.5" fill="white" opacity="0.9" />
                  <rect x="2" y="9" width="8" height="3" rx="1.5" fill="white" opacity="0.55" />
                </svg>
              </div>
              <span className="font-semibold text-base tracking-tight text-white">DualCap</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
              Learn any language through the shows you already love. Free Chrome extension.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>Extension</h4>
              <ul className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <li><a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Add to Chrome</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>Legal & contact</h4>
              <ul className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="mailto:hello@uxabhi.com" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>Made by</h4>
              <ul className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <li><a href="https://uxabhi.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">uxabhi.com</a></li>
                <li><a href="https://twitter.com/uxabhi_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@uxabhi_</a></li>
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

        <div className="divider mb-8" />

        <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
          <p>DualCap is an independent project. Not affiliated with Netflix, YouTube, Google, or any streaming platform.</p>
          <p className="flex-shrink-0">© 2026 Abhishek Jha</p>
        </div>
      </div>
    </footer>
  );
}

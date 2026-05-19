"use client";

import { useState } from "react";
import SupportModal from "./SupportModal";

export default function NavClient() {
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <>
      {/* Support link injected into nav — triggered from here */}
      <button
        onClick={() => setSupportOpen(true)}
        className="text-sm transition-colors"
        style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        onMouseOver={e => (e.currentTarget.style.color = "#fff")}
        onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
      >
        Support
      </button>

      <SupportModal open={supportOpen} onClose={() => setSupportOpen(false)} />
    </>
  );
}

"use client";

import { useState } from "react";
import SupportModal from "./SupportModal";

export default function FooterSupportButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hover:text-white transition-colors text-left"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: "inherit", color: "inherit", fontFamily: "inherit" }}
      >
        Support
      </button>
      <SupportModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

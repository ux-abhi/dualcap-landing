"use client";

import { useState } from "react";
import SupportModal from "./SupportModal";

export default function FooterSupportButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="nav-link text-left"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit" }}
      >
        Support
      </button>
      <SupportModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

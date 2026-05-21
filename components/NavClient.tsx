"use client";

import { useState } from "react";
import SupportModal from "./SupportModal";

export default function NavClient() {
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSupportOpen(true)}
        className="nav-link"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit" }}
      >
        support
      </button>
      <SupportModal open={supportOpen} onClose={() => setSupportOpen(false)} />
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function SupportModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  function resetForm() {
    setName(""); setEmail(""); setQuery(""); setStatus("idle"); setErrorMsg("");
  }

  function handleClose() {
    onClose();
    setTimeout(resetForm, 300);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, query }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed z-[100] p-4"
      style={{
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        overflowY: "auto",
      }}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div
        className="relative w-full max-w-md p-7 sm:p-8"
        style={{
          background: "var(--bg-surface)",
          border: "1px solid var(--border)",
          borderTop: "2px solid var(--accent)",
          borderRadius: 2,
          boxShadow: "4px 4px 0 var(--border)",
          animation: "modalIn 0.15s step-end",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="support-title"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center"
          style={{
            background: "var(--bg-raised)",
            border: "1px solid var(--border)",
            borderRadius: 2,
            color: "var(--text-muted)",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div
            className="text-xs font-bold mb-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--accent)", letterSpacing: "0.1em" }}
          >
            // DUALCAP_SUPPORT
          </div>
          <h2
            id="support-title"
            className="text-lg font-bold mb-1"
            style={{ letterSpacing: "-0.02em", color: "var(--text)" }}
          >
            How can we help?
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            We&apos;ll get back to you at your email address.
          </p>
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div className="text-center py-8 flex flex-col items-center gap-4">
            <div
              className="w-12 h-12 flex items-center justify-center"
              style={{ background: "var(--success-bg)", border: "1px solid var(--success-border)", borderRadius: 2 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p
                className="font-bold text-sm mb-1"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text)" }}
              >
                MESSAGE_SENT
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                We&apos;ll reply to{" "}
                <span style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>{email}</span>{" "}
                soon.
              </p>
            </div>
            <button onClick={handleClose} className="btn-ghost" style={{ fontSize: 12, padding: "8px 16px" }}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-bold"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text-faint)", letterSpacing: "0.08em" }}
              >
                NAME
              </label>
              <input
                ref={firstInputRef}
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="support-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-bold"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text-faint)", letterSpacing: "0.08em" }}
              >
                EMAIL
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="support-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-bold"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text-faint)", letterSpacing: "0.08em" }}
              >
                QUERY
              </label>
              <textarea
                placeholder="Describe your issue or question…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
                rows={4}
                className="support-input resize-none"
                style={{ lineHeight: 1.6 }}
              />
            </div>

            {status === "error" && (
              <p
                className="text-xs px-3 py-2"
                style={{
                  background: "var(--danger-bg)",
                  border: "1px solid var(--danger-border)",
                  borderRadius: 2,
                  color: "var(--danger)",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                }}
              >
                ERROR: {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full justify-center mt-1"
              style={{ fontSize: 12, padding: "12px 20px", opacity: status === "loading" ? 0.6 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  SENDING…
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .support-input {
          width: 100%;
          background: var(--bg-raised);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 10px 12px;
          font-size: 14px;
          color: var(--text);
          outline: none;
          font-family: inherit;
          transition: border-color 0s;
        }
        .support-input::placeholder { color: var(--text-faint); }
        .support-input:focus { border-color: var(--accent); }
      `}</style>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { auditLink } from "../lib/site-data";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only trigger once per session
    if (sessionStorage.getItem("vbi-exit-intent")) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("vbi-exit-intent", "true");
        window.removeEventListener("mouseout", handleMouseLeave);
      }
    };

    window.addEventListener("mouseout", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(16, 35, 32, 0.4)",
      backdropFilter: "blur(6px)",
      zIndex: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem"
    }}>
      <div style={{
        backgroundColor: "var(--paper)",
        padding: "3rem 2rem",
        borderRadius: "24px",
        maxWidth: "500px",
        width: "100%",
        textAlign: "center",
        position: "relative",
        boxShadow: "0 24px 60px rgba(16,35,32,0.12)"
      }}>
        <button 
          onClick={() => setShow(false)}
          style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "var(--ink-400)" }}
          aria-label="Close"
        >
          &times;
        </button>
        
        <span className="eyebrow text-accent">Before You Go</span>
        <h2 style={{ marginTop: "1rem" }}>Are you leaving growth on the table?</h2>
        <p style={{ marginTop: "1rem", color: "var(--ink-500)" }}>
          The strongest veterinary businesses run on structure, not guesswork. 
          Use our specialized visibility audit to figure out exactly what your 
          practice needs next.
        </p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
          <a className="button button-primary" href={auditLink} target="_blank" rel="noreferrer">
            Yes, Book My Free Audit
          </a>
          <button 
            onClick={() => setShow(false)} 
            style={{ background: "none", border: "none", color: "var(--ink-400)", cursor: "pointer", textDecoration: "underline", fontSize: "0.95rem" }}
          >
            No thanks, I'm good for now
          </button>
        </div>
      </div>
    </div>
  );
}

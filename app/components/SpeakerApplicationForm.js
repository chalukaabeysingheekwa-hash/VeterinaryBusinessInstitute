"use client";

import { useState } from "react";

export default function SpeakerApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: "2rem", backgroundColor: "var(--background-muted)", borderRadius: "8px", border: "1px solid var(--accent)", textAlign: "center", marginTop: "2rem" }}>
        <h3 style={{ color: "var(--ink-700)", marginBottom: "1rem" }}>Application Received!</h3>
        <p className="muted-text">
          Thank you for your interest in speaking with Veterinary Business Institute. 
          Our production team reviews applications weekly and will reach out if there is a good fit for an upcoming panel or podcast.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem", backgroundColor: "white", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
      <h3 style={{ marginBottom: "0.5rem" }}>Speaker Application Form</h3>
      <p className="muted-text" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Please provide details about your proposed topic and intended veterinary audience.</p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 calc(50% - 1rem)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>Full Name *</label>
          <input type="text" required placeholder="Dr. Jane Smith" style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)" }} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 1rem)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>Email Address *</label>
          <input type="email" required placeholder="name@vetpractice.com" style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)" }} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>Primary Speaking Topic *</label>
        <select required style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", backgroundColor: "white" }}>
          <option value="">Select a Category</option>
          <option value="leadership">Leadership & Culture</option>
          <option value="operations">Operations & Efficiency</option>
          <option value="marketing">Marketing & Client Acquisition</option>
          <option value="finance">Financial Health & Exit Strategy</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>Briefly pitch your talking points (Max 500 characters) *</label>
        <textarea required rows="4" placeholder="What specific problem are you solving for practice owners...?" style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", resize: "vertical" }}></textarea>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>LinkedIn Profile or Speaker Reel URL</label>
        <input type="url" placeholder="https://linkedin.com/in/..." style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)" }} />
      </div>

      <button type="submit" className="button button-primary" style={{ alignSelf: "flex-start", marginTop: "1rem" }}>
        Submit Application
      </button>
    </form>
  );
}

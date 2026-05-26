"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: "2rem", backgroundColor: "var(--background-muted)", borderRadius: "12px", border: "1px solid var(--accent)", textAlign: "center" }}>
        <h3 style={{ color: "var(--ink-700)", marginBottom: "0.5rem" }}>Message Received!</h3>
        <p className="muted-text">
          Thank you for reaching out to the Veterinary Business Institute. 
          A member of our team will review your message and reply within 24-48 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", backgroundColor: "white", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
      <h3 style={{ margin: 0 }}>Send a Direct Message</h3>
      <p className="muted-text" style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>Fill out the form below to route your message directly to our general inbox.</p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 calc(50% - 1rem)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>First Name *</label>
          <input type="text" required placeholder="Jane" style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)" }} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 1rem)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>Last Name</label>
          <input type="text" placeholder="Doe" style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)" }} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>Email Address *</label>
        <input type="email" required placeholder="name@vetpractice.com" style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>Reason for Contact *</label>
        <select required style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", backgroundColor: "white" }}>
          <option value="">Select a reason</option>
          <option value="podcast">Podcast Guest Suggestion</option>
          <option value="webinar">Webinar/Event Question</option>
          <option value="partnership">Sponsorship or Partnership</option>
          <option value="marketing">Marketing/Coaching Inquiry</option>
          <option value="general">General Support</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>Your Message *</label>
        <textarea required rows="5" placeholder="How can we help you today?" style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", resize: "vertical" }}></textarea>
      </div>

      <button type="submit" className="button button-primary" style={{ width: "100%", marginTop: "0.5rem", padding: "1rem" }}>
        Send Message to VBI
      </button>
      
      <p style={{ fontSize: "0.75rem", color: "var(--ink-400)", textAlign: "center", marginTop: "0.5rem" }}>
        By submitting this form, you agree to our Privacy Policy regarding data collection.
      </p>
    </form>
  );
}

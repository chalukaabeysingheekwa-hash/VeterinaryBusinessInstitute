"use client";

import { useMemo, useState } from "react";
import styles from "../community/page.module.css";

export default function NewsletterForm({
  email,
  title = "Subscribe to Our Newsletter",
  description = "Get recurring veterinary business breakdowns, podcast updates, and event notifications sent straight to your inbox.",
  buttonLabel = "Subscribe",
  dark = false,
}) {
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("VBI Newsletter Subscription");
    const body = encodeURIComponent(
      `Please subscribe me to the VBI Newsletter.\nEmail: ${emailInput}`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, emailInput]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // In a real application with a CRM (Mailchimp/ActiveCampaign), 
    // you would POST to your API route here.
    window.location.href = mailtoHref;
  }

  return (
    <div className={`${styles.formShell} ${dark ? styles.formShellDark : ""}`} style={{ maxWidth: "100%", margin: "0" }}>
       <div className={styles.formIntro}>
         <span className="eyebrow text-accent">Newsletter</span>
         <h3>{title}</h3>
         <p>{description}</p>
       </div>
       
       <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "flex-end", marginTop: "1.5rem" }}>
         <label className={styles.formField} style={{ flexGrow: 1, minWidth: "250px", marginBottom: 0 }}>
           <span style={{ marginBottom: "0.25rem" }}>Email Address</span>
           <input 
             type="email" 
             value={emailInput} 
             onChange={(e) => setEmailInput(e.target.value)} 
             required 
             placeholder="practice@example.com"
           />
         </label>
         <button className="button button-primary" type="submit" style={{ flexShrink: 0 }}>
           {buttonLabel}
         </button>
       </form>

       {submitted && (
         <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--accent)" }}>
           Opening email client to confirm subscription. (Hook this to a CRM API later).
         </p>
       )}
    </div>
  );
}

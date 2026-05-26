import Link from "next/link";
import { auditLink } from "../lib/site-data";

export const metadata = {
  title: "Thank You | Veterinary Business Institute",
  description: "Thank you for connecting with the Veterinary Business Institute.",
};

const nextSteps = [
  {
    title: "1. Check your inbox",
    body: "If you signed up for a webinar, lead magnet, or community access, you should receive a confirmation email shortly.",
  },
  {
    title: "2. Listen to a recent podcast",
    body: "While you wait, dive into our latest conversations covering culture, operations, and practice strategy.",
    actionLink: "/podcast",
    actionText: "Listen Now"
  },
  {
    title: "3. Review your market positioning",
    body: "If you're ready for aggressive growth, take a look at our marketing audit strategy led by Ekwa.",
    actionLink: auditLink,
    actionText: "Learn about the Audit",
    external: true
  }
];

export default function ThankYouPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: "3rem" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span className="eyebrow text-accent">Action Confirmed</span>
          <h1 style={{ marginTop: "1rem" }}>
            Thank you for <em>connecting.</em>
          </h1>
          <p className="hero-lead" style={{ marginTop: "1.5rem" }}>
            Your request has been successfully submitted. We appreciate you taking 
            the time to engage with the Veterinary Business Institute. 
            Here is what you should do next.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="step-grid">
            {nextSteps.map((step, idx) => (
               <article className="card step-card" key={step.title} style={{ textAlign: "center" }}>
                 <span className="step-index" style={{ margin: "0 auto", position: "relative", marginBottom: "1rem" }}>
                   0{idx + 1}
                 </span>
                 <h3>{step.title}</h3>
                 <p>{step.body}</p>
                 {step.actionLink && (
                   <div style={{ marginTop: "1.5rem" }}>
                     {step.external ? (
                       <a className="button button-secondary" href={step.actionLink} target="_blank" rel="noreferrer">
                         {step.actionText}
                       </a>
                     ) : (
                       <Link className="button button-secondary" href={step.actionLink}>
                         {step.actionText}
                       </Link>
                     )}
                   </div>
                 )}
               </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

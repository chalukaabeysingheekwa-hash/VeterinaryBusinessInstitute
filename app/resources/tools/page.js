import Link from "next/link";
import { auditLink } from "../../lib/site-data";

export const metadata = {
  title: "Tools | Veterinary Business Institute",
  description: "Veterinary practice growth calculators, operations templates, and strategic tools.",
};

const vbiTools = [
  {
    title: "Practice Valuation Calculator",
    label: "Financial Health",
    description: "A secure, offline-friendly tool to estimate multiple-based valuation targets and growth required for your exit strategy.",
  },
  {
    title: "Retention Cost Estimator",
    label: "Team & Culture",
    description: "Calculate the hard costs of turnover to build a stronger case for culture and associate retention programs.",
  },
  {
    title: "Marketing ROI Forecaster",
    label: "Visibility",
    description: "Map out the client lifetime value (CLV) against local SEO and marketing spend to justify new patient acquisition costs.",
  }
];

export default function ToolsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Resources</span>
            <h1>
              Veterinary Practice <em>Tools.</em>
            </h1>
            <p className="hero-lead">
              Move from theory to math. Use these calculators and strategy 
              frameworks to gain clarity on your practice's financial health, 
              staffing models, and marketing ROI.
            </p>
            <div className="button-row">
              <Link className="button button-secondary" href="/resources">
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-three">
          {vbiTools.map(tool => (
            <article className="card" key={tool.title}>
              <span className="card-label">{tool.label}</span>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <Link href="/contact" className="button button-secondary" style={{ marginTop: "1rem", display: "inline-block" }}>
                Request Access
              </Link>
            </article>
          ))}
        </div>
      </section>
      
      <section className="section section-muted">
        <div className="container page-cta">
          <div>
             <span className="eyebrow text-accent">Next Step</span>
             <h2>Do you need help analyzing your numbers?</h2>
             <p>Our VBI marketing and strategy team can help audit your current performance.</p>
          </div>
          <div className="cta-actions">
            <a href={auditLink} className="button button-primary" target="_blank" rel="noreferrer">
              Ask for an Audit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

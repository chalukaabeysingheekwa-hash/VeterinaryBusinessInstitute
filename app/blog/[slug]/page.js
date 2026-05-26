import Link from "next/link";
import { auditLink } from "../../lib/site-data";

export async function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" },
    { slug: "post-3" },
    { slug: "post-4" },
  ];
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <Link href="/blog" className="text-accent" style={{ textDecoration: "underline", fontSize: "0.9rem" }}>
            &larr; Back to all articles
          </Link>
          <h1 style={{ marginTop: "1rem" }}>
            The Architecture of a Scalable Veterinary Practice: {slug}
          </h1>
          <p className="muted-text" style={{ marginTop: "0.5rem" }}>
            By Naren Arulrajah • 5 min read
          </p>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--ink-700)" }}>
            In modern veterinary practices, patient care often heavily outweighs business 
            strategy until the capacity breaks. When clinics wait until they are overwhelmed 
            to fix operations, the cost of change doubles.
          </p>
          
          <h2 style={{ margin: "2.5rem 0 1rem" }}>1. Fixing Operational Drag</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--ink-700)" }}>
            This occurs when associate veterinarians and front desk staff overlap tasks. 
            Removing administrative friction directly increases clinical outcome capabilities 
            as well as gross revenue without adding headcount.
          </p>

          {/* INLINE CTA AS REQUESTED IN CHECKLIST */}
          <div className="card" style={{ margin: "3rem 0", borderLeft: "4px solid var(--accent)", backgroundColor: "var(--background-muted)" }}>
            <h3>Stop Guessing About Your Market Position</h3>
            <p style={{ margin: "0.5rem 0 1rem" }}>
              Our Ekwa Marketing Audit looks at the six core factors preventing your 
              practice from dominating local search. Use real data, not guesswork.
            </p>
            <a className="button button-primary" href={auditLink} target="_blank" rel="noreferrer">
              Request Your Free Marketing Audit
            </a>
          </div>

          <h2 style={{ margin: "2.5rem 0 1rem" }}>2. Culture acts as a Moat</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--ink-700)" }}>
            It is universally cheaper to retain an A-player DVM than it is to recruit 
            and train a new one. Burnout in the veterinary space is usually structural, 
            not necessarily tied to the workload alone but rather how the workload is processed.
          </p>
        </div>
      </article>
    </>
  );
}

import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import { footerResourceLinks } from "../lib/site-data";

const resourceRoutes = [
  {
    title: "Guest / Speaker",
    body: "Invite VBI into a webinar, panel, or podcast conversation built around veterinary leadership and business growth.",
    href: "/guest-speaker",
  },
  {
    title: "Community",
    body: "See how recurring content and shared conversation points can keep veterinary teams connected to the platform.",
    href: "/community",
  },
  {
    title: "Marketing",
    body: "Move from learning into action with the strategy and visibility offer linked to the institute.",
    href: "/marketing",
  },
];

export const metadata = {
  title: "Resources | Veterinary Business Institute",
  description:
    "Browse the supporting resources, collaboration paths, and practical routes connected to Veterinary Business Institute.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Resources</span>
            <p className="hero-kicker">A clearer hub for next steps beyond the core pages.</p>
            <h1>
              Find the most useful route into VBI’s broader <em>resources.</em>
            </h1>
            <p className="hero-lead">
              This section brings together collaboration opportunities, supporting links, and
              practical pathways for veterinary teams that want more than one content stream.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/guest-speaker">
                Explore Guest / Speaker
              </Link>
              <Link className="button button-secondary" href="/community">
                Visit Community
              </Link>
            </div>
          </div>

          <div className="image-frame">
            <img src={withBasePath("/assets/about-speaker.jpg")} alt="Veterinary education and speaker resources" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-three">
          {resourceRoutes.map((item) => (
            <article className="card route-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link href={item.href}>Explore this section</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">External Links</span>
            <h2>Reference links that support the education platform.</h2>
          </div>
          <div className="grid-three">
            {footerResourceLinks.map((item) => (
              <article className="card route-card" key={item.label}>
                <h3>{item.label}</h3>
                <p>Use this external route when you need direct access to the original source or supporting platform.</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Open resource
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

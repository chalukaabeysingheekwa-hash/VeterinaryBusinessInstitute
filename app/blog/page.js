import Link from "next/link";
import SignalMarquee from "../components/SignalMarquee";
import AnimatedCounter from "../components/AnimatedCounter";
import AttractButton from "../components/AttractButton";
import ParallaxCard from "../components/ParallaxCard";
import { withBasePath } from "../lib/base-path";
import { pillarIcons } from "../lib/pillar-icons";
import {
  auditLink,
  episodes,
  eventPanels,
  focusAreas,
  servicePillars,
  webinars,
} from "../lib/site-data";

export const metadata = {
  title: "Blog & Insights | Veterinary Business Institute",
  description: "Read articles and insights on veterinary business strategy, marketing, and leadership.",
};

const signalRows = [
  [
    { label: "Podcast", title: episodes[0].title, body: episodes[0].summary },
    { label: "Event Panels", title: eventPanels[0].title, body: eventPanels[0].summary },
    { label: "Webinars", title: webinars[0].title, body: webinars[0].summary },
  ],
  focusAreas.map((item) => ({ label: "Focus Area", title: item.title, body: item.body })),
];

const reverseMarqueeItems = [
  "Written Insights",
  "Strategy Articles",
  "Long-form Guides",
  "Tactical Breakdowns",
  "Editorial Analysis",
  "Practice Playbooks",
  "Leadership Essays",
  "Marketing Deep Dives",
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Insights</span>
            <h1>
              Practice Growth <em>Blog.</em>
            </h1>
            <p className="hero-lead">
              Written guides and tactical articles that go deeper into the
              methodologies discussed on our podcast and event panels.
            </p>
          </div>
        </div>
      </section>

      {/* ── Signal Marquee ── */}
      <SignalMarquee heading="Every blog article ties back to a VBI podcast or panel." rows={signalRows} />

      {/* ── Ghost Text Stats ── */}
      <section className="section section-stats-ghost">
        <div className="ghost-text" aria-hidden="true">READ</div>
        <div className="container stats-ghost-grid">
          <div className="stats-ghost-counters">
            <div className="ghost-counter-item">
              <AnimatedCounter end={103} suffix="+" />
              <p>Podcast episodes informing long-form written articles and guides</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={12} />
              <p>Event panel replays translated into written strategic breakdowns</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={16000} suffix="+" duration={2500} />
              <p>Positive testimonials across the Ekwa marketing ecosystem</p>
            </div>
          </div>
          <div className="stats-ghost-copy">
            <span className="eyebrow text-accent">Editorial Philosophy</span>
            <h2>Long-form writing that respects your time.</h2>
            <p>
              The VBI blog is where podcast conversations and panel discussions become durable,
              searchable articles your team can reference, share, and apply in the clinic.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/podcast">
                Listen to the Podcast
              </Link>
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Post List (kept as primary) ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Latest Articles</span>
            <h2>Fresh perspectives on veterinary business growth.</h2>
          </div>
          <div className="grid-two">
            {focusAreas.map((area, idx) => (
              <article className="card" key={idx}>
                <span className="card-label">Category: {area.title}</span>
                <h3 style={{ marginTop: "0.5rem" }}>The fundamental guide to {area.title.toLowerCase()}</h3>
                <p>{area.body}</p>
                <Link className="button button-secondary" href={`/blog/post-${idx + 1}`} style={{ marginTop: "1rem", display: "inline-block" }}>
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8-Pillar Grid ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Topics We Cover</span>
            <h2>Eight pillars of veterinary business education.</h2>
          </div>
          <div className="pillars-grid">
            {servicePillars.map((item) => (
              <Link key={item.title} href={item.href} style={{ display: "block" }}>
                <ParallaxCard as="div" className="card pillar-card" tiltDepth={6}>
                  <div className="pillar-icon">{pillarIcons[item.icon]}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="pillar-arrow">&rarr;</span>
                </ParallaxCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marketing Split ── */}
      <section className="section">
        <div className="container marketing-split">
          <div className="marketing-split-image">
            <img src={withBasePath("/assets/webinar-mar26.jpg")} alt="Veterinary marketing strategy" />
            <div className="marketing-split-badge">
              Insights Informed By Real Marketing Audits
            </div>
          </div>
          <div className="marketing-split-copy">
            <span className="eyebrow text-accent">From Audit to Article</span>
            <h2>Our articles come from the field, not the ad library.</h2>
            <p>
              Every VBI blog post is informed by the patterns we see across podcast guest
              conversations, panel Q&amp;A, and the Ekwa team&apos;s hands-on marketing audits.
            </p>
            <ul className="check-list">
              <li>Tactical breakdowns from the six-factor visibility audit</li>
              <li>Field-tested leadership and retention frameworks</li>
              <li>Written by practitioners, not generic content mills</li>
              <li>Backed by 16,000+ positive testimonials from the Ekwa network</li>
            </ul>
            <div className="button-row">
              <Link className="button button-primary" href="/marketing">
                Explore Marketing
              </Link>
              <a className="button button-secondary" href={auditLink} target="_blank" rel="noreferrer">
                Free SEO Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practice Management 3-Card Row ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Practice Management</span>
            <h2>Built for the realities of running a veterinary practice.</h2>
          </div>
          <div className="practice-mgmt-grid">
            {focusAreas.slice(0, 3).map((item, index) => (
              <ParallaxCard key={item.title} as="article" className="card practice-mgmt-card" tiltDepth={6}>
                <div className="practice-mgmt-icon">
                  {pillarIcons[["users", "briefcase", "trending-up"][index]]}
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="practice-mgmt-tags">
                  {index === 0 && (
                    <>
                      <span className="tag-pill">Leadership</span>
                      <span className="tag-pill">Retention</span>
                      <span className="tag-pill">Culture</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="tag-pill">Staffing</span>
                      <span className="tag-pill">Workflow</span>
                      <span className="tag-pill">Onboarding</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="tag-pill">SEO</span>
                      <span className="tag-pill">Local Search</span>
                      <span className="tag-pill">Growth</span>
                    </>
                  )}
                </div>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── VetTech Dark ── */}
      <section className="section section-dark section-vettech">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">VetTech &amp; Systems</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              Modern tools and systems for smarter veterinary practices.
            </h2>
          </div>
          <div className="vettech-grid">
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.monitor}</div>
              <h3>Practice Management Software</h3>
              <p>Choose the right PIMS and supporting tools to streamline workflows and reduce daily friction.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons["bar-chart"]}</div>
              <h3>Analytics &amp; Reporting</h3>
              <p>Measure what matters — from new client acquisition to retention to marketing ROI.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.target}</div>
              <h3>Automation &amp; Efficiency</h3>
              <p>Automate the repetitive parts of the client journey so your team can focus on patient care.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.shield}</div>
              <h3>Client Experience Systems</h3>
              <p>Design the communication, reminders, and follow-up flows that build trust and loyalty.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Reverse Marquee ── */}
      <div className="reverse-marquee-band">
        <div className="reverse-marquee-track">
          {[...reverseMarqueeItems, ...reverseMarqueeItems].map((item, i) => (
            <span key={i} className="reverse-marquee-item">
              {item}
              <span className="reverse-marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Final CTA ── */}
      <section className="section section-final-cta">
        <div className="ghost-text ghost-text-cta" aria-hidden="true">GROW</div>
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Next Step</span>
            <h2>Take the insights from the page to the practice.</h2>
            <p>
              Reading is step one. Turn the ideas in these articles into a plan with a free
              strategy call built around your clinic&apos;s specific goals.
            </p>
          </div>
          <div className="final-cta-buttons">
            <AttractButton href="/consultation">
              Book Free Strategy Call
            </AttractButton>
            <Link className="button button-secondary button-dark" href="/podcast">
              Listen to the Podcast
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

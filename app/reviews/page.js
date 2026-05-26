import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import {
  auditLink,
  focusAreas,
  servicePillars,
  testimonials,
} from "../lib/site-data";
import { pillarIcons } from "../lib/pillar-icons";
import SignalMarquee from "../components/SignalMarquee";
import ParallaxCard from "../components/ParallaxCard";
import AnimatedCounter from "../components/AnimatedCounter";
import AttractButton from "../components/AttractButton";

const reviewSignalRows = [
  testimonials.slice(0, 3).map((item) => ({
    label: "Testimonial",
    title: item.name,
    body: item.quote,
  })),
  focusAreas.map((item) => ({
    label: "Focus Area",
    title: item.title,
    body: item.body,
  })),
];

const reverseMarqueeItems = [
  "Practice Owners",
  "Hospital Managers",
  "Veterinary Teams",
  "Multi-location Groups",
  "Relief Doctors",
  "Operations Leads",
  "Marketing Managers",
  "Growth Advocates",
  "Independent Clinics",
  "Veterinary Leaders",
];

export const metadata = {
  title: "Reviews | Veterinary Business Institute",
  description:
    "See how veterinary leaders, managers, and teams describe the value of the Veterinary Business Institute platform.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Reviews</span>
            <p className="hero-kicker">What veterinary teams value in the institute.</p>
            <h1>
              Real <em>Stories</em> from<br />
              Veterinary <span className="outline-txt">Leaders.</span>
            </h1>
            <p className="hero-lead">
              Reviews matter because they show whether the content is helping practices think better
              about leadership, operations, client experience, marketing, and growth.
            </p>
            <div className="marketing-seo-image-badge" style={{ position: "relative", display: "inline-flex", margin: "1rem 0" }}>
              &#9733;&#9733;&#9733;&#9733;&#9733; 16,000+ Positive Testimonials
            </div>
            <div className="button-row">
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
              <Link className="button button-secondary" href="/podcast">
                Visit the Podcast
              </Link>
            </div>
          </div>

          <div className="image-frame">
            <img src={withBasePath("/assets/about-team.jpg")} alt="Veterinary professionals reflecting on shared learning" />
            <div className="marketing-seo-image-badge">
              &#9733; Trusted by Veterinary Practices Nationwide
            </div>
          </div>
        </div>
      </section>

      {/* ── Signal Marquee ── */}
      <SignalMarquee
        heading="Real veterinary voices pointing to what actually changes practices."
        rows={reviewSignalRows}
      />

      {/* ── Ghost Text Stats ── */}
      <section className="section section-stats-ghost">
        <div className="ghost-text" aria-hidden="true">TRUST</div>
        <div className="container stats-ghost-grid">
          <div className="stats-ghost-counters">
            <div className="ghost-counter-item">
              <AnimatedCounter end={103} suffix="+" />
              <p>Podcast episodes shared with veterinary practice owners and managers</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={12} />
              <p>Replay-ready event panels hosted with expert veterinary voices</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={16000} suffix="+" duration={2500} />
              <p>Positive testimonials across the Ekwa marketing ecosystem</p>
            </div>
          </div>
          <div className="stats-ghost-copy">
            <span className="eyebrow text-accent">Why It Resonates</span>
            <h2>Reviews tied to practical, in-practice value.</h2>
            <p>
              The strongest feedback comes from teams who used a podcast takeaway, a panel replay,
              or a strategy conversation to change something real in their practice that same week.
            </p>
            <div className="button-row">
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
              <Link className="button button-secondary" href="/events">
                Explore Event Panels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial Grid (kept content) ── */}
      <section className="section section-muted section-about-vbi">
        <div className="about-vbi-ghost-word" aria-hidden="true">REVIEWS</div>
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">What People Say</span>
            <h2>
              Voices from across the <em>veterinary</em> <span className="outline-txt">community.</span>
            </h2>
          </div>
          <div className="practice-mgmt-grid">
            {testimonials.map((item, index) => {
              const iconKeys = ["users", "briefcase", "trending-up", "target", "heart"];
              const practiceType = item.role.split(",")[0]?.trim() || "Veterinary Pro";
              return (
                <ParallaxCard
                  key={item.name}
                  as="article"
                  className="card practice-mgmt-card"
                  tiltDepth={6}
                >
                  <div className="practice-mgmt-icon">
                    {pillarIcons[iconKeys[index % iconKeys.length]]}
                  </div>
                  <div className="practice-mgmt-tags" style={{ marginBottom: "0.75rem" }}>
                    <span className="tag-pill">{"★".repeat(item.rating)}</span>
                  </div>
                  <h3>&ldquo;{item.quote}&rdquo;</h3>
                  <p>
                    <strong>{item.name}</strong>
                    <br />
                    {item.role}
                  </p>
                  <div className="practice-mgmt-tags">
                    <span className="tag-pill">{practiceType}</span>
                    <span className="tag-pill">Verified</span>
                  </div>
                </ParallaxCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8-Pillar Grid ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Where Value Shows Up</span>
            <h2>Eight pillars people keep pointing back to in their feedback.</h2>
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

      {/* ── 4-Card Dark Vettech ── */}
      <section className="section section-dark section-vettech">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Patterns In The Feedback</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              Four qualities people keep responding to across the platform.
            </h2>
          </div>
          <div className="vettech-grid">
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.target}</div>
              <h3>Practical Framing</h3>
              <p>Conversations connect staffing, culture, client experience, and marketing into one business picture.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.users}</div>
              <h3>Useful Guest Voices</h3>
              <p>Guests share usable patterns instead of generic inspiration or surface-level trends.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.monitor}</div>
              <h3>Replay Value</h3>
              <p>Panels and webinars keep working long after the live event because teams revisit the ideas.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.heart}</div>
              <h3>Real Team Impact</h3>
              <p>The strongest reviews mention changes that showed up in staff, clients, or visibility within weeks.</p>
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
        <div className="ghost-text ghost-text-cta" aria-hidden="true">JOIN</div>
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
            <span className="eyebrow text-accent">Ready to Grow?</span>
            <h2 className="final-cta-heading">
              Join the <em>Community</em><br />
              Veterinary Leaders <span className="outline-txt">Trust.</span>
            </h2>
            <p className="final-cta-sub">
              Book your free 30-minute strategy session. We&apos;ll walk you through what&apos;s
              working for the practices behind these reviews, audit your current growth plan,
              and map out the next steps &mdash; at no charge.
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

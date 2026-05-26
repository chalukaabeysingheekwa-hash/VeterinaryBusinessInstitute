import Link from "next/link";
import { auditLink, focusAreas, servicePillars } from "../lib/site-data";
import { pillarIcons } from "../lib/pillar-icons";
import SignalMarquee from "../components/SignalMarquee";
import ParallaxCard from "../components/ParallaxCard";
import AnimatedCounter from "../components/AnimatedCounter";
import AttractButton from "../components/AttractButton";

export const metadata = {
  title: "Book a Free Marketing Strategy Meeting | Veterinary Business Institute",
  description:
    "Schedule a free 60-minute marketing strategy meeting. Our team will invest 4–5 hours preparing a customised plan for your veterinary practice.",
};

const steps = [
  { number: "01", label: "Select a date" },
  { number: "02", label: "Select a time" },
  { number: "03", label: "Fill in your details" },
  { number: "04", label: "Confirm your booking" },
];

const consultationSignalRows = [
  [
    {
      label: "Strategy Call",
      title: "60-minute working session",
      body: "A free, no-commitment strategy meeting with Lila Stone and the Ekwa team built around your practice.",
    },
    {
      label: "Preparation",
      title: "4 to 5 hours of prep work",
      body: "The team invests 4 to 5 hours preparing a customised plan before the call ever begins.",
    },
    {
      label: "Deliverable",
      title: "Practice-specific roadmap",
      body: "A detailed follow-up report with clear recommendations you can implement right away.",
    },
  ],
  focusAreas.map((item) => ({
    label: "Focus Area",
    title: item.title,
    body: item.body,
  })),
];

const reverseMarqueeItems = [
  "Free Strategy Call",
  "No Commitments",
  "Custom Plan",
  "Local SEO",
  "Growth Roadmap",
  "Veterinary Expertise",
  "VIP Team",
  "Real Results",
  "Clear Next Steps",
  "Actionable Insight",
];

export default function ConsultationPage() {
  return (
    <>
      {/* ── Hero (kept) ── */}
      <section className="consult-page-hero">
        <div className="about-vbi-ghost-word" aria-hidden="true">STRATEGY</div>
        <div className="container">
          <div className="consult-hero-inner">
            <span className="consult-hero-pill">Free &middot; 60 Minutes &middot; No Commitments</span>
            <h1 className="consult-hero-h1">
              Book a Free <em>Marketing Strategy</em> <span className="outline-txt">Meeting.</span>
            </h1>
            <p className="consult-hero-sub">
              Learn how you can leverage digital marketing to grow your
              veterinary practice — at no cost, with no commitments attached.
            </p>
            <div className="consult-hero-badge">
              <div className="consult-badge-left">
                <span className="consult-badge-num">4–5</span>
                <span className="consult-badge-unit">hours</span>
              </div>
              <p className="consult-badge-text">
                Lila Stone &amp; her team invest 4–5 hours preparing a
                customised marketing plan for your practice <strong>before</strong> the call.
              </p>
            </div>
            <AttractButton href={auditLink}>
              Book Your Free Meeting
            </AttractButton>
          </div>
        </div>
      </section>

      {/* ── Signal Marquee ── */}
      <SignalMarquee
        heading="What a veterinary strategy conversation with VBI actually delivers."
        rows={consultationSignalRows}
      />

      {/* ── Ghost Text Stats ── */}
      <section className="section section-stats-ghost">
        <div className="ghost-text" aria-hidden="true">PLAN</div>
        <div className="container stats-ghost-grid">
          <div className="stats-ghost-counters">
            <div className="ghost-counter-item">
              <AnimatedCounter end={60} />
              <p>Minutes of focused strategy time with Lila and the Ekwa team</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={5} suffix="h" />
              <p>Hours invested preparing your customised plan before the meeting</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={16000} suffix="+" duration={2500} />
              <p>Positive testimonials across the Ekwa marketing ecosystem</p>
            </div>
          </div>
          <div className="stats-ghost-copy">
            <span className="eyebrow text-accent">Built For Practice Owners</span>
            <h2>A conversation shaped by your practice, not a sales pitch.</h2>
            <p>
              The team reviews your visibility, competition, and growth opportunities before the
              meeting so the hour you spend together is practical, specific, and immediately usable.
            </p>
            <div className="button-row">
              <AttractButton href={auditLink}>
                Free Strategy Call
              </AttractButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You'll Get (marketing-seo-split pattern) ── */}
      <section className="consult-section">
        <div className="container consult-split">

          {/* Left — value props using marketing-seo-list */}
          <div className="consult-value marketing-seo-copy">
            <span className="eyebrow text-accent">What You&rsquo;ll Get</span>
            <h2 className="consult-h2">A plan built around <em>your practice.</em></h2>
            <p className="consult-body">
              Join Lila Stone, Marketing Strategy Advisor at Ekwa Marketing, for
              an informative 60-minute session. Lila and her team will invest 4
              to 5 hours prior to your meeting to develop a customised marketing
              plan tailored specifically to your veterinary practice.
            </p>

            <ul className="marketing-seo-list">
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>Free 60-Minute Strategy Call</strong>
                  <span>A focused, no-commitment working session with Lila Stone and the Ekwa team.</span>
                </div>
              </li>
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>Custom Marketing Audit</strong>
                  <span>4&ndash;5 hours of prep work reviewing your website, rankings, reputation, and local competition.</span>
                </div>
              </li>
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>Clear Next Steps</strong>
                  <span>Specific, prioritized recommendations you can implement in your practice right away.</span>
                </div>
              </li>
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>Follow-Up Roadmap Report</strong>
                  <span>A detailed written report after the call with the full plan &mdash; yours to keep, no strings attached.</span>
                </div>
              </li>
            </ul>

            <div className="consult-promise">
              <strong>After the meeting</strong>, Lila will follow up with a
              detailed report that includes the full plan &mdash; so you can implement
              these recommendations in your practice right away.
            </div>
          </div>

          {/* Right — booking card */}
          <div className="consult-booking-wrap">
            <div className="consult-booking-card">
              <div className="consult-booking-header">
                <span className="consult-booking-tag">How to Book</span>
              </div>
              <div className="consult-steps-grid">
                {steps.map((s) => (
                  <div className="consult-step" key={s.number}>
                    <span className="consult-step-num">{s.number}</span>
                    <span className="consult-step-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="consult-booking-divider" />
              <p className="consult-booking-desc">
                Click below to open the scheduling calendar. Pick a slot that
                works for you and you&rsquo;ll receive a confirmation instantly.
              </p>
              <a
                className="button button-primary consult-booking-btn"
                href={auditLink}
                target="_blank"
                rel="noreferrer"
              >
                Open Scheduling Calendar &rarr;
              </a>
              <p className="consult-booking-note">
                This invaluable opportunity will empower you to enhance your
                online presence and attract a steady stream of new clients.
                Schedule your meeting today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8-Pillar Grid ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">What We Can Discuss</span>
            <h2>Eight areas we can unpack in your strategy call.</h2>
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
            <span className="eyebrow text-accent">Systems We Review</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              The digital systems behind every strategy conversation.
            </h2>
          </div>
          <div className="vettech-grid">
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.monitor}</div>
              <h3>Website &amp; Presence</h3>
              <p>How your site currently performs for visibility, mobile, and conversion in your local market.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons["bar-chart"]}</div>
              <h3>Analytics &amp; Tracking</h3>
              <p>What the numbers say about your client acquisition, ranking trends, and marketing ROI.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.target}</div>
              <h3>Local Search Landscape</h3>
              <p>Who you are competing with in your geography and where the clearest visibility gaps exist.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.shield}</div>
              <h3>Reputation &amp; Trust</h3>
              <p>How your review profile and reputation influence conversion from first impression to booking.</p>
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

      {/* ── Contact strip (kept) ── */}
      <section className="consult-contact-section">
        <div className="container">
          <p className="consult-contact-heading">Have a question?</p>
          <div className="consult-contact-grid">
            <a className="consult-contact-card" href="tel:+18335231845">
              <span className="consult-contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 3.5C2 2.67 2.67 2 3.5 2H6.6C6.95 2 7.26 2.22 7.38 2.55L8.62 5.89C8.72 6.16 8.66 6.47 8.46 6.68L6.94 8.43C7.95 10.55 9.45 12.05 11.57 13.06L13.32 11.54C13.53 11.34 13.84 11.28 14.11 11.38L17.45 12.62C17.78 12.74 18 13.05 18 13.4V16.5C18 17.33 17.33 18 16.5 18C8.5 18 2 11.5 2 3.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              </span>
              <span className="consult-contact-label">(833) 523-1845</span>
            </a>
            <a className="consult-contact-card" href="tel:+12133251745">
              <span className="consult-contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 3.5C2 2.67 2.67 2 3.5 2H6.6C6.95 2 7.26 2.22 7.38 2.55L8.62 5.89C8.72 6.16 8.66 6.47 8.46 6.68L6.94 8.43C7.95 10.55 9.45 12.05 11.57 13.06L13.32 11.54C13.53 11.34 13.84 11.28 14.11 11.38L17.45 12.62C17.78 12.74 18 13.05 18 13.4V16.5C18 17.33 17.33 18 16.5 18C8.5 18 2 11.5 2 3.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              </span>
              <span className="consult-contact-label">(213) 325-1745</span>
            </a>
            <a className="consult-contact-card" href="mailto:team@veterinarybusinessinstitute.com">
              <span className="consult-contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M2 6L10 11L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <span className="consult-contact-label">team@veterinarybusinessinstitute.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section section-final-cta">
        <div className="ghost-text ghost-text-cta" aria-hidden="true">GROWTH</div>
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
            <span className="eyebrow text-accent">Ready to Grow?</span>
            <h2 className="final-cta-heading">
              Stop Leaving Growth<br />
              on the <em>Table.</em>
            </h2>
            <p className="final-cta-sub">
              Book your free 30-minute strategy call. We&apos;ll audit your current marketing,
              show you exactly what&apos;s costing you new clients, and map out a clear plan to
              fix it &mdash; at no charge, with no commitments.
            </p>
          </div>
          <div className="final-cta-buttons">
            <AttractButton href="/consultation">
              Book Free Strategy Call
            </AttractButton>
            <Link className="button button-secondary button-dark" href="/contact">
              Ask a Question First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

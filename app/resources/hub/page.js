import Link from "next/link";
import LeadMagnetForm from "../../components/LeadMagnetForm";
import SignalMarquee from "../../components/SignalMarquee";
import AnimatedCounter from "../../components/AnimatedCounter";
import AttractButton from "../../components/AttractButton";
import ParallaxCard from "../../components/ParallaxCard";
import { withBasePath } from "../../lib/base-path";
import { pillarIcons } from "../../lib/pillar-icons";
import {
  auditLink,
  episodes,
  eventPanels,
  focusAreas,
  freeResources,
  servicePillars,
  webinars,
} from "../../lib/site-data";

export const metadata = {
  title: "Lead Magnet Hub | Veterinary Business Institute",
  description: "Free downloadable resources, templates, and guides for veterinary practices.",
};

const magnets = [
  {
    title: "10-Step Associate Retention Playbook",
    label: "Team Culture",
    body: "A comprehensive PDF guide focusing on onboarding, continuous feedback, and compensation models that actually keep great veterinarians.",
  },
  {
    title: "The Local SEO Checklist",
    label: "Marketing",
    body: "Before you spend on ads, make sure your foundation is solid. Download the 25-point checklist we use during our strategy audits.",
  },
  {
    title: "Cybersecurity Protocol Template",
    label: "Risk & Compliance",
    body: "An adaptable Word document to help you define basic security hygiene for your front desk and clinical staff.",
  },
];

const signalRows = [
  [
    { label: "Podcast", title: episodes[0].title, body: episodes[0].summary },
    { label: "Event Panels", title: eventPanels[0].title, body: eventPanels[0].summary },
    { label: "Webinars", title: webinars[0].title, body: webinars[0].summary },
  ],
  focusAreas.map((item) => ({ label: "Focus Area", title: item.title, body: item.body })),
];

const reverseMarqueeItems = [
  "Free Templates",
  "SOP Libraries",
  "Checklists",
  "Playbooks",
  "Worksheets",
  "Audit Tools",
  "Growth Guides",
  "Leadership Kits",
];

export default function HubPage() {
  return (
    <>
      <section className="page-hero">
        <div className="about-vbi-ghost-word" aria-hidden="true">RESOURCES</div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Resources</span>
            <h1>
              Free <span className="outline-txt">Downloads</span> & <em>Guides.</em>
            </h1>
            <p className="hero-lead">
              We translate our podcast ideas and event panels into actionable,
              downloadable templates and playbooks. Access our central hub of
              free resources below.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tools Teaser (DL pattern) ── */}
      <section className="section tools-teaser-sec">
        <div className="container">
          <div className="tools-teaser-grid">
            {/* Left: copy */}
            <div className="tools-teaser-copy">
              <div className="tools-teaser-badge">
                <span className="tools-teaser-dot" /> Free Veterinary Tools
              </div>
              <span className="eyebrow text-accent">Templates &amp; Practical Resources</span>
              <h2 className="tools-teaser-heading">
                Resources That<br />
                <em>Actually Move</em><br />
                Veterinary Practices Forward
              </h2>
              <p className="tools-teaser-lead">
                Specialized checklists, SOPs, and playbooks built for how veterinary
                owners actually think &mdash; team retention, onboarding flows, local
                SEO audits, and growth scorecards. Free access for veterinary professionals.
              </p>
              <div className="tools-teaser-lock-note">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="11" rx="2" stroke="#c6f800" strokeWidth="1.8" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#c6f800" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="12" cy="16.5" r="1.5" fill="#c6f800" />
                </svg>
                <span>Quick sign-up with your name, practice &amp; email &mdash; then instant free access to every resource.</span>
              </div>
              <div className="button-row" style={{ marginTop: 28 }}>
                <Link className="button button-primary" href="/resources/tools">
                  Explore All Tools &rarr;
                </Link>
                <Link className="button button-secondary" href="/community">
                  Sign Up Free
                </Link>
              </div>
            </div>

            {/* Right: 2x2 tool preview cards */}
            <div className="tools-teaser-right">
              {freeResources.slice(0, 4).map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`tool-preview-card ${index === 0 ? "featured" : ""}`}
                >
                  <div className="tool-preview-icon">{pillarIcons[item.icon]}</div>
                  <div className="tool-preview-name">{item.title}</div>
                  <div className="tool-preview-desc">{item.body}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Signal Marquee ── */}
      <SignalMarquee heading="Every VBI idea has a downloadable companion." rows={signalRows} />

      {/* ── Ghost Text Stats ── */}
      <section className="section section-stats-ghost">
        <div className="ghost-text" aria-hidden="true">TOOLS</div>
        <div className="container stats-ghost-grid">
          <div className="stats-ghost-counters">
            <div className="ghost-counter-item">
              <AnimatedCounter end={25} suffix="+" />
              <p>Downloadable templates, checklists, and worksheets across every pillar</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={8} />
              <p>Topic pillars represented across the free resource library</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={16000} suffix="+" duration={2500} />
              <p>Positive testimonials across the Ekwa marketing ecosystem</p>
            </div>
          </div>
          <div className="stats-ghost-copy">
            <span className="eyebrow text-accent">Built for Veterinary Teams</span>
            <h2>Practical tools you can put to work this week.</h2>
            <p>
              The VBI resource hub turns podcast insights and panel discussions into tangible
              templates, SOPs, and playbooks your team can actually use in the clinic.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/about">
                Our Story
              </Link>
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Primary Resource Grid (kept) ── */}
      <section className="section section-resources">
        <div className="ghost-text ghost-text-alt" aria-hidden="true">FREE</div>
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Free Resources</span>
            <h2>Download a resource, then grab a lead magnet.</h2>
          </div>
          <div className="resources-grid">
            {freeResources.map((item, index) => (
              <Link key={item.title} href={item.href} style={{ display: "block" }}>
                <ParallaxCard
                  as="div"
                  className={`card resource-card ${index === 0 ? "resource-card-featured" : ""}`}
                  tiltDepth={6}
                >
                  <div className="resource-icon">{pillarIcons[item.icon]}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </ParallaxCard>
              </Link>
            ))}
          </div>

          <div className="grid-three" style={{ marginTop: "3rem" }}>
            {magnets.map((mag) => (
              <article className="card" key={mag.title}>
                <span className="card-label">{mag.label}</span>
                <h3>{mag.title}</h3>
                <p>{mag.body}</p>
                <LeadMagnetForm title={mag.title} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8-Pillar Grid ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">What We Cover</span>
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
            <img src={withBasePath("/assets/webinar-mar26.jpg")} alt="Veterinary resource library" />
            <div className="marketing-split-badge">
              Templates Built From Real Practice Experience
            </div>
          </div>
          <div className="marketing-split-copy">
            <span className="eyebrow text-accent">Resource Library</span>
            <h2>Every resource is road-tested in real veterinary practices.</h2>
            <p>
              These aren&apos;t generic business downloads. Each template, checklist, and SOP
              has been shaped by podcast guests, panel discussions, and the Ekwa marketing team&apos;s
              day-to-day work with veterinary practices.
            </p>
            <ul className="check-list">
              <li>SOPs built from our operations and staffing conversations</li>
              <li>Checklists distilled from the six-factor marketing audit</li>
              <li>Worksheets aligned to every VBI topic pillar</li>
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
            <span className="eyebrow text-accent">Ready to Grow?</span>
            <h2 className="final-cta-heading">
              Turn Free Resources Into<br />
              Real <em>Practice Growth.</em>
            </h2>
            <p className="final-cta-sub">
              Book your free 30-minute strategy session. We&apos;ll review which templates fit
              your clinic, audit your current marketing and operations, and map out a clear plan
              to put these resources to work &mdash; at no charge.
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

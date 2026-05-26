import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import { pillarIcons } from "../lib/pillar-icons";
import {
  eventPanels,
  focusAreas,
  panelFolderLink,
  panelThemes,
  servicePillars,
} from "../lib/site-data";
import SignalMarquee from "../components/SignalMarquee";
import ParallaxCard from "../components/ParallaxCard";
import AnimatedCounter from "../components/AnimatedCounter";
import AttractButton from "../components/AttractButton";

const signalRows = [
  [
    { label: "Panel", title: eventPanels[0].title, body: eventPanels[0].summary },
    { label: "Panel", title: eventPanels[1].title, body: eventPanels[1].summary },
    { label: "Panel", title: eventPanels[2].title, body: eventPanels[2].summary },
  ],
  panelThemes.map((item) => ({
    label: "Theme",
    title: item.title,
    body: item.body,
  })),
];

const reverseMarqueeItems = [
  "Leadership Panels",
  "Risk & Compliance",
  "Client Experience",
  "Succession Planning",
  "Team Wellbeing",
  "Culture Discussions",
  "Storytelling & Brand",
  "AI & Efficiency",
  "Workforce Futures",
  "Growth Mapping",
];

function toIsoDate(value) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().split("T")[0];
}

function toIsoDuration(value) {
  const parts = value.split(":").map((item) => Number.parseInt(item, 10));
  if (parts.some((item) => Number.isNaN(item))) {
    return undefined;
  }

  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;
    return `PT${hours}H${minutes}M${seconds}S`;
  }

  if (parts.length === 2) {
    const [minutes, seconds] = parts;
    return `PT${minutes}M${seconds}S`;
  }

  return undefined;
}

export const metadata = {
  title: "Events | Veterinary Business Institute",
  description:
    "Browse veterinary event panels with direct Vimeo replay links, topic coverage, and curated summaries.",
};

export default function EventsPage() {
  const featuredPanel = eventPanels[0];
  const eventsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Veterinary Event Panels",
    description:
      "A replay archive of veterinary leadership, management, client communication, technology, and financial health panels.",
    hasPart: {
      "@type": "ItemList",
      name: "Event panel archive",
      itemListElement: eventPanels.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "VideoObject",
          name: item.title,
          url: item.href,
          uploadDate: toIsoDate(item.date),
          duration: toIsoDuration(item.duration),
          description: item.summary,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }}
      />
      <section className="page-hero" style={{ position: "relative", overflow: "hidden" }}>
        <div className="about-vbi-ghost-word" aria-hidden="true">EVENTS</div>
        <div className="container hero-grid" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-copy">
            <span className="eyebrow text-accent">Veterinary Event Panels</span>
            <p className="hero-kicker">Recurring conversations on leadership, communication, compliance, and growth.</p>
            <h1>
              Panel <em>conversations</em> that make the platform feel more <span className="outline-txt">alive.</span>
            </h1>
            <p className="hero-lead">
              These recurring event panels turn VBI into more than a podcast and replay archive. They
              add current, topic-specific conversations across leadership, marketing, compliance,
              wellbeing, technology, client communication, and financial health.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={featuredPanel.href} target="_blank" rel="noreferrer">
                Watch Latest Panel
              </a>
              <a className="button button-secondary" href={panelFolderLink} target="_blank" rel="noreferrer">
                Open Vimeo Folder
              </a>
            </div>
          </div>

          <div className="image-frame">
            <img src={featuredPanel.image} alt={featuredPanel.title} />
          </div>
        </div>
      </section>

      {/* ── Signal Marquee ── */}
      <SignalMarquee heading="Panel conversations move across the page as one living editorial system." rows={signalRows} />

      {/* ── Ghost Text Stats ── */}
      <section className="section section-stats-ghost">
        <div className="ghost-text" aria-hidden="true">PANELS</div>
        <div className="container stats-ghost-grid">
          <div className="stats-ghost-counters">
            <div className="ghost-counter-item">
              <AnimatedCounter end={12} />
              <p>Replay-ready event panels hosted on Vimeo with expert veterinary voices</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={8} suffix="+" />
              <p>Recurring themes across leadership, compliance, wellbeing, and growth</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={60} suffix=" min" />
              <p>Average panel runtime packed with practical takeaways for veterinary teams</p>
            </div>
          </div>
          <div className="stats-ghost-copy">
            <span className="eyebrow text-accent">Built for Veterinary Leaders</span>
            <h2>A living replay archive built for veterinary decision-makers.</h2>
            <p>
              Each panel gives teams current, topic-specific conversation on the issues shaping
              practice leadership, operations, and growth. Watch on your schedule, share with your team.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={panelFolderLink} target="_blank" rel="noreferrer">
                Open Vimeo Folder
              </a>
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8 Pillars Grid ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Panel Coverage</span>
            <h2>Eight themes our panels return to across every quarter.</h2>
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

      {/* ── Featured Panel Dark (existing primary) ── */}
      <section className="section section-dark">
        <div className="container">
          <article className="card card-dark feature-panel">
            <div className="panel-head">
              <span className="eyebrow text-accent">Featured Panel</span>
              <span className="meta-text">
                {featuredPanel.date} / {featuredPanel.duration}
              </span>
            </div>
            <div className="media-panel">
              <img src={featuredPanel.image} alt={featuredPanel.title} />
              <div>
                <h2>{featuredPanel.title}</h2>
                <p>{featuredPanel.summary}</p>
                <ul className="check-list">
                  <li>{featuredPanel.subtitle}</li>
                  <li>Category: {featuredPanel.category}</li>
                  <li>Direct replay access for immediate viewing.</li>
                </ul>
                <div className="button-row">
                  <a className="button button-primary" href={featuredPanel.href} target="_blank" rel="noreferrer">
                    Watch Panel
                  </a>
                  <Link className="button button-secondary button-dark" href="/webinars">
                    Compare Webinar Replays
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Marketing Split ── */}
      <section className="section">
        <div className="container marketing-split">
          <div className="marketing-split-image">
            <img src={withBasePath("/assets/panels/panel-02.jpg")} alt="Veterinary panel discussion" />
            <div className="marketing-split-badge">
              Watch, Learn, Then Apply
            </div>
            <div className="marketing-seo-image-badge">
              ★ Trusted by Veterinary Practices Nationwide
            </div>
          </div>
          <div className="marketing-split-copy">
            <span className="eyebrow text-accent">Panel-Driven Learning</span>
            <h2>From panel discussion to practice decision.</h2>
            <p>
              VBI panels exist to bridge the gap between broad industry discussion and the decisions
              practice owners have to make this quarter.
            </p>
            <ul className="marketing-seo-list">
              <li>Recurring panel cadence that keeps topics current and relevant</li>
              <li>Multiple voices on every issue to give teams real perspective</li>
              <li>Direct Vimeo replay access, share links, and team viewing support</li>
              <li>Clear route from panel watching into strategy conversations</li>
            </ul>
            <div className="button-row">
              <Link className="button button-primary" href="/marketing">
                Explore Marketing
              </Link>
              <Link className="button button-secondary" href="/podcast">
                Go to Podcast
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Panel Archive (primary content) ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Panel Archive</span>
            <h2>Twelve event panels organized as a browseable replay collection.</h2>
          </div>
          <div className="grid-two">
            {eventPanels.map((item) => (
              <article className="card archive-card" key={item.slug}>
                <img src={item.image} alt={item.title} />
                <span className="card-label">
                  {item.date} / {item.duration}
                </span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className="muted-text">{item.subtitle}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Watch Panel
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3-Card Practice Mgmt Row ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Why Panels Matter</span>
            <h2>Three reasons panels give VBI a repeatable editorial rhythm.</h2>
          </div>
          <div className="practice-mgmt-grid">
            {panelThemes.map((item, index) => (
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
                      <span className="tag-pill">Culture</span>
                      <span className="tag-pill">Teams</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="tag-pill">Clients</span>
                      <span className="tag-pill">Communication</span>
                      <span className="tag-pill">Experience</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="tag-pill">AI</span>
                      <span className="tag-pill">Growth</span>
                      <span className="tag-pill">Efficiency</span>
                    </>
                  )}
                </div>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4-Card Dark VetTech ── */}
      <section className="section section-dark section-vettech">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Panel Categories</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              Four categories that shape every VBI panel conversation.
            </h2>
          </div>
          <div className="vettech-grid">
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.users}</div>
              <h3>Leadership &amp; Culture</h3>
              <p>Panels on conflict, decision-making, and the leadership posture practices need under pressure.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.heart}</div>
              <h3>Client Experience</h3>
              <p>Sessions on difficult conversations, trust-building, and improving the overall client journey.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.shield}</div>
              <h3>Risk &amp; Compliance</h3>
              <p>Panels on cybersecurity, data protection, and operational risk for modern veterinary clinics.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons["dollar-sign"]}</div>
              <h3>Financial Health</h3>
              <p>Discussions on succession, valuation, expansion timing, and the money side of veterinary practice.</p>
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
        <div className="ghost-text ghost-text-cta" aria-hidden="true">WATCH</div>
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Ready to Grow?</span>
            <h2 className="final-cta-heading">
              Panels work best as a bridge into <em>real strategy.</em>
            </h2>
            <p className="final-cta-sub">
              Watch the panels that match your biggest questions, then move into a strategy call
              when your practice is ready for sharper visibility, growth planning, and stronger
              systems. VBI turns recurring conversation into a repeatable decision-making rhythm
              for leadership teams ready to move from insight to action.
            </p>
          </div>
          <div className="final-cta-buttons">
            <AttractButton href="/consultation">
              Book Free Strategy Call
            </AttractButton>
            <a className="button button-secondary button-dark" href={panelFolderLink} target="_blank" rel="noreferrer">
              Open Vimeo Folder
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

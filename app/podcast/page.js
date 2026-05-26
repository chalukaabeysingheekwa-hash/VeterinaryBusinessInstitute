import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import { pillarIcons } from "../lib/pillar-icons";
import {
  episodes,
  focusAreas,
  hosts,
  listeningPlatforms,
  podcastHubLink,
  servicePillars,
  socialLinks,
  webinars,
  eventPanels,
} from "../lib/site-data";
import SignalMarquee from "../components/SignalMarquee";
import ParallaxCard from "../components/ParallaxCard";
import AnimatedCounter from "../components/AnimatedCounter";
import AttractButton from "../components/AttractButton";

const signalRows = [
  [
    { label: "Podcast", title: episodes[0].title, body: episodes[0].summary },
    { label: "Podcast", title: episodes[1].title, body: episodes[1].summary },
    { label: "Podcast", title: episodes[2].title, body: episodes[2].summary },
  ],
  [
    { label: "Host", title: hosts[0].name, body: hosts[0].body },
    { label: "Host", title: hosts[1].name, body: hosts[1].body },
    { label: "Host", title: hosts[2].name, body: hosts[2].body },
  ],
];

const reverseMarqueeItems = [
  "Relief Staffing",
  "Leadership Culture",
  "Client Experience",
  "Marketing Visibility",
  "Financial Resilience",
  "Team Retention",
  "Practice Continuity",
  "Operational Efficiency",
];

export const metadata = {
  title: "Podcast | Veterinary Business Institute",
  description:
    "Explore the Veterinary Business Podcast with featured episodes, host profiles, and practical veterinary business topics.",
};

export default function PodcastPage() {
  const featuredEpisode = episodes[0];
  const featuredHost = hosts[0];

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Veterinary Business Podcast</span>
            <p className="hero-kicker">Leadership, staffing, marketing, and growth conversations for veterinary teams.</p>
            <h1>
              Conversations that help <em>practices</em> grow with more <span className="outline-txt">clarity.</span>
            </h1>
            <p className="hero-lead">
              The Veterinary Business Podcast brings together practical conversations around relief
              staffing, client experience, team leadership, technology, and practice growth so
              listeners can move from broad ideas to practical decisions.
            </p>
            <div className="platform-row">
              {listeningPlatforms.map((item) => (
                <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="image-frame">
            <img src={withBasePath("/assets/episode-103.jpg")} alt="Veterinary Business Podcast episode cover art" />
          </div>
        </div>
      </section>

      {/* ── Signal Marquee ── */}
      <SignalMarquee heading="The podcast archive now moves across the page as one living editorial system." rows={signalRows} />

      {/* ── Ghost Text Stats ── */}
      <section className="section section-stats-ghost">
        <div className="ghost-text" aria-hidden="true">PODCAST</div>
        <div className="container stats-ghost-grid">
          <div className="stats-ghost-counters">
            <div className="ghost-counter-item">
              <AnimatedCounter end={103} suffix="+" />
              <p>Episodes released with veterinary business leaders, operators, and strategists</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={4} />
              <p>Hosts bringing leadership, operations, and marketing perspectives to every conversation</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={16000} suffix="+" duration={2500} />
              <p>Positive testimonials from the broader Ekwa marketing ecosystem</p>
            </div>
          </div>
          <div className="stats-ghost-copy">
            <span className="eyebrow text-accent">Built for Veterinary Leaders</span>
            <h2>Years of veterinary business wisdom, one episode at a time.</h2>
            <p>
              Every episode is designed to help practice owners, managers, and growth-minded
              veterinary teams turn broad industry ideas into decisions they can act on this week.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={podcastHubLink} target="_blank" rel="noreferrer">
                Open Live Archive
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
            <span className="eyebrow text-accent">What We Cover</span>
            <h2>Eight recurring themes across the podcast catalog.</h2>
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

      {/* ── Featured Episode Dark Panel (existing primary content) ── */}
      <section className="section section-dark">
        <div className="container">
          <article className="card card-dark feature-panel">
            <div className="panel-head">
              <span className="eyebrow text-accent">Featured Episode</span>
              <span className="meta-text">{featuredEpisode.date}</span>
            </div>
            <div className="media-panel">
              <img src={featuredEpisode.image} alt={featuredEpisode.title} />
              <div>
                <h2>{featuredEpisode.title}</h2>
                <p>{featuredEpisode.summary}</p>
                <ul className="check-list">
                  <li>How relief doctors fit into a more strategic staffing model.</li>
                  <li>What continuity looks like when practices stop reacting week to week.</li>
                  <li>Why stronger onboarding and feedback loops improve outcomes.</li>
                </ul>
                <div className="button-row">
                  <a className="button button-primary" href={featuredEpisode.href} target="_blank" rel="noreferrer">
                    Listen to Episode 103
                  </a>
                  <a className="button button-secondary button-dark" href={podcastHubLink} target="_blank" rel="noreferrer">
                    Open Live Archive
                  </a>
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
            <img src={withBasePath("/assets/webinar-mar26.jpg")} alt="Veterinary marketing strategy" />
            <div className="marketing-split-badge">
              Listen, Learn, Then Grow
            </div>
            <div className="marketing-seo-image-badge">
              &#9733; Trusted by Veterinary Practices Nationwide
            </div>
          </div>
          <div className="marketing-split-copy">
            <span className="eyebrow text-accent">From Listening to Action</span>
            <h2>Turn weekly listening into measurable practice momentum.</h2>
            <p>
              The podcast is only the first step. Listeners who apply the frameworks typically pair
              the episodes with marketing support, team coaching, and stronger operating systems.
            </p>
            <ul className="check-list">
              <li>Weekly episodes that translate into practical leadership moves</li>
              <li>Supporting panel replays and webinar library for deeper dives</li>
              <li>Hosts connected to the realities of running veterinary practices</li>
              <li>A clear path into strategy support when your team is ready</li>
            </ul>
            <div className="button-row">
              <Link className="button button-primary" href="/marketing">
                Explore Marketing
              </Link>
              <Link className="button button-secondary" href="/webinars">
                Go to Webinars
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Podcast Spotlight (hosts + episodes) ── */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">The Podcast</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              {episodes.length} episodes of veterinary business leadership.
            </h2>
          </div>

          <div className="podcast-spotlight-grid">
            <ParallaxCard as="div" className="card card-dark podcast-host-card" tiltDepth={4} shadowStrength={0.2}>
              <div className="podcast-host-header">
                <img className="podcast-host-avatar" src={featuredHost.image} alt={featuredHost.name} />
                <div className="podcast-host-meta">
                  <span className="eyebrow text-accent">Your Host</span>
                  <h3>{featuredHost.name}</h3>
                  <p className="muted-text">{featuredHost.role}</p>
                </div>
              </div>
              <p>{featuredHost.body}</p>
              <div className="podcast-host-socials">
                {socialLinks.slice(0, 3).map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-pill">
                    {link.label}
                  </a>
                ))}
                <Link href="/guest-speaker" className="social-pill">
                  Be a Guest
                </Link>
              </div>
            </ParallaxCard>

            <div className="podcast-episodes-col">
              {episodes.slice(0, 3).map((ep) => (
                <a key={ep.number} href={ep.href} target="_blank" rel="noreferrer" style={{ display: "block" }}>
                  <ParallaxCard as="article" className="card card-dark podcast-ep-card" tiltDepth={5} shadowStrength={0.15}>
                    <img className="podcast-ep-thumb" src={ep.image} alt={`Episode ${ep.number}`} />
                    <div className="podcast-ep-info">
                      <span className="podcast-ep-badge">EP {ep.number}</span>
                      <h4>{ep.title}</h4>
                      <p>{ep.date}</p>
                    </div>
                  </ParallaxCard>
                </a>
              ))}
            </div>
          </div>

          <div className="podcast-platforms">
            <span>Listen on:</span>
            {listeningPlatforms.map((p) => (
              <a key={p.label} href={p.href} target="_blank" rel="noreferrer" className="platform-pill">
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Episode Archive (photo grid) ── */}
      <section className="section section-ep-photo">
        <div className="about-vbi-ghost-word" aria-hidden="true">ARCHIVE</div>
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Recent Listening</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              Every recent <em>episode</em> with summaries, dates, and <span className="outline-txt">quick access.</span>
            </h2>
          </div>
          <div className="ep-photo-grid">
            {episodes.slice(0, 9).map((ep) => (
              <a
                key={ep.number}
                href={ep.href}
                target="_blank"
                rel="noreferrer"
                className="ep-photo-card"
              >
                <div className="ep-photo-thumb">
                  <img src={ep.image} alt={`Episode ${ep.number}`} />
                </div>
                <span className="ep-photo-badge">EPISODE {ep.number}</span>
                <h3>{ep.title}</h3>
                <p className="ep-photo-date">{ep.date}</p>
              </a>
            ))}
          </div>

          {/* Host spotlight inline row */}
          <div className="pod-host-row">
            <img className="pod-host-img" src={featuredHost.image} alt={featuredHost.name} />
            <div className="pod-host-info">
              <span className="pod-host-label">Your Host</span>
              <h3>{featuredHost.name}</h3>
              <p className="pod-host-role">{featuredHost.role}</p>
              <p className="pod-host-bio">{featuredHost.body}</p>
              <div className="pod-host-links">
                {socialLinks.slice(0, 2).map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="pod-host-pill">
                    {link.label}
                  </a>
                ))}
                <Link href="/guest-speaker" className="pod-host-pill pod-host-pill-accent">
                  Be a Guest &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Listen on platforms bar */}
          <div className="pod-platforms-row">
            <span className="pod-platforms-label">Listen on:</span>
            {listeningPlatforms.map((p) => (
              <a key={p.label} href={p.href} target="_blank" rel="noreferrer" className="pod-platform-pill">
                {p.label}
              </a>
            ))}
            <a href={podcastHubLink} target="_blank" rel="noreferrer" className="button button-primary pod-platforms-cta">
              All Episodes &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── 3-Card Practice Mgmt Row ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Recurring Conversations</span>
            <h2>Three themes our hosts return to in almost every episode.</h2>
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

      {/* ── 4-Card Dark VetTech ── */}
      <section className="section section-dark section-vettech">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">VetTech &amp; Systems</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              Episode topics that help teams choose the right tools and systems.
            </h2>
          </div>
          <div className="vettech-grid">
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.monitor}</div>
              <h3>Practice Management Software</h3>
              <p>Episodes on choosing a PIMS and supporting stack that reduces daily friction.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons["bar-chart"]}</div>
              <h3>Analytics &amp; Reporting</h3>
              <p>Conversations on measuring acquisition, retention, and marketing ROI with discipline.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.target}</div>
              <h3>Automation &amp; Efficiency</h3>
              <p>Interviews on automating repetitive parts of the client journey and team workflows.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.shield}</div>
              <h3>Client Experience Systems</h3>
              <p>Episodes on communication, reminders, and follow-up flows that build loyalty.</p>
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
        <div className="ghost-text ghost-text-cta" aria-hidden="true">LISTEN</div>
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
            <span className="eyebrow text-accent">Ready to Grow?</span>
            <h2 className="final-cta-heading">
              Turn Weekly Listening<br />
              into Real <em>Momentum.</em>
            </h2>
            <p className="final-cta-sub">
              Book your free 30-minute strategy session. We&apos;ll audit your current marketing,
              show you exactly what&apos;s costing you new clients, and map out a clear plan to fix
              it &mdash; at no charge.
            </p>
          </div>
          <div className="final-cta-buttons">
            <AttractButton href="/consultation">
              Book Free Strategy Call &rarr;
            </AttractButton>
            <a className="button button-secondary button-dark" href={podcastHubLink} target="_blank" rel="noreferrer">
              View Live Podcast Site
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

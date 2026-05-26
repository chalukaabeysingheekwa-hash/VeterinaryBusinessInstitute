import Link from "next/link";
import CommunityJoinForm from "./CommunityJoinForm";
import styles from "./page.module.css";
import {
  contactDetails,
  focusAreas,
  servicePillars,
} from "../lib/site-data";
import { withBasePath } from "../lib/base-path";
import { pillarIcons } from "../lib/pillar-icons";
import SignalMarquee from "../components/SignalMarquee";
import ParallaxCard from "../components/ParallaxCard";
import AnimatedCounter from "../components/AnimatedCounter";
import AttractButton from "../components/AttractButton";

const signalRows = [
  focusAreas.map((item) => ({ label: "Focus Area", title: item.title, body: item.body })),
  [
    { label: "Community", title: "Podcast-first updates", body: "Stay close to the recurring VBI conversations and never miss an episode." },
    { label: "Community", title: "Panel and webinar access", body: "The easiest path into fresh event panels and replay-ready education." },
    { label: "Community", title: "Direct connection to VBI", body: "A softer entry point for collaboration, follow-up questions, and staying in view." },
  ],
];

const reverseMarqueeItems = [
  "Community Forum",
  "Podcast Updates",
  "Event Panels",
  "Webinar Replays",
  "Member Portal",
  "Practice Growth",
  "Peer Discussion",
  "Leadership",
  "Marketing",
  "Operations",
];

export const metadata = {
  title: "Community Hub | Veterinary Business Institute",
  description:
    "A VBI community hub for veterinary leaders, managers, and growth-minded teams following podcasts, panels, webinar replays, and practical business education.",
};

export default function CommunityPage() {
  const contactEmail = contactDetails[2].label;

  return (
    <>
      <section className="page-hero section-about-vbi">
        <div className="about-vbi-ghost-word" aria-hidden="true">COMMUNITY</div>
        <div className={`container hero-grid ${styles.heroGrid}`}>
          <div className="hero-copy">
            <span className="eyebrow text-accent">VBI Community Hub</span>
            <p className="hero-kicker">Free to follow. Built for veterinary leaders who want stronger business conversations.</p>
            <h1>
              A community layer for veterinary teams building <em>stronger</em> <span className="outline-txt">practices.</span>
            </h1>
            <p className="hero-lead">
              Veterinary Business Institute works best when podcast episodes, panel replays,
              webinar education, and follow-on conversations all point to the same next step.
              This hub gives owners, managers, and growth-minded teams one place to stay connected.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/community/forum">
                Enter Member Portal
              </Link>
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Signal Marquee ── */}
      <SignalMarquee heading="The community hub keeps the strongest VBI ideas moving across the platform." rows={signalRows} />

      {/* ── Ghost Text Stats Section ── */}
      <section className="section section-stats-ghost">
        <div className="ghost-text" aria-hidden="true">HUB</div>
        <div className="container stats-ghost-grid">
          <div className="stats-ghost-counters">
            <div className="ghost-counter-item">
              <AnimatedCounter end={103} suffix="+" />
              <p>Podcast episodes the community stays connected to, all in one place</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={12} />
              <p>Event panels routed through the community for easier discovery</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={16000} suffix="+" duration={2500} />
              <p>Positive testimonials across the VBI and Ekwa marketing ecosystem</p>
            </div>
          </div>
          <div className="stats-ghost-copy">
            <span className="eyebrow text-accent">Why the Community</span>
            <h2>One connected place for veterinary leaders who think beyond the next task.</h2>
            <p>
              The hub brings podcasts, panels, replays, and resources into a single flow so
              owners, managers, and growth-minded teams can keep moving instead of hitting
              dead ends between platforms.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="#join-hub">
                Join the Hub
              </Link>
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Pillars Grid ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">What the Community Covers</span>
            <h2>Eight pillars of veterinary business education inside the hub.</h2>
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

      {/* ── Marketing Split (Primary Community Content: Join Form) ── */}
      <section className="section section-marketing-seo" id="join-hub">
        <div className="container marketing-seo-split">
          <div className="marketing-seo-copy">
            <span className="eyebrow text-accent">Join the Hub</span>
            <h2>Use one entry point into the full VBI ecosystem.</h2>
            <p>
              Start here if you want ongoing access to the strongest VBI conversations,
              replay-ready education, and future member-style updates.
            </p>
            <ul className="marketing-seo-list">
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>One Route for Every Episode</strong>
                  <span>Follow new podcasts, panels, and replays from a single connected flow.</span>
                </div>
              </li>
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>A Page Your Team Can Bookmark</strong>
                  <span>Give owners, managers, and leads a clear place to revisit every week.</span>
                </div>
              </li>
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>Content Into Conversation</strong>
                  <span>Move from following VBI into direct connection whenever the time is right.</span>
                </div>
              </li>
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>Stronger Relationship Before Strategy</strong>
                  <span>Build trust with the VBI team well before bigger growth decisions arrive.</span>
                </div>
              </li>
            </ul>
            <CommunityJoinForm
              email={contactEmail}
              title="Join the VBI community flow"
              description="Start here for ongoing access to the strongest VBI conversations and future member updates."
              buttonLabel="Join the Hub"
              note="Instant access is currently handled through the VBI team."
            />
          </div>
          <div className="marketing-seo-image">
            <img src={withBasePath("/assets/webinar-mar26.jpg")} alt="VBI community hub" />
            <div className="marketing-seo-image-badge">
              &#9733; Trusted by Veterinary Practices Nationwide
            </div>
          </div>
        </div>
      </section>

      {/* ── Practice Management 3-Card Row ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Who the Hub Serves</span>
            <h2>Built for the veterinary people shaping the whole practice.</h2>
          </div>
          <div className="practice-mgmt-grid">
            <ParallaxCard as="article" className="card practice-mgmt-card" tiltDepth={6}>
              <div className="practice-mgmt-icon">{pillarIcons.users}</div>
              <h3>Practice Owners & Partners</h3>
              <p>People making growth, staffing, profitability, and long-term leadership decisions for the whole business.</p>
              <div className="practice-mgmt-tags">
                <span className="tag-pill">Ownership</span>
                <span className="tag-pill">Growth</span>
                <span className="tag-pill">Leadership</span>
              </div>
            </ParallaxCard>
            <ParallaxCard as="article" className="card practice-mgmt-card" tiltDepth={6}>
              <div className="practice-mgmt-icon">{pillarIcons.briefcase}</div>
              <h3>Hospital Managers & Team Leads</h3>
              <p>Operators who need clear ideas around communication, culture, systems, and everyday execution.</p>
              <div className="practice-mgmt-tags">
                <span className="tag-pill">Operations</span>
                <span className="tag-pill">Culture</span>
                <span className="tag-pill">Systems</span>
              </div>
            </ParallaxCard>
            <ParallaxCard as="article" className="card practice-mgmt-card" tiltDepth={6}>
              <div className="practice-mgmt-icon">{pillarIcons["trending-up"]}</div>
              <h3>Marketing & Client-Experience Teams</h3>
              <p>Teams working on trust, visibility, messaging, and how the practice shows up online and in person.</p>
              <div className="practice-mgmt-tags">
                <span className="tag-pill">Marketing</span>
                <span className="tag-pill">Visibility</span>
                <span className="tag-pill">CX</span>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </section>

      {/* ── VetTech Dark Glassmorphic Cards ── */}
      <section className="section section-dark section-vettech">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Inside the Community</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              Everything the VBI community keeps in one connected flow.
            </h2>
          </div>
          <div className="vettech-grid">
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.monitor}</div>
              <h3>Podcast Stream</h3>
              <p>New episodes and the full archive, always one click away from the community hub.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons["bar-chart"]}</div>
              <h3>Event Panels</h3>
              <p>Replay-ready panels on leadership, operations, marketing, and client experience.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.target}</div>
              <h3>Webinar Replays</h3>
              <p>Deeper educational sessions you can return to whenever the practice needs them.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.shield}</div>
              <h3>Direct Connection</h3>
              <p>A softer line into the VBI team for collaboration, questions, and next steps.</p>
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
              Create Your VBI<br />
              Connection <em>Point.</em>
            </h2>
            <p className="final-cta-sub">
              Book your free 30-minute strategy session. We&apos;ll map out how the VBI community,
              podcasts, and panels can support your practice &mdash; and show you the clearest next
              steps for stronger growth, at no charge.
            </p>
          </div>
          <div className="final-cta-buttons">
            <AttractButton href="/consultation">
              Book Free Strategy Call
            </AttractButton>
            <Link className="button button-secondary button-dark" href="/contact">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

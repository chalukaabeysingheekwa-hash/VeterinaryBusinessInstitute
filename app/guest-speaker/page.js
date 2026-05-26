import Link from "next/link";
import SpeakerApplicationForm from "../components/SpeakerApplicationForm";
import { withBasePath } from "../lib/base-path";
import { pillarIcons } from "../lib/pillar-icons";
import { contactDetails, focusAreas, servicePillars } from "../lib/site-data";
import SignalMarquee from "../components/SignalMarquee";
import ParallaxCard from "../components/ParallaxCard";
import AnimatedCounter from "../components/AnimatedCounter";
import AttractButton from "../components/AttractButton";

const signalRows = [
  [
    { label: "Guest Opportunity", title: "Podcast guest conversations", body: "Share perspective on leadership, staffing, marketing, technology, or client experience." },
    { label: "Guest Opportunity", title: "Panel participation", body: "Join recurring event panels offering multiple practical viewpoints on business issues." },
    { label: "Guest Opportunity", title: "Speaker invitations", body: "Connect for webinar appearances and collaborative thought-leadership sessions." },
  ],
  focusAreas.map((item) => ({ label: "Topic", title: item.title, body: item.body })),
];

const reverseMarqueeItems = [
  "Podcast Guests",
  "Panel Speakers",
  "Webinar Hosts",
  "Thought Leaders",
  "Industry Voices",
  "Veterinary Experts",
  "Collaboration",
  "Interviews",
  "Education",
  "Community Voices",
];

export const metadata = {
  title: "Guest / Speaker | Veterinary Business Institute",
  description:
    "Explore podcast guest, speaker, and collaborative educational opportunities with Veterinary Business Institute.",
};

export default function GuestSpeakerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="about-vbi-ghost-word" aria-hidden="true">GUEST</div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Guest / Speaker</span>
            <p className="hero-kicker">Educational collaborations for the veterinary industry.</p>
            <h1>
              Bring the right <em>voice</em> into the next <span className="outline-txt">veterinary</span> conversation.
            </h1>
            <p className="hero-lead">
              Use this route for podcast guest suggestions, panel participation, webinar
              collaboration, and speaker invitations connected to veterinary business education.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="#application-form">
                Apply to Speak
              </Link>
              <a className="button button-secondary" href={`mailto:${contactDetails[2].label}`}>
                Email a Guest Idea
              </a>
            </div>
          </div>

          <div className="image-frame">
            <img src={withBasePath("/assets/about-speaker.jpg")} alt="Speaker presenting to a veterinary audience" />
          </div>
        </div>
      </section>

      {/* ── Signal Marquee ── */}
      <SignalMarquee heading="The strongest guest voices move across the VBI platform as one system." rows={signalRows} />

      {/* ── Ghost Text Stats Section ── */}
      <section className="section section-stats-ghost">
        <div className="ghost-text" aria-hidden="true">VOICE</div>
        <div className="container stats-ghost-grid">
          <div className="stats-ghost-counters">
            <div className="ghost-counter-item">
              <AnimatedCounter end={103} suffix="+" />
              <p>Podcast episodes giving your voice real reach in veterinary business</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={12} />
              <p>Event panels actively looking for sharper veterinary perspectives</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={16000} suffix="+" duration={2500} />
              <p>Positive testimonials anchoring the VBI and Ekwa audience</p>
            </div>
          </div>
          <div className="stats-ghost-copy">
            <span className="eyebrow text-accent">Why Speak with VBI</span>
            <h2>Reach veterinary leaders through a platform built on real business context.</h2>
            <p>
              VBI brings podcast conversations, panel replays, webinar education, and
              community-style distribution into a single flow so guest voices actually land
              with decision makers inside the practice.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="#application-form">
                Apply Now
              </Link>
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guest Benefits Split ── */}
      <section className="section">
        <div className="container marketing-seo-split">
          <div className="marketing-seo-copy">
            <span className="eyebrow text-accent">Why Be a Guest</span>
            <h2>
              A platform built to <em>amplify</em> your veterinary business voice.
            </h2>
            <p>
              When you join a VBI conversation, your ideas move through podcast episodes, panel
              replays, webinar clips, and community distribution - all tuned to reach decision
              makers inside the practice.
            </p>
          </div>
          <ul className="marketing-seo-list">
            <li>Reach thousands of practice owners, managers, and associates</li>
            <li>Targeted audience of veterinary business decision makers</li>
            <li>Long-term visibility across podcast, webinar, and replay channels</li>
            <li>Editorial support to sharpen your topic and talking points</li>
            <li>Cross-promotion through the VBI and Ekwa content network</li>
            <li>Professional production and post-conversation distribution</li>
          </ul>
        </div>
      </section>

      {/* ── Service Pillars Grid ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Topics We Cover</span>
            <h2>Eight pillars of veterinary business we love featuring guest voices on.</h2>
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

      {/* ── Marketing Split (Primary Content: Application Form) ── */}
      <section className="section" id="application-form">
        <div className="container marketing-split">
          <div className="marketing-split-image">
            <img src={withBasePath("/assets/about-speaker.jpg")} alt="Speaker application" />
            <div className="marketing-split-badge">
              Editorial Review Within 2 Weeks
            </div>
          </div>
          <div className="marketing-split-copy">
            <span className="eyebrow text-accent">Apply to Speak</span>
            <h2>Submit a formal guest application.</h2>
            <p>
              Our editorial team actively reviews submissions for the Veterinary Business
              Podcast and recurring webinar series. Strong applications include a clear topic,
              audience, and format idea.
            </p>
            <ul className="check-list">
              <li>Specific topic angle tied to veterinary business</li>
              <li>Clear intended audience inside the practice</li>
              <li>Preferred format: interview, panel, or webinar</li>
              <li>Why the conversation matters to veterinary teams right now</li>
            </ul>
            <SpeakerApplicationForm />
          </div>
        </div>
      </section>

      {/* ── Practice Management 3-Card Row ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Guest Opportunities</span>
            <h2>Three ways to bring your voice into the VBI platform.</h2>
          </div>
          <div className="practice-mgmt-grid">
            <ParallaxCard as="article" className="card practice-mgmt-card" tiltDepth={6}>
              <div className="practice-mgmt-icon">{pillarIcons.mic}</div>
              <h3>Podcast Guest Conversations</h3>
              <p>Share perspective on leadership, staffing, marketing, ownership, technology, or client experience in veterinary care.</p>
              <div className="practice-mgmt-tags">
                <span className="tag-pill">Interview</span>
                <span className="tag-pill">Audio</span>
                <span className="tag-pill">30-45 min</span>
              </div>
            </ParallaxCard>
            <ParallaxCard as="article" className="card practice-mgmt-card" tiltDepth={6}>
              <div className="practice-mgmt-icon">{pillarIcons.users}</div>
              <h3>Panel Participation</h3>
              <p>Join recurring event panels that help veterinary teams hear multiple practical viewpoints around current business issues.</p>
              <div className="practice-mgmt-tags">
                <span className="tag-pill">Panel</span>
                <span className="tag-pill">Video</span>
                <span className="tag-pill">Live</span>
              </div>
            </ParallaxCard>
            <ParallaxCard as="article" className="card practice-mgmt-card" tiltDepth={6}>
              <div className="practice-mgmt-icon">{pillarIcons["trending-up"]}</div>
              <h3>Speaker Invitations</h3>
              <p>Connect with VBI for webinar appearances, educational sessions, and collaborative thought-leadership opportunities.</p>
              <div className="practice-mgmt-tags">
                <span className="tag-pill">Webinar</span>
                <span className="tag-pill">Education</span>
                <span className="tag-pill">Replay</span>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </section>

      {/* ── VetTech Dark Glassmorphic Cards ── */}
      <section className="section section-dark section-vettech">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">What Makes a Strong Pitch</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              Four things our editorial team looks for in every guest application.
            </h2>
          </div>
          <div className="vettech-grid">
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.target}</div>
              <h3>Clear Topic Angle</h3>
              <p>A specific business lens the audience can use right away, not a generic overview.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.users}</div>
              <h3>Defined Audience</h3>
              <p>Who in the practice should hear this: owners, managers, associates, or team leads.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons["bar-chart"]}</div>
              <h3>Real Experience</h3>
              <p>Stories, numbers, or patterns from actual veterinary operations and ownership.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.heart}</div>
              <h3>Relevance Right Now</h3>
              <p>Why this conversation matters to veterinary teams in the next 6 to 12 months.</p>
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
        <div className="ghost-text ghost-text-cta" aria-hidden="true">SPEAK</div>
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Ready to Share Your Story?</span>
            <h2 className="final-cta-heading">
              Let's build the next <em>conversation</em> together.
            </h2>
            <p className="final-cta-sub">
              The best outreach includes a clear topic, intended audience, preferred format, and
              why the conversation would matter to veterinary teams right now. Tell us what you
              want to share and our editorial team will map it to the right VBI format -
              podcast interview, panel seat, or webinar slot - within two weeks.
            </p>
          </div>
          <div className="final-cta-buttons">
            <AttractButton href="/consultation">
              Book Free Strategy Call
            </AttractButton>
            <Link className="button button-secondary button-dark" href="#application-form">
              Start an Application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { withBasePath } from "../lib/base-path";
import { pillarIcons } from "../lib/pillar-icons";
import {
  contactAddress,
  contactDetails,
  focusAreas,
  servicePillars,
} from "../lib/site-data";
import SignalMarquee from "../components/SignalMarquee";
import ParallaxCard from "../components/ParallaxCard";
import AnimatedCounter from "../components/AnimatedCounter";
import AttractButton from "../components/AttractButton";

const signalRows = [
  [
    { label: "Reason", title: "Podcast Requests", body: "Suggest guests, topics, or be a guest yourself on the Veterinary Business Podcast." },
    { label: "Reason", title: "Marketing Strategy", body: "Ask about local SEO, visibility audits, and practice growth planning with the Ekwa team." },
    { label: "Reason", title: "Partnerships", body: "Sponsorships, collaborations, speaker invitations, and cross-platform conversations." },
  ],
  focusAreas.map((item) => ({ label: "Topic", title: item.title, body: item.body })),
];

const reverseMarqueeItems = [
  "Contact",
  "Strategy Call",
  "Email",
  "Phone",
  "Partnerships",
  "Podcast Guests",
  "Marketing Audit",
  "Speaking",
  "Collaboration",
  "Growth Support",
];

export const metadata = {
  title: "Contact | Veterinary Business Institute",
  description:
    "Contact Veterinary Business Institute for podcast opportunities, webinar questions, partnerships, and veterinary marketing conversations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section-about-vbi">
        <div className="about-vbi-ghost-word" aria-hidden="true">CONTACT</div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Contact the Team</span>
            <p className="hero-kicker">Start the right conversation with the VBI team.</p>
            <h1>
              We&apos;d Love to <em>Hear</em> From <span className="outline-txt">You.</span>
            </h1>
            <p className="hero-lead">
              Use this page for podcast requests, webinar questions, partnership conversations,
              speaking opportunities, and strategy inquiries tied to practice growth.
            </p>
            <div className="button-row">
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
              <a className="button button-secondary" href={`mailto:${contactDetails[2].label}`}>
                Email Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Signal Marquee ── */}
      <SignalMarquee heading="Reach the VBI team across every entry point that matters." rows={signalRows} />

      {/* ── Ghost Text Stats Section ── */}
      <section className="section section-stats-ghost">
        <div className="ghost-text" aria-hidden="true">TALK</div>
        <div className="container stats-ghost-grid">
          <div className="stats-ghost-counters">
            <div className="ghost-counter-item">
              <AnimatedCounter end={103} suffix="+" />
              <p>Podcast episodes ready to reference when you reach out</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={12} />
              <p>Event panels covering the topics people most often ask about</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={16000} suffix="+" duration={2500} />
              <p>Positive testimonials across the Ekwa marketing ecosystem</p>
            </div>
          </div>
          <div className="stats-ghost-copy">
            <span className="eyebrow text-accent">Real Conversations</span>
            <h2>Start with a direct line to the VBI team.</h2>
            <p>
              Whether you want a marketing review, a podcast collaboration, or a straight answer
              about practice growth, this page routes every message to the real people behind
              the Veterinary Business Institute.
            </p>
            <div className="button-row">
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
              <a className="button button-primary" href={`mailto:${contactDetails[2].label}`}>
                Email the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Pillars Grid ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">What We Can Talk About</span>
            <h2>Eight pillars of veterinary business our team covers.</h2>
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

      {/* ── Marketing Split (Primary Contact Form) ── */}
      <section className="section section-marketing-seo" id="contact-form">
        <div className="container marketing-seo-split">
          <div className="marketing-seo-copy">
            <span className="eyebrow text-accent">Send a Message</span>
            <h2>Tell us what you need and we will route it to the right person.</h2>
            <p>
              Every message goes to the VBI team directly, not a generic inbox. Share your
              question, topic, or growth challenge and we will match the right expertise.
            </p>
            <ul className="marketing-seo-list">
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>Podcast Guest &amp; Topic Pitches</strong>
                  <span>Suggest yourself, a colleague, or a topic worth a full episode on the Veterinary Business Podcast.</span>
                </div>
              </li>
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>Webinar Access &amp; Replays</strong>
                  <span>Registration help, replay links, and questions about upcoming panels and live sessions.</span>
                </div>
              </li>
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>Partnership &amp; Sponsorship Talks</strong>
                  <span>Sponsorships, speaker invitations, and cross-platform collaborations with the VBI platform.</span>
                </div>
              </li>
              <li>
                <div className="marketing-seo-check" aria-hidden="true">&#10003;</div>
                <div>
                  <strong>Marketing Strategy &amp; Practice Growth</strong>
                  <span>SEO audits, visibility reviews, and straight answers about scaling a veterinary practice.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="marketing-split-copy">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Practice Management 3-Card Row (Direct Contact) ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Direct Contact</span>
            <h2>Three direct lines into the VBI team.</h2>
          </div>
          <div className="practice-mgmt-grid">
            <ParallaxCard as="article" className="card practice-mgmt-card" tiltDepth={6}>
              <div className="practice-mgmt-icon">{pillarIcons.phone}</div>
              <h3>Call the Team</h3>
              <p>Speak with the VBI team directly for urgent questions and strategy conversations.</p>
              <div className="practice-mgmt-tags">
                <span className="tag-pill">{contactDetails[0].label}</span>
                <span className="tag-pill">{contactDetails[1].label}</span>
              </div>
            </ParallaxCard>
            <ParallaxCard as="article" className="card practice-mgmt-card" tiltDepth={6}>
              <div className="practice-mgmt-icon">{pillarIcons.mail}</div>
              <h3>Email the Team</h3>
              <p>Send a detailed message with topic context, preferred format, and timing for a reply.</p>
              <div className="practice-mgmt-tags">
                <span className="tag-pill">Email</span>
                <span className="tag-pill">24-48h reply</span>
              </div>
            </ParallaxCard>
            <ParallaxCard as="article" className="card practice-mgmt-card" tiltDepth={6}>
              <div className="practice-mgmt-icon">{pillarIcons.briefcase}</div>
              <h3>Visit the Office</h3>
              <p>{contactAddress}</p>
              <div className="practice-mgmt-tags">
                <span className="tag-pill">Mississauga</span>
                <span className="tag-pill">Canada</span>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </section>

      {/* ── VetTech Dark Glassmorphic Cards ── */}
      <section className="section section-dark section-vettech">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Why People Reach Out</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              Four reasons veterinary leaders start a conversation with VBI.
            </h2>
          </div>
          <div className="vettech-grid">
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons["trending-up"]}</div>
              <h3>Marketing Strategy</h3>
              <p>Local SEO, visibility audits, and website positioning tied to real growth outcomes.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.users}</div>
              <h3>Podcast & Panels</h3>
              <p>Guest suggestions, topic pitches, and panel collaborations for the VBI platform.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.target}</div>
              <h3>Growth Planning</h3>
              <p>Expansion timing, succession planning, and the strategic decisions behind scaling.</p>
            </article>
            <article className="vettech-card">
              <div className="vettech-icon">{pillarIcons.heart}</div>
              <h3>Partnerships</h3>
              <p>Sponsorships, speaker invitations, and cross-platform collaboration opportunities.</p>
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
        <div className="ghost-text ghost-text-cta" aria-hidden="true">TALK</div>
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
            <span className="eyebrow text-accent">Ready to Grow?</span>
            <h2 className="final-cta-heading">
              Start the Conversation<br />
              That Changes <em>Everything.</em>
            </h2>
            <p className="final-cta-sub">
              Whether you want a podcast collaboration, a marketing audit, or a straight-talking
              strategy call about scaling your practice, the VBI team is one message away. Real
              humans, real replies, and a clear next step within 24-48 hours.
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

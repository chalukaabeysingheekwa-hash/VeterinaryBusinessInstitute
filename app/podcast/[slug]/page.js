import Link from "next/link";
import TranscriptClips from "../../components/TranscriptClips";
import TranscriptViewer from "../../components/TranscriptViewer";
import { episodes } from "../../lib/site-data";

export async function generateStaticParams() {
  return episodes.map((ep) => ({
    slug: `episode-${ep.number}`,
  }));
}

export default async function PodcastEpisodePage({ params }) {
  const { slug } = await params;
  // Find episode or use the first one as fallback
  const episodeNumber = slug.replace("episode-", "");
  const epData = episodes.find(e => e.number === episodeNumber) || episodes[0];

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <Link href="/podcast" className="text-accent" style={{ textDecoration: "underline", fontSize: "0.9rem" }}>
            &larr; Back to all episodes
          </Link>
          <span className="card-label" style={{ display: "block", marginTop: "1.5rem" }}>Episode {epData.number}</span>
          <h1 style={{ marginTop: "0.5rem" }}>
            {epData.title}
          </h1>
          <p className="muted-text" style={{ marginTop: "0.5rem" }}>
            {epData.date} • VBI Audio Team
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Listen to the Episode</h2>
          <div className="button-row" style={{ marginTop: "1.5rem", justifyContent: "center" }}>
            {/* If there was a real media url we'd put an <audio /> player here */}
            <a className="button button-primary" href={epData.href} target="_blank" rel="noreferrer">
              Play on Apple/Spotify
            </a>
          </div>
        </div>
      </section>

      <article className="section">
        <div className="container split-grid">
           <div>
             <span className="eyebrow text-accent">Episode Show Notes</span>
             <h2>Summary & Highlights</h2>
             <p>{epData.summary}</p>

             <div style={{ marginTop: "2.5rem" }}>
               <h4>Notable Clips & Quotes</h4>
               <p className="muted-text" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                 Jump directly to the most impactful moments in this conversation.
               </p>
               <TranscriptClips />
             </div>
           </div>

           <div className="card">
             <span className="eyebrow text-accent">Accessibility</span>
             <h3>Full Episode Transcript</h3>
             <p className="muted-text" style={{ marginBottom: "1.5rem" }}>
               We provide AI-generated full transcripts to improve accessibility. 
               (Note: An integrated AI transcript search tool requires backend database support.)
             </p>

             <TranscriptViewer />
           </div>
        </div>
      </article>
    </>
  );
}

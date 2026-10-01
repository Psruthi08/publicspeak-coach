import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Practice your speech. Get honest feedback.</h1>
        <p className="muted">
          Record a practice talk and get instant metrics and AI coaching on pace, filler words and structure.
        </p>
        <div className="row" style={{ marginTop: 20 }}>
          <Link href="/record" className="btn">Start practicing</Link>
          <Link href="/history" className="btn secondary">View history</Link>
        </div>
      </section>
      <section className="grid three">
        <div className="card"><h2>1. Record</h2><p className="muted">Speak in your browser or paste a transcript.</p></div>
        <div className="card"><h2>2. Analyze</h2><p className="muted">Words per minute, fillers, pauses and AI tips.</p></div>
        <div className="card"><h2>3. Improve</h2><p className="muted">Track your score across attempts.</p></div>
      </section>
    </>
  );
}

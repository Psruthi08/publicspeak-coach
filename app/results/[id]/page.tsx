import Link from "next/link";
import { notFound } from "next/navigation";
import { getSession } from "@/lib/mockData";

export default function ResultsPage({ params }: { params: { id: string } }) {
  const s = getSession(params.id);
  if (!s) notFound();

  return (
    <div>
      <p><Link href="/history" className="muted">&larr; Back to history</Link></p>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h1>{s.title}</h1>
        <span className="badge">Score {s.score}/100</span>
      </div>
      <p className="muted">{s.createdAt} &middot; {Math.round(s.durationSec / 60 * 10) / 10} min</p>

      <section className="grid three" style={{ margin: "20px 0" }}>
        <div className="card stat"><div className="num">{s.wpm}</div><div className="muted">Words / min</div></div>
        <div className="card stat"><div className="num">{s.fillerCount}</div><div className="muted">Filler words</div></div>
        <div className="card stat"><div className="num">{s.pauseCount}</div><div className="muted">Long pauses</div></div>
      </section>

      <section className="grid" style={{ marginBottom: 20 }}>
        <div className="card"><h2>Clarity</h2><p>{s.feedback.clarity}</p></div>
        <div className="card"><h2>Structure</h2><p>{s.feedback.structure}</p></div>
        <div className="card"><h2>Confidence</h2><p>{s.feedback.confidence}</p></div>
        <div className="card">
          <h2>Top 3 tips</h2>
          <ol className="tips">{s.feedback.tips.map((t) => <li key={t}>{t}</li>)}</ol>
        </div>
      </section>

      <div className="card"><h2>Transcript</h2><p className="muted">{s.transcript}</p></div>
    </div>
  );
}

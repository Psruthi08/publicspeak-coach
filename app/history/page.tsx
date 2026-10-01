import Link from "next/link";
import ScoreChart from "@/components/ScoreChart";
import { mockSessions } from "@/lib/mockData";

export default function HistoryPage() {
  return (
    <div>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h1>Your sessions</h1>
        <Link href="/record" className="btn">New session</Link>
      </div>
      <div className="card" style={{ margin: "16px 0" }}>
        <h2>Score trend</h2>
        <ScoreChart sessions={mockSessions} />
      </div>
      <div className="grid">
        {mockSessions.map((s) => (
          <Link key={s.id} href={`/results/${s.id}`} className="list-item">
            <div>
              <strong>{s.title}</strong>
              <div className="muted">{s.createdAt} &middot; {s.wpm} wpm &middot; {s.fillerCount} fillers</div>
            </div>
            <span className="badge">{s.score}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

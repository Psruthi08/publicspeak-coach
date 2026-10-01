import { Session } from "@/lib/mockData";

// Simple dependency-free SVG bar chart of scores over time.
export default function ScoreChart({ sessions }: { sessions: Session[] }) {
  const w = 600, h = 200, pad = 28;
  const bw = (w - pad * 2) / Math.max(sessions.length, 1);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Score history chart">
      {sessions.map((s, i) => {
        const bh = ((h - pad * 2) * s.score) / 100;
        const x = pad + i * bw + bw * 0.2;
        return (
          <g key={s.id}>
            <rect x={x} y={h - pad - bh} width={bw * 0.6} height={bh} rx={6} fill="#e8553d" />
            <text x={x + bw * 0.3} y={h - pad - bh - 6} textAnchor="middle" fontSize="12" fill="#1f2a44">{s.score}</text>
            <text x={x + bw * 0.3} y={h - 8} textAnchor="middle" fontSize="11" fill="#5b6478">{s.createdAt.slice(5)}</text>
          </g>
        );
      })}
      <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="#c9cfdb" />
    </svg>
  );
}

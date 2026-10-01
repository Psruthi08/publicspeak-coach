"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RecordPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [transcript, setTranscript] = useState("");
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!recording) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [recording]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  function handleAnalyze() {
    // TODO(Day 3): POST /api/analyze, then route to /results/<new id>.
    router.push("/results/demo-1");
  }

  return (
    <div>
      <h1>New practice session</h1>
      <div className="notice">
        Day 1 UI: recording is a visual placeholder. Real recording and live transcript arrive on Day 2.
      </div>
      <label className="field">
        <span>Title</span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Final pitch rehearsal" />
      </label>
      <div className="row" style={{ margin: "12px 0 20px" }}>
        <button
          className={`recbtn ${recording ? "on" : ""}`}
          onClick={() => setRecording((r) => !r)}
          aria-pressed={recording}
        >
          {recording ? "Stop" : "Record"}
        </button>
        <div>
          <strong style={{ fontSize: "1.5rem" }}>{mm}:{ss}</strong>
          <div className="muted">{recording ? "Recording..." : "Ready"}</div>
        </div>
      </div>
      <label className="field">
        <span>Transcript (paste text if you are not recording)</span>
        <textarea value={transcript} onChange={(e) => setTranscript(e.target.value)} placeholder="Your speech text appears here..." />
      </label>
      <button className="btn" onClick={handleAnalyze}>Analyze my speech</button>
    </div>
  );
}

// DAY 1 ONLY: fake data so every screen is clickable.
// Day 4: delete this file and fetch from /api/sessions instead.

export type Feedback = {
  clarity: string;
  structure: string;
  confidence: string;
  tips: string[];
};

export type Session = {
  id: string;
  title: string;
  createdAt: string;
  durationSec: number;
  wpm: number;
  fillerCount: number;
  pauseCount: number;
  score: number;
  transcript: string;
  feedback: Feedback;
};

export const mockSessions: Session[] = [
  {
    id: "demo-1",
    title: "Placement HR round: Tell me about yourself",
    createdAt: "2026-10-01",
    durationSec: 95,
    wpm: 168,
    fillerCount: 11,
    pauseCount: 2,
    score: 62,
    transcript:
      "So, um, my name is Asha and I am, like, a final year student. I have, uh, built a few projects and I really enjoy working on web apps...",
    feedback: {
      clarity: "Your main points are understandable, but filler words break up your sentences.",
      structure: "Start with a one-line summary, then give two examples, then close with your goal.",
      confidence: "Your pace is fast, which can sound nervous. Slow down at key points.",
      tips: [
        "Pause silently instead of saying 'um'.",
        "Aim for 130-150 words per minute.",
        "End with a clear one-sentence goal.",
      ],
    },
  },
  {
    id: "demo-2",
    title: "Project demo practice",
    createdAt: "2026-10-02",
    durationSec: 120,
    wpm: 152,
    fillerCount: 7,
    pauseCount: 3,
    score: 71,
    transcript:
      "Today I want to show you PublicSpeak Coach. The problem is simple: people practice alone and never hear honest feedback...",
    feedback: {
      clarity: "Clear problem statement. Keep each sentence to one idea.",
      structure: "Good opening. Add a short recap before you finish.",
      confidence: "Steadier pace than last time. Keep using pauses.",
      tips: ["Cut filler words further.", "Add a recap sentence.", "Look up from your notes."],
    },
  },
  {
    id: "demo-3",
    title: "Final pitch rehearsal",
    createdAt: "2026-10-03",
    durationSec: 300,
    wpm: 141,
    fillerCount: 3,
    pauseCount: 5,
    score: 84,
    transcript:
      "Good morning everyone. Today I will show you a live project that helps people improve how they present...",
    feedback: {
      clarity: "Very clear and well paced.",
      structure: "Strong problem, demo, next steps flow.",
      confidence: "Confident delivery with purposeful pauses.",
      tips: ["Keep this pace.", "Rehearse the Q&A answers.", "Time the demo to 3 minutes."],
    },
  },
];

export function getSession(id: string): Session | undefined {
  return mockSessions.find((s) => s.id === id);
}

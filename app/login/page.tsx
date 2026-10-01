"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO(Day 3): replace with Supabase Auth sign-in.
    router.push("/history");
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h1>Log in</h1>
      <p className="muted">Sign in to save and track your practice sessions.</p>
      <form onSubmit={handleSubmit}>
        <label className="field">
          <span>Email</span>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="field">
          <span>Password</span>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="btn" type="submit">Log in</button>
      </form>
    </div>
  );
}

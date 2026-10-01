export default function HomePage() {
  return (
    <div className="psc-container">
      <section className="psc-home-hero">
        <div className="psc-hero-tag">
          <div className="psc-hero-tag-dot" />
          <span>Intelligent Speech Acoustics</span>
        </div>

        <h1 className="psc-hero-title">
          Practice your speech. Get honest feedback.
        </h1>

        <p className="psc-hero-description">
          Rehearse high-stakes pitches, job interviews, and presentations with
          real-time pace metering, filler word detection, and actionable
          delivery coaching.
        </p>

        <div className="psc-hero-actions">
          <a href="/record" className="psc-btn psc-btn-primary">
            <span>Launch Rehearsal</span>
          </a>

          <a href="/history" className="psc-btn psc-btn-secondary">
            <span>View Progress</span>
          </a>
        </div>
      </section>

      <section aria-label="How PublicSpeak Coach Works">
        <div className="psc-steps-grid">
          <article className="psc-step-card">
            <div className="psc-step-header">
              <span className="psc-step-num">STAGE 01</span>
              <div className="psc-step-icon-box">🎙️</div>
            </div>

            <h2 className="psc-step-title">Record Live</h2>

            <p className="psc-step-desc">
              Speak directly in your browser with responsive waveform
              telemetry or paste script drafts to test vocal cadence.
            </p>
          </article>

          <article className="psc-step-card">
            <div className="psc-step-header">
              <span className="psc-step-num">STAGE 02</span>
              <div className="psc-step-icon-box">📊</div>
            </div>

            <h2 className="psc-step-title">Acoustic Analysis</h2>

            <p className="psc-step-desc">
              Automated words-per-minute breakdown, filler word heatmaps
              (ums, likes, uhs), and sentence pauses.
            </p>
          </article>

          <article className="psc-step-card">
            <div className="psc-step-header">
              <span className="psc-step-num">STAGE 03</span>
              <div className="psc-step-icon-box">🏆</div>
            </div>

            <h2 className="psc-step-title">Master Delivery</h2>

            <p className="psc-step-desc">
              Track your scores across iterations, remove speech crutches,
              and walk onto any stage with calm authority.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
export default function Navigation() {
  return (
    <header className="psc-navbar">
      <div className="psc-navbar-inner">
        <a
          href="/"
          className="psc-brand"
          aria-label="PublicSpeak Coach Home"
        >
          <div className="psc-brand-icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          </div>

          <span>PublicSpeak Coach</span>
          <span className="psc-brand-badge">STUDIO</span>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="psc-nav-links">
            <li>
              <a href="/record" className="psc-nav-link">
                Record
              </a>
            </li>

            <li>
              <a href="/history" className="psc-nav-link">
                History
              </a>
            </li>

            <li>
              <a href="/login" className="psc-nav-link">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
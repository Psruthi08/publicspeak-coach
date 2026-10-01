import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="brand">PublicSpeak Coach</Link>
      <div className="links">
        <Link href="/record">Record</Link>
        <Link href="/history">History</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p><Link href="/" className="btn">Go home</Link></p>
    </div>
  );
}

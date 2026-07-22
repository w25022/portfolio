import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <div className="page-shell" style={{ textAlign: "center" }}>
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link href="/" className="button button-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

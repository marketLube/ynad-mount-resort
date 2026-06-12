import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh" }}>
      <div className="container">
        <span className="kicker">404</span>
        <h1>
          You&apos;ve wandered <em>off the trail</em>
        </h1>
        <p>
          The mist must have taken this page. Head back and we&apos;ll guide
          you home.
        </p>
        <p style={{ marginTop: "2rem" }}>
          <Link href="/" className="btn btn--light">
            Back to the resort
          </Link>
        </p>
      </div>
    </section>
  );
}

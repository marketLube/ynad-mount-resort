import Link from "next/link";
import Image from "next/image";
import { BLOGS } from "@/data/blogs";
import { ArrowIcon } from "./icons";
import Reveal from "./Reveal";

const fmt = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export function BlogCard({ post, index = 0 }) {
  return (
    <Reveal delay={index * 0.1}>
      <Link href={`/blog/${post.slug}`} className="blog-card">
        <div className="blog-card__media">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 820px) 100vw, 33vw"
          />
        </div>
        <div className="blog-card__body">
          <span className="blog-card__meta">
            {fmt(post.date)} · {post.readTime} min read
          </span>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <span className="blog-card__more">
            Read story <ArrowIcon width={14} height={14} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function BlogTeaser() {
  return (
    <section className="section blog-teaser" id="journal">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="kicker">The Journal</span>
          <h2 className="section-title">
            Notes from <em>the hills</em>
          </h2>
          <p>
            Guides, seasons and slow travel wisdom from our corner of Wayanad.
          </p>
        </Reveal>

        <div className="blog-grid">
          {BLOGS.slice(0, 3).map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        <Reveal style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/blog" className="btn btn--dark">
            Read all stories
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

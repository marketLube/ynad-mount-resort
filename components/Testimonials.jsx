"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/data/home";
import Reveal from "./Reveal";

const initials = (name) =>
  name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      5200
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="kicker">Guest Stories</span>
          <h2 className="section-title">
            Words left <em>in the guestbook</em>
          </h2>
        </Reveal>

        <Reveal>
          <div className="testimonials__stage">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.name}
                className={`testimonials__item${i === index ? " is-active" : ""}`}
              >
                <blockquote>{t.quote}</blockquote>
                <figcaption className="testimonials__person">
                  <span className="testimonials__avatar">{initials(t.name)}</span>
                  <span className="testimonials__name">
                    {t.name}
                    <span>{t.from}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="testimonials__dots">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                className={i === index ? "is-active" : ""}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

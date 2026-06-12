import Image from "next/image";
import { AMENITIES } from "@/data/home";
import Reveal from "./Reveal";

export default function Amenities() {
  return (
    <section className="section amenities" id="amenities">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="kicker">Amenities</span>
          <h2 className="section-title">
            All you get, <em>and a little more</em>
          </h2>
          <p>
            Everything a hill stay should come with — and a few things worth
            leaving the veranda for.
          </p>
        </Reveal>

        <div className="amenities__grid">
          {AMENITIES.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 0.1}>
              <figure className="amenity-card" tabIndex={0}>
                <Image
                  src={item.image}
                  alt={`${item.name} at YNAD Mount Resort, Wayanad`}
                  fill
                  sizes="(max-width: 820px) 100vw, 33vw"
                />
                <span
                  className={`amenity-card__badge${
                    item.included ? " is-included" : ""
                  }`}
                >
                  {item.badge || (item.included ? "Included" : "Extra charge")}
                </span>
                <figcaption className="amenity-card__caption">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

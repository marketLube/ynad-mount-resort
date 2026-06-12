import Image from "next/image";
import { ROOMS } from "@/data/home";
import { waLink } from "@/data/site";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function Rooms() {
  return (
    <section className="section rooms" id="rooms">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="kicker">Stay With Us</span>
          <h2 className="section-title">
            Three ways to <em>slow down</em>
          </h2>
          <p>
            From a planter&apos;s-era home to refined mist-view rooms — every
            stay opens into the green hush of Rippon&apos;s tea country.
          </p>
        </Reveal>

        <div className="rooms__grid">
          {ROOMS.map((room, i) => (
            <Reveal key={room.slug} delay={i * 0.12}>
              <article className="room-card">
                <div className="room-card__media">
                  <Image
                    src={room.image}
                    alt={`${room.name} at YNAD Mount Resort, Wayanad`}
                    fill
                    sizes="(max-width: 820px) 100vw, 33vw"
                  />
                  <span>{room.name}</span>
                </div>
                <div className="room-card__body">
                  <h3>{room.name}</h3>
                  <p>{room.blurb}</p>
                  <ul className="room-card__details">
                    {room.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <a
                    className="btn btn--dark"
                    href={waLink(room.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon /> Check Availability
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

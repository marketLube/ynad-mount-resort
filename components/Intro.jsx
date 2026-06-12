import Image from "next/image";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="section intro" id="about">
      <div className="container intro__grid">
        <Reveal className="intro__text">
          <span className="kicker">A Sanctuary in Rippon</span>
          <h2 className="section-title">
            One of the best resorts in Wayanad,{" "}
            <em>by the quietest measure</em>
          </h2>
          <p>
            YNAD Mount Resort sits at Valathoor, in the colonial-era tea
            country of Rippon, Meppadi — under the shadow of Chembra Peak. No
            highway hum, no lobby crowds. Just tea gardens, forest air and the
            famous moody climate of Wayanad arriving at your veranda each
            morning.
          </p>
          <p>
            Soochipara Falls, the 900 Kandi glass bridge and the heart-shaped
            lake of Chembra are all minutes away. Or stay in — the weather here
            is an itinerary of its own.
          </p>

          <div className="intro__stats">
            <div className="intro__stat">
              <strong>3</strong>
              <span>Stay styles</span>
            </div>
            <div className="intro__stat">
              <strong>20&nbsp;min</strong>
              <span>From Kalpetta</span>
            </div>
            <div className="intro__stat">
              <strong>∞</strong>
              <span>Mist mornings</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="intro__image" delay={0.15}>
          <Image
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
            alt="Sunlight through the misty forests around YNAD Mount Resort, Wayanad"
            fill
            sizes="(max-width: 820px) 100vw, 45vw"
          />
        </Reveal>
      </div>
    </section>
  );
}

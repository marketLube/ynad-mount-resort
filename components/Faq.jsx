import { FAQS } from "@/data/home";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="kicker">Good to Know</span>
          <h2 className="section-title">
            Questions, <em>answered</em>
          </h2>
        </Reveal>

        <Reveal className="faq__list">
          {FAQS.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

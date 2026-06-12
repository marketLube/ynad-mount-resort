import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Rooms from "@/components/Rooms";
import Offers from "@/components/Offers";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import Reels from "@/components/Reels";
import BlogTeaser from "@/components/BlogTeaser";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { FAQS } from "@/data/home";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Intro />
      <Rooms />
      <Offers />
      <Amenities />
      <Testimonials />
      <Reels />
      <BlogTeaser />
      <Faq />
      <CtaBand />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/data/site";
import { WhatsAppIcon } from "./icons";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`floating-cta${visible ? " is-visible" : ""}`}>
      <a
        className="floating-cta__label"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Check Availability
      </a>
      <a
        className="floating-cta__wa"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with YNAD Mount Resort on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

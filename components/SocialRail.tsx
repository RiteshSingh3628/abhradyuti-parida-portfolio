"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { actor } from "@/data/actor";
import { cn } from "@/lib/utils";

const ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function InstagramIcon() {
  return (
    <svg {...ICON_PROPS} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...ICON_PROPS} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function SocialRail() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "fixed bottom-24 right-4 z-40 flex flex-col items-center gap-2 md:bottom-28 md:right-6",
        !visible && "pointer-events-none"
      )}
    >
      <a
        href={actor.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-cream/70 text-navy backdrop-blur-md transition-colors duration-300 hover:border-accent hover:text-accent"
      >
        <InstagramIcon />
      </a>
      <a
        href={`mailto:${actor.email}`}
        aria-label="Email"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-cream/70 text-navy backdrop-blur-md transition-colors duration-300 hover:border-accent hover:text-accent"
      >
        <MailIcon />
      </a>
    </motion.div>
  );
}

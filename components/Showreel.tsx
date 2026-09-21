"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

/**
 * Swap this to go live: set `type` + `url` once the edit is finished.
 *   { type: "mp4", url: "/videos/showreel.mp4" }
 *   { type: "youtube", url: "https://www.youtube.com/embed/VIDEO_ID" }
 *   { type: "vimeo", url: "https://player.vimeo.com/video/VIDEO_ID" }
 * Leave as null to keep the "coming soon" placeholder below.
 */
export const SHOWREEL_SOURCE: { type: "mp4" | "youtube" | "vimeo"; url: string } | null = null;

export function Showreel() {
  return (
    <section id="reel" className="bg-navy py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-powder">Showreel</p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="relative mt-14 aspect-video w-full overflow-hidden bg-black">
            {SHOWREEL_SOURCE ? (
              <ShowreelPlayer source={SHOWREEL_SOURCE} />
            ) : (
              <ShowreelPlaceholder />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ShowreelPlayer({ source }: { source: NonNullable<typeof SHOWREEL_SOURCE> }) {
  if (source.type === "mp4") {
    return (
      <video className="h-full w-full object-cover" controls preload="metadata">
        <source src={source.url} type="video/mp4" />
      </video>
    );
  }
  return (
    <iframe
      src={source.url}
      className="h-full w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

function ShowreelPlaceholder() {
  return (
    <div className="group relative h-full w-full">
      <Image
        src="/images/showreel/showreel-poster.jpg"
        alt="Abhradyuti Parida, showreel placeholder"
        fill
        sizes="100vw"
        className="object-cover object-top opacity-40 grayscale transition-all duration-700 group-hover:opacity-50"
      />
      <div className="absolute inset-0 bg-navy/50" />

      <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-cream/40 md:h-24 md:w-24"
        >
          <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-cream/70" />
        </motion.div>
        <p className="eyebrow text-cream">Video Coming Soon</p>
        <p className="max-w-sm text-sm text-cream/60">
          Showreel currently in production.
        </p>
      </div>
    </div>
  );
}

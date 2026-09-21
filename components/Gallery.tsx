"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { galleryFeature, galleryBreakout, galleryMasonry, GalleryImage } from "@/data/actor";

function GalleryFrame({
  image,
  sizes,
  priority = false,
}: {
  image: GalleryImage;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className="group relative mb-5 overflow-hidden break-inside-avoid bg-navy/5 md:mb-6"
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      <motion.div className="h-full w-full" whileHover="hover" initial="rest">
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        </motion.div>
        <motion.div
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent"
        />
      </motion.div>

      <a
        href={image.src}
        download
        aria-label="Download image"
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cream/40 bg-navy/40 text-cream opacity-0 backdrop-blur-md transition-all duration-300 hover:border-accent hover:text-accent group-hover:opacity-100"
      >
        <DownloadIcon />
      </a>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 4v11" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 19.5h14" />
    </svg>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-accent">Gallery</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-xl font-serif text-4xl text-navy md:text-5xl">
            A visual range, in stills.
          </h2>
        </Reveal>
      </div>

      {/* Feature row: two equal-width columns — these two photos share the same
          aspect ratio, so equal width gives equal height with zero cropping. */}
      <div className="mx-auto mt-16 grid max-w-content grid-cols-1 gap-5 px-6 sm:grid-cols-2 md:gap-6 md:px-10">
        <Reveal>
          <GalleryFrame image={galleryFeature[0]} sizes="(min-width: 768px) 45vw, 100vw" priority />
        </Reveal>
        <Reveal delay={0.1}>
          <GalleryFrame image={galleryFeature[1]} sizes="(min-width: 768px) 45vw, 100vw" />
        </Reveal>
      </div>

      {/* Full-width breakout moment */}
      <Reveal delay={0.05} className="mt-5 md:mt-6">
        <div className="relative h-[52vh] min-h-[340px] w-full overflow-hidden">
          <Image
            src={galleryBreakout.src}
            alt={galleryBreakout.alt}
            fill
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
          <div className="absolute inset-0 bg-navy/10" />
        </div>
      </Reveal>

      {/* Masonry set — natural aspect ratio throughout, so nothing is ever cropped */}
      <div className="mx-auto max-w-content px-6 pt-5 md:px-10 md:pt-6">
        <div className="columns-1 sm:columns-2 lg:columns-3">
          {galleryMasonry.map((image, i) => (
            <Reveal key={image.src} delay={Math.min(i * 0.06, 0.3)}>
              <GalleryFrame
                image={image}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

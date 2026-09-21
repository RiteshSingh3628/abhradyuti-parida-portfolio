"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { actor } from "@/data/actor";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-navy">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Abhradyuti Parida, actor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_32%]"
        />
      </motion.div>

      {/* Scrim sits behind the text on the right; the face on the left stays clear */}
      <div className="absolute inset-0 bg-gradient-to-l from-navy/75 via-navy/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-content justify-end px-6 pb-16 md:px-10 md:pb-24"
      >
        <div className="text-right">
          <motion.p variants={item} className="eyebrow mb-5 text-powder md:block">
            Actor
          </motion.p>
          <motion.h1
            variants={item}
            className="ml-auto w-fit font-serif text-[clamp(2.5rem,6.5vw,6.25rem)] leading-[0.95] text-cream"
          >
            Abhradyuti
            <br />
            Parida
          </motion.h1>
          <motion.p
            variants={item}
            className="ml-auto mt-6 hidden max-w-xs text-base text-cream/80 md:block md:text-lg"
          >
            {actor.tagline}
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-6 z-10 hidden flex-col items-center gap-3 md:left-10 md:flex"
      >
        <span className="h-14 w-px bg-cream/40" />
        <span className="eyebrow rotate-180 text-cream/60 [writing-mode:vertical-lr]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

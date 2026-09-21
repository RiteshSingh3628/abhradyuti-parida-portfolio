"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { actor } from "@/data/actor";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reel", label: "Showreel" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(29,53,87,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="relative z-50 mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className={cn(
            "font-serif text-sm tracking-widest2 uppercase transition-colors duration-500",
            menuOpen ? "text-cream" : scrolled ? "text-navy" : "text-cream"
          )}
        >
          Abhradyuti Parida
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "eyebrow underline-hover transition-colors duration-500",
                  scrolled ? "text-navy" : "text-cream",
                  active === link.href && "text-accent"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={cn(
              "block h-px w-7 transition-all duration-300",
              menuOpen ? "bg-cream" : scrolled ? "bg-navy" : "bg-cream",
              menuOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-7 transition-all duration-300",
              menuOpen ? "bg-cream" : scrolled ? "bg-navy" : "bg-cream",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-7 transition-all duration-300",
              menuOpen ? "bg-cream" : scrolled ? "bg-navy" : "bg-cream",
              menuOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-navy px-6 pb-10 pt-28 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-cream/10 py-4"
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "font-serif text-4xl transition-colors duration-300",
                      active === link.href ? "text-accent" : "text-cream"
                    )}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-1"
            >
              <a href={`mailto:${actor.email}`} className="eyebrow text-cream/60">
                {actor.email}
              </a>
              <a href={actor.phoneHref} className="eyebrow text-cream/60">
                {actor.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

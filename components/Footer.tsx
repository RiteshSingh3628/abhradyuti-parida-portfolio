import { actor } from "@/data/actor";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-cream py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 text-xs text-navy/50 sm:flex-row md:px-10">
        <p>
          &copy; {new Date().getFullYear()} {actor.name}. All rights reserved.
        </p>
        <a href="#top" className="underline-hover eyebrow text-navy/60">
          Back to Top
        </a>
      </div>
    </footer>
  );
}

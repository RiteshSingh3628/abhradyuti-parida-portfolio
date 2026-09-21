import { Reveal } from "./Reveal";

export function QuickLinks() {
  return (
    <div className="border-b border-navy/10 bg-cream">
      <Reveal>
        <div className="mx-auto flex max-w-content flex-wrap items-center gap-x-8 gap-y-4 px-6 py-7 md:px-10">
          <a
            href="#reel"
            className="group inline-flex items-center gap-2 border border-navy/25 px-6 py-3 text-sm uppercase tracking-widest2 text-navy transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-cream"
          >
            View Showreel
          </a>
          <a href="#work" className="eyebrow underline-hover text-navy">
            Work
          </a>
        </div>
      </Reveal>
    </div>
  );
}

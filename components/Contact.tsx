import { Reveal } from "./Reveal";
import { actor } from "@/data/actor";

export function Contact() {
  return (
    <section id="contact" className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-content px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-accent">Get in Touch</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight text-navy md:text-6xl">
            Let&rsquo;s work together.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-md text-navy/70">
            For casting, collaborations and professional enquiries.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-16">
            <a
              href={`mailto:${actor.email}`}
              className="group flex flex-col items-center gap-2 sm:items-start"
            >
              <span className="eyebrow text-steel">Email</span>
              <span className="underline-hover font-serif text-xl text-navy transition-colors duration-300 group-hover:text-accent md:text-2xl">
                {actor.email}
              </span>
            </a>
            <a
              href={actor.phoneHref}
              className="group flex flex-col items-center gap-2 sm:items-start"
            >
              <span className="eyebrow text-steel">Phone</span>
              <span className="underline-hover whitespace-nowrap font-serif text-xl text-navy transition-colors duration-300 group-hover:text-accent md:text-2xl">
                {actor.phone}
              </span>
            </a>
            <a
              href={actor.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 sm:items-start"
            >
              <span className="eyebrow text-steel">Instagram</span>
              <span className="underline-hover whitespace-nowrap font-serif text-xl text-navy transition-colors duration-300 group-hover:text-accent md:text-2xl">
                {actor.instagramHandle}
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <a
            href={`mailto:${actor.email}`}
            className="mt-16 inline-flex items-center gap-3 bg-accent px-10 py-4 text-sm uppercase tracking-widest2 text-cream transition-transform duration-300 hover:scale-[1.03]"
          >
            Start a Conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}

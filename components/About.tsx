import Image from "next/image";
import { Reveal } from "./Reveal";
import { actor, training, languages, skills, credits } from "@/data/actor";

const yearsActive = `${Math.min(...credits.map((c) => c.year))}—${Math.max(
  ...credits.map((c) => c.year)
)}`;

export function About() {
  return (
    <section id="about" className="relative bg-cream py-28 md:py-36">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-8 md:px-10">
        {/* Image column */}
        <div className="relative order-1 md:order-2 md:col-span-5 md:col-start-8">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-full w-full border border-powder md:-left-6 md:-top-6" />
              <div
                className="relative w-full overflow-hidden bg-navy/5"
                style={{ aspectRatio: "1202 / 1800" }}
              >
                <Image
                  src="/images/about/about-portrait.jpg"
                  alt="Abhradyuti Parida, seated portrait"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 hidden w-[62%] overflow-hidden border-4 border-cream shadow-xl sm:block">
                <div className="relative aspect-[16/8]">
                  <Image
                    src="/images/about/about-accent.jpg"
                    alt="Abhradyuti Parida, candid portrait"
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Text column */}
        <div className="order-2 md:order-1 md:col-span-6">
          <Reveal>
            <p className="eyebrow text-accent">About</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-navy md:text-5xl">
              A working actor,
              <br />
              grounded in craft.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-navy/80">
            {actor.bio.map((para, i) => (
              <Reveal key={i} delay={0.12 + i * 0.06}>
                <p className="max-w-lg text-base leading-relaxed md:text-lg">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-8 border-t border-navy/10 pt-10">
              <div>
                <dt className="eyebrow text-steel">Active</dt>
                <dd className="mt-2 font-serif text-2xl text-navy">{yearsActive}</dd>
              </div>
              <div>
                <dt className="eyebrow text-steel">Training</dt>
                <dd className="mt-2 space-y-1">
                  {training.map((t) => (
                    <p key={t.title} className="text-sm text-navy/80">
                      {t.title} <span className="text-navy/50">— {t.place}</span>
                    </p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-steel">Languages</dt>
                <dd className="mt-2 text-sm text-navy/80">
                  {languages.map((l) => l.name).join(" · ")}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-steel">Skills</dt>
                <dd className="mt-2 text-sm text-navy/80">{skills.join(" · ")}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { physicalAttributes } from "@/data/actor";

export function PhysicalProfile() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-powder">Actor Profile</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-serif text-3xl text-cream md:text-4xl">
            Physical Attributes
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 border-t border-cream/15 sm:grid-cols-2 lg:grid-cols-4">
          {physicalAttributes.map((attr, i) => {
            const isLast = i === physicalAttributes.length - 1;
            const lastInSmRow = (i + 1) % 2 === 0 || isLast;
            const lastInLgRow = (i + 1) % 4 === 0 || isLast;
            return (
              <StaggerItem key={attr.label}>
                <div
                  className={`group border-b border-cream/15 px-1 py-7 sm:border-r sm:px-6 ${
                    lastInSmRow ? "sm:border-r-0" : ""
                  } ${lastInLgRow ? "lg:border-r-0" : "lg:border-r"}`}
                >
                  <p className="eyebrow text-steel/90 group-hover:text-accent transition-colors duration-300">
                    {attr.label}
                  </p>
                  <p className="mt-3 font-serif text-xl text-cream md:text-2xl">
                    {attr.value}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

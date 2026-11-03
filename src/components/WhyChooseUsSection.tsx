import { Reveal } from "@/components/Reveal";

const PRINCIPLES = [
  {
    title: "Personalized Experiences",
    description:
      "Every celebration begins with your story — your tastes, your traditions, your vision.",
  },
  {
    title: "Attention to Detail",
    description:
      "From the first sketch to the final farewell, no detail is too small to matter.",
  },
  {
    title: "Creative Planning",
    description:
      "Fresh ideas and thoughtful concepts, composed into celebrations that feel distinctly yours.",
  },
  {
    title: "Seamless Coordination",
    description:
      "Behind every effortless occasion is a plan that quietly takes care of everything.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary-foreground/70">
            Why Choose Us
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-5xl">
            Thoughtfully Planned. Beautifully Celebrated.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.1}>
              <div className="border-t border-primary-foreground/25 pt-6">
                <span className="font-display text-sm tracking-[0.3em] text-primary-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

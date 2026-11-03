import { ArrowRight } from "lucide-react";
import { ABOUT_IMAGES } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-lavender-soft py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Text */}
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-secondary">
            About Yashogaatha
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Every Event Begins With a Vision.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From intimate celebrations to grand occasions, Yashogaatha Events
            brings people together through thoughtfully planned experiences,
            meaningful details, and moments worth remembering.
          </p>
          <a
            href="#gallery"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Discover Our Story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        {/* Image composition */}
        <Reveal delay={0.15} className="relative">
          <div className="relative pb-14 pl-0 sm:pl-14 sm:pb-14">
            <div className="overflow-hidden rounded-lg shadow-soft">
              <img
                src={ABOUT_IMAGES.primary}
                alt="Wedding mandap decorated with flowers at sunset"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 hidden w-2/5 overflow-hidden rounded-lg shadow-float ring-8 ring-lavender-soft sm:block">
              <img
                src={ABOUT_IMAGES.secondary}
                alt="Intimate garden dinner with lanterns and candles"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

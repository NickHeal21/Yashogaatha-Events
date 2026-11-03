import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
            Our Services
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Creating Experiences for Every Occasion
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whatever the occasion, we help turn your ideas into memorable
            experiences.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.12}>
              <a href="#contact" className="group block">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Enquire
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

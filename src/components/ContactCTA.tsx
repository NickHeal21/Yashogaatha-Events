import { Phone } from "lucide-react";
import { whatsappLink } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-secondary">
            Get In Touch
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Let's Create Something Extraordinary.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have a celebration in mind? Let's talk about your vision and explore
            how we can bring it to life.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(
                "Hi Yashogaatha Events! I'd like to plan an event. Could we talk about it?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
            >
              Plan Your Event
            </a>
            <a
              href={whatsappLink("Hi Yashogaatha Events!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-secondary px-8 py-3.5 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-accent/50"
            >
              Chat With Us on WhatsApp
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary sm:px-2"
            >
              <Phone className="h-4 w-4" />
              Or call us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

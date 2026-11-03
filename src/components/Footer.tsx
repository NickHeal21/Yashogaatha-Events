import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS, SERVICES, whatsappLink } from "@/content/site";

const QUICK_LINKS = NAV_LINKS;

export function Footer() {
  return (
    <footer className="bg-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {/* Brand */}
        <div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl font-medium tracking-wide">
              Yashogaatha
            </span>
            <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-primary-foreground/70">
              Events
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Thoughtfully planned events, beautiful experiences, and unforgettable
            moments — crafted with care for every occasion.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground/85">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground/85">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <a
                  href="#services"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground/85">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li>
              <a
                href={`tel:+${CONTACT.whatsappNumber}`}
                className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0" />
              {CONTACT.location}
            </li>
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4 shrink-0" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-primary-foreground/55 lg:px-10">
          © 2026 Yashogaatha Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

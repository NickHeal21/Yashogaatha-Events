import weddingImg from "@/assets/services/wedding.jpg";
import birthdayImg from "@/assets/services/birthday.jpg";
import corporateImg from "@/assets/services/corporate.jpg";
import culturalImg from "@/assets/services/cultural.jpg";
import privateImg from "@/assets/services/private.jpg";
import specialImg from "@/assets/services/special.jpg";
import weddingcouple from "@/assets/gallery/wedding2.jpg";
import galleryTable from "@/assets/gallery/table-detail.jpg";
import gallery_cultural from "@/assets/gallery/gallery_cultural.jpg";
import reception from "@/assets/gallery/reception.jpg";
import galleryBanquet from "@/assets/gallery/banquet.jpg";
import galleryCelebration from "@/assets/gallery/celebration.jpg";

/**
 * Central place to edit all homepage content.
 *
 * Contact details below are placeholders — replace them with the company's
 * real details when available. WHATSAPP_NUMBER must be in international
 * format without "+" or spaces (e.g. "919876543210").
 */
export const CONTACT = {
  whatsappNumber: "7378650036", // TODO: replace with the real WhatsApp number
  phoneDisplay: "+91 73786 50036", // TODO: replace with the real phone number
  email: "yashogaatha.events@gmail.com", // TODO: replace with the real email address
  location: "Pune, India", // TODO: replace with the real location
  instagramUrl: "https://www.instagram.com/yashogaatha_events/", // TODO: replace with the real Instagram profile URL
};

/** Builds a WhatsApp chat link with an optional pre-filled first message. */
export const whatsappLink = (message?: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Weddings & Engagements",
    description:
      "Timeless ceremonies shaped around your story — from intimate engagements to grand wedding celebrations.",
    image: weddingImg,
  },
  {
    title: "Birthday Celebrations",
    description:
      "Joyful milestones styled with thoughtful themes, décor and delightful details for every age.",
    image: birthdayImg,
  },
  {
    title: "Corporate Events",
    description:
      "Polished launches, conferences and off-sites, planned with precision and quiet professionalism.",
    image: corporateImg,
  },
  {
    title: "Cultural Events",
    description:
      "Traditional celebrations honoured with authentic detail, ritual and graceful styling.",
    image: culturalImg,
  },
  {
    title: "Private Celebrations",
    description:
      "Intimate gatherings designed around the people and the moments that matter most.",
    image: privateImg,
  },
  {
    title: "Special Occasions",
    description:
      "Anniversaries, baby showers and once-in-a-lifetime moments given the celebration they deserve.",
    image: specialImg,
  },
];

export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  /** Focal point for the cropped gallery thumbnail, expressed as CSS object-position. */
  objectPosition?: string;
}

export const GALLERY: GalleryItem[] = [
  { src: weddingcouple, alt: "Bride and groom smiling beneath hanging marigold garlands", category: "Weddings", objectPosition: "50% 62%" },
  { src: galleryTable, alt: "Red and white flowers arranged in a vase on a carved wooden table", category: "Details", objectPosition: "50% 50%" },
  { src: gallery_cultural, alt: "Wooden venue entrance decorated with pink, white, and green floral garlands", category: "Cultural", objectPosition: "50% 38%" },
  { src: reception, alt: "Family gathered beneath marigold garlands for a wedding ceremony", category: "Receptions", objectPosition: "50% 85%" },
  { src: galleryBanquet, alt: "Banquet hall with purple lighting, chandeliers, and decorated dining tables", category: "Corporate", objectPosition: "50% 50%" },
  { src: galleryCelebration, alt: "Wedding guests smiling and taking photos during a celebration", category: "Moments", objectPosition: "50% 20%" },
];

export const ABOUT_IMAGES = {
  primary: weddingImg,
  secondary: privateImg,
};

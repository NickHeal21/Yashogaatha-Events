import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yashogaatha Events | Premium Event Management" },
      {
        name: "description",
        content:
          "Yashogaatha The Event Planners designs weddings, celebrations and corporate occasions with thoughtful planning, beautiful details and unforgettable moments.",
      },
      { property: "og:title", content: "Yashogaatha Events | Premium Event Management" },
      {
        property: "og:description",
        content:
          "Thoughtfully planned events, beautiful experiences and unforgettable moments for every occasion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <WhyChooseUsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

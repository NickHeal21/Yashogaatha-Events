import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/heroAsset/Yashogaatha Front Page Photo.png";
import heroImage1 from "@/assets/heroAsset/Yashogaatha Front Page Photo 1.png";
import heroImage2 from "@/assets/heroAsset/Yashogaatha Front Page Photo 2.png";
import heroImage3 from "@/assets/heroAsset/Yashogaatha Front Page Photo 3.png";
import heroImage4 from "@/assets/heroAsset/Yashogaatha Front Page Photo 4.png";
import heroImage5 from "@/assets/heroAsset/Yashogaatha Front Page Photo 5.png";
import heroImage6 from "@/assets/heroAsset/Yashogaatha Front Page Photo 6.png";
import heroImage7 from "@/assets/heroAsset/Yashogaatha Front Page Photo 7.png";

const HERO_IMAGES = [heroImage, heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6, heroImage7];
const IMAGE_INTERVAL_MS = 4000;

const easeOut = [0.22, 1, 0.36, 1] as const;``

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: easeOut },
});

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % HERO_IMAGES.length);
    }, IMAGE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [reduceMotion]);

  return (
    <section id="home" className="relative flex min-h-[560px] h-[100vh] items-center justify-center overflow-hidden">
      {/* Rotating background photographs with a slow zoom (disabled for reduced motion) */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={activeImage}
            src={HERO_IMAGES[activeImage]}
            alt="Yashogaatha event celebration setup"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    opacity: { duration: 0.8, ease: "easeInOut" },
                    scale: { duration: IMAGE_INTERVAL_MS / 1000, ease: "linear" },
                  }
            }
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority={activeImage === 0 ? "high" : "auto"}
          />
        </AnimatePresence>
        {/* Purple-tinted overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.2_0.08_293_/_0.45)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.07_293_/_0.8)] via-transparent to-[oklch(0.18_0.07_293_/_0.35)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          {...fadeUp(0.2)}
          className="text-xs font-semibold uppercase tracking-[0.45em] text-background/85"
        >
          Yashogaatha The Event Planners
        </motion.p>

        <motion.h1
          {...fadeUp(0.4)}
          className="mt-6 font-display text-5xl font-medium leading-tight text-background sm:text-6xl lg:text-7xl"
        >
          Every Celebration Tells a Story.
        </motion.h1>

        <motion.p
          {...fadeUp(0.65)}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg"
        >
          We bring your vision to life through thoughtfully planned events,
          beautiful experiences, and unforgettable moments.
        </motion.p>

        <motion.div
          {...fadeUp(0.9)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-float transition-colors duration-300 hover:bg-primary-hover"
          >
            Plan Your Event
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center rounded-full border border-background/60 px-8 py-3.5 text-sm font-semibold text-background transition-colors duration-300 hover:bg-background/10"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>

      {/* Gentle scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <div className="h-10 w-px animate-pulse bg-background/60" />
      </motion.div>
    </section>
  );
}

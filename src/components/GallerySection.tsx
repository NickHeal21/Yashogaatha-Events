import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { GALLERY, type GalleryItem } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Editorial grid placement for each photograph (Tailwind span classes). */
const GRID_PLACEMENT = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-3 row-span-1 sm:col-span-2",
];

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length
      ),
    []
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, showPrev, showNext]);

  return (
    <section id="gallery" className="scroll-mt-24 bg-lavender-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-secondary">
            Our Gallery
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            A Glimpse Into Our Celebrations
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Moments, details, and experiences brought to life by Yashogaatha
            Events.
          </p>
        </Reveal>

        {/* Editorial grid with varied image sizes */}
        <div className="mt-16 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-4 lg:auto-rows-[230px]">
          {GALLERY.map((item, index) => (
            <Reveal
              key={item.src}
              delay={(index % 4) * 0.08}
              amount={0.15}
              className={cn(GRID_PLACEMENT[index])}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Open photo: ${item.alt}`}
                className="group relative block h-full w-full overflow-hidden rounded-lg"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  style={{ objectPosition: item.objectPosition ?? "center" }}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-between bg-[oklch(0.2_0.08_293_/_0)] p-4 transition-colors duration-300 group-hover:bg-[oklch(0.2_0.08_293_/_0.45)]">
                  <span className="translate-y-2 text-xs font-semibold uppercase tracking-[0.25em] text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.category}
                  </span>
                  <ZoomIn className="h-5 w-5 text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
          >
            Explore Our Gallery
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>

      <GalleryLightbox
        items={GALLERY}
        index={lightboxIndex}
        onClose={close}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
}

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function GalleryLightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  const item = index === null ? undefined : items[index];

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[oklch(0.15_0.06_293_/_0.95)] p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-background/80 transition-colors hover:bg-background/10 hover:text-background"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-background/80 transition-colors hover:bg-background/10 hover:text-background sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <motion.img
            key={item.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={item.src}
            alt={item.alt}
            className="max-h-[82vh] max-w-5xl rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-background/80 transition-colors hover:bg-background/10 hover:text-background sm:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium uppercase tracking-[0.3em] text-background/70">
            {item.category} · {(index ?? 0) + 1} / {items.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

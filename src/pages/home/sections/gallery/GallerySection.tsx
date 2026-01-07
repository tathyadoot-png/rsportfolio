import { motion } from "framer-motion";
import type { Lang } from "@/layouts/MainLayout";

interface GallerySectionProps {
  lang: Lang;
}

const GallerySection = ({ lang }: GallerySectionProps) => {
  const isHi = lang === "hi";

  // Placeholder gallery items
  const images = Array.from({ length: 6 });

  return (
    <section className="bg-bg-soft py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            {isHi ? "मीडिया गैलरी" : "Media Gallery"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text">
            {isHi
              ? "जनसेवा के क्षण"
              : "Moments of Public Service"}
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-bg shadow-soft"
            >
              {/* Placeholder */}
              <div className="flex h-full w-full items-center justify-center bg-bg-soft text-muted text-sm font-semibold">
                {isHi ? "छवि जोड़ी जाएगी" : "Image Coming Soon"}
              </div>

              {/* Hover overlay (future ready) */}
              <div className="pointer-events-none absolute inset-0 bg-primary/0 transition group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

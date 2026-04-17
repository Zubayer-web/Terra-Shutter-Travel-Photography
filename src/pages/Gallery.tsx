import { motion } from 'motion/react';
import { useState } from 'react';

const filters = ['ALL', 'ARCTIC', 'ALPINE', 'DESERT', 'WILDLIFE', 'AERIAL', 'LONG EXPOSURE', 'MONOCHROME'];

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1531366930499-61da60037a34?q=80&w=2670&auto=format&fit=crop', location: 'ICELAND', exif: 'f/4 · 1/250s · 2024', size: 'large', rotation: -2 },
  { id: 2, src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2670&auto=format&fit=crop', location: 'NEPAL', exif: 'f/2.8 · 1/1000s · 2023', size: 'small', rotation: 3 },
  { id: 3, src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2670&auto=format&fit=crop', location: 'CHILE', exif: 'f/5.6 · 1/500s · 2024', size: 'medium', rotation: -1 },
  { id: 4, src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2670&auto=format&fit=crop', location: 'FINLAND', exif: 'f/1.8 · 1/125s · 2024', size: 'large', rotation: 2 },
  { id: 5, src: 'https://images.unsplash.com/photo-150514480840c-18a1f6a1e319?q=80&w=2670&auto=format&fit=crop', location: 'ICELAND', exif: 'f/8 · 1/2s · 2022', size: 'medium', rotation: 1 },
  { id: 6, src: 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=2670&auto=format&fit=crop', location: 'NORWAY', exif: 'f/4 · 1/500s · 2025', size: 'small', rotation: -3 },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  return (
    <div className="pt-32 pb-48 bg-glacier-white">
      {/* Hero */}
      <section className="px-8 md:px-24 mb-32 space-y-12">
        <div className="flex flex-col">
          <h1 className="text-[12vw] font-unbounded leading-[0.8] text-transparent" style={{ WebkitTextStroke: '1px var(--color-charcoal-ink)' }}>
            THE FIELD
          </h1>
          <h1 className="text-[12vw] font-unbounded leading-[0.8] text-sage-mist">
            ARCHIVE
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section className="px-8 md:px-24 mb-24 overflow-x-auto">
        <div className="flex gap-8 font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal-ink border-b border-sage-mist/20 pb-8 min-w-max">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`transition-colors hover:text-copper-burn ${activeFilter === f ? 'text-copper-burn font-bold' : 'opacity-40'}`}
            >
              — {f}
            </button>
          ))}
        </div>
      </section>

      {/* Scattered Layout */}
      <section className="px-8 md:px-24">
        <div className="flex flex-wrap gap-12 md:gap-24 items-start justify-center">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9, rotate: photo.rotation }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              className={`relative bg-glacier-white shadow-2xl p-4 md:p-8 cursor-pointer group ${
                photo.size === 'large' ? 'w-full md:w-[60%]' : 
                photo.size === 'medium' ? 'w-full md:w-[45%]' : 'w-full md:w-[30%]'
              }`}
            >
              <div className="relative aspect-[4/5] md:aspect-auto md:h-full overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.location} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700 contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/30 transition-colors duration-700" />
                
                {/* Caption rising on hover */}
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-2">
                   <div className="flex justify-between items-end text-glacier-white">
                     <span className="font-lora italic text-2xl">{photo.location}</span>
                     <span className="font-mono text-[10px] tracking-widest">{photo.exif}</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

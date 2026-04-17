import { motion } from 'motion/react';

const sheetPhotos = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/sheet-${i}/400/400`,
  frame: `FRAME ${100 + i}`
}));

export default function Gallery2() {
  return (
    <div className="pt-32 pb-48 bg-obsidian text-glacier-white">
      {/* Header */}
      <section className="px-8 md:px-24 mb-32 space-y-4">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Development Tank // Archive</span>
        <h1 className="text-5xl md:text-7xl font-lora italic leading-tight">
          Contact Sheets:<br/>The Unedited Wilderness.
        </h1>
      </section>

      {/* Grid - Film Strip Style */}
      <section className="px-8 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {sheetPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
              className="space-y-4 group cursor-pointer"
            >
              {/* Sprocket holes indicator simulation */}
              <div className="flex justify-between items-center px-1 opacity-20">
                 <div className="w-2 h-2 bg-glacier-white border border-sage-mist" />
                 <span className="font-mono text-[8px] tracking-tight">{photo.frame}</span>
                 <div className="w-2 h-2 bg-glacier-white border border-sage-mist" />
              </div>
              
              <div className="aspect-square bg-frost overflow-hidden relative border border-glacier-white/5">
                <img 
                  src={photo.src} 
                  alt={photo.frame} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-copper-burn/0 group-hover:bg-copper-burn/10 transition-colors" />
              </div>

               <div className="flex justify-between items-center px-1 opacity-20 group-hover:opacity-60 transition-opacity">
                 <div className="w-2 h-2 bg-glacier-white border border-sage-mist" />
                 <div className="w-2 h-2 bg-glacier-white border border-sage-mist" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <section className="mt-48 px-8 md:px-24 py-12 border-t border-glacier-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex gap-12 font-mono text-[10px] tracking-widest uppercase opacity-40">
            <span>Roll #042</span>
            <span>Developer: D-76 Batch 4</span>
            <span>Agitation: Constant</span>
         </div>
         <button className="font-mono text-[10px] tracking-[0.4em] uppercase text-sage-mist hover:text-glacier-white border-b border-sage-mist hover:border-glacier-white pb-1 transition-all">
            Return to High Definition Archive →
         </button>
      </section>
    </div>
  );
}

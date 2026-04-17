import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Home2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  return (
    <div ref={containerRef} className="bg-obsidian min-h-screen text-glacier-white">
      {/* Hero - Full dark theme */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <motion.div 
            style={{ scale, opacity }}
            className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2670&auto=format&fit=crop" 
            alt="Patagonia"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60 grayscale-[0.5]"
          />
        </motion.div>

        <div className="relative z-10 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="font-unbounded text-[15vw] leading-[0.8] text-transparent"
            style={{ WebkitTextStroke: '1px var(--color-glacier-white)' }}
          >
            TERRA
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="font-unbounded text-[15vw] leading-[0.8] text-sage-mist"
          >
            SHUTTER
          </motion.h1>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
           <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Scroll to Immersion</span>
           <motion.div 
             animate={{ y: [0, 10, 0] }} 
             transition={{ repeat: Infinity, duration: 2 }}
             className="w-[1px] h-12 bg-glacier-white/30"
           />
        </div>
      </section>

      {/* Climate Zone Navigator */}
      <section className="py-48 bg-obsidian border-t border-glacier-white/5">
        <div className="space-y-0">
          {[
            { name: 'ARCTIC', img: 'https://images.unsplash.com/photo-1559666126-84f389727b9a' },
            { name: 'DESERT', img: 'https://images.unsplash.com/photo-1502082590111-581a0fa95865' },
            { name: 'RAINFOREST', img: 'https://images.unsplash.com/photo-1549241520-425e3dfc01cd' },
            { name: 'ALPINE', img: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c0a' },
            { name: 'COASTAL', img: 'https://images.unsplash.com/photo-150514480840c-18a1f6a1e319' },
            { name: 'SAVANNA', img: 'https://images.unsplash.com/photo-1511497584788-87676099d916' },
          ].map((zone, i) => (
            <motion.div 
              key={zone.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="group h-[20vh] md:h-[15vh] w-full relative overflow-hidden border-b border-glacier-white/5 cursor-pointer"
            >
              <img 
                src={`${zone.img}?q=80&w=2670&auto=format&fit=crop`} 
                alt={zone.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-40 transition-opacity duration-700"
              />
              <div className="relative z-10 h-full flex items-center px-8 md:px-24 justify-between">
                 <span className="font-unbounded text-2xl md:text-5xl opacity-40 group-hover:opacity-100 group-hover:text-sage-mist transition-all">{zone.name}</span>
                 <span className="font-mono text-[10px] tracking-[0.4em] opacity-0 group-hover:opacity-40 transition-all translate-x-4 group-hover:translate-x-0">View Archetype →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Signature Shot */}
      <section className="h-screen w-full relative bg-charcoal-ink flex items-center justify-center">
         <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1544411047-c491e34a2465?q=80&w=2670&auto=format&fit=crop" 
                alt="Signature Shot"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80"
            />
         </div>
         <div className="absolute top-24 left-24 space-y-4">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper-burn block">Image of the Season</span>
            <div className="h-[1px] w-24 bg-copper-burn" />
         </div>
         <div className="absolute bottom-24 right-24 bg-glacier-white/10 backdrop-blur-md p-8 border border-glacier-white/10">
            <div className="space-y-4 font-mono text-[10px] tracking-widest uppercase">
               <div className="flex justify-between items-center gap-12">
                  <span className="opacity-40">EXIF</span>
                  <span>f/2.8 · 1/500s · ISO 400</span>
               </div>
               <div className="flex justify-between items-center gap-12">
                  <span className="opacity-40">LENS</span>
                  <span>85MM PRIMES</span>
               </div>
               <div className="flex justify-between items-center gap-12">
                  <span className="opacity-40">LOC.</span>
                  <span>PATAGONIA // S. REGION</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

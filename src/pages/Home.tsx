import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExpeditionChapter from '../components/shared/ExpeditionChapter';

export default function Home() {
  const unfoldRef = useRef(null);
  const isUnfoldInView = useInView(unfoldRef, { once: true, margin: "-100px" });

  const stats = [
    { value: '5,895M', label: 'Kilimanjaro Summit' },
    { value: '-2°C', label: 'Average Shoot Temp' },
    { value: '04:32', label: 'Avg Wake-Up Time' },
    { value: '8,000+', label: 'Hours In The Field' },
  ];

  return (
    <div className="relative pt-24">
      {/* HERO — Cold Open */}
      <section className="h-screen w-full flex bg-glacier-white overflow-hidden relative">
        {/* Left Side: White Space */}
        <div className="w-[40%] flex flex-col justify-center px-12 md:px-24">
          <div className="space-y-12">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-50 block">TERRA SHUTTER / EST.2014</span>
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-lora font-normal italic leading-none tracking-tight overflow-hidden">
                <motion.span 
                  initial={{ y: '100%' }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                  className="block"
                >
                  The Silence
                </motion.span>
                <motion.span 
                  initial={{ y: '100%' }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
                  className="block"
                >
                  Between
                </motion.span>
                <motion.span 
                  initial={{ y: '100%' }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
                  className="block"
                >
                  Two Mountains
                </motion.span>
              </h1>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-[1px] w-20 bg-copper-burn origin-left"
              />
              <p className="font-mono text-[11px] tracking-widest text-charcoal-ink opacity-80">
                Currently: Finnish Lapland — 68.9°N
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-12 transform -rotate-90 origin-left flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Scroll to Explore</span>
            <div className="h-[1px] w-12 bg-charcoal-ink/20" />
          </div>
        </div>

        {/* Right Side: Large Landscape Photo */}
        <div className="w-[60%] relative overflow-hidden bg-frost">
          <motion.img 
            initial={{ scale: 1.2, x: 100, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop" 
            alt="Alpine Dawn"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[0.3] contrast-[1.05]"
          />
          <div className="field-mark top-1/2 -right-4 -translate-y-1/2 rotate-90 md:rotate-0 z-10">REF: ALP-26.04</div>
        </div>
      </section>

      {/* TERRAIN STRIP */}
      <section className="w-full bg-obsidian py-6 md:py-8 overflow-hidden">
        <div className="px-8 md:px-24 flex md:justify-between items-center whitespace-nowrap gap-12 text-glacier-white font-mono text-[10px] tracking-[0.4em] uppercase">
          <span className="opacity-80">72 TERRAINS</span>
          <span className="opacity-40 select-none">·</span>
          <span className="opacity-80">41 COUNTRIES</span>
          <span className="opacity-40 select-none">·</span>
          <span className="opacity-80">9 CLIMATE ZONES</span>
          <span className="opacity-40 select-none">·</span>
          <span className="opacity-80">1 MISSION</span>
        </div>
      </section>

      {/* STORY UNFOLD SECTION */}
      <section ref={unfoldRef} className="bg-glacier-white pt-24 pb-48 px-8 md:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24">
          <div 
            className={`paper-unfold w-full aspect-video md:h-[80vh] bg-frost overflow-hidden ${isUnfoldInView ? 'active' : ''}`}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e860c?q=80&w=2670&auto=format&fit=crop" 
              alt="Massive Peaks"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[0.4] saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            <div className="absolute bottom-12 left-12 md:left-24 text-glacier-white">
              <h2 className="text-4xl md:text-7xl font-lora italic">We go where roads stop.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* EXPEDITIONS AS CHAPTERS */}
      <ExpeditionChapter 
        id="finnish-lapland"
        number="01"
        country="Finnish Lapland"
        year="2024"
        season="Deep Winter"
        description="A journey above the Arctic Circle during the polar night. Capturing the indigo silence of -30°C landscapes where time feels frozen in permafrost."
        image="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2670&auto=format&fit=crop"
      />

      <ExpeditionChapter 
        id="patagonia"
        number="02"
        country="Patagonia"
        year="2023"
        season="Spring Winds"
        description="The relentless southern winds shaping the granite spires of Los Glaciares. A study of raw geology and atmospheric pressure at the edge of the world."
        image="https://images.unsplash.com/photo-1433086466371-150fd938367a?q=80&w=2670&auto=format&fit=crop"
        reverse
      />

      {/* FIELD NOTES TEASER */}
      <section className="bg-frost/40 py-48 px-8 md:px-24 relative overflow-hidden">
        <div className="torn-edge-top absolute top-0 left-0 w-full h-[120px] bg-glacier-white z-10" />
        <div className="torn-edge-bottom absolute bottom-0 left-0 w-full h-[120px] bg-glacier-white z-10" />
        
        <div className="max-w-3xl mx-auto text-center space-y-12 py-24">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Field Archive / Entry 402</span>
          <h3 className="font-lora italic text-4xl leading-relaxed text-charcoal-ink">
            "Day 14. The fog hasn't lifted in three days. I've stopped waiting for it to. I've started seeing it as the only reality that matters."
          </h3>
          <div className="pt-12">
            <Link to="/journal" className="group inline-flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase group-hover:text-copper-burn transition-all">Read The Full Journal</span>
              <span className="text-sage-mist group-hover:text-copper-burn transition-all">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ALTITUDE NUMBERS SECTION */}
      <section className="bg-obsidian py-48 px-8 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="font-unbounded text-4xl md:text-6xl text-glacier-white block"
              >
                {stat.value}
              </motion.span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-sage-mist block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST FIELD DISPATCH */}
      <section className="bg-glacier-white py-48 px-8 md:px-24 flex flex-col md:flex-row items-center gap-12 md:gap-0">
        <div className="w-full md:w-[70%] relative h-[60vh] md:h-[80vh] bg-frost overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2670&auto=format&fit=crop" 
            alt="Latest Dispatch"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[0.2]"
          />
        </div>
        <div className="w-full md:w-[40%] bg-glacier-white p-12 md:p-16 md:-ml-24 relative z-10 border border-sage-mist/10 shadow-xl">
           <div className="space-y-8">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper-burn block">Latest Dispatch</span>
            <h3 className="text-4xl md:text-5xl font-lora italic leading-tight">
              Tracing the Invisible: Wind patterns in the High Atacama.
            </h3>
            <div className="flex flex-col gap-2 font-mono text-[10px] tracking-widest text-charcoal-ink/60 uppercase">
              <span>Read time: 08 Min</span>
              <span>GPS: 23°55′S 67°48′W</span>
            </div>
            <Link to="/journal/atacama" className="inline-block pt-8 font-mono text-[10px] tracking-[0.4em] uppercase border-b border-copper-burn pb-1 hover:border-b-2 transition-all">
              Initiate Transmission →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

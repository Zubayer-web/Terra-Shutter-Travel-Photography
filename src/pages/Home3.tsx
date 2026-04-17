import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Home3() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Vertical panels collapsing effect
  const panel1Width = useTransform(scrollYProgress, [0, 0.3], ["20%", "0%"]);
  const panel2Width = useTransform(scrollYProgress, [0, 0.3], ["55%", "100%"]);
  const panel3Width = useTransform(scrollYProgress, [0, 0.3], ["25%", "0%"]);
  
  const hScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

  return (
    <div ref={containerRef} className="h-[300vh] bg-glacier-white">
      {/* Hero - 3 Vertical Panels */}
      <section className="h-screen w-full sticky top-0 flex overflow-hidden">
        {/* Panel 1: Obsidian */}
        <motion.div 
          style={{ width: panel1Width }}
          className="h-full bg-obsidian flex items-center justify-center overflow-hidden"
        >
          <span className="font-unbounded text-6xl text-glacier-white text-vertical rotate-180 opacity-40">
            TERRA
          </span>
        </motion.div>

        {/* Panel 2: Main Image */}
        <motion.div 
          style={{ width: panel2Width }}
          className="h-full relative overflow-hidden"
        >
          <motion.img 
            style={{ scale: hScale }}
            src="https://images.unsplash.com/photo-1516617442634-75371039cb3a?q=80&w=2670&auto=format&fit=crop" 
            alt="Central Expedition"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[0.3]"
          />
          <div className="absolute inset-x-0 bottom-24 flex justify-center">
            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
              className="text-center space-y-4"
            >
              <span className="font-mono text-[10px] tracking-[0.6em] uppercase text-glacier-white">Deep Discovery</span>
              <div className="h-12 w-[1px] bg-glacier-white mx-auto mt-4" />
            </motion.div>
          </div>
        </motion.div>

        {/* Panel 3: Glacier White */}
        <motion.div 
          style={{ width: panel3Width }}
          className="h-full bg-glacier-white flex items-center justify-center overflow-hidden border-l border-sage-mist/20"
        >
          <span className="font-unbounded text-6xl text-charcoal-ink text-vertical opacity-20">
            SHUTTER
          </span>
        </motion.div>
      </section>

      {/* Horizontal Scroll Storytelling Placeholder */}
      <section className="h-screen flex items-center bg-obsidian text-glacier-white relative overflow-hidden">
         <div className="px-8 md:px-24 max-w-4xl space-y-8">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper-burn">Experimental Sequence</span>
            <h2 className="text-5xl md:text-8xl font-lora italic leading-tight">
               Every peak is a research laboratory. Every shadow is a data point.
            </h2>
            <div className="pt-12">
               <span className="font-mono text-sm tracking-widest opacity-40">Scroll to transition between field archives.</span>
            </div>
         </div>
         
         <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[40vw] h-[60vh] opacity-20">
            <div className="topo-bg w-full h-full" />
         </div>
      </section>

      {/* Final CTA slide simulation */}
      <section className="h-screen flex flex-col items-center justify-center bg-glacier-white px-8 text-center space-y-12">
         <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Mission End</span>
            <h2 className="text-6xl md:text-9xl font-unbounded text-charcoal-ink -tracking-tighter uppercase">EXPLORE<br/>MORE</h2>
         </div>
         <div className="flex flex-col md:flex-row gap-12 font-mono text-[10px] tracking-widest uppercase">
            <a href="/gallery" className="hover:text-copper-burn transition-colors underline underline-offset-8 decoration-sage-mist">Gallery Archive</a>
            <a href="/contact" className="hover:text-copper-burn transition-colors underline underline-offset-8 decoration-sage-mist">Open Channel</a>
         </div>
      </section>
    </div>
  );
}

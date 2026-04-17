import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const chapters = [
  { name: 'ARCTIC', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', coord: '78.2° N' },
  { name: 'ALPINE', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', coord: '28.5° N' },
  { name: 'DESERT', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef', coord: '23.8° S' },
  { name: 'RAINFOREST', img: 'https://images.unsplash.com/photo-1549241520-425e3dfc01cd', coord: '0.1° N' },
  { name: 'COASTAL', img: 'https://images.unsplash.com/photo-150514480840c-18a1f6a1e319', coord: '64.1° N' },
  { name: 'SAVANNA', img: 'https://images.unsplash.com/photo-1511497584788-87676099d916', coord: '1.2° S' },
];

export default function Gallery3() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-obsidian">
      {/* Progress Bar at Top */}
      <div className="fixed top-24 left-0 w-full h-[1px] bg-glacier-white/10 z-[60]">
        <motion.div 
          style={{ scaleX: scrollYProgress }} 
          className="h-full bg-copper-burn origin-left"
        />
      </div>

      <section className="relative">
        {chapters.map((chapter, i) => (
          <Chapter key={chapter.name} chapter={chapter} index={i} total={chapters.length} />
        ))}
      </section>

      {/* Floating Indicator */}
      <div className="fixed bottom-12 right-12 z-50 mix-blend-difference text-glacier-white font-mono text-[10px] tracking-widest uppercase">
          <div className="flex flex-col items-end gap-2">
            <span>Climate Protocol</span>
            <div className="h-[1px] w-12 bg-glacier-white" />
            <span>01 // 06</span>
          </div>
      </div>
    </div>
  );
}

interface ChapterProps {
  key?: string | number;
  chapter: any;
  index: number;
  total: number;
}

function Chapter({ chapter, index, total }: ChapterProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Vertical wipe effect: the background image reveals from bottom
  const clip = useTransform(scrollYProgress, [0, 0.5, 1], ["inset(100% 0 0 0)", "inset(0% 0 0 0)", "inset(0 0 100% 0)"]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "0%", "-50%"]);

  return (
    <div ref={ref} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Background with Wipe */}
      <motion.div 
        style={{ clipPath: clip }}
        className="absolute inset-0 z-0 bg-obsidian"
      >
        <motion.img 
          style={{ y: yTranslate }}
          src={`${chapter.img}?q=80&w=2670&auto=format&fit=crop`} 
          alt={chapter.name} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale brightness-50 contrast-125 scale-110"
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center space-y-8 px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="space-y-4"
        >
          <span className="font-mono text-[10px] tracking-[0.6em] uppercase text-glacier-white/40 block">
            {chapter.coord} // CHAPTER 0{index + 1}
          </span>
          <h2 className="text-7xl md:text-[10vw] font-unbounded text-glacier-white leading-none">
            {chapter.name}
          </h2>
        </motion.div>
        
        <motion.div 
          className="h-1px w-24 bg-copper-burn mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        
        <div className="pt-24 font-mono text-[10px] tracking-[0.4em] uppercase text-sage-mist">
          <span>{index + 1} / {total}</span>
        </div>
      </div>
    </div>
  );
}

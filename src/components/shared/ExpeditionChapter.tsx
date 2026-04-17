import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

interface ExpeditionChapterProps {
  id: string;
  number: string;
  country: string;
  year: string;
  season: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function ExpeditionChapter({
  id,
  number,
  country,
  year,
  season,
  description,
  image,
  reverse = false,
}: ExpeditionChapterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[70vh] w-full border-t border-sage-mist/20 overflow-hidden`}>
      {/* Image Panel */}
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className="w-full md:w-[55%] h-[50vh] md:h-auto overflow-hidden group cursor-pointer"
      >
        <div className="relative w-full h-full overflow-hidden">
          <motion.img 
            src={image} 
            alt={country}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[0.5] contrast-[1.1] transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-obsidian opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
          <div className="absolute bottom-8 left-8 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 flex flex-col gap-1">
            <span className="font-mono text-[10px] tracking-widest text-glacier-white uppercase">Location Discovered</span>
            <span className="font-lora italic text-xl text-glacier-white">{country}</span>
          </div>
        </div>
      </motion.div>

      {/* Content Panel */}
      <motion.div 
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="w-full md:w-[45%] bg-glacier-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden"
      >
        {/* Background Ghost Number */}
        <span className="absolute -right-12 top-1/2 -translate-y-1/2 font-unbounded text-[20vw] opacity-[0.03] text-charcoal-ink select-none pointer-events-none">
          {number}
        </span>

        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">{number} / EXPEDITION</span>
            <div className="h-[1px] w-24 bg-sage-mist/30" />
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-lora italic tracking-tight">{country}</h2>
            <div className="flex gap-8 font-mono text-[10px] tracking-widest uppercase text-sage-mist">
              <span>{year}</span>
              <span>{season}</span>
            </div>
          </div>

          <p className="max-w-md font-lora text-lg leading-relaxed opacity-80">
            {description}
          </p>

          <Link to={`/expedition/${id}`} className="group inline-flex items-center gap-4 pt-8">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase group-hover:text-copper-burn transition-all">Open Chapter</span>
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-sage-mist group-hover:text-copper-burn"
            >
              →
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

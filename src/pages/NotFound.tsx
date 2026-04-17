import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-glacier-white topo-bg">
      <div className="text-center space-y-12 max-w-lg px-8">
        <div className="space-y-4">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Error / Coordinate Not Found</span>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="text-[12rem] font-unbounded text-sage-mist leading-none"
          >
            404
          </motion.h1>
          <h2 className="text-4xl md:text-5xl font-lora italic text-charcoal-ink">
            You've reached unmapped territory.
          </h2>
        </div>
        
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal-ink/60">
          Even our GPS can't find this page. The terrain has shifted significantly since our last expedition.
        </p>

        <div className="pt-8">
           <Link to="/" className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper-burn hover:text-charcoal-ink transition-all">
             ← Return to Base Camp
           </Link>
        </div>
      </div>
    </div>
  );
}

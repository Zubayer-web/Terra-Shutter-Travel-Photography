import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const journalEntries = [
  { id: 1, date: '2024.03.14', title: 'The Polar Night Protocol', location: 'Svalbard, 78°N', category: 'FIELD NOTES' },
  { id: 2, date: '2024.02.28', title: 'Shadow Mechanics in High Deserts', location: 'Atacama, Chile', category: 'TECHNIQUE' },
  { id: 3, date: '2023.11.12', title: 'Why I Stopped Carrying A Spare Body', location: 'Annapurna Range', category: 'GEAR' },
  { id: 4, date: '2023.09.05', title: 'The Last Glaciers of the South', location: 'Los Glaciares, Patagonia', category: 'CONSERVATION' },
];

export default function Journal() {
  return (
    <div className="pt-32 pb-48 bg-glacier-white">
      {/* Header */}
      <section className="px-8 md:px-24 mb-32 space-y-4">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Field Dispatches</span>
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Terra Shutter / Journal</span>
        </div>
        <div className="h-[1px] w-full bg-sage-mist/20" />
      </section>

      {/* Featured Dispatch */}
      <section className="bg-obsidian text-glacier-white py-24 md:py-48 px-8 md:px-24 mb-48 relative overflow-hidden">
        <div className="max-w-4xl space-y-12 relative z-10">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-sage-mist">Featured Entry</span>
            <div className="h-[1px] w-12 bg-sage-mist/40" />
          </div>
          <h2 className="text-5xl md:text-8xl font-lora italic leading-tight">
            Vertical Silence: Eight Days in the Khumbu Fog.
          </h2>
          <div className="flex flex-wrap gap-12 font-mono text-[10px] tracking-widest uppercase opacity-60">
            <span>Written: 2023.10.12</span>
            <span>GPS: 27°59′N 86°43′E</span>
            <span>Est. Read: 14 MIN</span>
          </div>
          <div className="pt-12">
            <Link to="/journal/khumbu" className="inline-block border-b border-copper-burn pb-1 font-mono text-[10px] tracking-[0.4em] uppercase hover:border-b-2 transition-all">
              Initiate Brief →
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-charcoal-ink opacity-50 skew-x-12 transform translate-x-1/2" />
      </section>

      {/* Categories */}
      <section className="px-8 md:px-24 mb-24 overflow-x-auto">
        <div className="flex gap-12 font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal-ink min-w-max">
           {['FIELD NOTES', 'TECHNIQUE', 'CONSERVATION', 'GEAR', 'STORIES', 'VIDEO'].map(cat => (
             <button key={cat} className="transition-colors hover:text-copper-burn opacity-40 hover:opacity-100">— {cat}</button>
           ))}
        </div>
      </section>

      {/* List Layout */}
      <section className="px-8 md:px-24 space-y-0">
        <div className="border-t border-sage-mist/20">
          {journalEntries.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <Link to={`/journal/${entry.id}`} className="block border-b border-sage-mist/20 py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors z-10 relative">
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-40 md:w-32">{entry.date}</span>
                <h3 className="flex-1 text-4xl md:text-5xl font-lora italic transition-all group-hover:pl-4 group-hover:text-copper-burn">{entry.title}</h3>
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-40">{entry.location}</span>
                
                <div className="absolute top-0 right-0 w-0 h-full bg-frost/30 -z-10 transition-all duration-500 group-hover:w-full" />
              </Link>
              
              {/* Preview Image placeholder logic (in absolute position to slide in) */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 aspect-[4/5] bg-frost opacity-0 translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 pointer-events-none z-20 overflow-hidden border border-sage-mist/20">
                <img 
                  src={`https://picsum.photos/seed/journal-${entry.id}/400/500`} 
                  alt="Preview" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

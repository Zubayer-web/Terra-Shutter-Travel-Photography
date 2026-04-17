import { motion } from 'motion/react';
import { useState } from 'react';

const categories = ['ALL', 'ARCTIC', 'ALPINE', 'DESERT', 'COASTAL', 'RAINFOREST', 'ISLAND'];

const destinations = [
  {
    country: 'Iceland',
    region: 'South Coast / Highlands',
    zone: 'ARCTIC',
    dates: '2022 - 2024',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2670&auto=format&fit=crop',
    height: '600px',
  },
  {
    country: 'Norway',
    region: 'Lofoten / Svalbard',
    zone: 'ARCTIC',
    dates: '2023 - 2025',
    image: 'https://images.unsplash.com/photo-1518156176313-080c9502df67?q=80&w=2670&auto=format&fit=crop',
    height: '800px',
  },
  {
    country: 'Chile',
    region: 'Atacama / Torres del Paine',
    zone: 'DESERT',
    dates: '2024',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2670&auto=format&fit=crop',
    height: '500px',
  },
  {
    country: 'Nepal',
    region: 'Khumbu / Mustang',
    zone: 'ALPINE',
    dates: '2019 - 2021',
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2670&auto=format&fit=crop',
    height: '700px',
  },
];

export default function Destinations() {
  const [filter, setFilter] = useState('ALL');

  const filteredDestinations = destinations.filter(d => filter === 'ALL' || d.zone === filter);

  return (
    <div className="pt-32 pb-48 bg-glacier-white">
      {/* Hero */}
      <section className="px-8 md:px-24 mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="space-y-4">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">The Reach</span>
          <h1 className="text-[15vw] md:text-[10vw] font-unbounded leading-[0.8] text-obsidian -ml-[1vw]">
            41<br/>COUNTRIES
          </h1>
        </div>
        
        {/* Map Silhouette placeholder or SVG logic */}
        <div className="w-full md:w-[400px] aspect-square bg-topo-bg opacity-30 flex items-center justify-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-sage-mist">Topographic Vector Archive</span>
        </div>
      </section>

      {/* Filters */}
      <section className="px-8 md:px-24 mb-24">
        <div className="flex flex-wrap gap-8 font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal-ink border-y border-sage-mist/20 py-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`transition-colors hover:text-copper-burn ${filter === cat ? 'text-copper-burn font-bold' : 'opacity-40'}`}
            >
              / {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid - Strip Layout */}
      <section className="px-8 md:px-24 space-y-32">
        {filteredDestinations.map((dest, i) => (
          <motion.div
            key={dest.country}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="flex flex-col md:flex-row h-auto group cursor-pointer relative"
          >
            {/* Left Decorator line */}
            <div className="hidden md:block absolute -left-8 top-0 bottom-0 w-[1px] bg-copper-burn scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />

            {/* Photo */}
            <div className="w-full md:w-1/2 overflow-hidden" style={{ height: dest.height }}>
              <motion.img
                src={dest.image}
                alt={dest.country}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-[1s]"
              />
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center space-y-8 bg-glacier-white">
              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-40">{dest.region}</span>
                <h2 className="text-6xl md:text-8xl font-lora italic">{dest.country}</h2>
              </div>
              
              <div className="flex flex-col gap-2 font-mono text-[10px] tracking-widest uppercase">
                <span className="text-sage-mist">{dest.zone} CLIMATE</span>
                <span className="opacity-40">{dest.dates}</span>
              </div>

              <div className="pt-8">
                <span className="font-mono text-[12px] tracking-widest group-hover:text-copper-burn transition-colors flex items-center gap-2">
                  ↘ OPEN COLLECTION
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

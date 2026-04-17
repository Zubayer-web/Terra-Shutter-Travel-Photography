import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const prints = [
  { id: 1, title: 'Obsidian Shore', price: '€450', location: 'Iceland', size: '100x120cm', img: 'https://images.unsplash.com/photo-1531366930499-61da60037a34?q=80&w=2670&auto=format&fit=crop' },
  { id: 2, title: 'The Silent Spire', price: '€380', location: 'Patagonia', size: '80x100cm', img: 'https://images.unsplash.com/photo-1544411047-c491e34a2465?q=80&w=2670&auto=format&fit=crop' },
  { id: 3, title: 'Arctic Veil', price: '€520', location: 'Svalbard', size: '120x150cm', img: 'https://images.unsplash.com/photo-1517411032365-52964bfa9ffa?q=80&w=2670&auto=format&fit=crop' },
  { id: 4, title: 'Iron Sky', price: '€290', location: 'Finland', size: '60x80cm', img: 'https://images.unsplash.com/photo-1534341144081-6898748374fb?q=80&w=2670&auto=format&fit=crop' },
];

export default function Prints() {
  return (
    <div className="pt-32 pb-48 bg-[#EBEBEB]"> {/* Slightly neutral for wall gallery */}
      {/* Hero */}
      <section className="px-8 md:px-24 mb-32 space-y-4">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Physical Archive</span>
        <h1 className="text-[12vw] font-unbounded leading-[0.8] text-obsidian -ml-[1vw]">
          THE PRINT<br/>COLLECTION
        </h1>
      </section>

      {/* Filters */}
      <section className="px-8 md:px-24 mb-32">
        <div className="flex gap-12 font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal-ink border-b border-sage-mist/20 pb-8">
           {['ALL', 'ARCTIC', 'ALPINE', 'DESERT', 'WILDLIFE', 'SERIES'].map(f => (
             <button key={f} className="transition-colors hover:text-copper-burn opacity-40 hover:opacity-100">— {f}</button>
           ))}
        </div>
      </section>

      {/* Gallery Wall */}
      <section className="px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 items-end">
          {prints.map((print, i) => (
            <motion.div
              key={print.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className={`space-y-8 flex flex-col ${i % 2 === 0 ? 'md:pb-32' : 'md:pt-32'}`}
            >
              <div className="relative bg-white p-4 shadow-[20px_20px_40px_rgba(0,0,0,0.15)] group cursor-crosshair">
                <div className="overflow-hidden bg-frost">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5 }}
                    src={print.img} 
                    alt={print.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
              
              <div className="space-y-4 px-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-lora italic text-charcoal-ink">{print.title}</h3>
                    <span className="font-mono text-[10px] tracking-widest uppercase opacity-40">{print.location} // {print.size}</span>
                  </div>
                  <span className="font-mono text-sm tracking-widest">{print.price}</span>
                </div>
                <button className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper-burn border-b border-transparent hover:border-copper-burn pb-1 transition-all">
                  ↗ ENQUIRE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

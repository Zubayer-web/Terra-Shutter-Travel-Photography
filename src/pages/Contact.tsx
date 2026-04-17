import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="pt-32 pb-48 bg-glacier-white">
      {/* Hero */}
      <section className="px-8 md:px-24 mb-24">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Frequency: Open</span>
          <h1 className="text-[12vw] md:text-[8vw] font-unbounded leading-[0.8] text-obsidian flex items-center">
            OPEN CHANNEL
            <motion.div 
               animate={{ opacity: [1, 0] }} 
               transition={{ duration: 0.8, repeat: Infinity, ease: 'steps(2)' }} 
               className="w-4 h-[1em] bg-copper-burn ml-4"
            />
          </h1>
        </div>
      </section>

      <section className="px-8 md:px-24 flex flex-col md:flex-row gap-24">
        {/* Form */}
        <div className="flex-1 max-w-2xl">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 py-24"
            >
               <h2 className="text-4xl font-lora italic">Transmission Received.</h2>
               <p className="font-mono text-[10px] tracking-widest uppercase opacity-60">Terra Shutter will respond within 48 hours. Secure channel standing by.</p>
               <div className="flex items-center gap-4 py-12">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-12 border border-sage-mist rounded-full flex items-center justify-center"
                  >
                     <div className="w-2 h-2 bg-sage-mist rounded-full" />
                  </motion.div>
                   <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    className="absolute w-12 h-12 border border-sage-mist rounded-full"
                  />
               </div>
               <button onClick={() => setIsSuccess(false)} className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper-burn">Send Another Transmission</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-16 font-mono text-[10px] tracking-widest uppercase">
              <div className="space-y-0.5">
                <label className="opacity-40 block mb-2">Sender Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="IDENTIFY YOURSELF..."
                  className="w-full bg-transparent border-b border-sage-mist/30 py-4 focus:border-copper-burn outline-none transition-colors placeholder:opacity-20"
                />
              </div>

              <div className="space-y-0.5">
                <label className="opacity-40 block mb-2">Frequency (Email)</label>
                <input 
                  type="email" 
                  required
                  placeholder="WHERE TO RESPOND..."
                  className="w-full bg-transparent border-b border-sage-mist/30 py-4 focus:border-copper-burn outline-none transition-colors placeholder:opacity-20"
                />
              </div>

              <div className="space-y-8">
                <label className="opacity-40 block">Mission Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['EXPEDITION', 'EDITORIAL', 'WORKSHOP', 'PRINT PURCHASE', 'OTHER'].map(type => (
                    <label key={type} className="flex items-center gap-4 cursor-pointer group">
                      <input type="checkbox" className="appearance-none w-4 h-4 border border-sage-mist/40 checked:bg-copper-burn transition-all" />
                      <span className="group-hover:text-copper-burn transition-colors">[ ] {type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-0.5">
                <label className="opacity-40 block mb-2">Coordinates (Location)</label>
                <input 
                  type="text" 
                  placeholder="POINT OF ORIGIN..."
                  className="w-full bg-transparent border-b border-sage-mist/30 py-4 focus:border-copper-burn outline-none transition-colors placeholder:opacity-20"
                />
              </div>

              <div className="space-y-0.5">
                <label className="opacity-40 block mb-2">Transmission (Message)</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="ENCODE MESSAGE..."
                  className="w-full bg-transparent border-b border-sage-mist/30 py-4 focus:border-copper-burn outline-none transition-colors placeholder:opacity-20 resize-none"
                />
              </div>

              <div className="pt-8">
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-sage-mist text-glacier-white px-24 py-6 hover:bg-obsidian transition-colors tracking-[0.5em] font-bold"
                >
                  TRANSMIT →
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="w-full md:w-64 space-y-24">
           <div className="space-y-6">
             <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40 block">Current Status</span>
             <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px] border-b border-sage-mist/10 pb-2">
                   <span className="opacity-50 text-sage-mist">LOCATION</span>
                   <span>64.1°N (HI)</span>
                </div>
                <div className="flex justify-between font-mono text-[10px] border-b border-sage-mist/10 pb-2">
                   <span className="opacity-50 text-sage-mist">RESP. TIME</span>
                   <span>{'<'} 48H</span>
                </div>
             </div>
           </div>

           <div className="space-y-6">
             <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40 block">Social Nodes</span>
             <div className="flex flex-col gap-4 font-mono text-[10px] tracking-widest">
               <a href="#" className="hover:text-copper-burn transition-colors">INSTAGRAM // 01</a>
               <a href="#" className="hover:text-copper-burn transition-colors">FOUNDATION // 02</a>
               <a href="#" className="hover:text-copper-burn transition-colors">BEHANCE // 03</a>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}

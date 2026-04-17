import { motion } from 'motion/react';

export default function About() {
  const timeline = [
    { date: '2014.05', location: 'Icelandic Interior', mission: 'First Solo Winter Traverse', outcome: 'Archive 01 Established' },
    { date: '2016.11', location: 'Gobi Desert, Mongolia', mission: 'Shadow Documentation', outcome: 'Editorial: National Geographic' },
    { date: '2019.03', location: 'Everest Region, Nepal', mission: 'Altitude Endurance Shoot', outcome: 'Shortlisted: Sony World Awards' },
    { date: '2022.01', location: 'Svalbard Archipelago', mission: 'Midnight Sun Sequence', outcome: 'Fine Art Series: "Obsidian Ice"' },
    { date: '2024.08', location: 'Atacama Plateau', mission: 'Atmospheric Lens Research', outcome: 'IN PROGRESS' },
  ];

  return (
    <div className="pt-32 pb-48 bg-glacier-white">
      {/* Hero */}
      <section className="min-h-screen h-auto flex flex-col md:flex-row bg-glacier-white mb-48">
        <div className="w-full md:w-[40%] flex flex-col justify-center p-12 md:p-24 space-y-12 relative overflow-hidden">
           <div className="relative z-10">
            <span className="font-unbounded text-[15vw] md:text-[8vw] opacity-[0.03] text-charcoal-ink select-none absolute -top-[5vw] -left-[10vw]">FIELD</span>
            <h1 className="text-6xl md:text-8xl font-lora italic leading-tight text-charcoal-ink">
              The <br/>Photographer
            </h1>
            <div className="pt-8 space-y-4">
               <div className="h-[1px] w-24 bg-copper-burn" />
               <span className="font-mono text-[10px] tracking-widest uppercase text-charcoal-ink opacity-60">HQ: 48.8566° N, 2.3522° E</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%] h-[60vh] md:h-auto overflow-hidden bg-frost">
           <img 
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop" 
            alt="Photographer"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale contrast-[1.1]"
           />
        </div>
      </section>

      {/* Bio Section */}
      <section className="px-8 md:px-24 mb-48">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-sage-mist">Subject: Profile</span>
            <div className="h-[1px] flex-1 bg-sage-mist/20" />
          </div>
          
          <div className="space-y-12">
            <p className="font-lora text-2xl md:text-3xl italic leading-relaxed text-charcoal-ink indent-[5%]">
              Terra Shutter was founded on the belief that the camera is merely an excuse to push further into the unknown. Since 2014, our mission has been to document the vanishing silence of the world's most remote terrains. 
            </p>
            <p className="font-lora text-xl md:text-2xl leading-relaxed text-charcoal-ink/80 opacity-80">
              We specialize in cold-wilderness editorial, focusing on the intersection of raw geology and atmospheric pressure. Our work is a field research journal in visual form—capturing the data of light where roads stop.
            </p>
          </div>

          <div className="py-24 text-center border-y border-sage-mist/20">
             <h3 className="font-lora italic text-4xl md:text-6xl text-charcoal-ink">
               "The camera is just an excuse to go further."
             </h3>
             <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40 mt-8 block">— FOUNDER / EXPEDITION LEAD</span>
          </div>
        </div>
      </section>

      {/* Expedition Log Timeline */}
      <section className="px-8 md:px-24 mb-48">
        <div className="space-y-12">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Expedition Log / Archive</span>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-[10px] tracking-widest uppercase border-t border-sage-mist/20">
              <thead>
                <tr className="text-sage-mist">
                  <th className="py-8 text-left font-normal border-b border-sage-mist/10">Date</th>
                  <th className="py-8 text-left font-normal border-b border-sage-mist/10">Location</th>
                  <th className="py-8 text-left font-normal border-b border-sage-mist/10 hidden md:table-cell">Mission</th>
                  <th className="py-8 text-left font-normal border-b border-sage-mist/10">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((item, i) => (
                  <tr key={i} className={`group hover:bg-frost/20 transition-colors ${i === timeline.length - 1 ? 'text-copper-burn font-bold' : ''}`}>
                    <td className="py-8 border-b border-sage-mist/10">{item.date}</td>
                    <td className="py-8 border-b border-sage-mist/10">{item.location}</td>
                    <td className="py-8 border-b border-sage-mist/10 hidden md:table-cell opacity-60">{item.mission}</td>
                    <td className="py-8 border-b border-sage-mist/10">{item.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gear Manifest */}
      <section className="px-8 md:px-24">
        <div className="max-w-2xl space-y-12">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Field Gear / Manifest</span>
          <div className="space-y-6 font-mono text-[10px] tracking-widest uppercase">
            <div className="flex items-end gap-2">
              <span>Camera Systems</span>
              <div className="flex-1 border-b border-dotted border-sage-mist opacity-30 pb-1" />
              <span>Sony Alpha 1 / Alpha 7R V</span>
            </div>
            <div className="flex items-end gap-2">
              <span>Drone Unit</span>
              <div className="flex-1 border-b border-dotted border-sage-mist opacity-30 pb-1" />
              <span>DJI Mavic 3 Pro / FPV</span>
            </div>
            <div className="flex items-end gap-2">
              <span>Lighting</span>
              <div className="flex-1 border-b border-dotted border-sage-mist opacity-30 pb-1" />
              <span>Solar / Meteorological</span>
            </div>
            <div className="flex items-end gap-2">
              <span>Post-Processing</span>
              <div className="flex-1 border-b border-dotted border-sage-mist opacity-30 pb-1" />
              <span>Capture One / LR Archive</span>
            </div>
            <div className="flex items-end gap-2">
              <span>Survival Gear</span>
              <div className="flex-1 border-b border-dotted border-sage-mist opacity-30 pb-1" />
              <span>North Face / Arc'teryx Field Kits</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

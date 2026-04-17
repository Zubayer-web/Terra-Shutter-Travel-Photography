import { motion } from 'motion/react';

export default function Services() {
  const missions = [
    {
      id: '01',
      title: 'EXPEDITION COVERAGE',
      details: [
        { label: 'Duration', value: '7–30 days minimum' },
        { label: 'Terrain', value: 'Remote worldwide' },
        { label: 'Output', value: 'Full documentary archive' },
        { label: 'Status', value: 'AVAILABLE', active: true },
      ],
      action: 'INITIATE BRIEF'
    },
    {
      id: '02',
      title: 'EDITORIAL ASSIGNMENT',
      details: [
        { label: 'Client', value: 'Magazines, NGOs, Brands' },
        { label: 'Turnaround', value: '14 days post-shoot' },
        { label: 'Rights', value: 'Negotiable' },
        { label: 'Status', value: 'AVAILABLE', active: true },
      ],
      action: 'INITIATE BRIEF'
    },
    {
      id: '03',
      title: 'FIELD WORKSHOP',
      details: [
        { label: 'Participants', value: 'Max 6 per session' },
        { label: 'Location', value: 'International only' },
        { label: 'Level', value: 'Intermediate–Advanced' },
        { label: 'Status', value: '2 SLOTS LEFT', active: true },
      ],
      action: 'RESERVE SLOT'
    },
    {
      id: '04',
      title: 'FINE ART PRINTS',
      details: [
        { label: 'Edition', value: 'Limited (25 per image)' },
        { label: 'Medium', value: 'Hahnemühle Fine Art' },
        { label: 'Sizes', value: '50cm–150cm' },
        { label: 'Status', value: 'OPEN', active: true },
      ],
      action: 'VIEW COLLECTION'
    }
  ];

  return (
    <div className="pt-32 pb-48 bg-glacier-white">
      {/* Hero */}
      <section className="px-8 md:px-24 mb-32 space-y-4">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Directives</span>
        <h1 className="text-[12vw] font-unbounded leading-[0.8] text-obsidian -ml-[1vw]">
          AVAILABLE<br/>FOR
        </h1>
      </section>

      {/* Services List */}
      <section className="px-8 md:px-24 mb-48 space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
          {missions.map((mission, i) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="space-y-12 bg-frost/10 p-12 md:p-16 border border-sage-mist/10 hover:border-sage-mist/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase opacity-40">
                   <span>MISSION TYPE {mission.id}</span>
                   <div className="h-[1px] w-12 bg-sage-mist" />
                </div>
                <h2 className="text-4xl md:text-5xl font-lora italic leading-tight text-charcoal-ink">
                  {mission.title}
                </h2>
              </div>

              <div className="space-y-6">
                {mission.details.map((detail, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] tracking-widest uppercase opacity-40">{detail.label}</span>
                    <div className="flex items-center gap-2">
                       {detail.label === 'Status' && <div className="w-1.5 h-1.5 rounded-full bg-pale-moss animate-pulse" />}
                       <span className="font-mono text-[12px] tracking-widest uppercase text-charcoal-ink">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-sage-mist/20">
                <button className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper-burn hover:text-charcoal-ink transition-colors flex items-center gap-4">
                  {mission.action} <span className="text-xl">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-8 md:px-24">
        <div className="max-w-xl space-y-16">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Iterative Protocol / Process</span>
          <div className="space-y-12">
             {[
               { id: '01', title: 'BRIEF RECEIVED', text: 'Evaluation of terrain access and light logistics.' },
               { id: '02', title: 'TERRAIN SCOUTED', text: 'Remote digital reconnaissance and gear manifest stabilization.' },
               { id: '03', title: 'EXPEDITION LAUNCHED', text: 'On-site execution with real-time field backup.' },
               { id: '04', title: 'ARCHIVE DELIVERED', text: 'Final desaturated editorial color grade and sequencing.' }
             ].map((step) => (
               <div key={step.id} className="flex gap-8 group">
                  <span className="font-mono text-[10px] tracking-widest text-sage-mist group-hover:text-copper-burn transition-colors">{step.id} ·</span>
                  <div className="space-y-2">
                    <h3 className="font-mono text-[12px] tracking-widest uppercase text-charcoal-ink">{step.title}</h3>
                    <p className="font-lora italic text-charcoal-ink/60 uppercase text-xs">{step.text}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}

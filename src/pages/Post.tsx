import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Post() {
  const { id } = useParams();

  return (
    <div className="pt-32 pb-48 bg-glacier-white">
      {/* Header Info */}
      <section className="px-8 md:px-24 mb-24 space-y-8 max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-8 font-mono text-[10px] tracking-widest uppercase opacity-40">
           <span>DATE: 2024.03.14</span>
           <span>GPS: 78.2232° N, 15.6267° E</span>
           <span>WIND: 14kts NE</span>
           <span>TEMP: -24°C</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-lora italic leading-tight text-charcoal-ink">
          The Polar Night Protocol: documenting silence at 78°N.
        </h1>
        <div className="h-[1px] w-48 bg-copper-burn" />
      </section>

      {/* Hero Image */}
      <section className="w-full h-[80vh] bg-frost mb-48">
         <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop" 
            alt="Polar Night" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[0.2]"
         />
      </section>

      {/* Content */}
      <section className="px-8 md:px-24 mb-48">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="space-y-8 font-lora text-xl md:text-2xl leading-relaxed text-charcoal-ink/80">
            <p>
              The first thing that leaves you is the sense of scale. In the Svalbard interior, during the heart of the polar night, there are no shadows. Light is a theoretical concept, whispered about by locals but unseen for months. 
            </p>
            <p className="indent-[5%]">
              We arrived via snowmobile, three hours from the nearest structure. My Sony Alpha 1 was already struggling with the lubricants in the lens barrel thickening. Every movement must be calculated; a breath too close to the viewfinder instantly crystallizes.
            </p>
          </div>

          <div className="py-24 border-y border-sage-mist/20 text-center">
             <h3 className="text-4xl md:text-6xl font-lora italic text-charcoal-ink leading-tight">
               "When color is stripped away, the landscape's anatomy is finally revealed."
             </h3>
          </div>

          <div className="space-y-8 font-lora text-xl md:text-2xl leading-relaxed text-charcoal-ink/80">
             <p>
               To shoot in these conditions is to engage in a technical dance with thermodynamics. The sensor remains surprisingly stable, but the human element is fragile. We spent four days waiting for a specific type of atmospheric distortion that only occurs when the mercury drops past -30°C.
             </p>
          </div>
        </div>
      </section>

      {/* In-Post Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mb-48">
          <div className="aspect-[4/5] bg-frost overflow-hidden">
             <img src="https://picsum.photos/seed/post1/1200/1500" alt="Detail 1" referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="aspect-[4/5] bg-frost overflow-hidden md:mt-24">
             <img src="https://picsum.photos/seed/post2/1200/1500" alt="Detail 2" referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale" />
          </div>
      </section>

      {/* Footer Navigation */}
      <section className="px-8 md:px-24 flex flex-col items-center">
         <div className="h-[1px] w-full bg-sage-mist/20 mb-12" />
         <div className="text-center space-y-8">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">Next Dispatch</span>
            <Link to="/journal/2" className="group block space-y-4">
              <h4 className="text-4xl md:text-6xl font-lora italic group-hover:text-copper-burn transition-colors">Shadow Mechanics in High Deserts</h4>
              <span className="font-mono text-sm tracking-widest text-sage-mist group-hover:text-charcoal-ink transition-colors">INITIATE NEXT CHANNEL →</span>
            </Link>
         </div>
      </section>
    </div>
  );
}

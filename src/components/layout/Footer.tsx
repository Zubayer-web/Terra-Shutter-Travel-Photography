import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [utcTime, setUtcTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const timer = setInterval(() => {
      setUtcTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full">
      <div className="flex flex-col md:flex-row min-h-[40vh]">
        {/* Left Side: Obsidian */}
        <div className="flex-1 bg-obsidian text-glacier-white p-12 md:p-24 flex flex-col justify-between">
          <div className="space-y-8">
            <span className="font-unbounded text-xs tracking-[0.4em] uppercase opacity-50 block">TERRA SHUTTER / EST. 2014</span>
            <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
              <Link to="/destinations" className="hover:text-sage-mist transition-colors">Destinations</Link>
              <Link to="/gallery" className="hover:text-sage-mist transition-colors">Archive</Link>
              <Link to="/journal" className="hover:text-sage-mist transition-colors">Field Notes</Link>
              <Link to="/contact" className="hover:text-sage-mist transition-colors">Join Channel</Link>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest mt-12">
            <span>Open for expeditions: </span>
            <span className="text-pale-moss font-bold">YES</span>
            <div className="w-2 h-2 bg-pale-moss rounded-full animate-pulse shadow-[0_0_8px_#B5C9BF]" />
          </div>
        </div>

        {/* Right Side: Charcoal Ink */}
        <div className="flex-1 bg-charcoal-ink text-glacier-white p-12 md:p-24 flex flex-col justify-between border-t md:border-t-0 md:border-l border-sage-mist/20">
          <div className="space-y-8">
            <span className="font-unbounded text-xs tracking-[0.4em] uppercase opacity-50 block">Live Feed</span>
            <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-copper-burn transition-colors">Instagram</a>
              <a href="#" className="hover:text-copper-burn transition-colors">Foundation</a>
              <a href="#" className="hover:text-copper-burn transition-colors">Behance</a>
              <a href="#" className="hover:text-copper-burn transition-colors">Privacy Protocal</a>
            </div>
          </div>
          <div className="space-y-2 mt-12">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 block">Current Feed Time</span>
            <span className="font-mono text-[10px] uppercase tracking-widest">{utcTime}</span>
          </div>
        </div>
      </div>
      
      {/* Giant Giant Giant Text spanning both */}
      <div className="w-full bg-obsidian py-2 border-t border-sage-mist/10 overflow-hidden select-none">
        <h2 className="font-unbounded text-[15vw] leading-none text-transparent border-t-0 -mt-[5vw] opacity-10" style={{ WebkitTextStroke: '1px var(--color-glacier-white)' }}>
          TERRA SHUTTER
        </h2>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Destinations', path: '/destinations' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Prints', path: '/prints' },
  { name: 'Journal', path: '/journal' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const variants = [
  { name: 'H-02', path: '/home-2' },
  { name: 'H-03', path: '/home-3' },
  { name: 'G-02', path: '/gallery-2' },
  { name: 'G-03', path: '/gallery-3' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [variantsOpen, setVariantsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 flex justify-between items-center',
          isScrolled ? 'bg-frost/95 backdrop-blur-md border-b border-sage-mist/20 py-4' : 'bg-transparent'
        )}
      >
        <Link to="/" className="group">
          <span className="font-unbounded text-[14px] tracking-[0.3em] font-bold uppercase transition-colors group-hover:text-copper-burn">
            TERRA SHUTTER
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[30px]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'font-mono text-[10px] uppercase tracking-widest transition-all hover:text-sage-mist relative overflow-hidden group',
                location.pathname === link.path ? 'text-charcoal-ink' : 'text-charcoal-ink/60'
              )}
            >
              <span className="relative z-10">{link.name}</span>
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-[1px] bg-copper-burn transition-transform duration-300 origin-left",
                location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )} />
            </Link>
          ))}
          
          {/* Variants Toggle */}
          <div className="relative">
            <button 
              onMouseEnter={() => setVariantsOpen(true)}
              onMouseLeave={() => setVariantsOpen(false)}
              className="font-mono text-[10px] uppercase tracking-widest text-charcoal-ink/40 hover:text-copper-burn transition-all flex items-center gap-2"
            >
              VARIANTS [ {variants.length} ]
              
              <AnimatePresence>
                {variantsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-4 bg-obsidian p-6 min-w-[200px] flex flex-col gap-4 border border-glacier-white/10"
                  >
                    <span className="font-mono text-[8px] tracking-widest text-glacier-white/40 mb-2">LAYOUT PROTOCOLS</span>
                    {variants.map(v => (
                      <Link 
                        key={v.path} 
                        to={v.path} 
                        className="text-glacier-white hover:text-sage-mist transition-colors text-left"
                      >
                        {v.name} // ARCHIVE
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-charcoal-ink z-50"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-obsidian z-[45] flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="font-lora italic text-4xl text-glacier-white hover:text-sage-mist transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

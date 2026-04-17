import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="relative">
        {/* Wipe Overlay */}
        <motion.div
          initial={{ translateY: '100%' }}
          animate={{ translateY: '-100%' }}
          exit={{ translateY: '100%' }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed top-0 left-0 w-full h-[100vh] bg-obsidian z-[9999] pointer-events-none"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

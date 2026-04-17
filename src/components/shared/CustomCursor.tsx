import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<{ id: number; x: number; y: number }[]>([]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Add to trail
      const id = Date.now();
      setTrail((prev) => [...prev.slice(-10), { id, x: e.clientX, y: e.clientY }]);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Cleanup trail
    const trailInterval = setInterval(() => {
      setTrail((prev) => prev.slice(1));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      clearInterval(trailInterval);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Plus Sign Cursor */}
      <motion.div
        ref={cursorRef}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      >
        <div className="relative flex items-center justify-center">
          <motion.div 
            animate={{ 
              width: isHovering ? 40 : 20,
              height: 2 
            }}
            className="absolute bg-obsidian" 
          />
          <motion.div 
            animate={{ 
              height: isHovering ? 40 : 20,
              width: 2 
            }}
            className="absolute bg-obsidian" 
          />
        </div>
      </motion.div>

      {/* Trail */}
      {trail.map((point) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          className="fixed top-0 left-0 w-1 h-1 bg-glacier-white rounded-full z-[9998] pointer-events-none mix-blend-difference"
          style={{ x: point.x, y: point.y, translateX: '-50%', translateY: '-50%' }}
        />
      ))}
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-cyan rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%',
          opacity: isVisible ? 1 : 0,
          willChange: 'transform',
        }}
      />
      
      {/* Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-cyan/30 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          translateX: useSpring(cursorX, { damping: 40, stiffness: 400 }),
          translateY: useSpring(cursorY, { damping: 40, stiffness: 400 }),
          x: '-50%',
          y: '-50%',
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.5 : 0,
          willChange: 'transform',
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-cyan/5 rounded-full blur-[100px] pointer-events-none z-[9997] hidden md:block"
        style={{
          translateX: useSpring(cursorX, { damping: 50, stiffness: 200 }),
          translateY: useSpring(cursorY, { damping: 50, stiffness: 200 }),
          x: '-50%',
          y: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

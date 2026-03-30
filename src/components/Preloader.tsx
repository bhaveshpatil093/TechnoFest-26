import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('tf26_visited');
    
    if (hasVisited) {
      setIsVisible(false);
      setShouldRender(false);
      onComplete();
      return;
    }

    setShouldRender(true);

    const duration = 2500; // 2.5 seconds
    const interval = 20; // Update every 20ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('tf26_visited', 'true');
            onComplete();
          }, 500);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!shouldRender) return null;

  const letters = [
    { char: 'T', x: -200, y: -150 },
    { char: 'F', x: 150, y: -200 },
    { char: "'", x: -100, y: 250 },
    { char: '2', x: 200, y: 100 },
    { char: '6', x: -50, y: -300 },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Logo Assembly */}
          <div className="relative mb-12">
            <div className="flex items-baseline gap-1">
              {letters.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ x: item.x, y: item.y, opacity: 0, rotate: Math.random() * 360 }}
                  animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className={`text-6xl md:text-8xl font-display font-black italic ${
                    item.char === "'" ? 'text-amber' : 'text-white'
                  } ${index > 2 ? 'text-cyan drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]' : ''}`}
                >
                  {item.char}
                </motion.span>
              ))}
            </div>

            {/* Glowing Underline Trace */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
              className="absolute -bottom-4 left-0 w-full h-[2px] bg-cyan shadow-[0_0_15px_#00F5FF] origin-left"
            />
            
            {/* Circuit End Node */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 2 }}
              className="absolute -bottom-[5px] right-0 w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#00F5FF]"
            />
          </div>

          {/* Progress Container */}
          <div className="w-64 md:w-80 space-y-4">
            <div className="flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.3em]">
              <span className="text-white/40">Initializing Systems...</span>
              <span className="text-cyan">{Math.round(progress)}%</span>
            </div>
            
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan to-amber"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-center">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[9px] font-mono text-amber uppercase tracking-[0.5em]"
              >
                Technofest 2026
              </motion.div>
            </div>
          </div>

          {/* Background Grid Accent */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

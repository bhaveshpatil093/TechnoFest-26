import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Magnetic } from './Magnetic';

export const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top after 500px
      setShowScrollTop(window.scrollY > 500);
      
      // Show register button after hero section (approx 800px)
      setShowRegister(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 md:gap-4">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: 20 }}
          >
            <Magnetic strength={0.4}>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all group"
                aria-label="Scroll to Top"
              >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                
                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                  Back to Top
                </span>
              </button>
            </Magnetic>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

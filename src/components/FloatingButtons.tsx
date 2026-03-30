import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, UserPlus } from 'lucide-react';

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

  const scrollToRegister = () => {
    const element = document.getElementById('registration-hub');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* Register Now Button */}
      <AnimatePresence>
        {showRegister && (
          <motion.button
            initial={{ opacity: 0, scale: 0, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToRegister}
            className="relative w-14 h-14 bg-cyan text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.4)] group"
            aria-label="Register Now"
          >
            {/* Pulsing Ring */}
            <div className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-20" />
            <UserPlus size={24} />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
              Register Now
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all group"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
              Back to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

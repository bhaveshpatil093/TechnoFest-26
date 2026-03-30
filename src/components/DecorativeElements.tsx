import React from 'react';
import { motion } from 'motion/react';

export const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className="relative block w-[200%] h-[60px] md:h-[100px] animate-wave fill-cyan/5"
    >
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,14.29,1200,52.47V0Z" />
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,14.29,1200,52.47V0Z" transform="translate(1200, 0)" />
    </svg>
  </div>
);

export const AIWatermark = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
    <span className="text-[40vw] font-display font-black text-foreground/[0.02] rotate-[-15deg] select-none uppercase transition-colors duration-300">
      AI
    </span>
  </div>
);

export const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background transition-colors duration-300">
      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(var(--surface-high) 1px, transparent 1px), linear-gradient(90deg, var(--surface-high) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_80%)] transition-colors duration-300" />
      
      {/* Floating Particles/Glows */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan/10 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber/10 blur-[150px] rounded-full"
      />
    </div>
  );
};

export const ScanningGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
    <div className="scan-line" />
  </div>
);

export const CircuitTrace = () => (
  <div className="w-full py-12 px-6 overflow-hidden pointer-events-none">
    <svg width="100%" height="60" viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M0 30H200L230 10H400L430 50H600L630 30H1200" 
        stroke="rgba(0, 245, 255, 0.1)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <motion.path 
        d="M0 30H200L230 10H400L430 50H600L630 30H1200" 
        stroke="rgba(0, 245, 255, 0.4)" 
        strokeWidth="2" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ 
          pathLength: [0, 1], 
          opacity: [0, 1, 0],
          transition: { 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          } 
        }}
        viewport={{ once: false }}
      />
      <motion.circle 
        r="4" 
        fill="#00F5FF"
        initial={{ offsetDistance: "0%" }}
        animate={{ 
          offsetDistance: "100%",
          transition: { 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          } 
        }}
        style={{ 
          offsetPath: "path('M0 30H200L230 10H400L430 50H600L630 30H1200')",
          boxShadow: "0 0 10px #00F5FF"
        }}
      />
    </svg>
  </div>
);

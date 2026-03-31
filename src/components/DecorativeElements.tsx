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

export const UpsideDownParticles = () => {
  const particles = Array.from({ length: 40 });
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: ["-10%", "110%"],
            x: ["-5%", "5%"],
            rotate: [0, 360],
          }}
          transition={{
            y: {
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }
          }}
          className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export const AIWatermark = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
    <span className="text-[40vw] font-display font-black text-cyan/[0.03] rotate-[-15deg] select-none uppercase transition-colors duration-300">
      011
    </span>
  </div>
);

export const MindFlayerSilhouette = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-10">
    <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 0.25, scale: 1 }}
      transition={{ duration: 5, ease: "easeOut" }}
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex items-start justify-center pt-20"
    >
      <img 
        src="/assets/st_mind_flayer.png" 
        alt="Mind Flayer Silhouette" 
        className="w-full max-w-5xl object-contain mix-blend-overlay"
      />
    </motion.div>
  </div>
);

export const StrangerSticker = ({ src, className, delay = 0 }: { src: string, className: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: -20 }}
    whileInView={{ opacity: 0.6, scale: 1, rotate: Math.random() * 20 - 10 }}
    viewport={{ once: true }}
    transition={{ type: "spring", damping: 12, stiffness: 100, delay }}
    className={`absolute pointer-events-none z-10 ${className}`}
  >
    <img 
      src={src} 
      alt="Stranger Things Sticker" 
      className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(231,29,35,0.5)]"
      referrerPolicy="no-referrer"
    />
  </motion.div>
);

export const RiftEffect = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <motion.div
      animate={{ 
        opacity: [0.1, 0.2, 0.1],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(231,29,35,0.15)_0%,transparent_70%)] blur-[100px]"
    />
  </div>
);

export const VhsOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] mix-blend-screen overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uWUqnW9kA/giphy.gif')] bg-repeat opacity-20" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />
  </div>
);

export const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      {/* Upside Down / 80s Synthwave Perspective Grid */}
      <div 
        className="absolute inset-0"
        style={{ perspective: '800px' }}
      >
        <div 
          className="absolute bottom-[-40%] left-[-50%] right-[-50%] h-[150%] opacity-40 origin-bottom"
          style={{
            transform: 'rotateX(75deg)',
            backgroundImage: `
              linear-gradient(to right, rgba(231,29,35,0.3) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(231,29,35,0.3) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
            boxShadow: 'inset 0 0 100px rgba(0,0,0,1)'
          }}
        />
      </div>
      
      {/* Vignette and Fades to blend the grid smoothly into the content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_80%)]" />
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[20%] bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
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
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(231,29,35,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(231,29,35,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
    <div className="scan-line" />
  </div>
);

export const CircuitTrace = () => (
  <div className="w-full py-12 px-6 overflow-hidden pointer-events-none">
    <svg width="100%" height="60" viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M0 30H200L230 10H400L430 50H600L630 30H1200" 
        stroke="rgba(231, 29, 35, 0.1)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <motion.path 
        d="M0 30H200L230 10H400L430 50H600L630 30H1200" 
        stroke="rgba(231, 29, 35, 0.4)" 
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
        fill="#E71D23"
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
          boxShadow: "0 0 10px #E71D23"
        }}
      />
    </svg>
  </div>
);

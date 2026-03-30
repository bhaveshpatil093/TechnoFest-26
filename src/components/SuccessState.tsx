import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Check, Home, RefreshCcw } from 'lucide-react';

interface SuccessStateProps {
  name: string;
  event: string;
  rollNumber: string;
  coordinatorName: string;
  coordinatorPhone: string;
  onReset: () => void;
}

const Confetti = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 600 - 300,
      y: Math.random() * -600 - 100,
      rotation: Math.random() * 360,
      color: ['#00F5FF', '#FFAA00', '#ffffff', '#4ADE80', '#FF4500'][Math.floor(Math.random() * 5)],
      size: Math.random() * 8 + 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ 
            x: p.x, 
            y: p.y, 
            opacity: 0, 
            rotate: p.rotation 
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ 
            width: p.size, 
            height: p.size, 
            backgroundColor: p.color,
            position: 'absolute',
            borderRadius: '2px'
          }}
        />
      ))}
    </div>
  );
};

export const SuccessState: React.FC<SuccessStateProps> = ({ 
  name, 
  event, 
  rollNumber, 
  coordinatorName, 
  coordinatorPhone,
  onReset 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="relative w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
    >
      <Confetti />
      
      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              x: [0, 10, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Checkmark */}
        <div className="w-24 h-24 rounded-full border-4 border-cyan/30 flex items-center justify-center mb-8 relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            className="absolute inset-0 bg-cyan/10 rounded-full blur-xl"
          />
          <svg className="w-12 h-12 text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
              d="M20 6L9 17L4 12"
            />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-2 tracking-tight">
          REGISTRATION <span className="text-cyan text-glow-cyan">CONFIRMED!</span>
        </h2>
        <p className="text-gray-400 font-sub mb-8">Your spot for {event} has been secured.</p>

        {/* Summary Box */}
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Name</p>
              <p className="text-sm font-sub text-white font-bold">{name}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Event</p>
              <p className="text-sm font-sub text-white font-bold">{event}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Roll Number</p>
              <p className="text-sm font-sub text-white font-bold">{rollNumber}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Status</p>
              <p className="text-sm font-sub text-green-400 font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> Verified
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-xs font-sub leading-relaxed mb-10 max-w-md">
          Your coordinator will reach out closer to the event. For queries, contact <span className="text-white font-bold">{coordinatorName}</span> at <a href={`tel:${coordinatorPhone}`} className="text-cyan hover:underline">{coordinatorPhone}</a>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button 
            onClick={onReset}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-display text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all group"
          >
            <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span>Register for Another Event</span>
          </button>
          <button 
            onClick={() => {
              const home = document.getElementById('home');
              if (home) home.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-cyan text-black rounded-xl font-display text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

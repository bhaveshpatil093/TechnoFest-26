import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Gamepad2, Trophy, Sparkles } from 'lucide-react';
import { GlitchHeading } from './GlitchHeading';
import { Magnetic } from './Magnetic';

interface HighlightTileProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  delay: number;
}

const HighlightTile: React.FC<HighlightTileProps> = ({ title, description, icon: Icon, color, delay }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card p-6 flex flex-col items-center text-center group relative overflow-hidden cursor-none"
      style={{ borderColor: `${color}33` }}
    >
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${color}15, transparent 40%)`,
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: color }}
      />
      
      <Magnetic strength={0.3}>
        <div 
          className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{ backgroundColor: `${color}11`, color: color }}
        >
          <Icon size={32} className="drop-shadow-[0_0_10px_currentColor]" />
        </div>
      </Magnetic>

      <h3 className="text-lg font-display font-black mb-2 tracking-tight uppercase" style={{ color: color }}>
        {title}
      </h3>
      
      <p className="text-foreground/40 text-xs font-sub leading-relaxed">
        {description}
      </p>

      {/* Decorative Corner */}
      <div 
        className="absolute top-0 right-0 w-6 h-6 opacity-20"
        style={{ 
          background: `linear-gradient(45deg, transparent 50%, ${color} 50%)` 
        }}
      />
    </motion.div>
  );
};

export const HighlightsSection = () => {
  const highlights = [
    {
      title: "Real AI Challenges",
      description: "Master prompt engineering and compete to generate the most accurate AI outputs.",
      icon: Brain,
      color: "#E71D23", // Red
      delay: 0.1
    },
    {
      title: "Build & Showcase",
      description: "Showcase your technical innovation and solve real-world problems with AI & DS.",
      icon: Cpu,
      color: "#F27D26", // Orange
      delay: 0.2
    },
    {
      title: "Game On",
      description: "Squad up for the ultimate battle royale tournament. Survival of the fittest.",
      icon: Gamepad2,
      color: "#E71D23", // Red
      delay: 0.3
    },
    {
      title: "Neon Cricket",
      description: "Experience cricket like never before with neon equipment and high-energy gameplay.",
      icon: Trophy,
      color: "#F27D26", // Orange
      delay: 0.4
    }
  ];

  const marqueeText = "TECHNOFEST 2026 ✦ 18 APRIL ✦ AI & DS DEPT ✦ SAPKAL COLLEGE NASHIK ✦ PROJECT COMPETITION ✦ ADVENTURE WITH AI ✦ REGISTER NOW ✦ ";

  return (
    <section className="py-16 relative overflow-hidden bg-surface-low transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center mb-10">
          <GlitchHeading 
            dataText="WHY TECHNOFEST?"
            className="text-3xl md:text-5xl font-black mb-2 tracking-tighter italic text-foreground uppercase transition-colors"
          >
            WHY <span className="text-cyan text-glow-cyan">TECHNOFEST?</span>
          </GlitchHeading>
          <p className="text-foreground/40 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors">
            The Ultimate Technical Odyssey Awaits
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <HighlightTile key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="relative h-12 bg-gradient-to-r from-amber via-cyan to-amber overflow-hidden flex items-center border-y border-white/10">
        <div className="marquee-content whitespace-nowrap">
          <span className="text-black font-display font-black text-lg md:text-xl tracking-widest uppercase py-1">
            {marqueeText.repeat(10)}
          </span>
          <span className="text-black font-display font-black text-lg md:text-xl tracking-widest uppercase py-1">
            {marqueeText.repeat(10)}
          </span>
        </div>
        
        {/* Overlay for depth */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>
    </section>
  );
};

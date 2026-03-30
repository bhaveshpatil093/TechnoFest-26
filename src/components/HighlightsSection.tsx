import React from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Gamepad2, Trophy, Sparkles } from 'lucide-react';
import { GlitchHeading } from './GlitchHeading';

interface HighlightTileProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  delay: number;
}

const HighlightTile: React.FC<HighlightTileProps> = ({ title, description, icon: Icon, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="glass-card p-8 flex flex-col items-center text-center group relative overflow-hidden"
      style={{ borderColor: `${color}33` }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: color }}
      />
      
      <div 
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
        style={{ backgroundColor: `${color}11`, color: color }}
      >
        <Icon size={40} className="drop-shadow-[0_0_10px_currentColor]" />
      </div>

      <h3 className="text-xl font-display font-black mb-3 tracking-tight uppercase" style={{ color: color }}>
        {title}
      </h3>
      
      <p className="text-foreground/40 text-sm font-sub leading-relaxed">
        {description}
      </p>

      {/* Decorative Corner */}
      <div 
        className="absolute top-0 right-0 w-8 h-8 opacity-20"
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
      color: "#00F5FF", // Cyan
      delay: 0.1
    },
    {
      title: "Build & Showcase",
      description: "Showcase your technical innovation and solve real-world problems with AI & DS.",
      icon: Cpu,
      color: "#FFD700", // Amber
      delay: 0.2
    },
    {
      title: "Game On",
      description: "Squad up for the ultimate battle royale tournament. Survival of the fittest.",
      icon: Gamepad2,
      color: "#FF4500", // Orange-Red
      delay: 0.3
    },
    {
      title: "Neon Cricket",
      description: "Experience cricket like never before with neon equipment and high-energy gameplay.",
      icon: Trophy,
      color: "#4ADE80", // Green
      delay: 0.4
    }
  ];

  const marqueeText = "TECHNOFEST 2026 ✦ 18 APRIL ✦ AI & DS DEPT ✦ SAPKAL COLLEGE NASHIK ✦ PROJECT COMPETITION ✦ ADVENTURE WITH AI ✦ REGISTER NOW ✦ ";

  return (
    <section className="py-24 relative overflow-hidden bg-surface-low transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <GlitchHeading 
            dataText="WHY TECHNOFEST?"
            className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic text-foreground uppercase transition-colors"
          >
            WHY <span className="text-cyan text-glow-cyan">TECHNOFEST?</span>
          </GlitchHeading>
          <p className="text-foreground/40 font-mono text-sm tracking-[0.2em] uppercase transition-colors">
            The Ultimate Technical Odyssey Awaits
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <HighlightTile key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="relative h-16 bg-gradient-to-r from-amber via-cyan to-amber overflow-hidden flex items-center border-y border-white/10">
        <div className="marquee-content whitespace-nowrap">
          <span className="text-black font-display font-black text-xl md:text-2xl tracking-widest uppercase py-2">
            {marqueeText.repeat(10)}
          </span>
          <span className="text-black font-display font-black text-xl md:text-2xl tracking-widest uppercase py-2">
            {marqueeText.repeat(10)}
          </span>
        </div>
        
        {/* Overlay for depth */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>
    </section>
  );
};

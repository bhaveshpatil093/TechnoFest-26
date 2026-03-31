import React from 'react';
import { motion } from 'motion/react';
import { Cpu, MessageSquare, Gamepad2, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlitchHeading } from './GlitchHeading';

interface HubCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  eventId: string;
  delay: number;
}

const HubCard: React.FC<HubCardProps> = ({ title, description, icon: Icon, color, eventId, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ 
        rotateX: -5, 
        rotateY: 5, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      style={{ perspective: '1000px' }}
      className="group relative"
    >
      <div 
        className="h-full p-5 rounded-2xl bg-surface-low border border-border backdrop-blur-sm transition-all duration-500 group-hover:border-opacity-50 flex flex-col items-center text-center"
        style={{ 
          borderColor: `${color}33`,
          boxShadow: `0 0 20px ${color}00`
        }}
      >
        {/* Glow Effect on Hover */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
          style={{ backgroundColor: color }}
        />

        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{ backgroundColor: `${color}22`, color: color }}
        >
          <Icon size={24} className="drop-shadow-[0_0_8px_currentColor]" />
        </div>

        <h3 className="text-lg md:text-xl font-display font-black mb-2 tracking-tight uppercase" style={{ color: color }}>
          {title}
        </h3>
        
        <p className="text-foreground/60 text-[11px] md:text-xs font-sub mb-4 leading-relaxed">
          {description}
        </p>

        <Link
          to={`/register?event=${eventId}`}
          aria-label={`Register for ${title}`}
          className="mt-auto flex items-center gap-2 px-5 py-2 rounded-full font-display text-[10px] font-bold uppercase tracking-widest transition-all duration-300 group/btn"
          style={{ 
            backgroundColor: `${color}22`, 
            color: color,
            border: `1px solid ${color}44`
          }}
        >
          <span>Register Now</span>
          <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Outer Glow */}
      <div 
        className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

export const RegistrationHub = () => {
  const events = [
    {
      title: "Project Competition",
      description: "Showcase your technical innovation and solve real-world problems with AI & Data Science.",
      icon: Cpu,
      color: "#E71D23", // Stranger Things Red
      eventId: "project",
      delay: 0.1
    },
    {
      title: "AI Prompting",
      description: "Master the art of prompt engineering and compete to generate the most accurate AI outputs.",
      icon: MessageSquare,
      color: "#F27D26", // Stranger Things Orange
      eventId: "ai",
      delay: 0.2
    },
    {
      title: "Free Fire",
      description: "Squad up for the ultimate battle royale tournament. Survival of the fittest in the digital arena.",
      icon: Gamepad2,
      color: "#E71D23", // Stranger Things Red
      eventId: "ff",
      delay: 0.3
    },
    {
      title: "Neon Cricket",
      description: "Experience cricket like never before with neon equipment and high-energy indoor gameplay.",
      icon: Trophy,
      color: "#F27D26", // Stranger Things Orange
      eventId: "cricket",
      delay: 0.4
    }
  ];


  return (
    <section id="registration-hub" className="min-h-screen flex items-center py-12 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="text-center mb-10">
          <GlitchHeading 
            dataText="REGISTER FOR TECHNOFEST 2026"
            className="text-3xl md:text-5xl font-black mb-3 tracking-tighter italic text-foreground uppercase"
          >
            REGISTER FOR <span className="text-cyan text-glow-cyan">TECHNOFEST 2026</span>
          </GlitchHeading>
          <p className="text-foreground/50 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
            18th April 2026 — Choose your competition below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {events.map((event, index) => (
            <HubCard key={index} {...event} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-6 py-3 rounded-xl bg-amber/5 border border-amber/20 backdrop-blur-sm">
            <p className="text-amber font-sub text-xs md:text-sm font-bold tracking-wide">
              <span className="mr-2">⚠️</span>
              Note: Participation in at least one competition is compulsory for all AI & DS students.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

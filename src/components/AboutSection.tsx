import { motion } from "motion/react";
import { Magnetic } from "./Magnetic";
import { TextReveal } from "./TextReveal";

const StatCard = ({ number, label, delay }: { number: string; label: string; delay: number }) => {
  return (
    <Magnetic strength={0.2}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="glass-card p-5 flex flex-col items-center text-center relative overflow-hidden group h-full"
      >
        <div className="absolute inset-0 bg-cyan/5 group-hover:bg-cyan/10 transition-colors" />
        
        <span className="text-3xl md:text-4xl font-display text-cyan text-glow-cyan mb-1 relative z-10">
          {number}
        </span>
        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/50 font-sub font-bold mb-4 relative z-10">
          {label}
        </span>
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-surface-high rounded-full overflow-hidden relative z-10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-cyan to-amber shadow-[0_0_10px_#E71D23]"
          />
        </div>
      </motion.div>
    </Magnetic>
  );
};

import { GlitchHeading } from './GlitchHeading';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 px-6 overflow-hidden border-t border-surface-low">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(231,29,35,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(231,29,35,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="absolute top-10 left-10 pointer-events-none select-none">
        <span className="text-[10rem] font-display font-black text-foreground/[0.03] leading-none">
          01
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <div className="mb-8">
              <GlitchHeading 
                dataText="About The Event"
                className="text-2xl md:text-3xl mb-3"
              >
                About The <span className="text-cyan">Event</span>
              </GlitchHeading>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-cyan shadow-[0_0_10px_#E71D23]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="space-y-4 font-body text-foreground/70 leading-relaxed max-w-xl text-sm md:text-base">
                <TextReveal
                  text="Technofest 2026 is the flagship technical symposium of the AI & DS Department at Late G. N. Sapkal College of Engineering. Scheduled for April 18th, it's a high-octane platform where academic excellence meets cyberpunk innovation."
                  className="mb-4"
                  delay={0.2}
                />
                
                <TextReveal
                  text="Featuring the 'Project Competition' and 'Adventure with AI,' the event challenges students to push their technical boundaries. Participation is mandatory for all department students, ensuring hands-on exposure to the rapidly evolving tech landscape of 2026."
                  delay={0.4}
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full md:w-64 h-48 rounded-xl overflow-hidden border border-cyan/20 shadow-cyan relative group"
              >
                <img 
                  src="https://picsum.photos/seed/retro-tech/400/300?grayscale" 
                  alt="Retro Tech" 
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-cyan/10 group-hover:bg-transparent transition-colors" />
              </motion.div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="w-full lg:w-1/4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            <StatCard number="1" label="Intense Day" delay={0.2} />
            <StatCard number="3" label="Sub-Events" delay={0.4} />
            <StatCard number="100+" label="Participants" delay={0.6} />
          </div>
        </div>
      </div>
    </section>
  );
};

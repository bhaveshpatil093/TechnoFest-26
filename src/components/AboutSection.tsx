import { motion } from "motion/react";

const StatCard = ({ number, label, delay }: { number: string; label: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 flex flex-col items-center text-center relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-cyan/5 group-hover:bg-cyan/10 transition-colors" />
      
      <span className="text-4xl md:text-5xl font-display text-cyan text-glow-cyan mb-2 relative z-10">
        {number}
      </span>
      <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/50 font-sub font-bold mb-6 relative z-10">
        {label}
      </span>
      
      {/* Progress Bar */}
      <div className="w-full h-1 bg-surface-high rounded-full overflow-hidden relative z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan to-amber shadow-[0_0_10px_#00F5FF]"
        />
      </div>
    </motion.div>
  );
};

import { GlitchHeading } from './GlitchHeading';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden border-t border-surface-low">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="absolute top-20 left-10 pointer-events-none select-none">
        <span className="text-[15rem] font-display font-black text-foreground/[0.03] leading-none">
          01
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Text Content */}
          <div className="flex-1">
            <div className="mb-12">
              <GlitchHeading 
                dataText="About The Event"
                className="text-3xl md:text-4xl mb-4"
              >
                About The <span className="text-cyan">Event</span>
              </GlitchHeading>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-cyan shadow-[0_0_10px_#00F5FF]"
              />
            </div>

            <div className="space-y-6 font-body text-foreground/70 leading-relaxed max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Technofest 2026 is the flagship technical symposium organized by the Department of Artificial Intelligence & Data Science Engineering at Late G. N. Sapkal College of Engineering, Nashik. Scheduled for the 18th of April 2026, this event serves as a high-octane platform where academic prestige meets the cutting-edge world of cyberpunk innovation.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                The festival features two cornerstone competitions designed to push the boundaries of student creativity and technical prowess. The "Project Competition" invites students to showcase real-world applications of AI and DS, while "Adventure with AI" offers a series of immersive challenges that test problem-solving skills in a gamified environment.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                In our commitment to fostering a culture of continuous learning, participation is mandatory for all students within the department. This ensures that every individual gains hands-on experience and exposure to the latest industry trends, preparing them for the rapidly evolving technological landscape of 2026 and beyond.
              </motion.p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="w-full lg:w-1/3 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <StatCard number="1" label="Intense Day" delay={0.2} />
            <StatCard number="3" label="Sub-Events" delay={0.4} />
            <StatCard number="100+" label="Participants" delay={0.6} />
          </div>
        </div>
      </div>
    </section>
  );
};

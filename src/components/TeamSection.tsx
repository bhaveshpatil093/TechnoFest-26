import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, User, ShieldCheck, GraduationCap, Users } from 'lucide-react';

import { GlitchHeading } from './GlitchHeading';

interface CoordinatorProps {
  name: string;
  role: string;
  mobile: string;
  email: string;
  accent?: string;
  isLarge?: boolean;
}

const CoordinatorCard = ({ name, role, mobile, email, accent = 'cyan' }: CoordinatorProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);
  
  const accentColors: Record<string, string> = {
    cyan: 'border-cyan/30 text-cyan shadow-[0_0_10px_rgba(231,29,35,0.2)]',
    amber: 'border-amber/30 text-amber shadow-[0_0_10px_rgba(242,125,38,0.2)]',
    green: 'border-amber/30 text-amber shadow-[0_0_10px_rgba(242,125,38,0.2)]',
    red: 'border-cyan/30 text-cyan shadow-[0_0_15px_rgba(231,29,35,0.2)]',
  };

  const glowColors: Record<string, string> = {
    cyan: 'bg-cyan/5',
    amber: 'bg-amber/5',
    green: 'bg-amber/5',
    red: 'bg-cyan/5',
  };

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      className="bg-surface-low/50 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col items-center text-center transition-all group relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-${accent === 'cyan' ? 'cyan' : accent === 'amber' ? 'amber' : accent === 'green' ? 'amber' : 'cyan'} to-transparent opacity-50`} />
      
      <div className={`w-12 h-12 rounded-full flex items-center justify-center border border-dashed ${accentColors[accent]} ${glowColors[accent]} mb-3 relative`}>
        <span className="font-display font-bold text-sm tracking-tighter">{initials}</span>
        <div className={`absolute inset-0 rounded-full ${glowColors[accent]} blur-sm opacity-0 group-hover:opacity-100 transition-opacity`} />
      </div>
      
      <h4 className="text-foreground font-bold text-sm mb-0.5 group-hover:text-cyan transition-colors">{name}</h4>
      <p className="text-foreground/40 text-[9px] font-mono uppercase tracking-[0.15em] mb-3">{role}</p>
      
      <div className="flex gap-2 w-full">
        <a 
          href={`tel:${mobile}`} 
          title={mobile}
          className="flex-1 flex items-center justify-center py-1.5 rounded-md bg-white/5 border border-white/5 hover:border-cyan/30 hover:bg-cyan/5 transition-all"
        >
          <Phone className="w-3 h-3 text-cyan" />
        </a>
        <a 
          href={`mailto:${email}`} 
          title={email}
          className="flex-1 flex items-center justify-center py-1.5 rounded-md bg-white/5 border border-white/5 hover:border-cyan/30 hover:bg-cyan/5 transition-all"
        >
          <Mail className="w-3 h-3 text-cyan" />
        </a>
      </div>
    </motion.div>
  );
};

export const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const studentVolunteers = [
    { name: "Bhavesh D. Patil", role: "Main Student Coordinator" },
    { name: "Ishwar Gangurde", role: "Volunteer" },
    { name: "Mayuresh Shirsath", role: "Volunteer" },
    { name: "Damini Magar", role: "Volunteer" },
    { name: "Bhagyashri Shewale", role: "Volunteer" },
    { name: "Gaurav Deore", role: "Volunteer" },
    { name: "Sakshi Bhavsar", role: "Volunteer" },
    { name: "Yash Lohokare", role: "Volunteer" },
    { name: "Satyam Shinde", role: "Volunteer" },
    { name: "Rutuja Deore", role: "Volunteer" },
    { name: "Omkar Wayal", role: "Volunteer" },
    { name: "Soham Mahajan", role: "Volunteer" },
  ];

  return (
    <section id="team" className="py-20 px-6 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(231,29,35,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <GlitchHeading 
            dataText="OUR TEAM"
            className="text-4xl md:text-5xl font-black mb-2 tracking-tighter italic text-foreground uppercase"
          >
            OUR <span className="text-cyan text-glow-cyan">TEAM</span>
          </GlitchHeading>
          <p className="text-foreground/30 font-mono text-[10px] tracking-[0.3em] uppercase">The Architects of Technofest 2026</p>
        </motion.div>

        {/* Main Convener & Sub-Teams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column: Convener */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan/30" />
              <h3 className="text-[10px] font-display font-bold text-cyan tracking-[0.3em] uppercase flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" /> Event Convener
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan/30" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <CoordinatorCard 
                name="Prof. M. N. Jadhav"
                role="Main Event Coordinator"
                mobile="8007024545"
                email="monita.jadhav@sapkalknowledgehub.org"
                accent="cyan"
              />
            </motion.div>
          </div>

          {/* Right Column: Sub-Teams */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Competition */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-[10px] font-display font-bold text-amber tracking-[0.3em] uppercase flex items-center gap-2">
                  Project Competition
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-amber/30 to-transparent" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <CoordinatorCard 
                    name="Prof. S. D. Bagade"
                    role="Staff Coordinator"
                    mobile="7559362305"
                    email="shweta.bagade@sapkalknowledgehub.org"
                    accent="amber"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <CoordinatorCard 
                    name="Mr. Bhavesh D. Patil"
                    role="Student Coordinator"
                    mobile="9130351237"
                    email="bhaveshpatiltech@gmail.com"
                    accent="amber"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Adventure with AI */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-[10px] font-display font-bold text-amber tracking-[0.3em] uppercase flex items-center gap-2">
                  Adventure with AI
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-amber/30 to-transparent" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <CoordinatorCard 
                    name="Prof. S. S. Mergal"
                    role="Staff (AI Prompting)"
                    mobile="7798375872"
                    email="mergalswapnil@gmail.com"
                    accent="amber"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <CoordinatorCard 
                    name="Prof. S. S. Suryawanshi"
                    role="Staff (Free Fire)"
                    mobile="8530236452"
                    email="suryawanshi.s.sumedh14@gmail.com"
                    accent="cyan"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <CoordinatorCard 
                    name="Prof. S. K. Pathan"
                    role="Staff (Neon Cricket)"
                    mobile="8149545380"
                    email="shoyeb.pathan@sapkalknowledgehub.org"
                    accent="amber"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <CoordinatorCard 
                    name="Mr. Soham D. Mahajan"
                    role="Student (AI Prompting)"
                    mobile="7887329442"
                    email="sohammahajan788@gmail.com"
                    accent="amber"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Student Volunteers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Team Image Section */}
          <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/5 relative bg-surface-low/30 backdrop-blur-sm">
            <img 
              src="/assets/gang.jpg" 
              alt="Technofest Team" 
              className="w-full h-auto max-h-[500px] object-contain md:object-cover"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
            <h3 className="text-xl font-black tracking-tighter italic text-foreground flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan" /> STUDENT <span className="text-cyan">VOLUNTEERS</span>
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3"
          >
            {studentVolunteers.map((student, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="bg-surface-low/30 border border-white/5 rounded-lg p-3 text-center transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center mx-auto mb-2 group-hover:shadow-[0_0_10px_rgba(231,29,35,0.2)] transition-all">
                  <User className="w-3 h-3 text-cyan" />
                </div>
                <h5 className="text-foreground font-bold text-[10px] mb-0.5 line-clamp-1">{student.name}</h5>
                <p className="text-foreground/30 text-[8px] font-mono uppercase tracking-wider">{student.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

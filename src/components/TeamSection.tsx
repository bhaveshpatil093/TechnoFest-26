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

const CoordinatorCard = ({ name, role, mobile, email, accent = 'cyan', isLarge = false }: CoordinatorProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);
  
  const accentColors: Record<string, string> = {
    cyan: 'border-cyan/30 text-cyan shadow-[0_0_15px_rgba(0,245,255,0.2)]',
    amber: 'border-amber/30 text-amber shadow-[0_0_15px_rgba(255,170,0,0.2)]',
    green: 'border-green-400/30 text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.2)]',
    red: 'border-red-500/30 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]',
  };

  const glowColors: Record<string, string> = {
    cyan: 'bg-cyan/10',
    amber: 'bg-amber/10',
    green: 'bg-green-400/10',
    red: 'bg-red-500/10',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-surface-low backdrop-blur-xl border border-surface-high rounded-2xl p-6 flex flex-col items-center text-center transition-all group holographic-card ${isLarge ? 'md:p-10' : ''}`}
    >
      <div className={`w-16 h-16 ${isLarge ? 'md:w-24 md:h-24' : ''} rounded-full flex items-center justify-center border-2 ${accentColors[accent]} ${glowColors[accent]} mb-4 relative`}>
        <span className={`font-display font-bold ${isLarge ? 'text-xl md:text-3xl' : 'text-lg'} tracking-tighter`}>{initials}</span>
        <div className={`absolute inset-0 rounded-full ${glowColors[accent]} blur-md opacity-0 group-hover:opacity-100 transition-opacity`} />
      </div>
      
      <h4 className={`text-foreground font-bold ${isLarge ? 'text-xl md:text-2xl' : 'text-lg'} mb-1`}>{name}</h4>
      <p className="text-foreground/40 text-xs font-mono uppercase tracking-[0.2em] mb-4">{role}</p>
      
      <div className="space-y-2 w-full">
        <a 
          href={`tel:${mobile}`} 
          className="flex items-center justify-center gap-2 text-xs font-mono text-foreground/70 hover:text-foreground transition-colors py-2 rounded-lg bg-surface-low border border-surface-high hover:border-foreground/20"
        >
          <Phone className="w-3 h-3 text-cyan" /> {mobile}
        </a>
        <a 
          href={`mailto:${email}`} 
          className="flex items-center justify-center gap-2 text-xs font-mono text-foreground/70 hover:text-foreground transition-colors py-2 rounded-lg bg-surface-low border border-surface-high hover:border-foreground/20 overflow-hidden text-ellipsis whitespace-nowrap px-2"
        >
          <Mail className="w-3 h-3 text-cyan" /> {email}
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
  ];

  return (
    <section id="team" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <GlitchHeading 
            dataText="OUR TEAM"
            className="text-5xl md:text-7xl font-black mb-4 tracking-tighter italic text-foreground"
          >
            OUR <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]">TEAM</span>
          </GlitchHeading>
          <p className="text-foreground/40 font-mono text-sm tracking-widest uppercase">The Architects of Technofest 2026</p>
        </motion.div>

        {/* Main Coordinator */}
        <div className="flex justify-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-md"
          >
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-mono uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3 h-3" /> Event Convener
              </span>
            </div>
            <CoordinatorCard 
              name="Prof. M. N. Jadhav"
              role="Main Event Coordinator"
              mobile="8007024545"
              email="monita.jadhav@sapkalknowledgehub.org"
              isLarge={true}
              accent="cyan"
            />
          </motion.div>
        </div>

        {/* Sub-Teams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Project Competition Team */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber/30" />
              <h3 className="text-xl font-display font-bold text-amber tracking-widest uppercase flex items-center gap-3">
                <ShieldCheck className="w-5 h-5" /> Project Competition Team
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber/30" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

          {/* Adventure with AI Team */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-400/30" />
              <h3 className="text-xl font-display font-bold text-green-400 tracking-widest uppercase flex items-center gap-3">
                <ShieldCheck className="w-5 h-5" /> Adventure with AI Team
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-400/30" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <CoordinatorCard 
                  name="Prof. S. S. Mergal"
                  role="Staff (AI Prompting)"
                  mobile="7798375872"
                  email="mergalswapnil@gmail.com"
                  accent="green"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CoordinatorCard 
                  name="Prof. S. S. Suryawanshi"
                  role="Staff (Free Fire)"
                  mobile="8530236452"
                  email="suryawanshi.s.sumedh14@gmail.com"
                  accent="red"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CoordinatorCard 
                  name="Prof. S. K. Pathan"
                  role="Staff (Neon Cricket)"
                  mobile="8149545380"
                  email="shoyeb.pathan@sapkalknowledgehub.org"
                  accent="green"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CoordinatorCard 
                  name="Mr. Soham D. Mahajan"
                  role="Student (AI Prompting)"
                  mobile="7887329442"
                  email="sohammahajan788@gmail.com"
                  accent="green"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Student Volunteers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h3 className="text-3xl font-black mb-2 tracking-tighter italic text-foreground flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-cyan" /> STUDENT <span className="text-cyan">VOLUNTEERS</span>
            </h3>
            <p className="text-foreground/40 font-mono text-[10px] uppercase tracking-[0.3em]">The Backbone of the Event</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {studentVolunteers.map((student, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: 'var(--surface-high)' }}
                className="bg-surface-low border border-surface-high rounded-xl p-4 text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all">
                  <User className="w-4 h-4 text-cyan" />
                </div>
                <h5 className="text-foreground font-bold text-xs mb-1 line-clamp-1">{student.name}</h5>
                <p className="text-foreground/40 text-[9px] font-mono uppercase tracking-wider">{student.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

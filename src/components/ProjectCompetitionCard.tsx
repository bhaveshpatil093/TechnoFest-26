import { motion } from "motion/react";
import { User, Phone, Mail, ExternalLink } from "lucide-react";

import { GlitchHeading } from "./GlitchHeading";

const CoordinatorBlock = ({ title, name, phone, email }: { title: string, name: string, phone: string, email: string }) => (
  <div className="space-y-2">
    <h4 className="text-xs uppercase tracking-[0.2em] text-amber font-bold">{title}</h4>
    <div className="flex items-start gap-3">
      <div className="mt-1 text-cyan/70">
        <User size={16} />
      </div>
      <div>
        <p className="text-foreground font-sub font-semibold">{name}</p>
        <div className="flex flex-col gap-1 mt-1">
          <a href={`tel:${phone}`} className="flex items-center gap-2 text-xs text-foreground/50 hover:text-cyan transition-colors">
            <Phone size={12} /> {phone}
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-2 text-xs text-foreground/50 hover:text-cyan transition-colors">
            <Mail size={12} /> {email}
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const ProjectCompetitionCard = () => {
  return (
    <section id="events" className="min-h-screen flex items-center py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card overflow-hidden group border-cyan/10 hover:border-cyan/40"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Side: Animated Icon */}
            <div className="lg:w-1/3 bg-cyan/5 p-8 flex items-center justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-surface-low">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,29,35,0.1)_0%,transparent_70%)]" />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan drop-shadow-[0_0_15px_rgba(231,29,35,0.5)]">
                  <path d="M12 2V4M12 20V22M4 12H2M22 12H20M18.36 5.64L16.95 7.05M7.05 16.95L5.64 18.36M18.36 18.36L16.95 16.95M7.05 7.05L5.64 5.64" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1"/>
                  <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <motion.path 
                    d="M9 12H15M12 9V15" 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Circuit lines */}
                  <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
                </svg>
              </motion.div>
              
              {/* Floating particles inside the icon area */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan rounded-full"
                  animate={{
                    y: [0, -100],
                    x: [0, Math.random() * 40 - 20],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    bottom: '10%'
                  }}
                />
              ))}
            </div>

            {/* Right Side: Content */}
            <div className="lg:w-2/3 p-6 md:p-10 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-cyan/10 text-cyan text-[10px] font-display uppercase tracking-widest border border-cyan/20 rounded-full">
                    Event 01
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan/30 to-transparent" />
                </div>
                
                <GlitchHeading 
                  dataText="Project Competition"
                  className="text-2xl md:text-4xl mb-3 text-glow-cyan"
                >
                  Project <span className="text-amber">Competition</span>
                </GlitchHeading>
                
                <p className="text-foreground/70 font-body leading-relaxed max-w-xl text-sm md:text-base">
                  Unleash the power of data and intelligence by showcasing your most innovative AI & DS solutions to a panel of industry experts. This is your stage to transform theoretical concepts into impactful real-world projects that redefine the future of technology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <CoordinatorBlock 
                  title="Staff Coordinator"
                  name="Prof. S. D. Bagade"
                  phone="7559362305"
                  email="shweta.bagade@sapkalknowledgehub.org"
                />
                <CoordinatorBlock 
                  title="Student Coordinator"
                  name="Mr. Bhavesh D. Patil"
                  phone="9130351237"
                  email="bhaveshpatiltech@gmail.com"
                />
              </div>

              <div>
                <motion.button
                  animate={{ 
                    boxShadow: ["0 0 10px rgba(231, 29, 35, 0.3)", "0 0 25px rgba(231, 29, 35, 0.6)", "0 0 10px rgba(231, 29, 35, 0.3)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="btn-primary flex items-center gap-3 group !py-2.5 !px-6 !text-xs"
                >
                  Register for This Event
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

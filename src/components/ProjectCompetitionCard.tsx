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
            {/* Left Side: Event Image */}
            <div className="lg:w-1/3 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-cyan/10 group/img min-h-[300px] lg:min-h-full">
              <img 
                src="/assets/1.jpg" 
                alt="Project Competition" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-cyan/5 transition-opacity duration-300 group-hover/img:opacity-0 pointer-events-none" />
              
              {/* Event Badge */}
              <div className="absolute bottom-6 left-6 z-10 hidden lg:block">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse shadow-[0_0_10px_#00f5ff]" />
                  <span className="text-[10px] font-mono text-cyan tracking-widest uppercase shadow-black drop-shadow-md">Live Event</span>
                </div>
              </div>
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

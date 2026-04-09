import { motion } from "motion/react";
import { User, Phone, Mail, ExternalLink, Users, Trophy } from "lucide-react";

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
                src="/assets/hackathon.jpg" 
                alt="SKH HackFest 2K26" 
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
                    FLAGSHIP EVENT
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan/30 to-transparent" />
                </div>
                
                <GlitchHeading 
                  dataText="SKH HackFest 2K26"
                  className="text-2xl md:text-4xl mb-1 text-glow-cyan"
                >
                  SKH Hack<span className="text-amber">Fest 2K26</span>
                </GlitchHeading>
                <p className="text-cyan font-display text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 opacity-80">
                  2-Day Offline Hackathon
                </p>
                
                <p className="text-foreground/70 font-body leading-relaxed max-w-xl text-sm md:text-base mb-6">
                  Dive into an exhilarating 48-hour journey of innovation and code! SKH HackFest 2K26 brings together the brightest minds to tackle real-world challenges, build groundbreaking solutions, and showcase their technical prowess. Whether you're a seasoned developer or a passionate newcomer, this is your platform to turn big ideas into reality.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-amber/10 border border-amber/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <Users size={14} className="text-amber" />
                    <span className="text-[10px] md:text-xs font-mono text-amber/90 uppercase tracking-wider">Team Size: 3–5 Members</span>
                  </div>
                  <div className="bg-cyan/10 border border-cyan/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <Trophy size={14} className="text-cyan" />
                    <span className="text-[10px] md:text-xs font-mono text-cyan/90 uppercase tracking-wider">Entry Fee: ₹50 per participant</span>
                  </div>
                </div>
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
                  name="Bhavesh D. Patil"
                  phone="9130351237"
                  email="bhaveshpatiltech@gmail.com"
                />
              </div>

              <div>
                <a 
                  href="https://forms.gle/7gPrgHoGPMteahhD9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.button
                    animate={{ 
                      boxShadow: ["0 0 10px rgba(231, 29, 35, 0.3)", "0 0 25px rgba(231, 29, 35, 0.6)", "0 0 10px rgba(231, 29, 35, 0.3)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="btn-primary flex items-center gap-3 group !py-2.5 !px-6 !text-xs"
                  >
                    REGISTER NOW
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

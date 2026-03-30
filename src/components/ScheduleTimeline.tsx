import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  UserCheck, 
  Mic2, 
  Cpu, 
  Sparkles, 
  Utensils, 
  Presentation, 
  Trophy, 
  Flag,
  Clock,
  MapPin
} from 'lucide-react';

import { GlitchHeading } from './GlitchHeading';

const scheduleData = [
  {
    time: "08:00 AM",
    event: "Registration & Check-in",
    venue: "Entrance Lobby",
    icon: UserCheck,
    description: "Collect your ID cards and welcome kits."
  },
  {
    time: "09:00 AM",
    event: "Opening Ceremony",
    venue: "Main Auditorium",
    icon: Mic2,
    description: "Inauguration by our Chief Guest."
  },
  {
    time: "10:00 AM",
    event: "Project Competition Begins",
    venue: "Lab Block A",
    icon: Cpu,
    description: "Showcase your innovation to the judges."
  },
  {
    time: "10:00 AM",
    event: "Adventure with AI Begins",
    venue: "Lab Block B",
    icon: Sparkles,
    description: "Sub-events: Prompting & Battle Royale."
  },
  {
    time: "01:00 PM",
    event: "Lunch Break",
    venue: "Cafeteria",
    icon: Utensils,
    description: "Refuel for the final showdown."
  },
  {
    time: "02:00 PM",
    event: "Final Presentations",
    venue: "Seminar Hall",
    icon: Presentation,
    description: "Top teams present their solutions."
  },
  {
    time: "04:30 PM",
    event: "Results & Prizes",
    venue: "Main Auditorium",
    icon: Trophy,
    description: "Celebrating the winners of Technofest."
  },
  {
    time: "05:30 PM",
    event: "Closing Ceremony",
    venue: "Main Auditorium",
    icon: Flag,
    description: "Vote of thanks and event wrap-up."
  }
];

const TimelineNode = ({ item, index, isLast }: { item: typeof scheduleData[0], index: number, isLast: boolean }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center w-full mb-24 md:mb-32">
      {/* Mobile Layout: Content always on right */}
      {/* Desktop Layout: Alternate sides */}
      
      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full md:w-[45%] ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:order-last'}`}
      >
        <div className={`glass-card p-6 border-white/10 hover:border-cyan/30 transition-colors group relative ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
          <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b from-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
          
          <div className={`flex items-center gap-3 mb-2 justify-start ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <item.icon size={18} className="text-cyan" />
            <span className="text-xs font-bold text-cyan uppercase tracking-widest">{item.venue}</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-display text-foreground mb-2 tracking-tighter uppercase">{item.time}</h3>
          <h4 className="text-lg md:text-xl font-display text-glow-cyan mb-2 uppercase">{item.event}</h4>
          <p className="text-foreground/40 text-xs md:text-sm font-sub leading-relaxed">{item.description}</p>
        </div>
      </motion.div>

      {/* Center Node Dot */}
      <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-4 h-4 rounded-full bg-background border-2 border-cyan shadow-[0_0_15px_rgba(0,245,255,0.8)] relative"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-cyan/40" />
        </motion.div>
      </div>

      {/* Spacer for the other side on desktop */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
};

export const ScheduleTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="schedule" className="py-32 px-6 relative overflow-hidden bg-surface-low">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-[10px] uppercase tracking-[0.3em] font-bold mb-4"
          >
            Technofest 2026
          </motion.div>
          <GlitchHeading 
            dataText="Event Timeline"
            className="text-5xl md:text-7xl font-display text-glow-cyan uppercase tracking-tighter mb-4"
          >
            Event <span className="text-foreground">Timeline</span>
          </GlitchHeading>
          <div className="flex items-center justify-center gap-4 text-foreground/40 font-sub uppercase tracking-widest text-xs">
            <div className="flex items-center gap-2"><Clock size={14} /> 18th April 2026</div>
            <div className="w-1 h-1 rounded-full bg-foreground/20" />
            <div className="flex items-center gap-2"><MapPin size={14} /> Main Campus</div>
          </div>
        </div>

        <div ref={containerRef} className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2" />
          
          {/* Animated Drawing Line */}
          <motion.div 
            style={{ scaleY: scaleY as any, originY: 0 }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-cyan to-transparent -translate-x-1/2 z-0 shadow-[0_0_10px_rgba(0,245,255,0.5)]"
          />

          <div className="relative z-10 pl-8 md:pl-0">
            {scheduleData.map((item, index) => (
              <div key={index}>
                <TimelineNode 
                  item={item} 
                  index={index} 
                  isLast={index === scheduleData.length - 1} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA or Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground/20 text-[10px] uppercase tracking-[0.4em] font-bold">
            * Schedule is subject to minor changes based on participation volume
          </p>
        </motion.div>
      </div>
    </section>
  );
};

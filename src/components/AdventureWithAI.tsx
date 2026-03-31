import { ReactNode } from "react";
import { motion } from "motion/react";
import { Brain, Cpu, Gamepad2, Trophy, User, Phone } from "lucide-react";

import { GlitchHeading } from "./GlitchHeading";

interface Coordinator {
  name: string;
  phone: string;
}

interface SubEvent {
  id: string;
  name: string;
  tagline: string;
  staff: Coordinator;
  student: Coordinator;
  accent: string;
  icon: ReactNode;
  image?: string;
}

const subEvents: SubEvent[] = [
  {
    id: "2.1",
    name: "AI Prompting",
    tagline: "Master the art of conversation with the machines.",
    staff: { name: "Prof. S. S. Mergal", phone: "7798375872" },
    student: { name: "Mr. Soham D. Mahajan", phone: "7887329442" },
    accent: "#E71D23", // Stranger Things Red
    icon: <Brain size={32} />,
  },
  {
    id: "2.2",
    name: "Free Fire",
    tagline: "Survival of the fittest in the digital battleground.",
    staff: { name: "Prof. S. S. Suryawanshi", phone: "8530236452" },
    student: { name: "Mr. Tejas B. Bhalerao", phone: "8421453265" },
    accent: "#F27D26", // Stranger Things Orange
    icon: <Gamepad2 size={32} />,
    image: "/assets/2.jpg",
  },
  {
    id: "2.3",
    name: "Neon Cricket",
    tagline: "The gentleman's game, reimagined in the neon glow.",
    staff: { name: "Prof. S. K. Pathan", phone: "8149545380" },
    student: { name: "Mr. Krushna R. Thakare", phone: "963942584" },
    accent: "#E71D23", // Stranger Things Red
    icon: <Trophy size={32} />,
    image: "/assets/3.jpg",
  },
];

const SubEventCard = ({ event, index }: { event: SubEvent; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="glass-card flex flex-col h-full relative group overflow-hidden"
      style={{ borderColor: `${event.accent}33` }}
    >
      {/* Dynamic Background Image */}
      {event.image && (
        <>
          <img 
            src={event.image} 
            alt={event.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
          />
          {/* Gradients to keep text highly legible while image shines */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/40 pointer-events-none group-hover:bg-black/10 transition-colors duration-500" />
        </>
      )}

      {/* Accent Glow */}
      <div 
        className="absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-20 transition-opacity group-hover:opacity-40"
        style={{ backgroundColor: event.accent }}
      />

      <div className="p-6 flex flex-col h-full relative z-10 w-full">
        <div className="mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 group-hover:scale-110 shadow-lg"
            style={{ 
              backgroundColor: `${event.accent}11`,
              borderColor: `${event.accent}44`,
              color: event.accent,
              boxShadow: `0 0 15px ${event.accent}22`
            }}
          >
            {event.icon}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-display font-bold px-2.5 py-1 rounded-full bg-surface-low text-foreground/40 border border-surface-high uppercase tracking-widest backdrop-blur-md">
              Sub-Event {event.id}
            </span>
          </div>
          <h3 className="text-xl font-display mb-1 drop-shadow-md" style={{ color: event.accent }}>
            {event.name}
          </h3>
          <p className="text-foreground/60 text-xs font-sub italic leading-snug">
            "{event.tagline}"
          </p>
        </div>

        <div className="space-y-4 mb-8 flex-grow">
          <div className="space-y-1 bg-surface-high/30 p-2.5 rounded-lg border border-white/5 backdrop-blur-sm">
            <p className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold mb-1">Staff Coordinator</p>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground/90">{event.staff.name}</span>
              <a href={`tel:${event.staff.phone}`} className="text-[10px] text-foreground/50 hover:text-foreground flex items-center gap-1.5 transition-colors mt-0.5">
                <Phone size={10} /> {event.staff.phone}
              </a>
            </div>
          </div>
          <div className="space-y-1 bg-surface-high/30 p-2.5 rounded-lg border border-white/5 backdrop-blur-sm">
            <p className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold mb-1">Student Coordinator</p>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground/90">{event.student.name}</span>
              <a href={`tel:${event.student.phone}`} className="text-[10px] text-foreground/50 hover:text-foreground flex items-center gap-1.5 transition-colors mt-0.5">
                <Phone size={10} /> {event.student.phone}
              </a>
            </div>
          </div>
        </div>

        <button 
          className="w-full py-3 rounded-lg font-display text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 border shadow-lg"
          style={{ 
            backgroundColor: `${event.accent}11`,
            borderColor: `${event.accent}44`,
            color: event.accent
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = event.accent;
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.boxShadow = `0 0 20px ${event.accent}66`;
            e.currentTarget.style.borderColor = event.accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${event.accent}11`;
            e.currentTarget.style.color = event.accent;
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = `${event.accent}44`;
          }}
        >
          Register Now
        </button>
      </div>
    </motion.div>
  );
};

export const AdventureWithAI = () => {
  return (
    <section className="min-h-screen flex items-center py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className="mb-6 relative z-10"
          >
            <div className="absolute inset-0 bg-cyan/30 blur-[50px] rounded-full" />
            <img 
              src="/assets/15.png" 
              alt="AI Adventure" 
              className="relative w-28 h-28 object-contain drop-shadow-[0_0_20px_rgba(0,245,255,0.4)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber font-display text-[10px] uppercase tracking-[0.4em] mb-1 block">Event 02</span>
            <GlitchHeading 
              dataText="Adventure with AI"
              className="text-3xl md:text-4xl mb-4 text-glow-cyan"
            >
              Adventure with <span className="text-amber">AI</span>
            </GlitchHeading>
            <p className="text-foreground/60 font-sub max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Step into a realm where artificial intelligence meets high-stakes adventure. 
              Challenge your limits in this multi-faceted tech odyssey.
            </p>
          </motion.div>
        </div>

        {/* Sub-events Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {subEvents.map((event, index) => (
            <div key={event.id} className="w-full">
              <SubEventCard event={event} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

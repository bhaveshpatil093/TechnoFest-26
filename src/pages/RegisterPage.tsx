import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Cpu, MessageSquare, Gamepad2, ArrowLeft, ExternalLink, Sparkles, Info } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ParticleBackground } from '../components/ParticleBackground';
import { GridBackground, ScanningGrid } from '../components/DecorativeElements';
import { GlitchHeading } from '../components/GlitchHeading';
import { Magnetic } from '../components/Magnetic';
import { TextReveal } from '../components/TextReveal';
import { EventDetailsModal } from '../components/EventDetailsModal';

const events = [
  { 
    id: 'project', 
    name: 'SKH HackFest 2K26', 
    icon: Cpu, 
    color: '#00F5FF', 
    link: 'https://forms.gle/7gPrgHoGPMteahhD9',
    description: 'A 2-day offline hackathon to showcase your innovation and technical prowess. Join the flagship event of TechnoFest 2026.'
  },
  { 
    id: 'ai', 
    name: 'PromptCraft', 
    icon: MessageSquare, 
    color: '#00F5FF', 
    link: 'https://forms.gle/4opJLsmcmxJxyt6m6',
    description: 'Master the art of prompt engineering and compete to generate the most accurate AI outputs in real-time challenges. test your creativity and problem-solving skills.'
  },
  { 
    id: 'ff', 
    name: 'Free Fire', 
    icon: Gamepad2, 
    color: '#E71D23', 
    link: 'https://forms.gle/cvFJfjWmy7wogGAD8',
    description: 'Squad up for the ultimate battle royale tournament. Survival of the fittest in the high-stakes digital arena.'
  },
];

const PROMPTCRAFT_DETAILS = {
  description: "PromptCraft is an exciting AI-based challenge where participants use AI prompting tools to design and build a functional website or web application within a 2-hour window. The event is designed to test creativity, problem-solving ability, and how effectively a participant can communicate with AI tools.",
  eligibility: [
    "Open to all students currently enrolled in any Engineering and Polytechnic college in Maharashtra.",
    "Participants can compete Solo only. No teaming allowed.",
    "Each individual is allowed to register only once."
  ],
  rules: [
    "Valid college ID card must be carried on the day of the event.",
    "Participants must report to the venue at least 15 minutes before the event starts.",
    "Problem Domains will be provided on the day of the event.",
    "The domain acts as a broad theme — not a strict brief."
  ],
  guidelines: [
    "Participants are allowed to use any AI tool (Claude, ChatGPT, Gemini, etc.)",
    "Internet access provided for research, AI tools and documentation.",
    "Participants must carry their own laptop. No systems provided.",
    "Pre-built templates are strictly not allowed.",
    "Copying code from other participants is not permitted."
  ]
};

const DEFAULT_DETAILS = {
  description: "Experience the thrill of competition in this sub-event. Follow the rules and guidelines to ensure a fair and exciting challenge for everyone involved.",
  eligibility: ["Current Engineering or Polytechnic students.", "Registration fee paid.", "Valid College ID."],
  rules: ["Report 15 minutes early.", "Follow coordinator instructions.", "Maintain sportsmanship."],
  guidelines: ["Personal equipment may be required.", "Specific rules will be shared at the venue."]
};

export default function RegisterPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeEvent, setActiveEvent] = useState('project');
  const [modalOpen, setModalOpen] = useState(false);

  const currentEvent = events.find(e => e.id === activeEvent) || events[0];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const eventParam = params.get('event');
    if (eventParam && events.some(e => e.id === eventParam)) {
      setActiveEvent(eventParam);
    }
    window.scrollTo(0, 0);
  }, [location]);

  const handleEventChange = (id: string) => {
    setActiveEvent(id);
    navigate(`/register?event=${id}`, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan selection:text-background overflow-clip">
      <Navbar />
      <GridBackground />
      <ParticleBackground />
      <ScanningGrid />
      
      <main className="pt-24 pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Back to Home */}
          <Magnetic strength={0.2}>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-foreground/50 hover:text-cyan transition-colors mb-6 group font-display text-xs uppercase tracking-widest"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </motion.button>
          </Magnetic>

          <div className="text-center mb-8">
            <GlitchHeading 
              dataText="EVENT REGISTRATION"
              className="text-3xl md:text-5xl font-black mb-2 tracking-tighter italic text-foreground uppercase"
            >
              EVENT <span className="text-cyan text-glow-cyan">REGISTRATION</span>
            </GlitchHeading>
            <TextReveal 
              text="Secure your spot via Google Forms for our flagship competitions."
              className="text-foreground/50 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase max-w-2xl mx-auto"
              delay={0.5}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-8">
            {/* Left Side: Dynamic Visual Container */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 xl:w-2/5 rounded-2xl overflow-hidden border border-cyan/20 glass-card p-2 h-max relative"
            >
              <div className="absolute inset-0 bg-cyan/5 pointer-events-none mix-blend-overlay"></div>
              <img 
                src="/assets/will.webp" 
                alt="Registration Portal" 
                className="w-full rounded-xl object-cover h-64 md:h-80 lg:h-[calc(100vh-12rem)] hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="glass-card p-4 border-cyan/30 bg-background/80 backdrop-blur-md text-center">
                    <p className="font-display font-black text-cyan uppercase tracking-widest text-[10px] mb-1">Official Portal</p>
                    <p className="font-mono text-[9px] text-foreground/70 uppercase">You are now entering the registration gateway.</p>
                 </div>
              </div>
            </motion.div>

            {/* Right Side: Event Selection & Redirect UI */}
            <div className="w-full lg:w-2/3 xl:w-3/5 flex flex-col">
              {/* Event Selector Tabs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                {events.map((event) => (
                  <Magnetic key={event.id} strength={0.2}>
                    <button
                      onClick={() => handleEventChange(event.id)}
                      className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 group ${
                        activeEvent === event.id
                          ? 'bg-cyan/10 border-cyan text-cyan ring-1 ring-cyan/50 shadow-[0_0_20px_rgba(0,245,255,0.1)]'
                          : 'bg-surface-low border-border text-foreground/50 hover:border-cyan/50 hover:text-foreground'
                      }`}
                    >
                      <event.icon 
                        size={18} 
                        className={activeEvent === event.id ? 'text-cyan' : 'text-foreground/30 group-hover:text-cyan/50'} 
                      />
                      <span className="font-display text-[11px] uppercase tracking-widest font-bold">
                        {event.name}
                      </span>
                    </button>
                  </Magnetic>
                ))}
              </div>

              {/* Redirection Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEvent}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-8 md:p-12 border-cyan/10 relative overflow-hidden group/card"
                >
                  {/* Decorative Accents */}
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-20 transition-opacity">
                    <currentEvent.icon size={120} style={{ color: currentEvent.color }} />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan/10 border border-cyan/20">
                        <Sparkles className="text-cyan animate-pulse" size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-cyan tracking-[0.3em] uppercase">Ready for deployment</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-black mb-4 uppercase tracking-tight" style={{ color: currentEvent.color }}>
                      {currentEvent.name}
                    </h2>
                    
                    <p className="text-foreground/60 font-body leading-relaxed mb-10 max-w-xl text-sm md:text-base">
                      {currentEvent.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href={currentEvent.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full btn-primary flex items-center justify-center gap-3 !py-4"
                        >
                          <span className="font-display uppercase tracking-widest text-xs font-black">Open Google Form</span>
                          <ExternalLink size={18} />
                        </motion.button>
                      </a>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setModalOpen(true)}
                        className="flex-1 px-8 py-4 rounded-xl border border-cyan/20 bg-cyan/5 text-cyan font-display uppercase tracking-widest text-xs font-black flex items-center justify-center gap-3 hover:bg-cyan/10 transition-colors"
                      >
                        View Rules <Info size={18} />
                      </motion.button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-cyan/10 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-cyan animate-ping" />
                      <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
                        External Registration Required
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <EventDetailsModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentEvent.name}
        accent={currentEvent.color}
        details={activeEvent === 'ai' ? PROMPTCRAFT_DETAILS : DEFAULT_DETAILS}
      />
    </div>
  );
}

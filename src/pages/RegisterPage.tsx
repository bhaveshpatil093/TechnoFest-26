import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Cpu, MessageSquare, Gamepad2, Trophy, ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ParticleBackground } from '../components/ParticleBackground';
import { GridBackground, ScanningGrid } from '../components/DecorativeElements';
import { RegistrationForm } from '../components/RegistrationForm';
import { AIPromptingRegistration } from '../components/AIPromptingRegistration';
import { FreeFireRegistration } from '../components/FreeFireRegistration';
import { NeonCricketRegistration } from '../components/NeonCricketRegistration';
import { GlitchHeading } from '../components/GlitchHeading';
import { Magnetic } from '../components/Magnetic';
import { TextReveal } from '../components/TextReveal';

const events = [
  { id: 'project', name: 'Project Competition', icon: Cpu, color: '#00F5FF' },
  { id: 'ai', name: 'AI Prompting', icon: MessageSquare, color: '#FFFFFF' },
  { id: 'ff', name: 'Free Fire', icon: Gamepad2, color: '#FF4500' },
  { id: 'cricket', name: 'Neon Cricket', icon: Trophy, color: '#4ADE80' },
];

export default function RegisterPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeEvent, setActiveEvent] = useState('project');

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
              text="Secure your spot in the most anticipated tech event of 2026."
              className="text-foreground/50 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase max-w-2xl mx-auto"
              delay={0.5}
            />
          </div>

          {/* Main Layout Container */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-8">
            {/* Left Side Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 xl:w-2/5 rounded-2xl overflow-hidden border border-cyan/20 shadow-[0_0_30px_rgba(231,29,35,0.15)] relative lg:sticky lg:top-28 glass-card p-2 h-max"
            >
              <div className="absolute inset-0 bg-cyan/10 pointer-events-none mix-blend-overlay"></div>
              <img 
                src="/assets/will.webp" 
                alt="Registration Portal" 
                className="w-full rounded-xl object-cover h-64 md:h-80 lg:h-[calc(100vh-9rem)] hover:scale-105 transition-all duration-700"
              />
              <div className="absolute hidden lg:block bottom-6 left-6 right-6">
                 <div className="glass-card p-4 border-cyan/30 bg-background/80 backdrop-blur-md text-center">
                    <p className="font-display font-black text-cyan uppercase tracking-widest text-xs mb-1">Warning</p>
                    <p className="font-mono text-[10px] text-foreground/70 uppercase">Do not stray from the path. Complete your registration.</p>
                 </div>
              </div>
            </motion.div>

            {/* Right Side Forms & Tabs */}
            <div className="w-full lg:w-2/3 xl:w-3/5 flex flex-col">
              {/* Event Selector Tabs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                {events.map((event) => (
                  <Magnetic key={event.id} strength={0.2}>
                    <button
                      onClick={() => handleEventChange(event.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 group ${
                        activeEvent === event.id
                          ? 'bg-cyan/10 border-cyan text-cyan shadow-[0_0_20px_rgba(231,29,35,0.2)]'
                          : 'bg-surface-low border-border text-foreground/50 hover:border-cyan/50 hover:text-foreground'
                      }`}
                    >
                      <event.icon 
                        size={16} 
                        className={activeEvent === event.id ? 'text-cyan' : 'text-foreground/30 group-hover:text-cyan/50'} 
                      />
                      <span className="font-display text-[10px] uppercase tracking-widest font-bold">
                        {event.name}
                      </span>
                    </button>
                  </Magnetic>
                ))}
              </div>

              {/* Form Container */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEvent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {activeEvent === 'project' && <RegistrationForm />}
                    {activeEvent === 'ai' && <AIPromptingRegistration />}
                    {activeEvent === 'ff' && <FreeFireRegistration />}
                    {activeEvent === 'cricket' && <NeonCricketRegistration />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

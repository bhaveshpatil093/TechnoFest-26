/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ParticleBackground } from "./components/ParticleBackground";
import { CountdownTimer } from "./components/CountdownTimer";
import { Navbar } from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { ProjectCompetitionCard } from "./components/ProjectCompetitionCard";
import { AdventureWithAI } from "./components/AdventureWithAI";
import { RegistrationForm } from "./components/RegistrationForm";
import { RegistrationHub } from "./components/RegistrationHub";
import { AIPromptingRegistration } from "./components/AIPromptingRegistration";
import { FreeFireRegistration } from "./components/FreeFireRegistration";
import { NeonCricketRegistration } from "./components/NeonCricketRegistration";
import { ScheduleTimeline } from "./components/ScheduleTimeline";
import { TeamSection } from "./components/TeamSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { WaveDivider, AIWatermark, ScanningGrid, CircuitTrace, GridBackground } from "./components/DecorativeElements";

const GlitchLetter = ({ char, index }: any) => {
  return (
    <motion.span
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          delay: index * 0.08
        }
      }}
      whileHover={{
        skewX: [0, -10, 10, 0],
        x: [0, -2, 2, 0],
        transition: { duration: 0.2 }
      }}
      className="inline-block relative"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

import { FloatingButtons } from './components/FloatingButtons';

export default function App() {
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan selection:text-background overflow-x-hidden transition-colors duration-300">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="noise-overlay" />
      <Preloader onComplete={() => setIsPreloaderFinished(true)} />
      
      <AnimatePresence>
        {isPreloaderFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <GridBackground />
            <ParticleBackground />
            
            <main id="main-content">
              {/* Hero Section */}
              <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 z-20">
                <div className="text-center max-w-4xl">
                  {/* College Name */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-foreground/50 mb-1 text-glow-cyan"
                  >
                    Late G. N. Sapkal College of Engineering
                  </motion.p>

                  {/* Department Name */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-sub text-xs md:text-sm text-amber uppercase tracking-[0.2em] mb-6 font-bold"
                  >
                    Dept. of AI & Data Science Engineering
                  </motion.p>

                  {/* Main Heading - Split into two lines */}
                  <h1 className="font-display flex flex-col items-center gap-0 mb-4">
                    <div className="text-[clamp(36px,10vw,72px)] md:text-6xl lg:text-7xl flex justify-center gap-x-1 md:gap-x-2 leading-tight">
                      {"TECHNOFEST".split("").map((char, i) => (
                        <GlitchLetter key={i} char={char} index={i} />
                      ))}
                    </div>
                    <div className="text-[clamp(30px,8vw,60px)] md:text-5xl lg:text-6xl text-amber flex justify-center gap-x-1 md:gap-x-2 leading-tight">
                      {"2026".split("").map((char, i) => (
                        <GlitchLetter key={i + 10} char={char} index={i + 10} />
                      ))}
                    </div>
                  </h1>

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="font-sub text-base md:text-lg text-foreground/60 mb-10 italic tracking-wide"
                  >
                    Where Intelligence Meets Innovation
                  </motion.p>

                  {/* Countdown Timer */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 0.9 }} // Scaled down to 0.9
                    transition={{ duration: 0.8, delay: 2 }}
                    className="mb-12 flex justify-center origin-center"
                  >
                    <CountdownTimer targetDate="2026-04-18T09:00:00" />
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <button 
                      onClick={() => scrollToSection('registration-hub')}
                      className="btn-primary min-w-[180px] !py-2.5 !text-sm"
                    >
                      Register Now
                    </button>
                    <button 
                      onClick={() => scrollToSection('register')}
                      className="px-6 py-2.5 border border-cyan text-cyan font-display font-bold uppercase tracking-widest rounded-sm hover:bg-cyan/10 transition-all min-w-[180px] text-sm"
                    >
                      Explore Events
                    </button>
                  </motion.div>
                </div>
                <WaveDivider />
              </section>

              {/* About Section */}
              <AboutSection />

              {/* Highlights Section */}
              <HighlightsSection />

              {/* Events Section: Project Competition */}
              <div className="relative">
                <AIWatermark />
                <ProjectCompetitionCard />
                <AdventureWithAI />
              </div>

              {/* Registration Hub */}
              <div className="relative">
                <ScanningGrid />
                <RegistrationHub />
                <RegistrationForm />
                <AIPromptingRegistration />
                <FreeFireRegistration />
                <NeonCricketRegistration />
              </div>

              {/* Schedule / Timeline Section */}
              <ScheduleTimeline />

              <CircuitTrace />

              {/* Coordinators & Team Section */}
              <TeamSection />

              {/* FAQ Section */}
              <FAQSection />

              {/* Contact Section */}
              <ContactSection />
            </main>

            <Footer />
            <FloatingButtons />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

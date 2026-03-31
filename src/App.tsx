/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { ParticleBackground } from "./components/ParticleBackground";
import { CountdownTimer } from "./components/CountdownTimer";
import { Navbar } from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { ProjectCompetitionCard } from "./components/ProjectCompetitionCard";
import { AdventureWithAI } from "./components/AdventureWithAI";
import { RegistrationHub } from "./components/RegistrationHub";
import { ScheduleTimeline } from "./components/ScheduleTimeline";
import { TeamSection } from "./components/TeamSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { WaveDivider, AIWatermark, ScanningGrid, CircuitTrace, GridBackground, UpsideDownParticles, MindFlayerSilhouette, StrangerSticker, RiftEffect, VhsOverlay } from "./components/DecorativeElements";
import RegisterPage from "./pages/RegisterPage";
import { FloatingButtons } from './components/FloatingButtons';
import { AudioPlayer } from './components/AudioPlayer';
import { CustomCursor } from "./components/CustomCursor";
import { ScrollReveal } from "./components/ScrollReveal";
import { Magnetic } from "./components/Magnetic";
import { TextReveal } from "./components/TextReveal";

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
        skewX: [0, -15, 15, 0],
        x: [0, -4, 4, 0],
        color: "#E71D23",
        textShadow: "0 0 15px #E71D23, 0 0 30px #E71D23",
        transition: { duration: 0.2 }
      }}
      className="inline-block relative stranger-logo-filled"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <main id="main-content" onMouseMove={handleMouseMove}>
      <VhsOverlay />
      <UpsideDownParticles />
      <MindFlayerSilhouette />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 pt-32 pb-12 z-20 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-[-1] opacity-60">
          <img 
            src="/assets/stranger-things-bg.jpg" 
            alt="Stranger Things Theme" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>


        <motion.div 
          style={{ x: mouseX, y: mouseY }}
          animate={{ 
            rotate: [0, 10, 0]
          }}
          transition={{ rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-1/4 left-10 w-24 h-24 border border-cyan/20 rounded-full blur-sm hidden lg:block"
        />
        <motion.div 
          style={{ x: useSpring(mouseX, { stiffness: 50 }), y: useSpring(mouseY, { stiffness: 50 }) }}
          animate={{ 
            rotate: [0, -15, 0]
          }}
          transition={{ rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
          className="absolute bottom-1/4 right-10 w-32 h-32 border border-amber/20 rounded-lg blur-sm hidden lg:block"
        />
        
        <motion.div 
          style={{ x: useSpring(mouseX, { stiffness: 100 }), y: useSpring(mouseY, { stiffness: 100 }) }}
          className="text-center max-w-4xl flex flex-col items-center"
        >
          {/* College Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[10px] md:text-xs uppercase tracking-[0.4em] text-foreground/50 mb-2 text-glow-cyan"
          >
            Late G. N. Sapkal College of Engineering
          </motion.p>

          {/* Department Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sub text-xs md:text-sm text-amber uppercase tracking-[0.2em] mb-4 font-bold"
          >
            Dept. of AI & Data Science Engineering
          </motion.p>

          {/* Main Heading - Split into two lines */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display flex flex-col items-center gap-0 mb-2"
          >
            <div className="text-[clamp(24px,7vw,64px)] md:text-5xl lg:text-6xl flex flex-wrap justify-center gap-x-0.5 sm:gap-x-1 md:gap-x-2 leading-tight">
              {"TECHNOFEST".split("").map((char, i) => (
                <GlitchLetter key={i} char={char} index={i} />
              ))}
            </div>
            <div className="text-[clamp(20px,5vw,54px)] md:text-4xl lg:text-5xl text-amber flex flex-wrap justify-center gap-x-0.5 sm:gap-x-1 md:gap-x-2 leading-tight">
              {"2026".split("").map((char, i) => (
                <GlitchLetter key={i + 10} char={char} index={i + 10} />
              ))}
            </div>
          </motion.div>

          {/* Tagline */}
          <TextReveal 
            text="Step into the Upside Down of Innovation"
            className="font-sub text-sm md:text-base text-cyan mb-8 italic tracking-[0.3em] uppercase font-bold text-glow-cyan"
            delay={1.5}
          />

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 0.85 }} // Scaled down to 0.85
            transition={{ duration: 0.8, delay: 2 }}
            className="mb-8 flex justify-center origin-center"
          >
            <CountdownTimer targetDate="2026-04-18T09:00:00" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Magnetic strength={0.2}>
              <Link 
                to="/register"
                className="btn-primary min-w-[180px] !py-3 !text-sm flex items-center justify-center shadow-[0_0_20px_rgba(231,29,35,0.3)] hover:shadow-[0_0_30px_rgba(231,29,35,0.5)] transition-all"
              >
                Register Now
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <button 
                onClick={() => scrollToSection('events')}
                className="px-8 py-3 border border-cyan text-cyan font-display font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-cyan/10 transition-all min-w-[180px] text-sm backdrop-blur-sm"
              >
                Explore Events
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-50">
          <WaveDivider />
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* Highlights Section */}
      <ScrollReveal delay={0.3}>
        <HighlightsSection />
      </ScrollReveal>

      {/* Events Section: Project Competition */}
      <div className="relative">
        <RiftEffect />
        <AIWatermark />
        <ScrollReveal>
          <ProjectCompetitionCard />
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <AdventureWithAI />
        </ScrollReveal>
      </div>

      {/* Registration Hub */}
      <div className="relative">
        <ScanningGrid />
        <ScrollReveal>
          <RegistrationHub />
        </ScrollReveal>
      </div>

      {/* Schedule / Timeline Section */}
      <ScrollReveal>
        <ScheduleTimeline />
      </ScrollReveal>

      <CircuitTrace />

      {/* Coordinators & Team Section */}
      <ScrollReveal>
        <TeamSection />
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </main>
  );
}

export default function App() {
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);
  const location = useLocation();

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
            <CustomCursor />
            {location.pathname === '/' && <Navbar />}
            <GridBackground />
            <ParticleBackground />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>

            <Footer />
            <AudioPlayer />
            <FloatingButtons />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


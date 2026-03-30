import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Register', href: '#register', isSpecial: true },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [isLogoGlitching, setIsLogoGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsLogoGlitching(true);
      setTimeout(() => setIsLogoGlitching(false), 200);
    }, 8000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'events', 'schedule', 'team', 'faq', 'register', 'contact'];
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-background/80 backdrop-blur-md border-b border-cyan/30 shadow-[0_4px_20px_rgba(0,245,255,0.1)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1 group">
            <span 
              data-text="TF'26"
              className={`font-display text-2xl font-black tracking-tighter text-foreground group-hover:text-cyan transition-colors nav-logo-glitch ${isLogoGlitching ? 'glitching' : ''}`}
            >
              TF'26
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_8px_#00F5FF] animate-pulse" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-sub text-sm uppercase tracking-widest transition-colors group ${
                  link.isSpecial
                    ? 'btn-primary !py-1.5 !px-6 !text-xs'
                    : activeSection === link.href.slice(1)
                    ? 'text-cyan'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.name}
                {!link.isSpecial && (
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-cyan transition-all duration-300 shadow-[0_0_8px_#00F5FF] ${
                      activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                )}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              className="text-foreground hover:text-cyan transition-colors w-11 h-11 flex items-center justify-center rounded-lg hover:bg-foreground/5"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-8 right-8 text-foreground hover:text-cyan transition-colors w-11 h-11 flex items-center justify-center rounded-lg hover:bg-foreground/5"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-display text-2xl uppercase tracking-[0.2em] transition-colors ${
                    link.isSpecial
                      ? 'btn-primary !text-xl !px-10'
                      : activeSection === link.href.slice(1)
                      ? 'text-cyan text-glow-cyan'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber/10 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

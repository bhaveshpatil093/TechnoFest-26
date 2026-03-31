import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Magnetic } from './Magnetic';

const navLinks = [
  { name: 'Home', href: '/', isRoute: true },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Register', href: '/register', isSpecial: true, isRoute: true },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const [isLogoGlitching, setIsLogoGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsLogoGlitching(true);
      setTimeout(() => setIsLogoGlitching(false), 200);
    }, 8000);

    return () => clearInterval(glitchInterval);
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;

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
  }, [location.pathname]);

  const handleNavClick = (e: any, link: typeof navLinks[0]) => {
    if (link.isRoute) return; // Let React Router handle it

    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + link.href);
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cyan via-cyan/50 to-transparent transition-all duration-150 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <div className="absolute -inset-2 bg-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span 
                data-text="TF'26"
                className={`font-display text-2xl md:text-3xl font-black tracking-tighter text-foreground group-hover:text-cyan transition-colors nav-logo-glitch relative z-10 ${isLogoGlitching ? 'glitching' : ''}`}
              >
                TF<span className="text-cyan">'26</span>
              </span>
            </div>
            <div className="hidden sm:flex flex-col border-l border-white/10 pl-3">
              <span className="text-[10px] font-display font-bold text-cyan tracking-[0.2em] leading-none uppercase">
                Technofest
              </span>
              <span className="text-[8px] font-mono text-foreground/40 tracking-widest uppercase">
                Upside Down
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.15}>
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className={`relative font-sub text-[11px] uppercase tracking-[0.2em] transition-all duration-300 group ${
                      link.isSpecial
                        ? 'bg-cyan text-white px-5 py-2 rounded-sm font-bold hover:bg-white hover:text-cyan hover:shadow-[0_0_20px_rgba(231,29,35,0.5)] transition-all duration-300'
                        : location.pathname === link.href
                        ? 'text-cyan'
                        : 'text-foreground/50 hover:text-foreground'
                    }`}
                  >
                    {link.name}
                    {!link.isSpecial && (
                      <span
                        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-cyan transition-all duration-300 shadow-[0_0_8px_#E71D23] ${
                          location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative font-sub text-[11px] uppercase tracking-[0.2em] transition-all duration-300 group ${
                      activeSection === link.href.slice(1)
                        ? 'text-cyan'
                        : 'text-foreground/50 hover:text-foreground'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-cyan transition-all duration-300 shadow-[0_0_8px_#E71D23] ${
                        activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                )}
              </Magnetic>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <Magnetic strength={0.3}>
              <button
                className="text-foreground hover:text-cyan transition-colors w-11 h-11 flex items-center justify-center rounded-lg hover:bg-foreground/5"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Menu"
              >
                <Menu size={28} />
              </button>
            </Magnetic>
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
                link.isRoute ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-display text-2xl uppercase tracking-[0.2em] transition-colors ${
                        link.isSpecial
                          ? 'btn-primary !text-xl !px-10'
                          : location.pathname === link.href
                          ? 'text-cyan text-glow-cyan'
                          : 'text-foreground/60 hover:text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`font-display text-2xl uppercase tracking-[0.2em] transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-cyan text-glow-cyan'
                        : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                )
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

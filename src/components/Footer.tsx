import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="group relative text-foreground/40 hover:text-foreground transition-colors duration-300 py-1"
    >
      <span className="relative z-10">{children}</span>
      <motion.span 
        className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan shadow-[0_0_8px_rgba(0,245,255,0.8)]"
        whileHover={{ w: '100%' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </a>
  );
};

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Team', href: '#team' },
    { name: 'Register', href: '#register' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-surface-low border-t border-surface-high pt-20 pb-10 overflow-hidden transition-colors duration-300">
      {/* Top Glowing Divider Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent shadow-[0_0_15px_rgba(0,245,255,0.5)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Logo & Info */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h2 className="text-3xl font-display font-black tracking-tighter italic text-foreground mb-2 transition-colors">
                TF<span className="text-cyan drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]">'26</span>
              </h2>
              <p className="text-xs font-mono text-cyan/70 uppercase tracking-[0.2em] font-bold transition-colors">
                Technofest 2026 — AI & DS Dept.
              </p>
            </div>
            <p className="text-foreground/40 text-sm font-sub leading-relaxed max-w-xs transition-colors">
              Late G. N. Sapkal College of Engineering. <br />
              Empowering the next generation of AI and Data Science innovators.
            </p>
          </div>

          {/* Center Column: Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-foreground font-display font-bold uppercase tracking-widest text-sm mb-6 transition-colors">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Right Column: Contact & CTA */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-foreground font-display font-bold uppercase tracking-widest text-sm mb-6 transition-colors">
                Contact Info
              </h4>
              <ul className="space-y-3 text-sm text-foreground/40 font-sub transition-colors">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan/60" />
                  <span>+91 80070 24545</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan/60" />
                  <span>monita.jadhav@sapkalknowledgehub.org</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan/60 mt-1 flex-shrink-0" />
                  <span>Sapkal Knowledge Hub, Anjaneri, Nashik.</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="#register" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan/10 border border-cyan/30 rounded-sm text-cyan font-display font-bold uppercase tracking-widest text-xs hover:bg-cyan hover:text-background transition-all duration-300 group"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-surface-high text-center space-y-2 transition-colors">
          <p className="text-foreground/30 text-[10px] sm:text-xs font-sub tracking-wider transition-colors">
            © 2026 Late G. N. Sapkal College of Engineering. All rights reserved.
          </p>
          <p className="text-cyan/40 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] transition-colors">
            Organized by Dept. of AI & Data Science Engineering.
          </p>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan/5 blur-[100px] rounded-full -mb-32 -mr-32 pointer-events-none" />
    </footer>
  );
};

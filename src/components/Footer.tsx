import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import { Magnetic } from './Magnetic';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Magnetic strength={0.1}>
      <a 
        href={href}
        className="group relative text-foreground/30 hover:text-cyan transition-all duration-300 py-1 text-xs font-mono uppercase tracking-widest block w-fit"
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(231,29,35,0.8)]" />
      </a>
    </Magnetic>
  );
};

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Register', href: '/register' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Github size={18} />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-background border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Top Glowing Divider Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Left Column: Logo & Info */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl font-display font-black tracking-tighter italic text-foreground mb-4">
                TF<span className="text-cyan drop-shadow-[0_0_10px_rgba(231,29,35,0.5)]">'26</span>
              </h2>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/5 border border-cyan/10 text-cyan text-[9px] font-mono uppercase tracking-[0.2em] font-bold">
                Technofest 2026 — AI & DS Dept.
              </div>
            </div>
            <p className="text-foreground/30 text-sm font-sub leading-relaxed max-w-sm tracking-wide">
              Late G. N. Sapkal College of Engineering. <br />
              A premier technical symposium dedicated to fostering innovation and excellence in the field of Artificial Intelligence and Data Science.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <Magnetic key={i} strength={0.2}>
                  <a 
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-surface-high/20 border border-white/5 flex items-center justify-center text-foreground/30 hover:text-cyan hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-foreground/80 font-display font-black uppercase tracking-[0.2em] text-xs mb-8 italic">
              Navigation
            </h4>
            <div className="grid grid-cols-1 gap-y-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Right Column: Contact & CTA */}
          <div className="md:col-span-4 space-y-10">
            <div>
              <h4 className="text-foreground/80 font-display font-black uppercase tracking-[0.2em] text-xs mb-8 italic">
                Get In Touch
              </h4>
              <ul className="space-y-5 text-xs text-foreground/30 font-mono tracking-widest">
                <li className="flex items-center gap-4 group cursor-pointer hover:text-cyan transition-colors">
                  <div className="w-8 h-8 rounded-full bg-cyan/5 border border-cyan/10 flex items-center justify-center group-hover:border-cyan/30 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-cyan/60" />
                  </div>
                  <span>+91 80070 24545</span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer hover:text-cyan transition-colors">
                  <div className="w-8 h-8 rounded-full bg-cyan/5 border border-cyan/10 flex items-center justify-center group-hover:border-cyan/30 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-cyan/60" />
                  </div>
                  <span className="break-all">monita.jadhav@sapkalknowledgehub.org</span>
                </li>
                <li className="flex items-start gap-4 group cursor-pointer hover:text-cyan transition-colors">
                  <div className="w-8 h-8 rounded-full bg-cyan/5 border border-cyan/10 flex items-center justify-center group-hover:border-cyan/30 transition-colors mt-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan/60" />
                  </div>
                  <span className="leading-relaxed">Sapkal Knowledge Hub, Kalyani Hills, Anjaneri, Nashik.</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4">
              <Magnetic strength={0.15}>
                <a 
                  href="/register" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-cyan text-background font-display font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all duration-300 group shadow-[0_0_20px_rgba(231,29,35,0.2)]"
                >
                  <span>Join The Future</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-foreground/20 text-[9px] font-mono uppercase tracking-[0.2em]">
              © 2026 Late G. N. Sapkal College of Engineering.
            </p>
            <p className="text-cyan/20 text-[8px] font-mono uppercase tracking-[0.4em]">
              Organized by Dept. of AI & Data Science Engineering.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-[9px] font-mono text-foreground/20 hover:text-cyan transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[9px] font-mono text-foreground/20 hover:text-cyan transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan/5 blur-[150px] rounded-full -mb-64 -mr-64 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-amber/5 blur-[120px] rounded-full -mt-32 -ml-32 pointer-events-none" />
    </footer>
  );
};

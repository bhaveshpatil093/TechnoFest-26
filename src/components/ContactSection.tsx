import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, User, MessageSquare } from 'lucide-react';

import { GlitchHeading } from './GlitchHeading';

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  delay?: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, role, phone, email, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative p-6 rounded-2xl bg-surface-low border border-border hover:border-cyan/50 transition-all duration-500 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan/5 blur-3xl group-hover:bg-cyan/10 transition-colors duration-500" />
      
      <div className="relative z-10">
        <div className="mb-4">
          <h4 className="text-xl font-display font-black text-foreground tracking-tight group-hover:text-cyan transition-colors">
            {name}
          </h4>
          <p className="text-xs font-mono text-cyan/70 uppercase tracking-widest mt-1">
            {role}
          </p>
        </div>

        <div className="space-y-3">
          <a 
            href={`tel:${phone}`}
            className="flex items-center gap-3 text-foreground/40 hover:text-foreground transition-colors group/link"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-low flex items-center justify-center group-hover/link:bg-cyan/20 group-hover/link:text-cyan transition-all">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm font-sub tracking-wider">{phone}</span>
          </a>
          
          <a 
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-foreground/40 hover:text-foreground transition-colors group/link"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-low flex items-center justify-center group-hover/link:bg-cyan/20 group-hover/link:text-cyan transition-all">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-sm font-sub tracking-wider break-all">{email}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-mono uppercase tracking-widest mb-4">
            <MessageSquare className="w-3 h-3" /> Get In Touch
          </div>
          <GlitchHeading 
            dataText="CONTACT US"
            className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic text-foreground"
          >
            CONTACT <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]">US</span>
          </GlitchHeading>
          <p className="text-foreground/40 font-mono text-sm tracking-widest uppercase">Reach out for queries or collaborations</p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ContactCard 
            name="Prof. M. N. Jadhav"
            role="Main Event Coordinator"
            phone="8007024545"
            email="monita.jadhav@sapkalknowledgehub.org"
            delay={0.1}
          />
          <ContactCard 
            name="Mr. Bhavesh D. Patil"
            role="Main Student Coordinator"
            phone="9130351237"
            email="bhaveshpatiltech@gmail.com"
            delay={0.2}
          />
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto p-8 rounded-3xl bg-surface-low border border-border backdrop-blur-sm relative overflow-hidden"
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-display text-cyan mb-2">MESSAGE SENT!</h3>
              <p className="text-foreground/60 font-sub">Thank you for reaching out. We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-mono text-foreground/40 uppercase tracking-widest ml-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                    <input 
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your Name"
                      className="w-full bg-surface-low border border-border rounded-xl py-4 pl-12 pr-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-mono text-foreground/40 uppercase tracking-widest ml-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                    <input 
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="w-full bg-surface-low border border-border rounded-xl py-4 pl-12 pr-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-mono text-foreground/40 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can we help you?"
                  className="w-full bg-surface-low border border-border rounded-xl py-4 px-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="btn-primary w-full py-4 flex items-center justify-center gap-2 group"
              >
                <span>SEND MESSAGE</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          )}
        </motion.div>

        {/* College Address Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-foreground/80 group">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin className="w-6 h-6 text-cyan shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
              </motion.div>
              <p className="text-lg font-sub tracking-wide max-w-xl">
                Sapkal Knowledge Hub, Kalyani Hills, Anjaneri, Trimbakeshwar Road, Nashik – 422 213.
              </p>
            </div>

            {/* Quick Contact Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="tel:8007024545"
                className="w-12 h-12 rounded-full bg-surface-low border border-surface-high flex items-center justify-center text-foreground/40 hover:text-cyan hover:border-cyan/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:monita.jadhav@sapkalknowledgehub.org"
                className="w-12 h-12 rounded-full bg-surface-low border border-surface-high flex items-center justify-center text-foreground/40 hover:text-cyan hover:border-cyan/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

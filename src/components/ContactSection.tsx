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
      className="group relative p-5 rounded-xl bg-surface-low/30 border border-white/5 hover:border-cyan/30 transition-all duration-500 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan/5 blur-3xl group-hover:bg-cyan/10 transition-colors duration-500" />
      
      <div className="relative z-10">
        <div className="mb-4">
          <h4 className="text-lg font-display font-black text-foreground tracking-tight group-hover:text-cyan transition-colors uppercase italic">
            {name}
          </h4>
          <p className="text-[10px] font-mono text-cyan/50 uppercase tracking-[0.2em] mt-1">
            {role}
          </p>
        </div>

        <div className="space-y-2">
          <a 
            href={`tel:${phone}`}
            className="flex items-center gap-3 text-foreground/30 hover:text-cyan transition-colors group/link"
          >
            <div className="w-7 h-7 rounded-lg bg-surface-high/50 flex items-center justify-center group-hover/link:bg-cyan/20 group-hover/link:text-cyan transition-all border border-white/5">
              <Phone className="w-3 h-3" />
            </div>
            <span className="text-xs font-sub tracking-widest">{phone}</span>
          </a>
          
          <a 
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-foreground/30 hover:text-cyan transition-colors group/link"
          >
            <div className="w-7 h-7 rounded-lg bg-surface-high/50 flex items-center justify-center group-hover/link:bg-cyan/20 group-hover/link:text-cyan transition-all border border-white/5">
              <Mail className="w-3 h-3" />
            </div>
            <span className="text-xs font-sub tracking-widest break-all">{email}</span>
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
            CONTACT <span className="text-cyan drop-shadow-[0_0_15px_rgba(231,29,35,0.5)]">US</span>
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
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-surface-low/20 border border-white/5 backdrop-blur-md relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan/5 blur-2xl -mr-12 -mt-12" />

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-cyan/10 border border-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                <Send className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-display font-black text-cyan mb-2 italic uppercase">MESSAGE SENT!</h3>
              <p className="text-foreground/40 font-mono text-[10px] uppercase tracking-widest">Thank you for reaching out. We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-[10px] font-mono text-foreground/30 uppercase tracking-[0.3em] ml-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-foreground/20 group-focus-within:text-cyan transition-colors" />
                    <input 
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your Name"
                      className="w-full bg-surface-high/20 border border-white/5 rounded-lg py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-cyan/30 focus:bg-surface-high/40 transition-all font-sub tracking-wider"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-[10px] font-mono text-foreground/30 uppercase tracking-[0.3em] ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-foreground/20 group-focus-within:text-cyan transition-colors" />
                    <input 
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="w-full bg-surface-high/20 border border-white/5 rounded-lg py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-cyan/30 focus:bg-surface-high/40 transition-all font-sub tracking-wider"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-[10px] font-mono text-foreground/30 uppercase tracking-[0.3em] ml-1">Your Message</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-5 w-3.5 h-3.5 text-foreground/20 group-focus-within:text-cyan transition-colors" />
                  <textarea 
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help you?"
                    className="w-full bg-surface-high/20 border border-white/5 rounded-lg py-4 pl-11 pr-4 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-cyan/30 focus:bg-surface-high/40 transition-all resize-none font-sub tracking-wider"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-cyan text-white font-display font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 group hover:bg-white hover:text-cyan transition-all duration-300 shadow-[0_0_20px_rgba(231,29,35,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <span>SEND MESSAGE</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
          className="mt-24 text-center"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4 text-foreground/60 group">
              <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20 mb-2">
                <MapPin className="w-6 h-6 text-cyan shadow-[0_0_15px_rgba(231,29,35,0.5)]" />
              </div>
              <h5 className="font-display font-black text-lg uppercase tracking-[0.2em] text-foreground italic">Venue Location</h5>
              <p className="text-sm font-sub tracking-[0.1em] max-w-xl leading-relaxed">
                Sapkal Knowledge Hub, Kalyani Hills, Anjaneri, <br />
                Trimbakeshwar Road, Nashik – 422 213.
              </p>
            </div>

            {/* Quick Contact Icons */}
            <div className="flex items-center gap-6">
              <a 
                href="tel:8007024545"
                className="w-10 h-10 rounded-full bg-surface-high/20 border border-white/5 flex items-center justify-center text-foreground/30 hover:text-cyan hover:border-cyan/30 hover:shadow-[0_0_20px_rgba(231,29,35,0.2)] transition-all duration-300"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href="mailto:monita.jadhav@sapkalknowledgehub.org"
                className="w-10 h-10 rounded-full bg-surface-high/20 border border-white/5 flex items-center justify-center text-foreground/30 hover:text-cyan hover:border-cyan/30 hover:shadow-[0_0_20px_rgba(231,29,35,0.2)] transition-all duration-300"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start tracking-wide">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl border border-white/5 relative bg-surface-low/30 backdrop-blur-sm h-fit lg:sticky lg:top-24"
          >
            <img 
              src="/assets/trio.jpg" 
              alt="Technofest Contact Team" 
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Right Column: Contact Details */}
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center w-full"
            >
              <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[9px] font-mono uppercase tracking-widest mb-3">
                <MessageSquare className="w-2.5 h-2.5" /> Get In Touch
              </div>
              <GlitchHeading 
                dataText="CONTACT US"
                className="text-3xl md:text-5xl font-black mb-2 tracking-tighter italic text-foreground w-full text-center"
              >
                CONTACT <span className="text-cyan drop-shadow-[0_0_15px_rgba(231,29,35,0.5)]">US</span>
              </GlitchHeading>
              <p className="text-foreground/40 font-mono text-[10px] tracking-widest uppercase text-center">Reach out for queries or collaborations</p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <ContactCard 
                name="Prof. M. N. Jadhav"
                role="Event Coordinator"
                phone="8007024545"
                email="monita.jadhav@sapkalknowledgehub.org"
                delay={0.1}
              />
              <ContactCard 
                name="Mr. Bhavesh D. Patil"
                role="Student Coordinator"
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
              className="w-full p-6 rounded-2xl bg-surface-low/20 border border-white/5 backdrop-blur-md relative overflow-hidden shadow-xl"
            >
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-12 h-12 bg-cyan/10 border border-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                    <Send className="w-6 h-6 text-cyan" />
                  </div>
                  <h3 className="text-xl font-display font-black text-cyan mb-2 italic uppercase">MESSAGE SENT!</h3>
                  <p className="text-foreground/40 font-mono text-[9px] uppercase tracking-widest">We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-[9px] font-mono text-foreground/40 uppercase tracking-[0.2em] ml-1">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-foreground/30 group-focus-within:text-cyan transition-colors" />
                        <input 
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your Name"
                          className="w-full bg-surface-high/10 border border-white/5 rounded-lg py-2.5 pl-9 pr-3 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-cyan/40 transition-all font-sub tracking-wide"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-[9px] font-mono text-foreground/40 uppercase tracking-[0.2em] ml-1">Email Address</label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-foreground/30 group-focus-within:text-cyan transition-colors" />
                        <input 
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          className="w-full bg-surface-high/10 border border-white/5 rounded-lg py-2.5 pl-9 pr-3 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-cyan/40 transition-all font-sub tracking-wide"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-[9px] font-mono text-foreground/40 uppercase tracking-[0.2em] ml-1">Message</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-3 top-3.5 w-3.5 h-3.5 text-foreground/30 group-focus-within:text-cyan transition-colors" />
                      <textarea 
                        id="contact-message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="How can we help?"
                        className="w-full bg-surface-high/10 border border-white/5 rounded-lg py-3 pl-9 pr-3 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-cyan/40 transition-all resize-none font-sub tracking-wide"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 bg-cyan text-white font-display font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 group hover:bg-white hover:text-cyan transition-all duration-300 shadow-[0_0_15px_rgba(231,29,35,0.2)]"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
              className="w-full flex flex-col sm:flex-row items-center sm:justify-between bg-surface-low/30 backdrop-blur-md p-5 rounded-xl border border-white/5 gap-4 shadow-lg text-left"
            >
              <div className="flex items-center gap-4 text-foreground/70 group w-full">
                <div className="min-w-[40px] w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20">
                  <MapPin className="w-5 h-5 text-cyan drop-shadow-[0_0_10px_rgba(231,29,35,0.4)]" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-sm uppercase tracking-[0.1em] text-foreground italic">Sapkal Knowledge Hub</h5>
                  <p className="text-[10px] font-mono tracking-wider text-foreground/50 leading-snug mt-1">
                    Kalyani Hills, Anjaneri, Trimbakeshwar Rd,<br /> Nashik – 422 213.
                  </p>
                </div>
              </div>

              {/* Quick Contact Icons */}
              <div className="flex items-center gap-3 w-full sm:justify-end justify-center">
                <a 
                  href="tel:8007024545"
                  className="w-9 h-9 rounded-full bg-surface-high/30 border border-white/10 flex items-center justify-center text-foreground/40 hover:text-cyan hover:border-cyan/30 transition-all duration-300"
                  title="Call Us"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="mailto:monita.jadhav@sapkalknowledgehub.org"
                  className="w-9 h-9 rounded-full bg-surface-high/30 border border-white/10 flex items-center justify-center text-foreground/40 hover:text-cyan hover:border-cyan/30 transition-all duration-300"
                  title="Email Us"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

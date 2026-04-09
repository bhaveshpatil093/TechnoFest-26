import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldAlert, Cpu, Laptop, Globe } from 'lucide-react';

interface EventDetails {
  description: string;
  eligibility: string[];
  rules: string[];
  guidelines: string[];
}

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  accent: string;
  details: EventDetails;
}

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ isOpen, onClose, title, accent, details }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-3xl glass-card overflow-hidden relative z-10 max-h-[90vh] flex flex-col"
            style={{ borderColor: `${accent}33` }}
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between bg-surface-low/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${accent}22`, color: accent }}>
                  <Cpu size={20} />
                </div>
                <h2 className="text-xl md:text-2xl font-display font-black uppercase tracking-tight" style={{ color: accent }}>
                  {title} <span className="text-foreground">Details</span>
                </h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-foreground/50 hover:text-foreground">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-8">
              {/* Description */}
              <section>
                <p className="text-foreground/70 leading-relaxed font-body text-sm md:text-base italic p-4 bg-white/5 rounded-2xl border-l-4" style={{ borderLeftColor: accent }}>
                  {details.description}
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Eligibility */}
                <section>
                  <h3 className="text-[10px] font-display font-black text-amber uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <CheckCircle2 size={14} /> Eligibility
                  </h3>
                  <ul className="space-y-3">
                    {details.eligibility.map((item, i) => (
                      <li key={i} className="text-[11px] text-foreground/50 flex items-start gap-2 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-amber mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Rules */}
                <section>
                  <h3 className="text-[10px] font-display font-black text-cyan uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <ShieldAlert size={14} /> Competition Rules
                  </h3>
                  <ul className="space-y-3">
                    {details.rules.map((item, i) => (
                      <li key={i} className="text-[11px] text-foreground/50 flex items-start gap-2 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-cyan mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Technical Guidelines */}
              <section className="bg-surface-high/20 p-6 rounded-2xl border border-white/5">
                <h3 className="text-[10px] font-display font-black text-foreground/80 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <Laptop size={14} /> Technical Guidelines
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {details.guidelines.map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                      <div className="mt-0.5 text-cyan/70">
                        <Globe size={12} />
                      </div>
                      <p className="text-[10px] leading-snug text-foreground/60 uppercase tracking-wider">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border bg-surface-low/50 flex justify-end">
              <button 
                onClick={onClose}
                className="px-8 py-3 rounded-lg font-display text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                style={{ backgroundColor: accent, color: '#fff', boxShadow: `0 0 20px ${accent}44` }}
              >
                Understood
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

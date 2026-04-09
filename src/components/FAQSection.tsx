import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, HelpCircle } from 'lucide-react';

import { GlitchHeading } from './GlitchHeading';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      layout
      initial={false}
      className={`group mb-2 rounded-lg border transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'bg-surface-high/80 border-cyan/30 shadow-[0_0_15px_rgba(231,29,35,0.05)]' 
          : 'bg-surface-low/30 border-white/5 hover:border-cyan/20'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={`text-sm font-display font-bold tracking-tight transition-colors ${isOpen ? 'text-cyan' : 'text-foreground/70 group-hover:text-foreground'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={`flex-shrink-0 ml-3 ${isOpen ? 'text-cyan' : 'text-foreground/30'}`}
        >
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="px-4 pb-4 text-foreground/50 text-xs font-sub leading-relaxed border-t border-white/5 pt-3">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can participate in Technofest 2026?",
      answer: "Technofest is open to all students of Late G. N. Sapkal College of Engineering. We also welcome participants from other engineering colleges for the Project Competition and Adventure with AI events."
    },
    {
      question: "Is participation compulsory for AI & DS students?",
      answer: "While not strictly mandatory, participation is highly encouraged for all AI & DS students. It's a premier platform to showcase your technical skills and gain practical experience."
    },
    {
      question: "Can I register for multiple events?",
      answer: "Yes! You can participate in the Project Competition and any one sub-event under 'Adventure with AI' (PromptCraft, Free Fire, or Neon Cricket)."
    },
    {
      question: "What should a project submission include?",
      answer: "Your submission should include a working prototype (if applicable), a technical poster, and a brief presentation explaining the methodology and tools used."
    },
    {
      question: "How many members can be in a Free Fire team?",
      answer: "The Free Fire tournament follows a standard Squad format. Each team must consist of exactly 4 members with correct IGNs and Player IDs."
    },
    {
      question: "Is there a registration fee for the events?",
      answer: "Most events are free for internal students. Some sub-events might have a nominal fee to cover prize pools. Contact coordinators for exact details."
    },
    {
      question: "What is the venue for the competitions?",
      answer: "Project Competition: Main Hall. PromptCraft & Free Fire: AI & DS Labs. Neon Cricket: Indoor Sports Arena."
    },
    {
      question: "How and when will winners be announced?",
      answer: "Winners will be announced during the grand Prize Distribution ceremony at 4:30 PM on April 18th, 2026, in the College Auditorium."
    }
  ];

  // Split FAQs into two columns for desktop
  const midIndex = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, midIndex);
  const rightCol = faqs.slice(midIndex);

  return (
    <section id="faq" className="py-20 px-6 relative bg-background/20">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-mono uppercase tracking-widest mb-3">
            <HelpCircle className="w-3 h-3" /> Information Hub
          </div>
          <GlitchHeading 
            dataText="FREQUENTLY ASKED QUESTIONS"
            className="text-3xl md:text-5xl font-black mb-2 tracking-tighter italic text-foreground uppercase"
          >
            FREQUENTLY ASKED <span className="text-cyan text-glow-cyan">QUESTIONS</span>
          </GlitchHeading>
          <p className="text-foreground/30 font-mono text-[10px] tracking-[0.3em] uppercase">Everything you need to know about TF'26</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-0"
          >
            {leftCol.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-0"
          >
            {rightCol.map((faq, index) => (
              <FAQItem
                key={index + midIndex}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index + midIndex}
                onClick={() => setOpenIndex(openIndex === index + midIndex ? null : index + midIndex)}
              />
            ))}
          </motion.div>
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan/2 blur-[120px] rounded-full pointer-events-none -z-10" />
      </div>
    </section>
  );
};

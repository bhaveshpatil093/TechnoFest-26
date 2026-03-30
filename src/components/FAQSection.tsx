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
      className={`group mb-4 rounded-xl border transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'bg-surface-high border-cyan/50 border-l-4 shadow-[0_0_20px_rgba(0,245,255,0.1)]' 
          : 'bg-surface-low border-surface-high hover:border-foreground/20 hover:-translate-y-1'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={`font-display font-bold tracking-wide transition-colors ${isOpen ? 'text-cyan' : 'text-foreground/80 group-hover:text-foreground'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex-shrink-0 ml-4 ${isOpen ? 'text-cyan' : 'text-foreground/40'}`}
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-foreground/60 font-sub leading-relaxed border-t border-surface-high pt-4">
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
      answer: "While not strictly mandatory, participation is highly encouraged for all AI & DS students. It's a premier platform to showcase your technical skills, network with peers, and gain practical experience beyond the classroom."
    },
    {
      question: "Can I register for multiple events?",
      answer: "Yes! You can participate in the Project Competition and any one sub-event under 'Adventure with AI' (AI Prompting, Free Fire, or Neon Cricket). Please ensure your team members are available for both if you're in a team."
    },
    {
      question: "What should a project submission include?",
      answer: "Your submission should include a working prototype (if applicable), a technical poster, and a brief presentation explaining the problem statement, methodology, and the AI/DS tools used in your project."
    },
    {
      question: "How many members can be in a Free Fire team?",
      answer: "The Free Fire tournament follows a standard Squad format. Each team must consist of exactly 4 members. Ensure all members provide their correct In-Game Names (IGN) and Player IDs during registration."
    },
    {
      question: "Is there a registration fee for the events?",
      answer: "Most events are free for internal students. However, some sub-events might have a nominal registration fee to cover prize pools or equipment. Please contact the specific event coordinators for exact details."
    },
    {
      question: "What is the venue for the various competitions?",
      answer: "The Project Competition will be held in the Main Hall. AI Prompting and Free Fire will take place in the AI & DS Computer Labs, while Neon Cricket will be held at the designated Indoor Sports Arena."
    },
    {
      question: "How and when will the winners be announced?",
      answer: "Winners will be announced during the grand Prize Distribution ceremony at 4:30 PM on April 18th, 2026, in the College Auditorium."
    },
    {
      question: "Who should I contact if I have specific queries?",
      answer: "Each event has dedicated Staff and Student coordinators. Their contact details are listed in the 'Events' and 'Our Team' sections. For general queries, you can reach out to the Main Event Coordinator, Prof. M. N. Jadhav."
    },
    {
      question: "What is the last date to register for Technofest 2026?",
      answer: "The online registration portal will remain open until April 15th, 2026, 11:59 PM. We recommend registering early as slots for events like Free Fire and Neon Cricket are limited."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 relative bg-background/20">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3 h-3" /> Information Hub
          </div>
          <GlitchHeading 
            dataText="FREQUENTLY ASKED QUESTIONS"
            className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic text-foreground"
          >
            FREQUENTLY ASKED <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]">QUESTIONS</span>
          </GlitchHeading>
          <p className="text-foreground/40 font-mono text-sm tracking-widest uppercase">Everything you need to know about TF'26</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      </div>
    </section>
  );
};

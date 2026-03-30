import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Phone, Mail, Hash, GraduationCap, MessageSquare, Info } from 'lucide-react';

import { GlitchHeading } from './GlitchHeading';

import { SuccessState } from './SuccessState';

interface FormData {
  fullName: string;
  rollNumber: string;
  year: string;
  mobile: string;
  email: string;
  experience: string;
}

const InputField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  type = "text", 
  required = true,
  placeholder = " ",
  icon: Icon
}: { 
  label: string; 
  name: string; 
  value: string; 
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  icon?: any;
}) => {
  const id = `input-ai-${name}`;
  return (
    <div className="relative mb-6 group">
      <div className="absolute left-4 top-4 text-foreground/20 group-focus-within:text-cyan transition-colors">
        {Icon && <Icon size={18} />}
      </div>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full bg-surface-low border border-border rounded-lg pl-12 pr-4 py-4 text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all min-h-[120px] peer"
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-surface-low border border-border rounded-lg pl-12 pr-4 py-4 text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all peer appearance-none"
        >
          <option value="" disabled>Select Year</option>
          <option value="FY">First Year (FY)</option>
          <option value="SY">Second Year (SY)</option>
          <option value="TY">Third Year (TY)</option>
          <option value="BE">Final Year (BE)</option>
        </select>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full bg-surface-low border border-border rounded-lg pl-12 pr-4 py-4 text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all peer"
        />
      )}
      <label 
        htmlFor={id}
        className="absolute left-12 top-4 text-foreground/40 pointer-events-none transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-cyan peer-focus:bg-background peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-cyan peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-2"
      >
        {label}
      </label>
    </div>
  );
};

export const AIPromptingRegistration = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    rollNumber: '',
    year: '',
    mobile: '',
    email: '',
    experience: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!/^\d{10}$/.test(formData.mobile)) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="register-ai" className="py-24 px-6 flex items-center justify-center min-h-[600px]">
        <SuccessState 
          name={formData.fullName}
          event="AI Prompting"
          rollNumber={formData.rollNumber}
          coordinatorName="Prof. S. S. Mergal"
          coordinatorPhone="7798375872"
          onReset={() => setIsSubmitted(false)}
        />
      </section>
    );
  }

  return (
    <section id="register-ai" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
            Sub-Event 2.1
          </div>
          <GlitchHeading 
            dataText="AI Prompting"
            className="text-4xl md:text-5xl mb-4 text-glow-cyan font-display uppercase tracking-tighter text-foreground"
          >
            AI <span className="text-foreground">Prompting</span>
          </GlitchHeading>
          <p className="text-foreground/50 font-sub max-w-xl mx-auto">Master the art of human-AI communication and compete for the title of Prompt Engineer.</p>
        </div>

        {/* Coordinator Info Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-8 p-6 border-cyan/20 bg-cyan/5 flex flex-col md:flex-row gap-6 items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
              <Info size={20} />
            </div>
            <div>
              <h4 className="text-xs font-display text-cyan uppercase tracking-widest">Event Coordinators</h4>
              <p className="text-[10px] text-foreground/40 uppercase tracking-tighter mt-1">Contact for queries regarding rules or schedule</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-foreground uppercase tracking-wider">Prof. S. S. Mergal</p>
              <div className="flex items-center gap-3 text-[10px] text-foreground/60">
                <a href="tel:7798375872" className="hover:text-cyan transition-colors flex items-center gap-1"><Phone size={10} /> 7798375872</a>
                <a href="mailto:mergalswapnil@gmail.com" className="hover:text-cyan transition-colors flex items-center gap-1"><Mail size={10} /> Email</a>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-foreground uppercase tracking-wider">Mr. Soham D. Mahajan</p>
              <div className="flex items-center gap-3 text-[10px] text-foreground/60">
                <a href="tel:7887329442" className="hover:text-cyan transition-colors flex items-center gap-1"><Phone size={10} /> 7887329442</a>
                <a href="mailto:sohammahajan788@gmail.com" className="hover:text-cyan transition-colors flex items-center gap-1"><Mail size={10} /> Email</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-12 border-cyan/30"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} icon={User} />
              <InputField label="Roll Number" name="rollNumber" value={formData.rollNumber} onChange={handleInputChange} icon={Hash} />
              <InputField label="Year of Study" name="year" value={formData.year} onChange={handleInputChange} type="select" icon={GraduationCap} />
              <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleInputChange} type="tel" icon={Phone} />
              <div className="md:col-span-2">
                <InputField label="Email ID" name="email" value={formData.email} onChange={handleInputChange} type="email" icon={Mail} />
                <InputField 
                  label="Describe your experience with AI tools (Optional)" 
                  name="experience" 
                  value={formData.experience} 
                  onChange={handleInputChange} 
                  type="textarea" 
                  required={false}
                  icon={MessageSquare}
                />
              </div>
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-red-500 text-xs mb-6 font-sub uppercase tracking-widest"
              >
                {error}
              </motion.p>
            )}

            <div className="flex justify-center mt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-3 px-16 py-4"
              >
                Register for AI Prompting <Send size={18} />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

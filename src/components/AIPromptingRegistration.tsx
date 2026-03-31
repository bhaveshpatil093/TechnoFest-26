import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  User, 
  Phone, 
  Mail, 
  Hash, 
  GraduationCap, 
  MessageSquare, 
  Info,
  ChevronRight,
  ChevronLeft,
  CheckCircle2
} from 'lucide-react';

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
    <div className="relative mb-4 group">
      <div className="absolute left-4 top-3 text-foreground/20 group-focus-within:text-cyan transition-colors">
        {Icon && <Icon size={16} />}
      </div>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full bg-surface-low/50 border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all min-h-[100px] peer backdrop-blur-sm text-sm"
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-surface-low/50 border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all peer appearance-none backdrop-blur-sm text-sm"
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
          className="w-full bg-surface-low/50 border border-border rounded-lg pl-10 pr-3 py-3 text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all peer backdrop-blur-sm text-sm"
        />
      )}
      <label 
        htmlFor={id}
        className="absolute left-10 top-3 text-foreground/40 pointer-events-none transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-[10px] peer-focus:text-cyan peer-focus:bg-background peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-cyan peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-2"
      >
        {label}
      </label>
    </div>
  );
};

const StepIndicator = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div key={i} className="flex items-center">
          <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
              i + 1 <= currentStep 
                ? 'border-cyan bg-cyan/10 text-cyan shadow-[0_0_15px_rgba(231,29,35,0.3)]' 
                : 'border-border text-foreground/20'
            }`}
          >
            {i + 1 < currentStep ? <CheckCircle2 size={16} /> : <span className="font-display font-bold text-xs">{i + 1}</span>}
          </div>
          {i < totalSteps - 1 && (
            <div className={`w-8 md:w-16 h-0.5 mx-1 transition-all duration-500 ${
              i + 1 < currentStep ? 'bg-cyan shadow-[0_0_10px_rgba(231,29,35,0.5)]' : 'bg-border'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
};

export const AIPromptingRegistration = () => {
  const [step, setStep] = useState(1);
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

  const nextStep = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.rollNumber || !formData.year) {
        setError('Please fill in all required personal details.');
        return;
      }
    }
    setError('');
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setError('');
    setStep(prev => prev - 1);
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
          onReset={() => {
            setIsSubmitted(false);
            setStep(1);
          }}
        />
      </section>
    );
  }

  return (
    <section id="register-ai" className="py-6 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block px-3 py-0.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-[8px] uppercase tracking-[0.3em] font-bold mb-2">
            Sub-Event 2.1
          </div>
          <GlitchHeading 
            dataText="AI Prompting"
            className="text-2xl md:text-3xl mb-2 text-glow-cyan font-display uppercase tracking-tighter text-foreground"
          >
            AI <span className="text-foreground">Prompting</span>
          </GlitchHeading>
          <p className="text-foreground/50 font-sub text-[10px] max-w-xl mx-auto">Master the art of human-AI communication and compete for the title of Prompt Engineer.</p>
        </div>

        {/* Coordinator Info Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-6 p-4 border-cyan/20 bg-cyan/5 flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
              <Info size={16} />
            </div>
            <div>
              <h4 className="text-[10px] font-display text-cyan uppercase tracking-widest">Event Coordinators</h4>
              <p className="text-[8px] text-foreground/40 uppercase tracking-tighter mt-0.5">Contact for queries regarding rules or schedule</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-foreground uppercase tracking-wider">Prof. S. S. Mergal</p>
              <div className="flex items-center gap-2 text-[9px] text-foreground/60">
                <a href="tel:7798375872" className="hover:text-cyan transition-colors flex items-center gap-1"><Phone size={8} /> 7798375872</a>
              </div>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-foreground uppercase tracking-wider">Mr. Soham D. Mahajan</p>
              <div className="flex items-center gap-2 text-[9px] text-foreground/60">
                <a href="tel:7887329442" className="hover:text-cyan transition-colors flex items-center gap-1"><Phone size={8} /> 7887329442</a>
              </div>
            </div>
          </div>
        </motion.div>

        <StepIndicator currentStep={step} totalSteps={2} />

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-6 md:p-8 border-cyan/30 relative overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan/30 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan/30 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan/30 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan/30 rounded-br-xl" />

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-display text-cyan mb-4 flex items-center gap-3">
                    <User className="text-cyan" size={18} /> Basic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} icon={User} />
                    <InputField label="Roll Number" name="rollNumber" value={formData.rollNumber} onChange={handleInputChange} icon={Hash} />
                    <InputField label="Year of Study" name="year" value={formData.year} onChange={handleInputChange} type="select" icon={GraduationCap} />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-display text-cyan mb-4 flex items-center gap-3">
                    <Phone className="text-cyan" size={18} /> Contact & Experience
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleInputChange} type="tel" icon={Phone} />
                    <InputField label="Email ID" name="email" value={formData.email} onChange={handleInputChange} type="email" icon={Mail} />
                    <div className="md:col-span-2">
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
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-red-500 text-xs mt-6 font-sub uppercase tracking-widest flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                {error}
              </motion.p>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-4 py-2 text-foreground/60 hover:text-cyan transition-colors font-display uppercase tracking-widest text-[10px]"
                >
                  <ChevronLeft size={16} /> Back
                </button>
              ) : <div />}

              {step < 2 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2 px-6 py-2 text-[10px]"
                >
                  Next Step <ChevronRight size={16} />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(231, 29, 35, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2 px-8 py-3 text-[10px]"
                >
                  Register Now <Send size={16} />
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  User, 
  Phone, 
  Mail, 
  Hash, 
  GraduationCap, 
  Trophy, 
  Users, 
  Plus, 
  Trash2, 
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
  teamName: string;
  captainName: string;
  teamMembers: string[];
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
  const id = `input-nc-${name}`;
  return (
    <div className="relative mb-4 group">
      <div className="absolute left-3 top-3 text-foreground/20 group-focus-within:text-cyan transition-colors">
        {Icon && <Icon size={16} />}
      </div>
      {type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-surface-low/50 border border-border rounded-lg pl-10 pr-3 py-3 text-sm text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all peer appearance-none backdrop-blur-sm"
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
          className="w-full bg-surface-low/50 border border-border rounded-lg pl-10 pr-3 py-3 text-sm text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all peer backdrop-blur-sm"
        />
      )}
      <label 
        htmlFor={id}
        className="absolute left-10 top-3 text-sm text-foreground/40 pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-[10px] peer-focus:text-cyan peer-focus:bg-background peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-cyan peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-1"
      >
        {label}
      </label>
    </div>
  );
};

const StepIndicator = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div key={i} className="flex items-center">
          <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
              i + 1 <= currentStep 
                ? 'border-cyan bg-cyan/10 text-cyan shadow-[0_0_10px_rgba(231,29,35,0.3)]' 
                : 'border-border text-foreground/20'
            }`}
          >
            {i + 1 < currentStep ? <CheckCircle2 size={16} /> : <span className="font-display font-bold text-xs">{i + 1}</span>}
          </div>
          {i < totalSteps - 1 && (
            <div className={`w-8 md:w-16 h-0.5 mx-1 transition-all duration-500 ${
              i + 1 < currentStep ? 'bg-cyan shadow-[0_0_8px_rgba(231,29,35,0.5)]' : 'bg-border'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
};

export const NeonCricketRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    rollNumber: '',
    year: '',
    mobile: '',
    email: '',
    teamName: '',
    captainName: '',
    teamMembers: ['']
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length < 11) {
      setFormData(prev => ({
        ...prev,
        teamMembers: [...prev.teamMembers, '']
      }));
    }
  };

  const removeTeamMember = (index: number) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  const handleMemberChange = (index: number, value: string) => {
    const newMembers = [...formData.teamMembers];
    newMembers[index] = value;
    setFormData(prev => ({ ...prev, teamMembers: newMembers }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.rollNumber || !formData.year) {
        setError('Please fill in all required personal details.');
        return;
      }
    } else if (step === 2) {
      if (!formData.teamName || !formData.captainName) {
        setError('Please fill in all required team details.');
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
      <section id="register-nc" className="py-24 px-6 flex items-center justify-center min-h-[600px]">
        <SuccessState 
          name={formData.fullName}
          event="Neon Cricket"
          rollNumber={formData.rollNumber}
          coordinatorName="Prof. S. K. Pathan"
          coordinatorPhone="8149545380"
          onReset={() => {
            setIsSubmitted(false);
            setStep(1);
          }}
        />
      </section>
    );
  }

  return (
    <section id="register-nc" className="py-6 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block px-3 py-0.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-[8px] uppercase tracking-[0.3em] font-bold mb-2">
            Sub-Event 2.3
          </div>
          <GlitchHeading 
            dataText="NEON CRICKET"
            className="text-3xl md:text-4xl mb-2 font-display uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(231,29,35,0.3)] text-foreground"
          >
            NEON <span className="text-cyan">CRICKET</span>
          </GlitchHeading>
          <p className="text-foreground/50 font-sub text-xs max-w-xl mx-auto">Light up the pitch. Register your team for the most vibrant cricket tournament.</p>
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
              <p className="text-[8px] text-foreground/40 uppercase tracking-tighter mt-0.5">Contact for match schedules or rules</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-foreground uppercase tracking-wider">Prof. S. K. Pathan</p>
              <div className="flex items-center gap-3 text-[9px] text-foreground/60">
                <a href="tel:8149545380" className="hover:text-cyan transition-colors flex items-center gap-1"><Phone size={8} /> 8149545380</a>
                <a href="mailto:shoyeb.pathan@sapkalknowledgehub.org" className="hover:text-cyan transition-colors flex items-center gap-1"><Mail size={8} /> Email</a>
              </div>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-foreground uppercase tracking-wider">Mr. Krushna R. Thakare</p>
              <div className="flex items-center gap-3 text-[9px] text-foreground/60">
                <a href="tel:963942584" className="hover:text-cyan transition-colors flex items-center gap-1"><Phone size={8} /> 963942584</a>
                <a href="mailto:kthakare753@gmail.com" className="hover:text-cyan transition-colors flex items-center gap-1"><Mail size={8} /> Email</a>
              </div>
            </div>
          </div>
        </motion.div>

        <StepIndicator currentStep={step} totalSteps={3} />

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-6 md:p-8 border-cyan/30 relative overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan/30 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan/30 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan/30 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan/30 rounded-br-lg" />

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  <h3 className="text-lg font-display text-cyan mb-6 flex items-center gap-2">
                    <User size={20} className="text-cyan" /> Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} icon={User} />
                    <InputField label="Roll Number" name="rollNumber" value={formData.rollNumber} onChange={handleInputChange} icon={Hash} />
                    <InputField label="Year of Study" name="year" value={formData.year} onChange={handleInputChange} type="select" icon={GraduationCap} />
                    <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleInputChange} type="tel" icon={Phone} />
                    <div className="md:col-span-2">
                      <InputField label="Email ID" name="email" value={formData.email} onChange={handleInputChange} type="email" icon={Mail} />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  <h3 className="text-lg font-display text-cyan mb-6 flex items-center gap-2">
                    <Trophy size={20} className="text-cyan" /> Team Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <InputField label="Team Name" name="teamName" value={formData.teamName} onChange={handleInputChange} icon={Users} />
                    <InputField label="Captain Name" name="captainName" value={formData.captainName} onChange={handleInputChange} icon={Trophy} />
                  </div>
                  <div className="p-3 rounded-lg bg-cyan/5 border border-cyan/10 flex items-start gap-2 mt-2">
                    <Info size={14} className="text-cyan shrink-0 mt-0.5" />
                    <p className="text-[9px] text-foreground/60 leading-relaxed uppercase tracking-widest font-bold">
                      Teams must consist of students from the AI & DS department only. Standard T20 rules apply.
                    </p>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-display text-cyan flex items-center gap-2">
                      <Users size={20} className="text-cyan" /> Team Members
                    </h3>
                    {formData.teamMembers.length < 11 && (
                      <button 
                        type="button" 
                        onClick={addTeamMember}
                        className="flex items-center gap-1.5 text-[10px] text-cyan hover:text-foreground transition-colors uppercase tracking-widest font-bold bg-cyan/10 px-3 py-1.5 rounded-full border border-cyan/20"
                      >
                        <Plus size={14} /> Add Member
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    <AnimatePresence>
                      {formData.teamMembers.map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex gap-3 items-start"
                        >
                          <div className="flex-1">
                            <InputField 
                              label={`Player ${index + 1} Name`} 
                              name={`member-${index}`} 
                              value={member} 
                              onChange={(e) => handleMemberChange(index, e.target.value)} 
                              required={true}
                              icon={User}
                            />
                          </div>
                          {formData.teamMembers.length > 1 && (
                            <button 
                              type="button" 
                              onClick={() => removeTeamMember(index)}
                              className="mt-2 h-10 w-10 flex items-center justify-center text-foreground/20 hover:text-red-500 transition-colors bg-red-500/5 rounded-lg border border-red-500/10"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-red-500 text-[10px] mt-4 font-sub uppercase tracking-widest flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                {error}
              </motion.p>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-1.5 px-4 py-2 text-foreground/60 hover:text-cyan transition-colors font-display uppercase tracking-widest text-[10px]"
                >
                  <ChevronLeft size={16} /> Back
                </button>
              ) : <div />}

              {step < 3 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-cyan/10 text-cyan border border-cyan/20 rounded-lg font-display text-[10px] uppercase tracking-widest hover:bg-cyan/20 transition-all flex items-center gap-2"
                >
                  Next Step <ChevronRight size={16} />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(231, 29, 35, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-3 bg-gradient-to-r from-cyan to-amber text-black font-display text-xs uppercase tracking-[0.2em] font-bold rounded-lg shadow-[0_0_15px_rgba(231,29,35,0.2)] hover:shadow-[0_0_25px_rgba(231,29,35,0.4)] transition-all flex items-center gap-2"
                >
                  Confirm Registration <Send size={16} />
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

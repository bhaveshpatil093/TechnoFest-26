import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Trash2, 
  Send, 
  User, 
  School, 
  BookOpen, 
  GraduationCap, 
  Hash, 
  Phone, 
  Mail, 
  FileText, 
  Users,
  ChevronRight,
  ChevronLeft,
  CheckCircle2
} from 'lucide-react';

import { GlitchHeading } from './GlitchHeading';
import { SuccessState } from './SuccessState';

interface FormData {
  fullName: string;
  collegeName: string;
  department: string;
  year: string;
  rollNumber: string;
  mobile: string;
  email: string;
  projectTitle: string;
  projectDescription: string;
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
  const id = `input-${name}`;
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

export const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    collegeName: 'Late G. N. Sapkal College of Engineering',
    department: 'AI & DS',
    year: '',
    rollNumber: '',
    mobile: '',
    email: '',
    projectTitle: '',
    projectDescription: '',
    teamMembers: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length < 5) {
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
      if (!formData.fullName || !formData.collegeName || !formData.mobile || !formData.email) {
        setError('Please fill in all required personal details.');
        return;
      }
      if (!/^\d{10}$/.test(formData.mobile)) {
        setError('Mobile number must be exactly 10 digits.');
        return;
      }
    } else if (step === 2) {
      if (!formData.department || !formData.year || !formData.rollNumber) {
        setError('Please fill in all required academic details.');
        return;
      }
    } else if (step === 3) {
      if (!formData.projectTitle || !formData.projectDescription) {
        setError('Please provide project details.');
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

    // Final validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Success
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-24 px-6 flex items-center justify-center min-h-[600px]">
        <SuccessState 
          name={formData.fullName}
          event="Project Competition"
          rollNumber={formData.rollNumber}
          coordinatorName="Prof. M. N. Jadhav"
          coordinatorPhone="8007024545"
          onReset={() => {
            setIsSubmitted(false);
            setStep(1);
          }}
        />
      </section>
    );
  }

  return (
    <section id="register" className="py-6 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <GlitchHeading 
            dataText="Event Registration"
            className="text-2xl md:text-3xl mb-2 text-glow-cyan text-foreground"
          >
            Event <span className="text-amber">Registration</span>
          </GlitchHeading>
          <p className="text-foreground/50 font-sub text-xs">Join the Project Competition and showcase your innovation.</p>
        </div>

        <StepIndicator currentStep={step} totalSteps={4} />

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-6 md:p-8 relative overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan/30 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan/30 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan/30 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan/30 rounded-br-xl" />

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-display text-cyan mb-4 flex items-center gap-3">
                    <User className="text-cyan" size={18} /> Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} icon={User} />
                    <InputField label="College Name" name="collegeName" value={formData.collegeName} onChange={handleInputChange} icon={School} />
                    <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleInputChange} type="tel" icon={Phone} />
                    <InputField label="Email ID" name="email" value={formData.email} onChange={handleInputChange} type="email" icon={Mail} />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-display text-cyan mb-4 flex items-center gap-3">
                    <BookOpen className="text-cyan" size={18} /> Academic Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <InputField label="Department" name="department" value={formData.department} onChange={handleInputChange} icon={BookOpen} />
                    <InputField label="Year of Study" name="year" value={formData.year} onChange={handleInputChange} type="select" icon={GraduationCap} />
                    <div className="md:col-span-2">
                      <InputField label="Roll Number" name="rollNumber" value={formData.rollNumber} onChange={handleInputChange} icon={Hash} />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-display text-cyan mb-4 flex items-center gap-3">
                    <FileText className="text-cyan" size={18} /> Project Details
                  </h3>
                  <div className="space-y-4">
                    <InputField label="Project Title" name="projectTitle" value={formData.projectTitle} onChange={handleInputChange} icon={FileText} />
                    <InputField label="Project Description" name="projectDescription" value={formData.projectDescription} onChange={handleInputChange} type="textarea" icon={FileText} />
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-display text-cyan flex items-center gap-3">
                      <Users className="text-cyan" size={18} /> Team Members
                    </h3>
                    {formData.teamMembers.length < 5 && (
                      <button 
                        type="button" 
                        onClick={addTeamMember}
                        className="flex items-center gap-2 text-xs text-cyan hover:text-foreground transition-colors uppercase tracking-widest font-bold bg-cyan/10 px-4 py-2 rounded-full border border-cyan/20"
                      >
                        <Plus size={16} /> Add Member
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    <AnimatePresence>
                      {formData.teamMembers.map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex gap-4 items-start"
                        >
                          <div className="flex-1">
                            <InputField 
                              label={`Member ${index + 1} Name`} 
                              name={`member-${index}`} 
                              value={member} 
                              onChange={(e) => handleMemberChange(index, e.target.value)} 
                              required={true}
                              icon={User}
                            />
                          </div>
                          <button 
                            type="button" 
                            onClick={() => removeTeamMember(index)}
                            className="mt-4 h-12 w-12 flex items-center justify-center text-foreground/20 hover:text-red-500 transition-colors bg-red-500/5 rounded-xl border border-red-500/10"
                          >
                            <Trash2 size={20} />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {formData.teamMembers.length === 0 && (
                      <div className="text-center py-12 border-2 border-dashed border-border rounded-2xl bg-surface-low/30">
                        <Users className="mx-auto text-foreground/10 mb-4" size={48} />
                        <p className="text-foreground/30 text-sm italic">No additional team members added.</p>
                        <p className="text-foreground/20 text-[10px] uppercase tracking-widest mt-2">Maximum 5 members allowed</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-red-500 text-sm mt-6 font-sub flex items-center gap-2"
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

              {step < 4 ? (
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
                  Submit Registration <Send size={16} />
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

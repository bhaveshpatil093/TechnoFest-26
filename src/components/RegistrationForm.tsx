import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, CheckCircle2, Send } from 'lucide-react';

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
  placeholder = " "
}: { 
  label: string; 
  name: string; 
  value: string; 
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) => {
  const id = `input-${name}`;
  return (
    <div className="relative mb-6 group">
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full bg-surface-low border border-border rounded-lg px-4 py-4 text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all min-h-[120px] peer"
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-surface-low border border-border rounded-lg px-4 py-4 text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all peer appearance-none"
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
          className="w-full bg-surface-low border border-border rounded-lg px-4 py-4 text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all peer"
        />
      )}
      <label 
        htmlFor={id}
        className="absolute left-4 top-4 text-foreground/40 pointer-events-none transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-cyan peer-focus:bg-background peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-cyan peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-2"
      >
        {label}
      </label>
    </div>
  );
};

export const RegistrationForm = () => {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!/^\d{10}$/.test(formData.mobile)) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }
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
          onReset={() => setIsSubmitted(false)}
        />
      </section>
    );
  }

  return (
    <section id="register" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <GlitchHeading 
            dataText="Event Registration"
            className="text-4xl md:text-5xl mb-4 text-glow-cyan text-foreground"
          >
            Event <span className="text-amber">Registration</span>
          </GlitchHeading>
          <p className="text-foreground/50 font-sub">Join the Project Competition and showcase your innovation.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-12"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} />
              <InputField label="College Name" name="collegeName" value={formData.collegeName} onChange={handleInputChange} />
              <InputField label="Department" name="department" value={formData.department} onChange={handleInputChange} />
              <InputField label="Year of Study" name="year" value={formData.year} onChange={handleInputChange} type="select" />
              <InputField label="Roll Number" name="rollNumber" value={formData.rollNumber} onChange={handleInputChange} />
              <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleInputChange} type="tel" />
              <div className="md:col-span-2">
                <InputField label="Email ID" name="email" value={formData.email} onChange={handleInputChange} type="email" />
                <InputField label="Project Title" name="projectTitle" value={formData.projectTitle} onChange={handleInputChange} />
                <InputField label="Project Description" name="projectDescription" value={formData.projectDescription} onChange={handleInputChange} type="textarea" />
              </div>
            </div>

            {/* Team Members Section */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-display text-amber">Team Members (Optional)</h3>
                {formData.teamMembers.length < 5 && (
                  <button 
                    type="button" 
                    onClick={addTeamMember}
                    className="flex items-center gap-2 text-xs text-cyan hover:text-foreground transition-colors uppercase tracking-widest font-bold"
                  >
                    <Plus size={16} /> Add Member
                  </button>
                )}
              </div>
              
              <div className="space-y-4">
                <AnimatePresence>
                  {formData.teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4"
                    >
                      <div className="flex-1">
                        <InputField 
                          label={`Member ${index + 1} Name`} 
                          name={`member-${index}`} 
                          value={member} 
                          onChange={(e) => handleMemberChange(index, e.target.value)} 
                          required={true}
                        />
                      </div>
                      <button 
                        type="button" 
                        onClick={() => removeTeamMember(index)}
                        className="mt-2 h-12 w-12 flex items-center justify-center text-foreground/20 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {formData.teamMembers.length === 0 && (
                  <p className="text-foreground/20 text-sm italic">No additional team members added.</p>
                )}
              </div>
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-red-500 text-sm mb-6 font-sub"
              >
                {error}
              </motion.p>
            )}

            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-3 px-16 py-4"
              >
                Submit Registration <Send size={18} />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

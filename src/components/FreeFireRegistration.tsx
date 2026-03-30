import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Phone, Mail, Hash, GraduationCap, Gamepad2, Users, Plus, Trash2, Info, AlertTriangle } from 'lucide-react';

import { GlitchHeading } from './GlitchHeading';

import { SuccessState } from './SuccessState';

interface FormData {
  fullName: string;
  rollNumber: string;
  year: string;
  mobile: string;
  email: string;
  ign: string;
  playerId: string;
  teamName: string;
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
  const id = `input-ff-${name}`;
  return (
    <div className="relative mb-6 group">
      <div className="absolute left-4 top-4 text-foreground/20 group-focus-within:text-[#FF4500] transition-colors">
        {Icon && <Icon size={18} />}
      </div>
      {type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-surface-low border border-border rounded-lg pl-12 pr-4 py-4 text-foreground focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500]/50 transition-all peer appearance-none"
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
          className="w-full bg-surface-low border border-border rounded-lg pl-12 pr-4 py-4 text-foreground focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500]/50 transition-all peer"
        />
      )}
      <label 
        htmlFor={id}
        className="absolute left-12 top-4 text-foreground/40 pointer-events-none transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#FF4500] peer-focus:bg-background peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#FF4500] peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-2"
      >
        {label}
      </label>
    </div>
  );
};

export const FreeFireRegistration = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    rollNumber: '',
    year: '',
    mobile: '',
    email: '',
    ign: '',
    playerId: '',
    teamName: '',
    teamMembers: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length < 4) {
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
      <section id="register-ff" className="py-24 px-6 flex items-center justify-center min-h-[600px]">
        <SuccessState 
          name={formData.fullName}
          event="Free Fire"
          rollNumber={formData.rollNumber}
          coordinatorName="Prof. S. S. Suryawanshi"
          coordinatorPhone="8530236452"
          onReset={() => setIsSubmitted(false)}
        />
      </section>
    );
  }

  return (
    <section id="register-ff" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-[#FF4500]/30 bg-[#FF4500]/5 text-[#FF4500] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
            Sub-Event 2.2
          </div>
          <GlitchHeading 
            dataText="FREE FIRE"
            className="text-4xl md:text-5xl mb-4 font-display uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(255,69,0,0.3)] text-foreground"
          >
            FREE <span className="text-[#FF4500]">FIRE</span>
          </GlitchHeading>
          <p className="text-foreground/50 font-sub max-w-xl mx-auto">Survival is the only rule. Register your squad for the ultimate battle royale.</p>
        </div>

        {/* Coordinator Info Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-8 p-6 border-[#FF4500]/20 bg-[#FF4500]/5 flex flex-col md:flex-row gap-6 items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FF4500]/20 flex items-center justify-center text-[#FF4500]">
              <Info size={20} />
            </div>
            <div>
              <h4 className="text-xs font-display text-[#FF4500] uppercase tracking-widest">Squad Coordinators</h4>
              <p className="text-[10px] text-foreground/40 uppercase tracking-tighter mt-1">Contact for tournament brackets or lobby IDs</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-foreground uppercase tracking-wider">Prof. S. S. Suryawanshi</p>
              <div className="flex items-center gap-3 text-[10px] text-foreground/60">
                <a href="tel:8530236452" className="hover:text-[#FF4500] transition-colors flex items-center gap-1"><Phone size={10} /> 8530236452</a>
                <a href="mailto:suryawanshi.s.sumedh14@gmail.com" className="hover:text-[#FF4500] transition-colors flex items-center gap-1"><Mail size={10} /> Email</a>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-foreground uppercase tracking-wider">Mr. Darshan M. Gavhane</p>
              <div className="flex items-center gap-3 text-[10px] text-foreground/60">
                <a href="tel:8830395996" className="hover:text-[#FF4500] transition-colors flex items-center gap-1"><Phone size={10} /> 8830395996</a>
                <a href="mailto:darshangavhane.2006@gmail.com" className="hover:text-[#FF4500] transition-colors flex items-center gap-1"><Mail size={10} /> Email</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-12 border-[#FF4500]/30"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} icon={User} />
              <InputField label="Roll Number" name="rollNumber" value={formData.rollNumber} onChange={handleInputChange} icon={Hash} />
              <InputField label="Year of Study" name="year" value={formData.year} onChange={handleInputChange} type="select" icon={GraduationCap} />
              <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleInputChange} type="tel" icon={Phone} />
              <InputField label="Email ID" name="email" value={formData.email} onChange={handleInputChange} type="email" icon={Mail} />
              <InputField label="Team Name" name="teamName" value={formData.teamName} onChange={handleInputChange} icon={Users} />
              
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-4 pt-4 border-t border-white/5">
                <div className="relative">
                  <InputField label="In-Game Username (IGN)" name="ign" value={formData.ign} onChange={handleInputChange} icon={Gamepad2} />
                </div>
                <div className="relative">
                  <InputField label="Free Fire Player ID" name="playerId" value={formData.playerId} onChange={handleInputChange} icon={Hash} />
                  <div className="absolute -bottom-4 left-0 flex items-center gap-1 text-[9px] text-amber uppercase tracking-wider font-bold">
                    <AlertTriangle size={10} /> Ensure your Free Fire ID is correct — it will be used for verification.
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Section */}
            <div className="mt-12 mb-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-display text-[#FF4500] uppercase tracking-tighter">Squad Members (Max 4)</h3>
                {formData.teamMembers.length < 4 && (
                  <button 
                    type="button" 
                    onClick={addTeamMember}
                    className="flex items-center gap-2 text-xs text-[#FF4500] hover:text-foreground transition-colors uppercase tracking-widest font-bold"
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
                          label={`Squad Member ${index + 1} Name`} 
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
                        className="mt-2 h-12 w-12 flex items-center justify-center text-foreground/20 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {formData.teamMembers.length === 0 && (
                  <p className="text-foreground/20 text-sm italic">No additional squad members added.</p>
                )}
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

            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 69, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-4 bg-gradient-to-r from-[#FF4500] to-[#FF8C00] text-white font-display text-sm uppercase tracking-[0.2em] font-bold rounded-lg shadow-[0_0_15px_rgba(255,69,0,0.2)] hover:shadow-[0_0_25px_rgba(255,69,0,0.4)] transition-all flex items-center gap-3"
              >
                Confirm Squad Registration <Send size={18} />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

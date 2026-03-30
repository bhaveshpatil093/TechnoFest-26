import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Hash, GraduationCap, Phone, Mail, Users, Trophy, CheckCircle2, Plus, Trash2, Info } from 'lucide-react';
import { GlitchHeading } from './GlitchHeading';
import { SuccessState } from './SuccessState';

export const NeonCricketRegistration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [teamMembers, setTeamMembers] = useState<string[]>(['']);
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
  });

  const addMember = () => {
    if (teamMembers.length < 11) {
      setTeamMembers([...teamMembers, '']);
    }
  };

  const removeMember = (index: number) => {
    const newMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(newMembers.length ? newMembers : ['']);
  };

  const updateMember = (index: number, value: string) => {
    const newMembers = [...teamMembers];
    newMembers[index] = value;
    setTeamMembers(newMembers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="neon-cricket-reg" className="py-24 px-6 relative overflow-hidden bg-background/60">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchHeading 
            dataText="NEON CRICKET"
            className="text-5xl md:text-6xl font-black mb-4 tracking-tighter italic text-foreground"
          >
            NEON <span className="text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">CRICKET</span>
          </GlitchHeading>
          <p className="text-foreground/40 font-mono text-sm tracking-widest uppercase">Sub-Event 2.3 • Registration</p>
          
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono">
            <Info className="w-4 h-4" />
            Note: Teams must consist of students from the AI & DS department only.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-surface-low backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label htmlFor="nc-fullname" className="text-xs font-mono text-foreground/40 uppercase tracking-wider flex items-center gap-2">
                          <User className="w-3 h-3 text-green-400" /> Full Name
                        </label>
                        <input
                          id="nc-fullname"
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="John Doe"
                          className="w-full bg-surface-low border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all font-mono"
                        />
                      </div>

                      {/* Roll Number */}
                      <div className="space-y-2">
                        <label htmlFor="nc-roll" className="text-xs font-mono text-foreground/40 uppercase tracking-wider flex items-center gap-2">
                          <Hash className="w-3 h-3 text-green-400" /> Roll Number
                        </label>
                        <input
                          id="nc-roll"
                          required
                          type="text"
                          value={formData.rollNumber}
                          onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                          placeholder="22AD001"
                          className="w-full bg-surface-low border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all font-mono"
                        />
                      </div>

                      {/* Year of Study */}
                      <div className="space-y-2">
                        <label htmlFor="nc-year" className="text-xs font-mono text-foreground/40 uppercase tracking-wider flex items-center gap-2">
                          <GraduationCap className="w-3 h-3 text-green-400" /> Year of Study
                        </label>
                        <select id="nc-year" className="w-full bg-surface-low border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all font-mono appearance-none">
                          <option className="bg-background">First Year</option>
                          <option className="bg-background">Second Year</option>
                          <option className="bg-background">Third Year</option>
                          <option className="bg-background">Final Year</option>
                        </select>
                      </div>

                      {/* Mobile Number */}
                      <div className="space-y-2">
                        <label htmlFor="nc-mobile" className="text-xs font-mono text-foreground/40 uppercase tracking-wider flex items-center gap-2">
                          <Phone className="w-3 h-3 text-green-400" /> Mobile Number
                        </label>
                        <input
                          id="nc-mobile"
                          required
                          type="tel"
                          placeholder="+91 00000 00000"
                          className="w-full bg-surface-low border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all font-mono"
                        />
                      </div>

                      {/* Email ID */}
                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="nc-email" className="text-xs font-mono text-foreground/40 uppercase tracking-wider flex items-center gap-2">
                          <Mail className="w-3 h-3 text-green-400" /> Email ID
                        </label>
                        <input
                          id="nc-email"
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-surface-low border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all font-mono"
                        />
                      </div>

                      {/* Team Name */}
                      <div className="space-y-2">
                        <label htmlFor="nc-team" className="text-xs font-mono text-foreground/40 uppercase tracking-wider flex items-center gap-2">
                          <Users className="w-3 h-3 text-green-400" /> Team Name
                        </label>
                        <input
                          id="nc-team"
                          required
                          type="text"
                          placeholder="Neon Strikers"
                          className="w-full bg-surface-low border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all font-mono"
                        />
                      </div>

                      {/* Captain Name */}
                      <div className="space-y-2">
                        <label htmlFor="nc-captain" className="text-xs font-mono text-foreground/40 uppercase tracking-wider flex items-center gap-2">
                          <Trophy className="w-3 h-3 text-green-400" /> Captain Name
                        </label>
                        <input
                          id="nc-captain"
                          required
                          type="text"
                          placeholder="Captain Cool"
                          className="w-full bg-surface-low border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all font-mono"
                        />
                      </div>
                    </div>

                    {/* Team Members Dynamic Fields */}
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono text-foreground/40 uppercase tracking-wider flex items-center gap-2">
                          <Users className="w-3 h-3 text-green-400" /> Team Members ({teamMembers.length}/11)
                        </label>
                        {teamMembers.length < 11 && (
                          <button
                            type="button"
                            onClick={addMember}
                            className="text-xs font-mono text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors"
                          >
                            <Plus className="w-3 h-3" /> Add Player
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {teamMembers.map((member, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative"
                          >
                            <label htmlFor={`nc-member-${index}`} className="sr-only">Player {index + 1} Name</label>
                            <input
                              id={`nc-member-${index}`}
                              required
                              type="text"
                              value={member}
                              onChange={(e) => updateMember(index, e.target.value)}
                              placeholder={`Player ${index + 1} Name`}
                              className="w-full bg-surface-low border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all font-mono text-sm"
                            />
                            {teamMembers.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeMember(index)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/20 hover:text-red-400 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-green-500 text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all uppercase tracking-widest text-sm"
                    >
                      Complete Registration
                    </motion.button>
                  </motion.form>
                ) : (
                  <SuccessState 
                    name={formData.fullName}
                    event="Neon Cricket"
                    rollNumber={formData.rollNumber}
                    coordinatorName="Prof. S. K. Pathan"
                    coordinatorPhone="8149545380"
                    onReset={() => setIsSubmitted(false)}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Coordinator Info */}
            <div className="bg-surface-low backdrop-blur-xl border border-border rounded-3xl p-8 space-y-6">
              <h4 className="text-xs font-mono text-green-400 uppercase tracking-[0.2em] font-bold">Event Coordinators</h4>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-foreground font-bold text-sm">Prof. S. K. Pathan</p>
                  <p className="text-foreground/40 text-xs font-mono">Staff Coordinator</p>
                  <div className="flex flex-col gap-1 pt-2">
                    <a href="tel:8149545380" className="text-xs text-green-400 hover:underline font-mono flex items-center gap-2">
                      <Phone className="w-3 h-3" /> 8149545380
                    </a>
                    <a href="mailto:shoyeb.pathan@sapkalknowledgehub.org" className="text-xs text-green-400 hover:underline font-mono flex items-center gap-2">
                      <Mail className="w-3 h-3" /> shoyeb.pathan@...
                    </a>
                  </div>
                </div>

                <div className="h-px bg-border w-full" />

                <div className="space-y-2">
                  <p className="text-foreground font-bold text-sm">Mr. Krushna R. Thakare</p>
                  <p className="text-foreground/40 text-xs font-mono">Student Coordinator</p>
                  <div className="flex flex-col gap-1 pt-2">
                    <a href="tel:963942584" className="text-xs text-green-400 hover:underline font-mono flex items-center gap-2">
                      <Phone className="w-3 h-3" /> 963942584
                    </a>
                    <a href="mailto:kthakare753@gmail.com" className="text-xs text-green-400 hover:underline font-mono flex items-center gap-2">
                      <Mail className="w-3 h-3" /> kthakare753@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Rules */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-8">
              <h4 className="text-xs font-mono text-green-400 uppercase tracking-[0.2em] font-bold mb-4">Quick Rules</h4>
              <ul className="space-y-3 text-xs text-foreground/40 font-mono">
                <li className="flex gap-2">
                  <span className="text-green-400">01.</span>
                  Max 11 players per team.
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">02.</span>
                  AI & DS department students only.
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">03.</span>
                  Neon equipment provided.
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">04.</span>
                  Standard T20 rules apply.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

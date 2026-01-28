import React from 'react';
import { motion } from 'framer-motion';

const AboutContact = () => {
    return (
        <section id="contact" className="premium-padding bg-obsidian relative overflow-hidden architectural-grid">
            {/* Background Decor */}
            <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-accent-glow/5 rounded-full blur-[180px] -z-10 animate-pulse-soft"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-40 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-6 mb-12 text-accent-glow text-[10px] font-black uppercase tracking-[0.8em]">
                            <div className="w-12 h-[1px] bg-accent-glow"></div>
                            The Philosophy
                        </div>
                        <h2 className="text-6xl md:text-[6.5rem] font-black leading-[0.9] tracking-tighter text-white mb-16 font-display group">
                            Creators, <br />
                            Not <span className="text-white/20 opacity-20 group-hover:opacity-100 transition-opacity duration-1000">Tools.</span>
                        </h2>
                        <div className="space-y-12 text-2xl text-white/60 font-light leading-relaxed max-w-xl italic">
                            <p>
                                Profplanet is an elite enclave for those who demand more from their technical education. We focus on the "why," not just the "how."
                            </p>
                            <div className="grid grid-cols-2 gap-16 pt-16 border-t border-white/5">
                                <div className="group">
                                    <div className="text-6xl font-black mb-4 text-white group-hover:text-accent-glow transition-colors font-display">1K+</div>
                                    <div className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40">Global Architects</div>
                                </div>
                                <div className="group">
                                    <div className="text-6xl font-black mb-4 text-white group-hover:text-accent-glow transition-colors font-display">24w</div>
                                    <div className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40">Intensive Forge</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form - Luxury Obsidian Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-20 relative overflow-hidden group/form rounded-[3rem]"
                    >
                        <div className="absolute inset-0 bg-accent-glow/5 -z-10 transition-all duration-700 group-hover/form:bg-accent-glow/10"></div>
                        <h3 className="text-4xl font-black mb-16 font-display tracking-tight text-white underline decoration-accent-glow/30 decoration-4 underline-offset-8">Inquire Excellence.</h3>

                        <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-4 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40 group-hover:text-accent-glow transition-colors">Full Identity</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full bg-transparent border-b border-white/10 py-6 outline-none focus:border-accent-glow transition-all text-2xl font-light text-white placeholder:text-white/5"
                                />
                            </div>
                            <div className="space-y-4 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40 group-hover:text-accent-glow transition-colors">Communication Signal</label>
                                <input
                                    type="email"
                                    placeholder="digital@address.com"
                                    className="w-full bg-transparent border-b border-white/10 py-6 outline-none focus:border-accent-glow transition-all text-2xl font-light text-white placeholder:text-white/5"
                                />
                            </div>
                            <div className="space-y-4 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40 group-hover:text-accent-glow transition-colors">Forging Intent</label>
                                <textarea
                                    placeholder="Describe your architectural goals..."
                                    rows="3"
                                    className="w-full bg-transparent border-b border-white/10 py-6 outline-none focus:border-accent-glow transition-all text-2xl font-light text-white placeholder:text-white/5 resize-none"
                                ></textarea>
                            </div>

                            <button className="btn-luxury w-full group overflow-hidden relative isolate rounded-full">
                                <span className="relative z-10 flex items-center justify-center gap-6 uppercase tracking-[0.4em] font-black text-xs">
                                    Initiate Protocol
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-3 transition-transform duration-700"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                            </button>
                        </form>

                        {/* Status Bar */}
                        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-white/30 text-[9px] font-black uppercase tracking-[0.3em]">
                            <span>Signal: SECURE</span>
                            <span className="animate-pulse">Waiting for interaction...</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutContact;


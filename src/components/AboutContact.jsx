import React from 'react';
import { motion } from 'framer-motion';

const AboutContact = () => {
    return (
        <section id="contact" className="premium-padding bg-obsidian relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[150px] -z-10"></div>

            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-6 mb-12 text-secondary text-xs font-black uppercase tracking-[0.4em]">
                            <div className="w-12 h-[1px] bg-indigo-500"></div>
                            The Philosophy
                        </div>
                        <h2 className="text-5xl md:text-[5rem] font-black leading-[1.05] tracking-tight text-luxury-gradient mb-12 font-display">
                            We Don't Just Teach Code. <br />
                            <span className="text-secondary opacity-30">We Build Creators.</span>
                        </h2>
                        <div className="space-y-10 text-xl text-secondary font-light leading-relaxed max-w-xl">
                            <p>
                                Profplanet is an elite enclave for those who demand more from their technical education. We focus on the "why," not just the "how."
                            </p>
                            <div className="flex gap-16 pt-12 border-t border-white/5">
                                <div>
                                    <div className="text-5xl font-black mb-3 text-white">1,000+</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Global Elite</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black mb-3 text-white">6m</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Intensive Forge</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form - Luxury Obsidian Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="luxury-glass p-16 rounded-[4rem] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-indigo-500/5 -z-10 transition-all duration-700 group-hover:bg-indigo-500/10"></div>
                        <h3 className="text-3xl font-black mb-12 font-display tracking-tight">Inquire Excellence.</h3>

                        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/50 group-hover:text-indigo-500 transition-colors">Identity</label>
                                <input
                                    type="text"
                                    placeholder="Your Full Name"
                                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-all text-xl font-light"
                                />
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/50 group-hover:text-indigo-500 transition-colors">Signal</label>
                                <input
                                    type="email"
                                    placeholder="Digital Address"
                                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-all text-xl font-light"
                                />
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/50 group-hover:text-indigo-500 transition-colors">Intent</label>
                                <textarea
                                    placeholder="Architectural Goals"
                                    rows="3"
                                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-all text-xl font-light resize-none"
                                ></textarea>
                            </div>

                            <button className="btn-luxury w-full group overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center gap-4 uppercase tracking-[0.2em] font-black text-sm">
                                    Send Inquiry
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-2 transition-transform duration-500"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutContact;

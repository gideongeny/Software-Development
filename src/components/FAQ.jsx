import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "Who is this program designed for?",
            a: "Profplanet is for mid-level developers aiming for senior architect roles, and ambitious beginners with strong mathematical foundations who want to skip the 'junior' plateau."
        },
        {
            q: "Is it completely remote?",
            a: "Yes, the program is conducted via a custom ultra-low-latency technical portal, designed to simulate a high-stakes engineering environment."
        },
        {
            q: "What is the duration of the Forge?",
            a: "The core intensive lasts 24 weeks, followed by a lifetime membership in our Elite Architect Network."
        },
        {
            q: "Are there prerequisites?",
            a: "We expect a basic understanding of logic. A diagnostic will be performed during 'The Ingestion' phase to ensure cognitive alignment."
        }
    ];

    return (
    return (
        <section className="premium-padding bg-obsidian architectural-grid relative">
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent-purple text-[10px] font-black uppercase tracking-[1em] mb-12"
                    >
                        Detailed Specs
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-white font-display">Common <span className="text-gradient-luxury">Queries.</span></h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`glass-panel rounded-3xl border transition-all duration-700 overflow-hidden ${activeIndex === i ? 'border-accent-purple/50 bg-accent-purple/5 shadow-2xl' : 'border-white/5 hover:border-white/20'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full p-8 flex justify-between items-center text-left group"
                            >
                                <span className={`text-xl font-bold transition-colors font-display ${activeIndex === i ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'rotate-90 bg-white border-white' : 'group-hover:border-white'}`}>
                                    {activeIndex === i ? <Minus className="w-5 h-5 text-obsidian" /> : <Plus className="w-5 h-5 text-white" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <p className="p-8 pt-0 text-white/50 font-light leading-relaxed text-lg italic border-t border-white/5 mx-8 mt-4">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-32 text-center p-12 border border-white/5 glass-panel rounded-full inline-flex items-center gap-10 w-full justify-center group cursor-pointer hover:border-accent-purple transition-all duration-700">
                    <span className="text-white/40 group-hover:text-white transition-colors text-xs font-black uppercase tracking-widest">Still have inquiries?</span>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-700 shadow-lg shadow-white/10">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-obsidian"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span className="text-white font-black text-xs uppercase tracking-widest">Connect with an Architect</span>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

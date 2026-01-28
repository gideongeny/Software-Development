import React from 'react';
import { motion } from 'framer-motion';

const Workflow = () => {
    const steps = [
        {
            num: "01",
            title: "The Ingestion",
            desc: "Rigorous diagnostic of current technical mental models. We identify the gaps in your architectural foundation."
        },
        {
            num: "02",
            title: "Structure Forge",
            desc: "Deep immersion into low-level systems and layout theory. Building the skeleton of technical excellence."
        },
        {
            num: "03",
            title: "Synthesis",
            desc: "Integrating frontend dominance with backend logic. Developing the nervous system of complex applications."
        },
        {
            num: "04",
            title: "The Hardening",
            desc: "Security protocols, performance audits, and stress-testing. Turning code into resilient infrastructure."
        },
        {
            num: "05",
            title: "Deployment",
            desc: "Global distribution strategy and CI/CD mastery. Launching your digital legacy to the world."
        }
    ];

    return (
        <section id="workflow" className="premium-padding bg-obsidian overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.8em] mb-8"
                    >
                        Process Architecture
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-black text-luxury-gradient">The Method.</h2>
                </div>

                <div className="relative">
                    {/* Architectural Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block"></div>

                    <div className="grid lg:grid-cols-5 gap-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative z-10 text-center lg:text-left group"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-obsidian border border-white/5 flex items-center justify-center mx-auto lg:mx-0 mb-10 luxury-glass group-hover:border-indigo-500/50 transition-all duration-700 rotate-12 group-hover:rotate-0">
                                    <span className="text-3xl font-black text-white">{step.num}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors uppercase tracking-widest">{step.title}</h3>
                                <p className="text-luxury-silver text-sm font-light leading-relaxed">
                                    {step.desc}
                                </p>

                                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                                    {i < steps.length - 1 && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-indigo-500"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-40 p-20 rounded-[4rem] border border-white/5 luxury-glass text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-indigo-500/5 -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
                    <h3 className="text-4xl font-black mb-8 text-white">Ready to begin the ingestion?</h3>
                    <p className="text-luxury-silver text-xl font-light mb-12 max-w-2xl mx-auto italic">Places are limited to 12 architects per cohort. Ensure your signal is strong.</p>
                    <button className="btn-luxury">Join the Next Cohort</button>
                </div>
            </div>
        </section>
    );
};

export default Workflow;

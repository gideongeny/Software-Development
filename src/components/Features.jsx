import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Globe, Lock, BarChart } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Shield className="w-8 h-8 text-indigo-500" />,
            title: "Architectural Integrity",
            desc: "We focus on the bedrock of software. Learn to build systems that are resilient, scalable, and mathematically sound."
        },
        {
            icon: <Zap className="w-8 h-8 text-indigo-500" />,
            title: "Speed of Execution",
            desc: "Master the workflows used by elite engineers. Go from concept to deployment with surgical precision and velocity."
        },
        {
            icon: <Cpu className="w-8 h-8 text-indigo-500" />,
            title: "Hardware Syllables",
            desc: "Understand the computer beneath the code. Memory management, CPU cycles, and low-level optimization."
        },
        {
            icon: <Globe className="w-8 h-8 text-indigo-500" />,
            title: "Global Scale",
            desc: "Architect for billions. Distributed systems, CDN strategies, and global state synchronization."
        },
        {
            icon: <Lock className="w-8 h-8 text-indigo-500" />,
            title: "Offensive Security",
            desc: "Learn to build by learning to break. Deep dives into cryptography, penetration testing, and secure logic."
        },
        {
            icon: <BarChart className="w-8 h-8 text-indigo-500" />,
            title: "Data Sovereignty",
            desc: "Master the flow of information. Complex SQL architectures, NoSQL scaling, and real-time streaming."
        }
    ];

    return (
        <section id="features" className="premium-padding bg-obsidian relative overflow-hidden">
            {/* Background glow for depth */}
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-accent-glow/10 blur-[150px] -z-10 rounded-full"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent-glow text-[10px] font-black uppercase tracking-[0.6em] mb-8"
                        >
                            Technical Advantages
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight font-display">
                            Engineered for <br />
                            <span className="text-gradient-luxury">Elite Performance.</span>
                        </h2>
                    </div>
                    <p className="text-white/60 text-xl font-light max-w-sm border-l border-white/10 pl-10">
                        Our curriculum is a hyper-dense synthesis of industry-leading practices and architectural theory.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel p-10 rounded-[2.5rem] group hover:border-accent-glow/30 transition-all duration-500"
                        >
                            <div className="mb-10 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent-glow/20 transition-colors duration-500">
                                <div className="text-white group-hover:text-accent-cyan transition-colors duration-500 feature-icon-wrapper">
                                    {React.cloneElement(feature.icon, { className: "w-8 h-8" })}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-accent-glow transition-colors font-display">
                                {feature.title}
                            </h3>
                            <p className="text-white/60 font-light leading-relaxed">
                                {feature.desc}
                            </p>

                            <div className="mt-10 pt-10 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-[10px] font-black uppercase tracking-widest text-accent-glow">View Module</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent-glow"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

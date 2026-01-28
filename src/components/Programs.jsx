import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, Database, Layers, Globe, Zap } from 'lucide-react';

const ProgramBento = () => {
    const phases = [
        { id: '01', title: 'Fundamentals', icon: Terminal, color: 'text-sky-400', grid: 'md:col-span-1' },
        { id: '02', title: 'Advanced JS', icon: Code, color: 'text-indigo-400', grid: 'md:col-span-1' },
        { id: '03', title: 'Modern React', icon: Cpu, color: 'text-purple-400', grid: 'md:col-span-1' },
        { id: '04', title: 'Backend Systems', icon: Database, color: 'text-emerald-400', grid: 'md:col-span-2' },
        { id: '05', title: 'Architecture', icon: Layers, color: 'text-rose-400', grid: 'md:col-span-1' },
    ];

    return (
        <section id="programs" className="section-padding relative overflow-hidden bg-background">
            <div className="container mx-auto">
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title text-premium-gradient"
                    >
                        Syllabus Reimagined.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                    >
                        More than just courses—a structured evolution across the digital landscape.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="bento-grid mb-24">
                    {/* Main Hero Card */}
                    <div className="md:col-span-2 premium-glass p-12 rounded-[3rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Globe className="w-64 h-64 text-primary" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Primary Pathway</span>
                            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Software <br />Engineering</h3>
                            <p className="text-secondary max-w-sm mb-10 text-lg">
                                The definitive path to full-stack mastery. From binary to deployment.
                            </p>
                            <div className="flex gap-4">
                                <div className="px-4 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-widest">6 Months</div>
                                <div className="px-4 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-widest">Full-time</div>
                            </div>
                        </div>
                    </div>

                    {/* Side Feature Card */}
                    <div className="premium-glass p-10 rounded-[3rem] flex flex-col justify-end bg-premium-gradient/10 border-primary/20">
                        <Zap className="w-12 h-12 text-primary mb-6" />
                        <h4 className="text-2xl font-bold mb-4">Hands-on Growth</h4>
                        <p className="text-secondary text-sm">
                            Real-world projects that demand critical thinking and architecture.
                        </p>
                    </div>

                    {/* Phase Cards */}
                    {phases.map((phase, i) => (
                        <motion.div
                            key={phase.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`${phase.grid} premium-glass premium-glass-hover p-8 rounded-[2.5rem] transition-all duration-300`}
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-secondary/30 font-black text-3xl font-outfit">{phase.id}</span>
                                <phase.icon className={`w-8 h-8 ${phase.color}`} />
                            </div>
                            <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                            <p className="text-secondary text-xs uppercase tracking-widest font-bold">Comprehensive Track</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="premium-glass rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 -z-10 gradient-radial"></div>
                    <h3 className="text-3xl md:text-5xl font-black mb-8">Ready to Elevate Your Craft?</h3>
                    <button className="btn-premium">Enroll in the February cohort</button>
                </div>
            </div>
        </section>
    );
};

export default ProgramBento;

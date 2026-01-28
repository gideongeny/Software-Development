import React from 'react';
import { motion } from 'framer-motion';

const Academy = () => {
    const tracks = [
        { title: "Foundation", code: "PHASE_01", desc: "The core structures of digital logic. HTML, CSS, JavaScript.", focus: "Logic & Layout" },
        { title: "Synthesis", code: "PHASE_02", desc: "Advanced interactivity and API integration. The evolution of data.", focus: "Application Layer" },
        { title: "Formation", code: "PHASE_03", desc: "Mastering the component lifecycle with React. Professional SPAs.", focus: "System Design" },
        { title: "Intelligence", code: "PHASE_04", desc: "Backend architecture with Python and Flask. Secure, scalable systems.", focus: "Logic Engines" },
    ];

    const roadmap = [
        { week: "01-04", label: "Foundations", detail: "Programming mental models & web core." },
        { week: "05-08", label: "Integration", detail: "Asynchronous systems & complex UI." },
        { week: "09-12", label: "Mastery", detail: "React, state machines, & hooks." },
        { week: "13-16", label: "Core Backend", detail: "Python, Flask, & API design." },
        { week: "17-18", label: "Persistence", detail: "Relational database architecture." },
        { week: "19-24", label: "Final Craft", detail: "Integration, security, and capstone." },
    ];

    return (
        <section id="academy" className="premium-padding bg-obsidian text-white">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 mb-8 text-secondary text-xs font-black uppercase tracking-[0.4em]"
                    >
                        <div className="w-12 h-[1px] bg-indigo-500"></div>
                        The Syllabus Architecture
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-black mb-12 text-luxury-gradient">The Academy Pathways.</h2>
                    <p className="text-xl text-secondary max-w-2xl font-light leading-relaxed">
                        Our curriculum is designed not as a set of lessons, but as an architectural progression toward full-stack technical mastery.
                    </p>
                </div>

                {/* Asymmetrical Track Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-40">
                    {tracks.map((track, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`luxury-card flex flex-col justify-between h-[500px] ${i % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
                        >
                            <div>
                                <span className="text-indigo-500 font-black text-xs uppercase tracking-widest mb-6 block">{track.code}</span>
                                <h3 className="text-3xl font-black mb-8 leading-tight">{track.title}</h3>
                                <p className="text-secondary text-sm font-light leading-relaxed mb-10">{track.desc}</p>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold block mb-2">Core Focus</span>
                                <span className="text-sm font-bold text-white uppercase tracking-widest">{track.focus}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Architectural Roadmap (Vertical Timeline) */}
                <div id="architect" className="grid lg:grid-cols-12 gap-20 py-40 border-t border-white/5 items-start">
                    <div className="lg:col-span-4 sticky top-40">
                        <h3 className="text-4xl font-black mb-10 text-luxury-gradient">The Progressive Timeline.</h3>
                        <p className="text-secondary text-lg font-light leading-relaxed mb-12">
                            A 6-month intensive journey of synthesis and construction. Each week adds a new layer to your technical persona.
                        </p>
                        <button className="btn-luxury-outline w-full py-6">Download Specification</button>
                    </div>

                    <div className="lg:col-span-8 space-y-2 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-[39px] top-0 bottom-0 w-[1px] bg-indigo-500/20"></div>

                        {roadmap.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex gap-12 group cursor-default"
                            >
                                <div className="relative z-10 w-20 h-20 shrink-0 flex items-center justify-center font-black text-[10px] text-indigo-500 border border-indigo-500/20 bg-obsidian rounded-full group-hover:scale-110 group-hover:border-indigo-500 transition-all duration-500 uppercase tracking-widest">
                                    Week {item.week}
                                </div>
                                <div className="py-8 group-hover:pl-4 transition-all duration-700">
                                    <h4 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors uppercase tracking-widest">{item.label}</h4>
                                    <p className="text-secondary font-light group-hover:text-white transition-colors">{item.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academy;

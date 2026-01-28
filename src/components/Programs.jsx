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
        <section id="academy" className="premium-padding bg-obsidian text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-purple/20 via-obsidian to-obsidian -z-10 opacity-50"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="mb-40 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 mb-12 text-gold-400 text-[10px] font-black uppercase tracking-[0.6em]"
                        >
                            <div className="w-12 h-[1px] bg-gold-500"></div>
                            The Syllabus Architecture
                        </motion.div>
                        <h2 className="text-5xl md:text-8xl font-black mb-12 text-white leading-[0.9] font-display">The Academy <br /> <span className="text-gradient-luxury">Pathways.</span></h2>
                    </div>
                    <p className="text-xl text-white/60 max-w-sm font-light leading-relaxed border-l border-white/10 pl-10 italic">
                        Our curriculum is designed not as a set of lessons, but as an architectural progression toward full-stack technical mastery.
                    </p>
                </div>

                {/* Asymmetrical Track Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-60">
                    {tracks.map((track, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass-panel p-10 rounded-[2rem] flex flex-col justify-between min-h-[450px] group hover:bg-white/5 transition-colors duration-500 ${i % 2 !== 0 ? 'lg:translate-y-20' : ''}`}
                        >
                            <div>
                                <span className="text-accent-cyan font-black text-[10px] uppercase tracking-[0.4em] mb-10 block group-hover:translate-x-2 transition-transform">{track.code}</span>
                                <h3 className="text-4xl font-black mb-8 leading-tight group-hover:text-gold-400 transition-colors font-display">{track.title}</h3>
                                <p className="text-white/60 text-sm font-light leading-relaxed mb-10">{track.desc}</p>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <span className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-bold block mb-3">System Focus</span>
                                <span className="text-xs font-black text-white uppercase tracking-widest">{track.focus}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Architectural Roadmap (Vertical Timeline) */}
                <div id="architect" className="grid lg:grid-cols-12 gap-32 py-60 border-t border-white/5 items-start">
                    <div className="lg:col-span-5 sticky top-40">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold-400 text-[10px] font-black uppercase tracking-[0.6em] mb-12"
                        >
                            Temporal Progression
                        </motion.div>
                        <h3 className="text-5xl md:text-7xl font-black mb-12 text-white leading-tight font-display">The Crystalline <br /> <span className="text-gradient-gold">Timeline.</span></h3>
                        <p className="text-white/60 text-xl font-light leading-relaxed mb-16 italic">
                            A 6-month intensive journey of synthesis and construction. Each week adds a new layer to your technical persona.
                        </p>
                        <button className="glass-button w-full py-6 rounded-full group flex items-center justify-center gap-6 font-bold uppercase tracking-widest hover:bg-white hover:text-obsidian text-white transition-all">
                            Download Specification
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-y-1 transition-transform"><path d="M10 3V17M10 17L4 11M10 17L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>

                    <div className="lg:col-span-7 space-y-4 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-[47px] top-0 bottom-0 w-[1px] bg-white/10"></div>

                        {roadmap.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex gap-16 group cursor-default"
                            >
                                <div className="relative z-10 w-24 h-24 shrink-0 flex flex-col items-center justify-center border border-white/10 glass-panel rounded-3xl group-hover:border-gold-500 transition-all duration-700 group-hover:rotate-6 bg-obsidian/50">
                                    <span className="text-white/40 text-[8px] font-black uppercase tracking-widest mb-1">Week</span>
                                    <span className="text-white text-xl font-black">{item.week}</span>
                                </div>
                                <div className="py-10 border-b border-white/5 w-full group-hover:pl-4 transition-all duration-700">
                                    <h4 className="text-2xl font-black mb-3 group-hover:text-gold-400 transition-colors uppercase tracking-[0.2em] font-display">{item.label}</h4>
                                    <p className="text-white/60 font-light group-hover:text-white transition-colors italic">{item.detail}</p>
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


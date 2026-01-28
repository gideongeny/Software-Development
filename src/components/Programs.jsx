import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, GraduationCap, ChevronRight } from 'lucide-react';

const ProgramRoadmap = () => {
    const modules = [
        { title: "Foundations", status: "completed", duration: "4 weeks", topics: ["HTML5", "CSS3", "JavaScript Basics", "Git"] },
        { title: "Frontend Deep Dive", status: "current", duration: "4 weeks", topics: ["ES6+", "DOM Manipulation", "APIs", "Async JS"] },
        { title: "React Ecosystem", status: "upcoming", duration: "4 weeks", topics: ["Hooks", "State Management", "Routing", "Vite"] },
        { title: "Backend Mastery", status: "upcoming", duration: "4 weeks", topics: ["Python 3", "Flask Framework", "Auth", "Security"] },
        { title: "Data Systems", status: "upcoming", duration: "1 week", topics: ["PostgreSQL", "SQLAlchemy", "Migrations", "Design"] },
        { title: "Industry Polish", status: "upcoming", duration: "4 weeks", topics: ["Deployment", "CI/CD", "Testing", "Performance"] },
    ];

    return (
        <section id="programs" className="py-24 px-6 md:px-12 bg-black overflow-hidden relative">
            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black mb-6 tracking-tight font-geist"
                    >
                        Phase-by-Phase <br />
                        <span className="text-secondary opacity-50">Career Roadmap.</span>
                    </motion.h2>
                    <p className="text-secondary max-w-xl text-lg">
                        Our curriculum isn't just a list of topics—it's a calculated journey designed to turn beginners into engineers.
                    </p>
                </div>

                {/* Roadmap Display */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border"></div>

                    <div className="space-y-12 relative">
                        {modules.map((mod, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-12 group"
                            >
                                {/* Status Dot */}
                                <div className={`absolute left-0 top-1 w-10 h-10 rounded-full bg-black border-2 flex items-center justify-center z-10 transition-colors ${mod.status === 'completed' ? 'border-primary' : mod.status === 'current' ? 'border-primary animate-pulse' : 'border-border'}`}>
                                    {mod.status === 'completed' ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <Circle className={`w-3 h-3 ${mod.status === 'current' ? 'fill-primary' : 'fill-border'}`} />}
                                </div>

                                <div className={`p-8 rounded-2xl border transition-all duration-300 ${mod.status === 'current' ? 'bg-white/[0.05] border-primary/30 shadow-2xl shadow-primary/5' : 'bg-white/[0.02] border-border hover:border-white/20'}`}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">{mod.duration}</span>
                                            <h3 className="text-xl md:text-2xl font-bold">{mod.title}</h3>
                                        </div>
                                        {mod.status === 'current' && (
                                            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest self-start md:self-center">
                                                Active Module
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {mod.topics.map(topic => (
                                            <span key={topic} className="px-3 py-1 rounded bg-black border border-border text-xs text-secondary font-medium">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-border flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs text-secondary italic">Step {i + 1} of 6</span>
                                        <button className="flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-widest">
                                            View details <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final Capstone Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 rounded-[2rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center relative overflow-hidden group"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
                    <GraduationCap className="w-16 h-16 text-primary mx-auto mb-8" />
                    <h3 className="text-3xl font-black mb-4 font-geist tracking-tight">The Capstone Project.</h3>
                    <p className="text-secondary max-w-lg mx-auto mb-10 text-lg">
                        Build a market-ready full-stack application. Deploy it live. Start your career.
                    </p>
                    <button className="px-10 py-4 rounded-xl bg-primary text-white font-bold hover:scale-105 active:scale-95 transition-all text-lg shadow-xl shadow-primary/20">
                        Secure Your Seat
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramRoadmap;

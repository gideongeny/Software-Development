import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden grid-bg">
            {/* Background Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full spotlight -z-10 pointer-events-none opacity-50"></div>

            <div className="container mx-auto max-w-5xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/[0.03] text-secondary text-sm font-medium mb-12"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Revolutionizing Tech Education
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-gradient-codeteria"
                >
                    Master the Art of <br />
                    Modern Software.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-secondary max-w-2xl mx-auto mb-16 leading-relaxed"
                >
                    Profplanet provides a structured, peer-supported ecosystem to transform your ambition into engineering excellence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
                >
                    <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-black font-bold transition-all hover:bg-white/90 hover:scale-105 active:scale-95 text-lg">
                        Enroll Now
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-lg border border-border bg-transparent text-white font-bold transition-all hover:bg-white/5 text-lg flex items-center justify-center gap-2">
                        View Curriculum <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>

                {/* Feature Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto"
                >
                    {[
                        { icon: Code2, title: "Full-Stack Mastery", desc: "React, Python, Flask & SQL" },
                        { icon: Rocket, title: "Carrier Growth", desc: "Peer-supported mentorship" },
                        { icon: ShieldCheck, title: "Real-world Ready", desc: "Build & deploy live projects" },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl border border-border bg-white/[0.02]">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                <p className="text-xs text-secondary">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

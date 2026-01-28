import React from 'react';
import { motion } from 'framer-motion';
import premiumHeroImg from '../assets/premium-hero-new.png';

const Hero = () => {
    return (
    return (
        <section className="relative min-h-[110vh] flex flex-col justify-center items-center overflow-hidden bg-obsidian text-white selection:bg-gold-500/30">
            {/* Background Cinematic Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-subtle-glow -z-10 opacity-40"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-4 text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] mb-12 px-6 py-3 border border-gold-500/20 rounded-full glass-panel"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                            The Elite Technical Forge
                        </motion.div>

                        <div className="text-reveal-mask mb-10">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-7xl md:text-[7rem] font-black leading-[0.85] tracking-tighter font-display text-white"
                            >
                                Forge Your <br />
                                <span className="text-gradient-gold">Dominance.</span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-xl md:text-2xl text-white/60 max-w-xl mb-16 leading-relaxed font-light"
                        >
                            We don't teach code. We architect the minds that will build the next era of digital infrastructure. Pure technical lethality.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="flex flex-wrap gap-8 items-center"
                        >
                            <button className="bg-white text-obsidian px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-500">
                                Enroll in Forge
                            </button>
                            <button className="flex items-center gap-6 group text-white text-xs font-black uppercase tracking-[0.3em] hover:text-gold-400 transition-colors">
                                <span className="w-16 h-[1px] bg-white/20 group-hover:w-24 group-hover:bg-gold-400 transition-all duration-700"></span>
                                The Roadmap
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="mt-28 grid grid-cols-3 gap-12 border-t border-white/10 pt-10"
                        >
                            {[
                                { num: "001", label: "Architecture First" },
                                { num: "002", label: "Full Stack Mastery" },
                                { num: "003", label: "Elite Network" }
                            ].map((item) => (
                                <div key={item.num}>
                                    <div className="text-white font-black text-2xl font-display">{item.num}</div>
                                    <div className="text-white/40 text-[9px] uppercase tracking-widest font-bold mt-2">{item.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-gold-500/5 blur-[120px] rounded-full animate-pulse"></div>
                        <div className="relative z-10 p-6 rounded-[3rem] border border-white/10 glass-panel shadow-2xl overflow-hidden group">
                            <motion.img
                                src={premiumHeroImg}
                                alt="Ultra Premium Visual"
                                className="w-full h-auto rounded-[2.5rem] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-80"></div>

                            {/* Floating Tech Data Points */}
                            <div className="absolute top-12 left-12 p-5 glass-panel rounded-2xl border-white/10 animate-float">
                                <div className="text-gold-400 text-[9px] font-black tracking-widest uppercase mb-1">Status</div>
                                <div className="text-white text-sm font-bold font-display">READY_TO_FORGE</div>
                            </div>

                            <div className="absolute bottom-12 right-12 p-5 glass-panel rounded-2xl border-white/10 animate-float-delayed">
                                <div className="text-gold-400 text-[9px] font-black tracking-widest uppercase mb-1">Version</div>
                                <div className="text-white text-sm font-bold font-display">ARC_V2.0</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Aesthetic Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
            >
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-gold-400 transition-colors">Scroll to Descend</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:via-gold-500 transition-colors duration-500"></div>
            </motion.div>
        </section>
    );
};

export default Hero;


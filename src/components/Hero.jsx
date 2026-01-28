import React from 'react';
import { motion } from 'framer-motion';
import premiumHeroImg from '../assets/premium-hero.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-obsidian">
            {/* Background Cinematic Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full indigo-glow -z-10 opacity-40"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-4 text-secondary text-xs font-black uppercase tracking-[0.4em] mb-12"
                        >
                            <div className="w-12 h-[1px] bg-indigo-500"></div>
                            The Future of Mastery
                        </motion.div>

                        <div className="text-reveal-mask mb-10">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-6xl md:text-[5.5rem] font-black leading-[1] tracking-tight text-luxury-gradient font-display"
                            >
                                Architect Your <br />
                                Digital Legacy.
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-lg md:text-xl text-secondary max-w-xl mb-16 leading-relaxed font-light"
                        >
                            Profplanet is an elite technical forge. We develop the architects who design the future of software, piece by crystalline piece.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="flex flex-wrap gap-8"
                        >
                            <button className="btn-luxury">Enroll in Academy</button>
                            <button className="btn-luxury-outline flex items-center gap-4 group">
                                Review Roadmap
                                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentColor" strokeWidth="1.5" /></svg>
                                </div>
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full animate-pulse"></div>
                        <motion.img
                            src={premiumHeroImg}
                            alt="Ultra Premium Visual"
                            className="relative z-10 w-full h-auto drop-shadow-[0_0_100px_rgba(79,70,229,0.3)] animate-float-slow"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Aesthetic Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;

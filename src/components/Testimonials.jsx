import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const quotes = [
        {
            name: "Alexander Vance",
            role: "Principal Architect, Nexus Dynamics",
            text: "Profplanet isn't just a boot camp. It's a technical monastery. The focus on architectural durability changed how I view every line of code I write."
        },
        {
            name: "Elena Rossi",
            role: "Senior Systems Engineer, Aether Systems",
            text: "The exposure to low-level optimization and distributed systems theory gave me a 5-year head start on my career. Pure technical dominance."
        },
        {
            name: "Marcus Thorne",
            role: "Founder, Crystalline Labs",
            text: "Most programs teach you to use tools. Profplanet teaches you to build them. Invaluable for anyone aiming for the top 0.1% of engineering."
        }
    ];

    return (
    return (
        <section className="premium-padding bg-obsidian relative overflow-hidden">
            {/* Background glow for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-glow/5 blur-[120px] -z-10 rounded-full"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold-400 text-[10px] font-black uppercase tracking-[0.8em] mb-12"
                    >
                        Peer Validation
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-white font-display">Trusted by the <br /> <span className="text-gradient-gold">New Elite.</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {quotes.map((quote, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 glass-panel rounded-[3rem] border border-white/10 relative group hover:bg-white/5 transition-all duration-700"
                        >
                            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-30 transition-opacity">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="white"><path d="M15 20H25L20 35H10L15 20Z" /><path d="M35 20H45L40 35H30L35 20Z" /></svg>
                            </div>

                            <p className="text-xl text-white/70 font-light leading-relaxed mb-12 italic relative z-10">
                                "{quote.text}"
                            </p>

                            <div className="flex items-center gap-6 border-t border-white/5 pt-10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg"></div>
                                <div>
                                    <div className="text-white font-bold text-lg font-display">{quote.name}</div>
                                    <div className="text-[10px] text-white/40 font-black uppercase tracking-widest">{quote.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 flex flex-wrap justify-center items-center gap-20 opacity-30 filter grayscale invert transition-opacity duration-1000 hover:opacity-80">
                    <div className="text-2xl font-black tracking-tighter mix-blend-difference">NEXUS</div>
                    <div className="text-2xl font-black tracking-tighter mix-blend-difference">AETHER</div>
                    <div className="text-2xl font-black tracking-tighter mix-blend-difference">CRYSTAL</div>
                    <div className="text-2xl font-black tracking-tighter mix-blend-difference">ORBITAL</div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Twitter, Github, Linkedin } from 'lucide-react';

const AboutContact = () => {
    return (
        <section id="about" className="section-padding bg-background relative overflow-hidden">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* About Section - Editorial Style */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight tracking-tighter">
                                We Build <br />
                                <span className="text-premium-gradient">Architects.</span>
                            </h2>
                            <div className="space-y-8 max-w-xl">
                                <p className="text-xl text-secondary leading-relaxed">
                                    Profplanet isn't a bootcamp. It's a refinery. We take the raw ambition of aspiring tech leaders and forge them into world-class engineers through rigorous, peer-driven challenge.
                                </p>
                                <div className="grid grid-cols-2 gap-10 py-12 border-y border-border">
                                    <div>
                                        <div className="text-4xl font-black mb-2 font-outfit">1.2k+</div>
                                        <div className="text-xs uppercase tracking-[0.2em] font-bold text-secondary">Global Alumni</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black mb-2 font-outfit">15+</div>
                                        <div className="text-xs uppercase tracking-[0.2em] font-bold text-secondary">Countries</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Section - Minimalist Glass Form */}
                    <div className="lg:col-span-5" id="contact">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="premium-glass p-10 md:p-12 rounded-[3.5rem] relative"
                        >
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>

                            <h3 className="text-3xl font-black mb-10 font-outfit">Inquire.</h3>

                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-1">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-lg"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-lg"
                                    />
                                </div>
                                <div className="space-y-1 pb-10">
                                    <textarea
                                        placeholder="Tell us about your goals..."
                                        rows="3"
                                        className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-lg resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full btn-premium flex items-center justify-center gap-4 group">
                                    Submit Interest
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            <div className="mt-12 pt-12 border-t border-border flex justify-between items-center">
                                <div className="flex gap-6">
                                    <Twitter className="w-5 h-5 text-secondary hover:text-white cursor-pointer transition-colors" />
                                    <Github className="w-5 h-5 text-secondary hover:text-white cursor-pointer transition-colors" />
                                    <Linkedin className="w-5 h-5 text-secondary hover:text-white cursor-pointer transition-colors" />
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
                                    <MapPin className="w-4 h-4" />
                                    Nairobi
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ArrowRight = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
    </svg>
);

export default AboutContact;

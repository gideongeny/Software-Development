import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, MessageCircle, Send } from 'lucide-react';

const AboutContact = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-black border-t border-border">
            <div className="container mx-auto max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* About Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight font-geist">
                            Beyond the <br />
                            <span className="text-secondary opacity-50">Hello World.</span>
                        </h2>
                        <div className="space-y-6 text-secondary text-lg leading-relaxed">
                            <p>
                                Profplanet is more than a learning platform—it's a developer hub. We focus on the core principles of engineering that go beyond syntax.
                            </p>
                            <p>
                                Our mission is to cultivate a new generation of digital architects who don't just write code, but build systems that solve real problems.
                            </p>
                        </div>

                        <div className="mt-12 flex gap-4">
                            {[Twitter, Github, Linkedin, MessageCircle].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-lg border border-border flex items-center justify-center hover:bg-white/5 transition-colors">
                                    <Icon className="w-5 h-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        id="contact"
                        className="p-8 rounded-2xl bg-white/[0.02] border border-border relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-colors"></div>

                        <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-black border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-black border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors"
                            />
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full bg-black border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
                            ></textarea>
                            <button className="w-full py-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutContact;

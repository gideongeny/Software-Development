import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Award, Globe, Heart } from 'lucide-react';

const AboutContact = () => {
    return (
        <>
            {/* About Section */}
            <section id="about" className="section-padding bg-dark-deep relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                                Transforming Careers Through <br />
                                <span className="text-gradient">Structured Education</span>
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Profplanet is more than just an online school. We are a community of learners, mentors, and industry professionals dedicated to bridging the gap between education and employment. Our peer-supported model ensures you're never learning alone.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    { icon: Award, title: "Excellence", desc: "Industry-standard curriculum" },
                                    { icon: Globe, title: "Community", desc: "Global peer network" },
                                    { icon: Heart, title: "Support", desc: "Dedicated student success" },
                                    { icon: MessageSquare, title: "Mentorship", desc: "Direct industry insights" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl glass border border-white/5">
                                        <item.icon className="w-6 h-6 text-blue-400 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl overflow-hidden glass p-2 border border-blue-500/20">
                                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center"
                                    >
                                        <div className="w-32 h-32 border border-blue-500/20 rounded-full"></div>
                                    </motion.div>
                                </div>
                            </div>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border border-white/10 shadow-2xl"
                            >
                                <div className="text-3xl font-black text-blue-400 mb-1">95%</div>
                                <div className="text-xs text-gray-400">Employment Rate</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-padding">
                <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto glass rounded-3xl overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-2xl shadow-blue-500/5">
                        <div className="md:w-2/5 p-10 bg-blue-600/10 border-r border-white/10">
                            <h3 className="text-3xl font-bold mb-8 font-outfit">Get in Touch</h3>
                            <p className="text-gray-400 mb-10 text-sm leading-relaxed">Have questions about our programs or enrollment? Reach out to our support team.</p>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Email Us</div>
                                        <div className="text-sm font-medium">support@profplanet.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Call Us</div>
                                        <div className="text-sm font-medium">+254 700 000000</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Location</div>
                                        <div className="text-sm font-medium">Nairobi, Kenya</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-3/5 p-10">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Full Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-sm" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Email Address</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-sm" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Subject</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-sm" placeholder="Enrollment Inquiry" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Message</label>
                                    <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors resize-none text-sm" placeholder="Tell us how we can help..."></textarea>
                                </div>
                                <button className="btn-primary w-full flex items-center justify-center gap-2 mt-4 group">
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutContact;

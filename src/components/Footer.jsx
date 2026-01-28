import React from 'react';
import { GraduationCap, Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark-deep border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 text-2xl font-bold font-outfit mb-6">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <GraduationCap className="text-white w-5 h-5" />
                            </div>
                            <span className="text-white">Profplanet</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Transforming careers through structured, peer-supported online tech education. Empowering the next generation of digital leaders.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 transition-colors text-gray-400 hover:text-white">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 font-outfit">Programs</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Software Engineering</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Data Science</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Cybersecurity</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Marketing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 font-outfit">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Student Portal</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 font-outfit">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Stay updated with the latest tech trends and course launches.</p>
                        <div className="relative">
                            <input type="email" placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" />
                            <button className="absolute right-2 top-2 bottom-2 px-4 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs">
                        © 2026 Profplanet. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                    >
                        Back to Top
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600/10 transition-all">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

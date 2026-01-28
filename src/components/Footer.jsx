import React from 'react';

const Footer = () => {
    return (
        <footer className="premium-padding bg-obsidian border-t border-white/5 pb-20">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
                    <div className="max-w-md">
                        <div className="text-3xl font-black font-display tracking-tighter text-white mb-8">
                            Prof<span className="text-secondary opacity-50">planet</span>
                        </div>
                        <p className="text-secondary text-lg font-light leading-relaxed">
                            Architecting the next generation of global technical leaders through an intensive, high-fidelity educational forge.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 md:gap-32 shrink-0">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10">Academy</h4>
                            <ul className="space-y-6 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                <li><a href="#" className="hover:text-white transition-colors">Syllabus</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Admission</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Alumni</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10">Forge</h4>
                            <ul className="space-y-6 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                <li><a href="#" className="hover:text-white transition-colors">Philosophy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Ecosystem</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10">Signals</h4>
                            <ul className="space-y-6 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
                    <p className="text-secondary text-[10px] font-black uppercase tracking-[0.3em]">
                        © 2026 Profplanet Enclave. All rights reserved. Precise Engineering.
                    </p>
                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary hover:text-white transition-all group flex items-center gap-4">
                        Ascend to Top
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="group-hover:-translate-y-1 transition-transform"><path d="M5 1V9M5 1L1 5M5 1L9 5" stroke="currentColor" strokeWidth="1.5" /></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

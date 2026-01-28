import React from 'react';

const Footer = () => {
    return (
    return (
        <footer className="premium-padding bg-obsidian border-t border-white/5 pb-20 relative overflow-hidden">
            {/* Architectural Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-glow/50 to-transparent"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-40">
                    <div className="max-w-md">
                        <div className="text-4xl font-black font-display tracking-tighter text-white mb-10 group cursor-default">
                            Prof<span className="text-white/50 group-hover:text-gold-400 transition-colors">planet</span>
                        </div>
                        <p className="text-white/50 text-xl font-light leading-relaxed italic border-l border-white/10 pl-10">
                            Architecting the next generation of global technical leaders through an intensive, high-fidelity educational forge.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-20 md:gap-40 shrink-0">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Academy</h4>
                            <ul className="space-y-8 text-[11px] font-black uppercase tracking-[0.3em] text-white/40">
                                <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">Syllabus_v2</a></li>
                                <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">Admissions</a></li>
                                <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">Elite_Index</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Architecture</h4>
                            <ul className="space-y-8 text-[11px] font-black uppercase tracking-[0.3em] text-white/40">
                                <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">The_Method</a></li>
                                <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">Ecosystem</a></li>
                                <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">Specifications</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Signals</h4>
                            <ul className="space-y-8 text-[11px] font-black uppercase tracking-[0.3em] text-white/40">
                                <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">Terminal_X</a></li>
                                <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">Core_Repo</a></li>
                                <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">LinkedIn_P1</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-white/5 gap-10">
                    <div className="flex items-center gap-10">
                        <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">
                            © 2026 Profplanet Enclave.
                        </p>
                        <div className="w-1 h-1 rounded-full bg-white/10"></div>
                        <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">
                            Precise_Engineering_Verified
                        </p>
                    </div>

                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all group flex items-center gap-6 px-8 py-4 border border-white/10 rounded-full glass-panel hover:bg-white/5">
                        Descend to Core
                        <svg width="12" height="12" viewBox="0 0 10 10" fill="none" className="group-hover:translate-y-1 transition-transform rotate-180"><path d="M5 1V9M5 1L1 5M5 1L9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


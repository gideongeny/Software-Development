import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Academy', href: '#academy' },
        { name: 'Architect', href: '#architect' },
        { name: 'Workflow', href: '#workflow' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out py-6 px-6 md:px-12">
            <div className={`container mx-auto max-w-7xl flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass-panel py-4 px-10 rounded-full border-white/10 shadow-2xl backdrop-blur-3xl' : 'py-2 px-4'}`}>
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 group"
                >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-700 shadow-lg shadow-white/10">
                        <div className="text-obsidian -rotate-45 font-black text-xl">P</div>
                    </div>
                    <span className="text-2xl font-black font-display tracking-tighter text-white">
                        Prof<span className={`transition-colors ${scrolled ? 'text-gold-400' : 'text-white/70'} group-hover:text-gold-400`}>planet</span>
                    </span>
                </motion.a>

                <div className="hidden md:flex items-center gap-10">
                    {links.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-500 group-hover:w-full"></span>
                        </motion.a>
                    ))}

                    <button className="glass-button px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white text-white hover:text-obsidian transition-all duration-500">
                        Portal Login
                    </button>

                    <button className="bg-white text-obsidian px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-500">
                        Enroll Now
                    </button>
                </div>

                {/* Mobile Toggle Placeholder */}
                <div className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer group">
                    <div className="w-full h-[2px] bg-white group-hover:bg-gold-400 transition-colors"></div>
                    <div className="w-1/2 h-[2px] bg-white self-end group-hover:bg-gold-400 transition-colors group-hover:w-full"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


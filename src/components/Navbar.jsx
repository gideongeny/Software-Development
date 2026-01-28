import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = ['Academy', 'Architect', 'Contact'];

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-700 pt-8 px-6 md:px-12">
            <div className={`container mx-auto max-w-7xl flex justify-between items-center transition-all duration-700 ${scrolled ? 'luxury-glass py-4 px-10 rounded-full scale-95' : 'py-0 px-0'}`}>
                <motion.a
                    href="#"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-black font-display tracking-tighter text-white group"
                >
                    Prof<span className="text-secondary group-hover:text-indigo-500 transition-colors">planet</span>
                </motion.a>

                <div className="hidden md:flex items-center gap-12">
                    {links.map((link, i) => (
                        <motion.a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xs font-bold uppercase tracking-[0.3em] text-secondary hover:text-white transition-colors"
                        >
                            {link}
                        </motion.a>
                    ))}
                    <button className="px-8 py-3 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-obsidian transition-all">
                        Join Academy
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

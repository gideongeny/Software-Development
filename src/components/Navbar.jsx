import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Programs', href: '#programs' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[90] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="container mx-auto px-6 md:px-12">
                <div className={`flex justify-between items-center transition-all duration-500 rounded-[2rem] px-8 ${scrolled ? 'premium-glass py-3' : 'py-0'}`}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-2xl font-black font-outfit"
                    >
                        <span className="text-white">Prof</span>
                        <span className="text-primary">planet</span>
                    </motion.div>

                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-4 w-[1px] bg-border mx-2"></div>
                        <button className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Login</button>
                        <button className="px-6 py-2 rounded-full bg-white text-background text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                            Join
                        </button>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[80] premium-glass md:hidden flex flex-col items-center justify-center gap-12"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-black font-outfit text-white hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="btn-premium">Get Started</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

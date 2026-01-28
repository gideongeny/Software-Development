import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, GraduationCap, Users, Mail, LogIn } from 'lucide-react';

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
        { name: 'Home', href: '#home', icon: Rocket },
        { name: 'Programs', href: '#programs', icon: GraduationCap },
        { name: 'About Us', href: '#about', icon: Users },
        { name: 'Contact Us', href: '#contact', icon: Mail },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-morphism' : 'py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-2xl font-bold font-outfit tracking-tight"
                >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <GraduationCap className="text-white w-6 h-6" />
                    </div>
                    <span className="text-gradient">Profplanet</span>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-4"
                    >
                        <button className="text-sm font-medium hover:text-blue-400 transition-colors">Login</button>
                        <button className="btn-primary !py-2 !px-6 text-sm">Get Started</button>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-morphism border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 text-lg font-medium text-gray-300 hover:text-white"
                                >
                                    <link.icon className="w-5 h-5 text-blue-400" />
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                                <button className="flex items-center gap-3 text-lg font-medium text-gray-300">
                                    <LogIn className="w-5 h-5 text-blue-400" />
                                    Login
                                </button>
                                <button className="btn-primary w-full">Get Started</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

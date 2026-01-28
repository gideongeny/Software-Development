import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Roadmap', href: '#programs' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <span className="text-black font-black text-xl">P</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">Profplanet</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-secondary hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-4 border-l border-border pl-10">
                        <button className="text-sm font-medium text-secondary hover:text-white transition-colors">Sign In</button>
                        <button className="px-5 py-2 rounded-lg bg-white text-black text-sm font-bold hover:bg-white/90 transition-colors">
                            Start Free
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-black border-b border-border p-6 flex flex-col gap-6 md:hidden"
                >
                    {links.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-4 border-t border-border pt-6">
                        <button className="text-lg font-medium text-left">Sign In</button>
                        <button className="w-full py-3 rounded-lg bg-white text-black font-bold">Start Free</button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;

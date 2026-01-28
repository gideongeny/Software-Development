import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 px-6 md:px-12 bg-black border-t border-border">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                                <span className="text-black font-black text-xs">P</span>
                            </div>
                            <span className="text-lg font-bold tracking-tight">Profplanet</span>
                        </a>
                        <p className="text-secondary text-sm max-w-xs">
                            Architecting the next generation of digital leaders through structured education.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Learning</h4>
                        <ul className="space-y-4 text-sm text-secondary">
                            <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Support</h4>
                        <ul className="space-y-4 text-sm text-secondary">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Legal</h4>
                        <ul className="space-y-4 text-sm text-secondary">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-secondary text-xs">
                        © 2026 Profplanet. All rights reserved. Built with passion for developers.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs text-secondary hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-xs text-secondary hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="text-xs text-secondary hover:text-white transition-colors">Discord</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border pt-24 pb-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <div className="max-w-sm">
                        <div className="text-2xl font-black font-outfit mb-6">
                            <span className="text-white">Prof</span>
                            <span className="text-primary">planet</span>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed mb-8">
                            Architecting the next generation of digital leaders through structured, peer-supported education.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Platform</h4>
                            <ul className="space-y-4 text-sm text-secondary">
                                <li><a href="#" className="hover:text-primary transition-colors">Programs</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Mentors</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-secondary">
                                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Resources</h4>
                            <ul className="space-y-4 text-sm text-secondary">
                                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-6">
                    <p className="text-secondary text-xs font-medium">
                        © 2026 Profplanet. All rights reserved. Built for the future.
                    </p>
                    <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-secondary hover:text-white cursor-pointer transition-colors">
                        Back to top
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

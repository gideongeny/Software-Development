import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, CheckCircle2, Clock } from 'lucide-react';

const ProgramCard = ({ title, description, icon: Icon, tags, price, duration }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 group"
        >
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-8 h-8 text-blue-400" />
            </div>
            <div className="flex gap-2 mb-4">
                {tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-white/5 text-gray-400">
                        {tag}
                    </span>
                ))}
            </div>
            <h3 className="text-2xl font-bold mb-4 font-outfit">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {description}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-blue-400" />
                    {duration}
                </div>
                <div className="text-xl font-bold text-white">
                    {price === "Coming Soon" ? "Coming Soon" : price}
                    {price !== "Coming Soon" && <span className="text-xs text-gray-500 font-normal ml-1">/ phase</span>}
                </div>
            </div>

            <button className="w-full mt-6 py-3 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-sm">
                {price === "Coming Soon" ? "Get Notified" : "Learn More"}
            </button>
        </motion.div>
    );
};

const CurriculumPhase = ({ phase, title, description, duration, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 pb-12 last:pb-0"
        >
            {/* Connector Line */}
            <div className="absolute left-[19px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent opacity-30"></div>

            {/* Node */}
            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-dark border-2 border-blue-500 flex items-center justify-center z-10 shadow-lg shadow-blue-500/20">
                <span className="text-xs font-bold text-blue-400">{phase}</span>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold font-outfit group-hover:text-blue-400 transition-colors">{title}</h4>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-400">
                        {duration}
                    </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

const Programs = () => {
    const programs = [
        {
            title: "Software Engineering",
            description: "Master full-stack web development and build real-world applications from scratch. Covers React, Python, Flask, and more.",
            icon: Code,
            tags: ["Full-stack", "Web"],
            price: "Ksh 4,000",
            duration: "6 Months"
        },
        {
            title: "Data Science",
            description: "Learn to analyze complex data sets, build predictive models, and master ML algorithms using Python and R.",
            icon: Database,
            tags: ["AI", "Analytics"],
            price: "Coming Soon",
            duration: "6 Months"
        },
        {
            title: "Cybersecurity",
            description: "Protect systems and networks from digital attacks. Learn ethical hacking, security auditing, and risk management.",
            icon: Shield,
            tags: ["Security", "IT"],
            price: "Coming Soon",
            duration: "4 Months"
        }
    ];

    const curriculum = [
        { phase: "01", title: "Foundations of Programming", duration: "4 weeks", description: "Learn fundamentals and web basics. Master HTML5, CSS3, JavaScript, and Git." },
        { phase: "02", title: "Advanced JS & Frontend", duration: "4 weeks", description: "Master ES6+, DOM manipulation, async programming, and API integration." },
        { phase: "03", title: "React & Modern Frameworks", duration: "4 weeks", description: "Build scalable SPAs with React, hooks, state management, and routing." },
        { phase: "04", title: "Backend with Python & Flask", duration: "4 weeks", description: "Build RESTful APIs, handle auth, and understand server-side architecture." },
        { phase: "05", title: "Databases & Data Management", duration: "1 week", description: "Master PostgreSQL, SQLAlchemy, SQL queries, and efficient schema design." },
        { phase: "06", title: "Full-Stack & Deployment", duration: "4 weeks", description: "Connect frontend to backend, master security, and deploy to cloud platforms." },
        { phase: "07", title: "Capstone Project", duration: "4 weeks", description: "Build a complete, original full-stack application for your professional portfolio." },
    ];

    return (
        <section id="programs" className="section-padding relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-[20%] -right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        Our Learning <span className="text-gradient">Pathways</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Choose a program that fits your career goals. Our structured curriculum is designed to take you from absolute beginner to industry-ready.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {programs.map((prog, idx) => (
                        <ProgramCard key={prog.title} {...prog} />
                    ))}
                </div>

                {/* Curriculum Section */}
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <div className="sticky top-32">
                            <h3 className="text-3xl font-black mb-6 font-outfit">
                                Software Engineering <br />
                                <span className="text-blue-500">Curriculum Evolution</span>
                            </h3>
                            <p className="text-gray-400 mb-8 leading-relaxed max-w-lg">
                                Explore the complete learning path organized by phases, weeks, and days. Each phase builds upon the previous one to ensure a solid foundation.
                            </p>
                            <div className="flex flex-col gap-4 mb-10">
                                {[
                                    "Daily Structured Lessons",
                                    "Hands-on Weekend Challenges",
                                    "Peer-Supported Environment",
                                    "Professional Portfolio Projects"
                                ].map((item, i) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-3 text-sm font-medium"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                            <button className="btn-primary">Download Syllabus</button>
                        </div>
                    </div>

                    <div className="lg:pt-10">
                        {curriculum.map((item, idx) => (
                            <CurriculumPhase key={item.phase} {...item} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;

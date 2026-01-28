import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ArrowRight, Play } from 'lucide-react';

const TechScene = () => {
    return (
        <Canvas className="w-full h-full">
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Sphere args={[1, 100, 200]} scale={2.4}>
                    <MeshDistortMaterial
                        color="#3b82f6"
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Sphere>
            </Suspense>
        </Canvas>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background 3D Scene */}
            <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-40 lg:opacity-100 -z-10 pointer-events-none">
                <TechScene />
            </div>

            <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Next Enrollment: February 2026
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        Master the Future of <br />
                        <span className="text-gradient">Technology</span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
                        Transform your career through structured, peer-supported online tech education. Join Profplanet and build real-world applications from scratch.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="btn-primary flex items-center gap-3 group">
                            Enroll Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn-secondary flex items-center gap-3">
                            <Play className="w-5 h-5 fill-white/10" /> View Programs
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-dark bg-dark-lighter flex items-center justify-center text-[10px] font-bold ring-2 ring-blue-500/10">
                                    {`USER ${i}`}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-400">
                            <span className="text-white font-bold font-outfit">1,000+</span> graduates working globally
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] -z-20"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] -z-20"></div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
                    <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

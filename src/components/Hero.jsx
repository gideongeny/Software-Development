import React, { useRef, useMemo, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const Particles = () => {
    const ref = useRef();
    const count = 3000;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x += delta * 0.05;
        ref.current.rotation.y += delta * 0.075;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#6366f1"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Immersive 3D Background */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <Suspense fallback={null}>
                        <Particles />
                    </Suspense>
                    <ambientLight intensity={0.5} />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Empowering Digital Leaders
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter"
                    >
                        Design. Build. <br />
                        <span className="text-premium-gradient">Innovate the Future.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-secondary max-w-2xl mb-12 leading-relaxed"
                    >
                        Profplanet bridge the gap between ambition and career mastery with a world-class educational ecosystem.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-6"
                    >
                        <button className="btn-premium group flex items-center gap-3">
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn-outline flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                                <Play className="w-3 h-3 fill-current ml-0.5" />
                            </div>
                            Explore Programs
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Modern Gradient Overlays */}
            <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent-purple/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.div>
        </section>
    );
};

export default Hero;

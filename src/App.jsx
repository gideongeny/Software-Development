import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academy from './components/Programs';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-accent-glow/30 selection:text-white antialiased">
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Academy />
        <Features />
        <Workflow />
        <Testimonials />
        <FAQ />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramRoadmap from './components/Programs';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProgramRoadmap />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

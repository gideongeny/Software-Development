import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academy from './components/Programs';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-indigo-500/30 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Academy />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

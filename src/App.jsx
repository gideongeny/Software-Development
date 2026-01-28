import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

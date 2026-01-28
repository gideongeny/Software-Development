import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <CustomCursor />
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

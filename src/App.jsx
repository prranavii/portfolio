import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import CuriousAbout from './components/CuriousAbout';
import DSA from './components/DSA';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Personality from './components/Personality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';

export default function App() {
  const [hoveredTech, setHoveredTech] = useState(null);
  
  // Track pointer coordinates for grid and radial lighting masks
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-charcoal text-zinc-100 overflow-x-hidden selection:bg-accent-cyan selection:text-charcoal">
      
      {/* Dynamic Digital Film Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Floating Header */}
      <Navbar />

      {/* Custom Spring Cursor follower */}
      <CustomCursor />

      {/* Hidden Easter Egg keyboard sequence listener */}
      <EasterEgg />

      {/* Landing Layout Sections */}
      <Hero />
      <About />
      
      {/* Project Showcase & Skills Grid linking hover state */}
      <Work hoveredTech={hoveredTech} setHoveredTech={setHoveredTech} />
      <Skills hoveredTech={hoveredTech} setHoveredTech={setHoveredTech} />
      
      {/* Interactive Curious Constellation */}
      <CuriousAbout />

      <DSA />
      <Journey />
      <Certifications />
      <Personality />
      <Contact />
      <Footer />
      
    </div>
  );
}

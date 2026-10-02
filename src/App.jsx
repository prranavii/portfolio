import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Work from './components/Work';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* Authentic Tactile Paper Grain Texture Overlay */}
      <div className="paper-grain" aria-hidden="true" />

      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Work />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

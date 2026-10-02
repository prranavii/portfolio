import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Work from './components/Work';
import Journey from './components/Journey';
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
      <Work />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

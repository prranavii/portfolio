import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* Authentic Tactile Paper Grain Texture Overlay */}
      <div className="paper-grain" aria-hidden="true" />

      <Navbar />
      <EasterEgg />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

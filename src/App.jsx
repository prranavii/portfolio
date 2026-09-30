import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* Authentic Tactile Paper Grain Texture Overlay */}
      <div className="paper-grain" aria-hidden="true" />

      <Navbar />
      <Hero />
      <About />
      <Work />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

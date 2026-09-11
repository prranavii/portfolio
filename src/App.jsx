import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurrentlyExploring from './components/CurrentlyExploring';
import Work from './components/Work';
import About from './components/About';
import TechStack from './components/TechStack';
import HowIBuild from './components/HowIBuild';
import Stats from './components/Stats';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark text-ink-primary overflow-x-hidden selection:bg-lime-accent/20 selection:text-lime-accent">
      <Navbar />
      <Hero />
      <CurrentlyExploring />
      <Work />
      <About />
      <TechStack />
      <HowIBuild />
      <Stats />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

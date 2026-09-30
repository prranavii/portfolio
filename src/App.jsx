import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurrentRoleOrdinal from './components/CurrentRoleOrdinal';
import Work from './components/Work';
import EngineeringJourney from './components/EngineeringJourney';
import FreelanceWork from './components/FreelanceWork';
import EngineeringStackPanel from './components/EngineeringStackPanel';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import ProofOfWork from './components/ProofOfWork';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark text-ink-primary overflow-x-hidden selection:bg-lime-accent/20 selection:text-lime-accent">
      <Navbar />
      <Hero />
      <CurrentRoleOrdinal />
      <Work />
      <EngineeringJourney />
      <FreelanceWork />
      <EngineeringStackPanel />
      <CurrentlyBuilding />
      <ProofOfWork />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Work', target: '#work' },
  { label: 'Skills', target: '#skills' },
  { label: 'Journey', target: '#journey' },
  { label: 'Contact', target: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    // Observe sections for active indicator
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ['home', 'about', 'work', 'skills', 'journey', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(target);
    if (el) {
      // Find offset to prevent blocking by navbar
      const navHeight = 90;
      const targetPosition = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-2.5 rounded-full border transition-all duration-300 w-[90%] max-w-4xl ${
          scrolled 
            ? 'bg-charcoal-light/75 backdrop-blur-md shadow-2xl border-accent-cyan/15 py-3'
            : 'bg-transparent border-white/5 py-4'
        }`}
        initial={{ y: -80, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')} 
          className="text-lg font-bold tracking-tight text-white font-display flex items-center gap-1 group clickable"
        >
          <span className="text-accent-cyan group-hover:text-white transition-colors duration-300">PJ</span>
          <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse"></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.target.substring(1);
            return (
              <a
                key={item.label}
                href={item.target}
                onClick={(e) => handleLinkClick(e, item.target)}
                className={`relative px-4 py-1.5 text-xs uppercase font-medium tracking-widest transition-colors duration-300 rounded-full clickable ${
                  isActive ? 'text-accent-cyan font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white p-1 focus:outline-none transition-colors clickable"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-charcoal/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.target.substring(1);
                return (
                  <motion.a
                    key={item.label}
                    href={item.target}
                    onClick={(e) => handleLinkClick(e, item.target)}
                    className={`text-2xl font-display font-semibold tracking-wider transition-colors clickable ${
                      isActive ? 'text-accent-cyan' : 'text-zinc-500'
                    }`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ delay: idx * 0.05, ease: 'easeOut' }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

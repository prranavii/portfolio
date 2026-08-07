import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Journey', id: 'journey' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-transparent">
        <div 
          className="font-display italic text-2xl text-warm cursor-pointer"
          onClick={() => handleScroll('home')}
        >
          P
        </div>
        <div 
          className="font-sans text-xs uppercase tracking-[0.3em] text-warm-secondary hover:text-accent transition-colors cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          Menu
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex flex-col justify-center items-center"
          >
            <div 
              className="absolute top-6 right-6 md:right-12 cursor-pointer text-warm-secondary hover:text-accent transition-colors p-2"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} />
            </div>
            
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className="font-display italic text-4xl md:text-6xl text-warm hover:text-accent transition-colors cursor-pointer"
                  onClick={() => handleScroll(link.id)}
                >
                  {link.label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

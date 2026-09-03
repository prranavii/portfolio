import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-5 bg-paper/85 backdrop-blur-sm border-b border-paper-border/60 transition-all duration-300">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto font-mono text-xs text-ink-secondary">
          {/* Brand mark */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-1.5 hover:text-ink transition-colors font-mono tracking-tight text-left cursor-pointer"
          >
            <span className="font-semibold text-ink">Portfolio/</span>
            <span>Pranavi Jain</span>
          </button>

          {/* Center Quick Navigation (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-wider text-ink-muted">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-ink transition-colors cursor-pointer"
            >
              .About
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="hover:text-ink transition-colors cursor-pointer"
            >
              .Works
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="hover:text-ink transition-colors cursor-pointer"
            >
              .Toolkit
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="hover:text-ink transition-colors cursor-pointer"
            >
              .Timeline
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-ink transition-colors cursor-pointer"
            >
              .Contact
            </button>
          </div>

          {/* Right Status / Menu Toggle */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block font-mono text-[11px] text-ink-muted">
              Software Engineer
            </span>
            <button 
              onClick={() => setIsOpen(true)}
              className="md:hidden border border-paper-border px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider hover:bg-paper-dark transition-colors cursor-pointer"
            >
              Index
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-paper flex flex-col justify-between p-8 md:p-16"
          >
            <div className="flex justify-between items-center w-full border-b border-paper-border pb-4 font-mono text-xs">
              <span className="text-ink-secondary">Portfolio/ Pranavi Jain</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 border border-paper-border hover:bg-paper-dark transition-colors cursor-pointer text-ink"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 my-auto text-left max-w-xl mx-auto w-full">
              {[
                { id: 'home', num: '00', label: 'Cover / Start' },
                { id: 'about', num: '01', label: 'Curriculum Vitae' },
                { id: 'work', num: '02', label: 'Selected Works' },
                { id: 'skills', num: '03', label: 'Software & Toolkit' },
                { id: 'journey', num: '04', label: 'Career Timeline' },
                { id: 'contact', num: '05', label: 'Contact & Inquiries' },
              ].map((item) => (
                <div 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-baseline gap-4 group cursor-pointer border-b border-paper-border/60 pb-3"
                >
                  <span className="font-mono text-xs text-ink-muted group-hover:text-ink transition-colors">
                    {item.num}
                  </span>
                  <span className="font-display font-medium text-3xl md:text-5xl text-ink group-hover:translate-x-2 transition-transform duration-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between font-mono text-[11px] text-ink-muted border-t border-paper-border pt-4">
              <span>2023 — 2027</span>
              <span>Computer Science & Engineering</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

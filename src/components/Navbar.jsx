import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-dark/85 backdrop-blur-md border-b border-dark-border py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex justify-between items-center">
          {/* Brand Identity */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
            <span className="font-mono font-bold tracking-widest text-sm text-ink-primary group-hover:text-lime-accent transition-colors">
              PRANAVI
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-ink-secondary">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-lime-accent transition-colors cursor-pointer py-1"
              >
                .{link.label}
              </button>
            ))}
          </div>

          {/* Right Action: Resume */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={portfolioData.personalInfo.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-lime-accent/40 bg-lime-accent/5 text-lime-accent hover:bg-lime-accent hover:text-dark font-mono text-xs font-semibold tracking-wider transition-all duration-200"
            >
              Resume <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ink-primary hover:text-lime-accent transition-colors border border-dark-border rounded bg-dark-surface"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl pt-24 px-6 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <div className="font-mono text-xs text-ink-muted uppercase tracking-widest border-b border-dark-border pb-3">
                // Navigation Index
              </div>
              {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-4 text-left group cursor-pointer"
                >
                  <span className="font-mono text-xs text-lime-accent">0{idx + 1}</span>
                  <span className="font-display text-2xl font-bold text-ink-primary group-hover:text-lime-accent transition-colors">
                    {link.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-dark-border space-y-4">
              <a
                href={portfolioData.personalInfo.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 flex items-center justify-center gap-2 rounded bg-lime-accent text-dark font-mono font-bold text-xs uppercase tracking-wider"
              >
                Resume <ArrowUpRight size={16} />
              </a>
              <div className="flex justify-between font-mono text-[11px] text-ink-muted">
                <span>PRANAVI JAIN</span>
                <span>AI ENGINEER</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

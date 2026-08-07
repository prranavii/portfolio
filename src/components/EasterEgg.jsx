import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const EasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sequence, setSequence] = useState('');
  const [logLines, setLogLines] = useState([]);
  const targetSequence = 'hireme';

  useEffect(() => {
    console.log("%cHint: Sometimes typing what you want makes it happen. Looking for a developer?", "color: #C4A35A; font-size: 14px; font-weight: bold;");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen) return;
      const key = e.key.toLowerCase();
      if (!/^[a-z]$/.test(key)) return;

      setSequence((prev) => {
        const next = prev + key;
        if (targetSequence.startsWith(next)) {
          if (next === targetSequence) {
            setIsOpen(true);
            return '';
          }
          return next;
        }
        return key === targetSequence[0] ? key : '';
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const lines = [
        "INITIALIZING SECURE CONNECTION...",
        "BYPASSING STANDARD PROTOCOLS...",
        "ACCESS GRANTED.",
        "========================================",
        `TARGET: ${portfolioData.personalInfo.name.toUpperCase()}`,
        `ROLE: DEVELOPER & ARCHITECT`,
        `STATUS: OPEN TO OPPORTUNITIES`,
        "========================================",
        "DECRYPTING CONTACT INFO...",
        `EMAIL: ${portfolioData.personalInfo.email}`,
        "READY FOR TRANSMISSION."
      ];
      
      let i = 0;
      setLogLines([]);
      const interval = setInterval(() => {
        if (i < lines.length) {
          setLogLines(prev => [...prev, lines[i]]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 400);

      return () => clearInterval(interval);
    } else {
      document.body.style.overflow = 'unset';
      setLogLines([]);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-dark/95 backdrop-blur-md cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-dark-surface border border-accent/30 rounded-lg shadow-[0_0_30px_rgba(196,163,90,0.15)] overflow-hidden font-mono"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-accent/30 bg-accent/5">
              <div className="flex items-center gap-2 text-accent">
                <Terminal size={16} />
                <span className="text-xs font-bold tracking-widest">SYSTEM_OVERRIDE_ACTIVE</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-warm-faint hover:text-accent transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 h-[400px] overflow-y-auto custom-scrollbar flex flex-col">
              <div className="flex items-center gap-3 text-accent mb-6">
                <ShieldAlert size={24} />
                <h2 className="text-xl font-bold">RECRUITMENT PROTOCOL INITIATED</h2>
              </div>
              
              <div className="flex flex-col gap-2 flex-grow">
                {logLines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-sm ${
                      line.includes('ERROR') ? 'text-red-400' :
                      line.includes('================') ? 'text-accent/50' :
                      line.includes('EMAIL:') || line.includes('TARGET:') ? 'text-warm font-bold' :
                      'text-accent'
                    }`}
                  >
                    <span className="opacity-50 mr-2">{'>'}</span>
                    {line}
                  </motion.div>
                ))}
                
                {logLines.length === 11 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 flex justify-center"
                  >
                    <a 
                      href={`mailto:${portfolioData.personalInfo.email}?subject=Let's build something great`}
                      className="bg-accent text-dark px-6 py-3 rounded text-sm font-bold tracking-widest hover:bg-warm transition-colors inline-flex items-center gap-2 cursor-pointer"
                    >
                      INITIATE CONTACT
                      <span className="animate-pulse">_</span>
                    </a>
                  </motion.div>
                )}
                
                {/* Blinking cursor */}
                {logLines.length < 11 && (
                  <div className="text-accent animate-pulse">_</div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;

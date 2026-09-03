import React, { useState, useEffect } from 'react';
import { Terminal, X, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

const EasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputSequence, setInputSequence] = useState('');
  const [logs, setLogs] = useState([]);
  
  const targetSequence = 'hireme';

  useEffect(() => {
    console.log("%cHello there! I see you checking the console. Looking for a hint? Try typing 'hireme' on the page.", "color: #0A0A0A; font-size: 14px; font-weight: bold;");

    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      const char = e.key.toLowerCase();
      if (!/^[a-z]$/.test(char)) return;

      setInputSequence(prev => {
        const newSeq = (prev + char).slice(-targetSequence.length);
        if (newSeq === targetSequence) {
          setIsOpen(true);
          return '';
        }
        return newSeq;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setLogs([]);
      const logMessages = [
        "Initializing access protocol...",
        "Bypassing security measures...",
        "Connecting to mainframe...",
        "Access granted.",
        "Welcome to the inner workings.",
        "Candidate profile identified: PRANAVI JAIN",
        "Status: READY TO HIRE"
      ];
      
      let delay = 0;
      logMessages.forEach((msg, index) => {
        setTimeout(() => {
          setLogs(prev => [...prev, msg]);
        }, delay);
        delay += 600 + Math.random() * 400;
      });
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper/90 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-2xl bg-paper border border-ink shadow-2xl rounded-none overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-paper-border bg-paper-dark/30">
              <div className="flex items-center gap-2 text-ink">
                <Terminal size={15} />
                <span className="font-mono text-xs font-semibold">sys_kernel.sh — admin terminal</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-ink-secondary hover:text-ink transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="flex items-start gap-3 text-ink">
                <ShieldAlert size={22} className="mt-1 shrink-0 text-ink" />
                <div>
                  <h3 className="font-bold text-base uppercase tracking-tight mb-0.5">.SECRET SEQUENCE UNLOCKED</h3>
                  <p className="text-ink-secondary text-xs">Accessing candidate diagnostic logs...</p>
                </div>
              </div>
              
              <div className="bg-paper-light p-4 border border-paper-border rounded-none h-48 overflow-y-auto space-y-2 font-mono text-xs">
                {logs.map((log, i) => (
                  <div key={i} className="text-ink">
                    <span className="text-ink-muted mr-2">{'>'}</span> 
                    {log}
                  </div>
                ))}
                {logs.length === 7 && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="mt-4 pt-4 border-t border-paper-border"
                  >
                    <span className="text-ink font-bold">NEXT ACTION: </span>
                    <a 
                      href={`mailto:${portfolioData.personalInfo.email}?subject=Found your portfolio easter egg! Let's talk.`}
                      className="text-ink hover:underline font-semibold cursor-pointer"
                    >
                      [ Send Candidate Email ↗ ]
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;

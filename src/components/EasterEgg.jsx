import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [typedBuffer, setTypedBuffer] = useState('');
  const targetWord = 'hireme';

  // 1. Mount Developer console easter egg message
  useEffect(() => {
    console.log(
      "%cHey developer 👀\n%cSince you're inspecting the code, we should probably connect.\n%cExplore my GitHub: %c" + portfolioData.personalInfo.github + "\n%cEmail me: %c" + portfolioData.personalInfo.email.replace('mailto:', ''),
      "color: #00F2FE; font-size: 20px; font-weight: bold; font-family: 'Outfit', sans-serif; text-shadow: 0 0 10px rgba(0,242,254,0.3);",
      "color: #9CA3AF; font-size: 14px; font-family: 'Inter', sans-serif; padding-top: 4px; padding-bottom: 8px;",
      "color: #6B7280; font-size: 11px; font-family: monospace;",
      "color: #00F2FE; font-size: 11px; font-family: monospace; font-weight: bold; text-decoration: underline;",
      "color: #6B7280; font-size: 11px; font-family: monospace;",
      "color: #00F2FE; font-size: 11px; font-family: monospace; font-weight: bold; text-decoration: underline;"
    );
  }, []);

  // 2. Keyboard listener for keystrokes
  useEffect(() => {
    const handleKeyDown = (e) => {
      const char = e.key.toLowerCase();
      // Keep buffer up to targetWord length
      setTypedBuffer((prev) => {
        const next = (prev + char).slice(-targetWord.length);
        if (next === targetWord) {
          setIsActive(true);
        }
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
          {/* Blur backdrop overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsActive(false)}
          />

          {/* Matrix style terminal overlay */}
          <motion.div 
            className="relative w-full max-w-lg bg-[#050608] border border-accent-cyan/30 rounded-2xl shadow-[0_0_40px_rgba(0,242,254,0.25)] p-5 md:p-6 font-mono text-xs text-left z-10"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-accent-cyan/20 pb-3 mb-4">
              <span className="text-[10px] text-accent-cyan font-bold uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
                <ShieldAlert size={12} /> SECURE SHELL ACCESSED
              </span>
              <button
                onClick={() => setIsActive(false)}
                className="w-6 h-6 rounded-full border border-white/10 hover:border-accent-cyan text-zinc-500 hover:text-accent-cyan flex items-center justify-center transition-colors clickable"
                aria-label="Exit terminal"
              >
                <X size={12} />
              </button>
            </div>

            {/* Log script sequence */}
            <div className="space-y-2 text-[#00FF88] mb-6 min-h-[140px]">
              <p className="text-zinc-600">&gt; Initializing recruitment protocol...</p>
              <p className="text-zinc-600">&gt; Injecting secret authorization token...</p>
              <p className="text-accent-cyan font-bold">&gt; ACCESS GRANTED: HIREME TRIGGER DETECTED</p>
              
              <div className="pt-2 pl-4 border-l border-[#00FF88]/20 space-y-1">
                <p>&gt; Scanning capabilities... OK</p>
                <p>&gt; Checking LeetCode rating... 1565 OK</p>
                <p>&gt; Evaluating candidate: Pranavi Jain</p>
                <p>&gt; Generating system verdict: SUCCESS</p>
              </div>

              <motion.div 
                className="mt-6 p-3 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-lg text-center font-bold text-sm tracking-wider uppercase text-[#00FF88]"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                "Great choice. Let's talk :)"
              </motion.div>
            </div>

            {/* CTAs */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => setIsActive(false)}
                className="px-4 py-2 border border-white/5 hover:border-white/20 text-zinc-500 hover:text-white rounded-lg transition-colors clickable"
              >
                Abort
              </button>
              <a
                href={portfolioData.personalInfo.email}
                className="px-5 py-2 bg-accent-cyan text-charcoal font-bold rounded-lg uppercase tracking-wider text-[10px] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all clickable"
              >
                Open Connection
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

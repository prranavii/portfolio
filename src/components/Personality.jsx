import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Personality() {
  const { personality } = portfolioData;
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % personality.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered, personality.length]);

  return (
    <section 
      className="py-20 md:py-28 w-full flex flex-col justify-center px-6 md:px-12 bg-charcoal border-b border-white/5 relative overflow-hidden select-none"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        
        {/* Intro */}
        <h2 className="text-xl md:text-3xl font-display font-light text-zinc-500 leading-tight">
          When I'm not shipping code, <br className="sm:hidden" /> I'm probably...
        </h2>
        
        {/* Animated dynamic loops */}
        <div 
          className="mt-6 min-h-[90px] flex items-center justify-center relative cursor-pointer clickable"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-accent-cyan tracking-tight uppercase px-4 text-center select-none"
              initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {personality[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action hover hints */}
        <p className="text-[9px] uppercase font-bold text-zinc-600 tracking-[0.25em] mt-3">
          Hover word to freeze transition
        </p>

      </div>
    </section>
  );
}

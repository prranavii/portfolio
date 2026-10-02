import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import CursorChaseCanvas from './CursorChaseCanvas';

const Hero = () => {
  const { personalInfo } = portfolioData;
  const [hintText, setHintText] = useState('try moving your cursor →');
  const [hasMovedCursor, setHasMovedCursor] = useState(false);

  const handleFirstCursorMove = () => {
    if (!hasMovedCursor) {
      setHasMovedCursor(true);
      setHintText('hey, slow down! ✦');
      setTimeout(() => {
        setHintText('following you...');
      }, 2500);
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center items-center p-4 sm:p-8 md:p-16 pt-24 sm:pt-28 md:pt-32 select-none overflow-hidden"
    >
      {/* Editorial Hero Layout Spread */}
      <div className="my-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 w-full max-w-7xl mx-auto relative z-10">
        
        {/* Left Editorial Typographic Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 max-w-xl">
          <div className="space-y-2">
            <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.85] tracking-tight text-ink uppercase select-none">
              <div>pranavi</div>
              <div className="-mt-1 sm:-mt-3 md:-mt-4">jain</div>
            </h1>
          </div>

          <div className="space-y-2 pt-2">
            <div className="font-mono text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold text-ink">
              SOFTWARE ENGINEER
            </div>
            <div className="font-mono text-xs text-ink-muted uppercase tracking-wider leading-relaxed">
              RESILIENT BACKEND / INTELLIGENT SYSTEMS / CSE '27
            </div>
          </div>

          <div className="cta-button-group pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono">
            <a 
              href="#about"
              className="border border-paper-border px-4 py-2 text-ink hover:bg-paper-dark transition-colors bg-paper-light font-semibold"
            >
              [ .Curriculum Vitae ]
            </a>
            <a 
              href="#work"
              className="border border-paper-border px-4 py-2 text-ink hover:bg-paper-dark transition-colors bg-paper-light font-semibold"
            >
              [ .Selected Works ]
            </a>
          </div>
        </div>

        {/* Right Interactive 3D Digital Companion Zone */}
        <div className="w-full lg:w-1/2 flex flex-col items-center relative">
          
          {/* Handwritten Hint Label */}
          <div className="h-6 mb-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={hintText}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-xs text-ink-muted italic tracking-wide"
              >
                {hintText}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* 3D Character Canvas */}
          <CursorChaseCanvas onCursorMoveFirstTime={handleFirstCursorMove} />

        </div>

      </div>
    </section>
  );
};

export default Hero;

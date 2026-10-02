import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import CursorChaseCanvas from './CursorChaseCanvas';

const Hero = () => {
  const { personalInfo } = portfolioData;
  const [showHint, setShowHint] = useState(true);

  const handleMouseMoveFirstTime = () => {
    if (showHint) {
      setShowHint(false);
    }
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMoveFirstTime}
      className="min-h-screen relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28 md:pt-32 select-none overflow-x-hidden"
    >
      {/* Balanced Editorial Hero Spread */}
      <div className="my-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full max-w-7xl mx-auto relative z-10">
        
        {/* Left Editorial Typographic Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 w-full lg:w-1/2 max-w-2xl">
          
          {/* Greeting Accent */}
          <div className="font-mono text-xs sm:text-sm text-ink-muted flex items-center gap-2 tracking-wider">
            <span>hi, i'm</span>
            <span className="w-12 sm:w-16 h-px bg-paper-border inline-block" />
            <span>✦</span>
          </div>

          {/* Unclipped Responsive Typography */}
          <div className="w-full">
            <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] leading-[0.85] tracking-tight text-ink uppercase select-none">
              <div>pranavi</div>
              <div className="-mt-1 sm:-mt-3 md:-mt-4">jain</div>
            </h1>
          </div>

          {/* Subtitles & Information */}
          <div className="space-y-2 pt-1">
            <div className="font-mono text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold text-ink">
              SOFTWARE ENGINEER
            </div>
            <div className="font-mono text-xs text-ink-muted uppercase tracking-wider leading-relaxed">
              RESILIENT BACKEND / INTELLIGENT SYSTEMS / CSE '27
            </div>
          </div>

          {/* Action Buttons */}
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

          {/* Scroll Prompt */}
          <div className="pt-4 font-mono text-xs text-ink-muted flex items-center gap-2">
            <span>↓</span>
            <span className="lowercase">scroll to explore</span>
          </div>
        </div>

        {/* Right Side: Interactive 3D Companion Living Area */}
        <div className="w-full lg:w-1/2 flex flex-col items-center relative min-h-[360px] sm:min-h-[440px]">
          
          {/* Discoverable Hint Label */}
          <div className="h-6 mb-1">
            <AnimatePresence>
              {showHint && (
                <motion.span
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-xs text-ink-muted italic tracking-wide"
                >
                  move your cursor →
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* 3D Character Canvas */}
          <CursorChaseCanvas />

        </div>

      </div>
    </section>
  );
};

export default Hero;

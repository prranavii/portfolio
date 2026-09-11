import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-between p-4 sm:p-8 md:p-16 pt-20 sm:pt-22 md:pt-24 select-none overflow-hidden"
    >
      {/* Top Corner Markers */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-muted tracking-widest">
        <span>2023</span>
        <span>2027</span>
      </div>

      {/* Center Typographic Header */}
      <div 
        className="my-auto py-4 sm:py-6 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16 w-full max-w-6xl mx-auto"
      >
        {/* Refined Crisp Name Title */}
        <div className="cursor-pointer group">
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-ink uppercase select-none">
            <span className="block">Pranavi</span>
            <span className="block text-ink-secondary group-hover:text-ink transition-colors">Jain</span>
          </h1>
        </div>

        {/* Right Label Block */}
        <div className="flex flex-col items-center lg:items-start space-y-2 sm:space-y-3 text-center lg:text-left">
          <div className="font-mono text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold text-ink">
            SOFTWARE ENGINEER
          </div>
          <div className="font-mono text-xs text-ink-muted uppercase tracking-wider max-w-xs leading-relaxed">
            Resilient Backend / Intelligent Systems / CSE '27
          </div>

          <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono">
            <a 
              href="#about"
              className="border-b border-ink text-ink hover:text-ink-secondary transition-colors"
            >
              [ .Curriculum Vitae ]
            </a>
            <a 
              href="#work"
              className="border-b border-ink text-ink hover:text-ink-secondary transition-colors"
            >
              [ .Selected Works ]
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Corner Markers */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0 w-full font-mono text-xs sm:text-sm text-ink-muted tracking-wider pt-6 sm:pt-8 border-t border-paper-border/50">
        <span>Software & Systems</span>
        <span>Distributed AI</span>
      </div>
    </section>
  );
};

export default Hero;

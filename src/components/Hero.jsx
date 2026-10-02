import React from 'react';
import { portfolioData } from '../data/portfolioData';
import HeroBackground3D from './HeroBackground3D';

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center items-center p-4 sm:p-8 md:p-16 pt-24 sm:pt-28 md:pt-32 select-none overflow-hidden"
    >
      {/* 3D Animated Background Canvas */}
      <HeroBackground3D />

      {/* Center Typographic Masterpiece */}
      <div className="my-auto py-4 sm:py-6 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16 w-full max-w-6xl mx-auto relative z-10">
        
        {/* Crisp Bold Name Display (Clean & Static) */}
        <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-tight text-ink uppercase select-none">
          <div>pranavi</div>
          <div className="-mt-1 sm:-mt-3 md:-mt-5">jain</div>
        </h1>

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
    </section>
  );
};

export default Hero;

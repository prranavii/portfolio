import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personalInfo } = portfolioData;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center items-center p-4 sm:p-8 md:p-16 pt-24 sm:pt-28 md:pt-32 select-none overflow-hidden"
    >
      {/* Center Theatrical Blurred Typographic Masterpiece */}
      <div 
        className="my-auto py-4 sm:py-6 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16 w-full max-w-6xl mx-auto"
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
      >
        {/* The Blurred "pranavi / jain" Interactive Animation Composition */}
        <div className="relative cursor-pointer group uppercase">
          {/* Background Blurred Glow Shadow Layer */}
          <div 
            className="absolute -inset-4 bg-ink/10 filter blur-xl rounded-full opacity-60 transition-opacity duration-700 pointer-events-none"
          />

          {/* Layer 1: Blurred Depth-of-Field Echo */}
          <div 
            className={`font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-tight text-ink/80 transition-all duration-700 select-none ${
              isFocused ? 'filter blur-[3px] opacity-70' : 'filter blur-[8px] md:blur-[12px] opacity-90'
            }`}
          >
            <div>pranavi</div>
            <div className="-mt-1 sm:-mt-3 md:-mt-5">jain</div>
          </div>

          {/* Layer 2: Semi-sharp Focal Layer with optical contrast */}
          <div 
            className="absolute inset-0 font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-tight text-ink select-none mix-blend-multiply transition-all duration-700"
            style={{
              clipPath: isFocused 
                ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' 
                : 'polygon(35% 0%, 100% 0%, 85% 100%, 20% 100%)'
            }}
          >
            <div>pranavi</div>
            <div className="-mt-1 sm:-mt-3 md:-mt-5">jain</div>
          </div>

          {/* Layer 3: Sharp crisp overlay accents */}
          <div 
            className="absolute inset-0 font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-tight text-transparent select-none pointer-events-none"
            style={{
              WebkitTextStroke: '1px rgba(20, 20, 20, 0.4)',
              opacity: isFocused ? 0.9 : 0.4,
              transition: 'opacity 0.5s ease'
            }}
          >
            <div>pranavi</div>
            <div className="-mt-1 sm:-mt-3 md:-mt-5">jain</div>
          </div>
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
    </section>
  );
};

export default Hero;

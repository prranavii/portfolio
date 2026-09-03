import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personalInfo } = portfolioData;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-between p-6 sm:p-10 md:p-16 pt-24 md:pt-28 select-none overflow-hidden"
    >
      {/* Top Corner Markers */}
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-muted tracking-widest">
        <span>2023</span>
        <span>2027</span>
      </div>

      {/* Center Theatrical Blurred Typographic Masterpiece (Daiana Pagnotta Reference) */}
      <div 
        className="my-auto py-12 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl mx-auto"
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
      >
        {/* The Blurred "port / folio" Composition */}
        <div className="relative cursor-pointer group">
          {/* Background Blurred Glow Shadow Layer */}
          <div 
            className="absolute -inset-4 bg-ink/10 filter blur-xl rounded-full opacity-60 transition-opacity duration-700 pointer-events-none"
          />

          {/* Layer 1: Blurred Depth-of-Field Echo */}
          <div 
            className={`font-sans font-black text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tight text-ink/80 transition-all duration-700 select-none ${
              isFocused ? 'filter blur-[3px] opacity-70' : 'filter blur-[10px] md:blur-[14px] opacity-90'
            }`}
          >
            <div>port</div>
            <div className="-mt-2 sm:-mt-4 md:-mt-6">folio</div>
          </div>

          {/* Layer 2: Semi-sharp Focal Layer with optical contrast */}
          <div 
            className="absolute inset-0 font-sans font-black text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tight text-ink select-none mix-blend-multiply transition-all duration-700"
            style={{
              clipPath: isFocused 
                ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' 
                : 'polygon(35% 0%, 100% 0%, 85% 100%, 20% 100%)'
            }}
          >
            <div>port</div>
            <div className="-mt-2 sm:-mt-4 md:-mt-6">folio</div>
          </div>

          {/* Layer 3: Sharp crisp overlay accents */}
          <div 
            className="absolute inset-0 font-sans font-black text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tight text-transparent select-none pointer-events-none"
            style={{
              WebkitTextStroke: '1px rgba(20, 20, 20, 0.4)',
              opacity: isFocused ? 0.9 : 0.4,
              transition: 'opacity 0.5s ease'
            }}
          >
            <div>port</div>
            <div className="-mt-2 sm:-mt-4 md:-mt-6">folio</div>
          </div>
        </div>

        {/* Right Label Block (As seen in Pagnotta cover) */}
        <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
          <div className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-ink">
            PRANAVI JAIN
          </div>
          <div className="font-mono text-[11px] text-ink-muted uppercase tracking-wider max-w-xs leading-relaxed">
            Software Engineering / Intelligent Systems / CSE '27
          </div>

          <div className="pt-4 flex items-center gap-4 text-xs font-mono">
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
              [ .Contenido ]
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Corner Markers */}
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-muted tracking-wider pt-8 border-t border-paper-border/50">
        <span>Software & Systems</span>
        <span>Distributed AI</span>
      </div>
    </section>
  );
};

export default Hero;

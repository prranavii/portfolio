import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="skills" className="py-10 md:py-14 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-8 sm:mb-12">
        <span className="uppercase tracking-widest text-ink font-semibold">Technical Stack & Skills</span>
        <span className="text-ink-muted text-xs">02</span>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Intro Tagline */}
        <motion.div {...fadeUp} className="space-y-2">
          <h2 className="font-mono font-bold text-2xl sm:text-3xl uppercase tracking-tight text-ink">
            .ENGINEERING TOOLKIT
          </h2>
          <p className="typewriter-text text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed">
            Technologies, frameworks, and intelligent systems algorithms used to architect resilient software and RAG microservices.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((cat, index) => (
            <div 
              key={cat.name} 
              className="border border-paper-border bg-paper-light/70 p-6 space-y-4 transition-all duration-300 hover:border-ink hover:shadow-xs"
            >
              <div className="flex justify-between items-center border-b border-paper-border pb-3 font-mono">
                <h3 className="font-bold text-xs uppercase tracking-wider text-ink">
                  .{cat.name}
                </h3>
                <span className="text-[10px] text-ink-muted">0{index + 1}</span>
              </div>

              <div className="flex flex-wrap gap-2 font-mono text-xs pt-1">
                {cat.items.map((item) => (
                  <span 
                    key={item.name}
                    title={item.useCase}
                    className="px-2.5 py-1 border border-paper-border bg-paper text-ink font-medium hover:border-ink hover:bg-paper-dark transition-colors cursor-default"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;

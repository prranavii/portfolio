import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="skills" className="py-10 md:py-14 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-8 sm:mb-10">
        <span className="uppercase tracking-widest text-ink font-semibold">04 — TECHNICAL STACK</span>
        <span className="text-ink-muted text-xs">04</span>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Category Grid */}
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skills.categories.map((cat, index) => (
            <div 
              key={cat.name} 
              className="border border-paper-border bg-paper-light/80 p-5 space-y-3 transition-all duration-300 hover:border-ink"
            >
              <div className="flex justify-between items-center border-b border-paper-border pb-2 font-mono">
                <h3 className="font-bold text-xs uppercase tracking-wider text-ink">
                  .{cat.name}
                </h3>
                <span className="text-[10px] text-ink-muted">0{index + 1}</span>
              </div>

              <div className="flex flex-wrap gap-2 font-mono text-xs pt-1">
                {cat.items.map((item) => (
                  <span 
                    key={item}
                    className="px-2.5 py-1 border border-paper-border bg-paper text-ink font-medium"
                  >
                    {item}
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

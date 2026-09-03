import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-secondary border-b border-paper-border pb-4 mb-14">
        <span>Portfolio/ Pranavi Jain</span>
        <span className="uppercase tracking-widest text-ink font-semibold">.Toolkit / Software</span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {portfolioData.skills.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="border border-paper-border p-5 bg-paper-light/60 space-y-3"
            >
              <div className="flex justify-between items-baseline border-b border-paper-border/80 pb-2">
                <h3 className="font-mono font-bold text-xs uppercase tracking-tight text-ink">
                  .{category.name}
                </h3>
                <span className="font-mono text-[10px] text-ink-muted">
                  SEC.0{index + 1}
                </span>
              </div>

              <div className="space-y-2">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-ink font-medium">{item.name}</span>
                    <span className="text-ink-muted text-[10px] truncate max-w-[140px] text-right">
                      {item.useCase}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Corner Markers */}
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-muted tracking-widest pt-12 mt-16 border-t border-paper-border/50">
        <span>2023</span>
        <span>2027</span>
      </div>
    </section>
  );
};

export default Skills;

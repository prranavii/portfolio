import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CurrentlyBuilding = () => {
  const { currentlyBuilding } = portfolioData;

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 border-t border-dark-border bg-dark-surface/30 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-8">
          <Sparkles size={14} />
          <span>CURRENTLY BUILDING & EXPLORING</span>
          <span className="w-12 h-px bg-lime-accent/30 inline-block ml-2" />
        </div>

        {/* Concise 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyBuilding.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-dark-card border border-dark-border hover:border-lime-accent/50 transition-all duration-200 font-mono space-y-4 lime-glow-card"
            >
              <div className="flex items-center justify-between border-b border-dark-border pb-3">
                <span className="text-xs text-lime-accent font-bold">
                  0{idx + 1} // ACTIVE RESEARCH
                </span>
                <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
              </div>

              <h3 className="font-display font-black text-xl text-ink-primary uppercase tracking-tight">
                {item.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurrentlyBuilding;

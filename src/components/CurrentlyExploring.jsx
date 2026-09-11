import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CurrentlyExploring = () => {
  return (
    <section className="py-12 border-y border-dark-border bg-dark-surface/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold">
          <Sparkles size={14} />
          <span>CURRENTLY EXPLORING</span>
          <span className="w-12 h-px bg-lime-accent/30 inline-block ml-2" />
        </div>

        {/* Horizontal / Grid Cards Presentation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {portfolioData.exploring.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-3.5 rounded bg-dark-card border border-dark-border hover:border-lime-accent/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-[10px] text-lime-accent mb-1 font-semibold">
                  0{idx + 1}
                </div>
                <h4 className="font-mono text-xs font-bold text-ink-primary group-hover:text-lime-accent transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-[10px] font-sans text-ink-muted mt-2 leading-tight">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurrentlyExploring;

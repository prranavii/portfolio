import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Briefcase, ExternalLink, ArrowRight, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const FreelanceWork = () => {
  const { freelanceWork } = portfolioData;

  return (
    <section id="freelance" className="py-20 px-4 sm:px-8 md:px-12 border-t border-dark-border bg-dark-surface/40 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-8">
          <Briefcase size={14} />
          <span>FREELANCE / CLIENT WORK</span>
          <span className="w-12 h-px bg-lime-accent/30 inline-block ml-2" />
        </div>

        {/* Client Work Grid */}
        <div className="space-y-6">
          {freelanceWork.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-xl bg-dark-card border border-dark-border hover:border-lime-accent/40 transition-all duration-200 space-y-6 font-mono lime-glow-card"
            >
              
              {/* Header bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-dark-border pb-4">
                <div>
                  <span className="text-xs text-lime-accent font-bold uppercase tracking-wider block">
                    CLIENT WORK // {item.client}
                  </span>
                  <h3 className="font-display font-black text-2xl text-ink-primary uppercase tracking-tight mt-1">
                    {item.product}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded bg-dark-surface border border-dark-border text-xs text-lime-accent font-semibold">
                  STATUS: {item.status}
                </span>
              </div>

              {/* Structured Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs sm:text-sm">
                
                {/* Problem */}
                <div className="p-4 rounded bg-dark-surface border border-dark-border space-y-2">
                  <span className="font-mono text-[11px] font-bold text-lime-accent uppercase tracking-wider block">
                    → PROBLEM
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-4 rounded bg-dark-surface border border-dark-border space-y-2">
                  <span className="font-mono text-[11px] font-bold text-lime-accent uppercase tracking-wider block">
                    → SOLUTION & PRODUCT
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                {/* Key Functionality */}
                <div className="p-4 rounded bg-dark-surface border border-dark-border space-y-2">
                  <span className="font-mono text-[11px] font-bold text-lime-accent uppercase tracking-wider block">
                    → KEY FUNCTIONALITY
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {item.functionality}
                  </p>
                </div>

              </div>

              {/* Tech Stack Footer */}
              <div className="pt-4 border-t border-dark-border flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-ink-muted text-[11px] uppercase">STACK:</span>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-dark-surface border border-dark-border text-ink-primary font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="text-lime-accent hover:underline flex items-center gap-1 font-semibold">
                    View Client Product <ExternalLink size={14} />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FreelanceWork;

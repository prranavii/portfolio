import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Journey = () => {
  const { experiences } = portfolioData;
  const [expandedId, setExpandedId] = useState('ordinal');

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="journey" className="py-12 md:py-20 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Header bar of section */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-8 sm:mb-12">
        <span className="uppercase tracking-widest text-ink font-semibold">Experience & Roles</span>
        <span className="text-ink-muted text-xs">04</span>
      </div>

      {/* Experience Cards Grid */}
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => {
          const isOrdinal = exp.id === 'ordinal';
          const isExpanded = expandedId === exp.id;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className={`border transition-all duration-300 ${
                isOrdinal 
                  ? 'border-ink bg-paper-light shadow-sm p-6 sm:p-8' 
                  : 'border-paper-border bg-paper/60 hover:bg-paper-light/70 p-6 sm:p-8'
              }`}
            >
              {/* Top Header Row */}
              <div 
                onClick={() => toggleExpand(exp.id)} 
                className="cursor-pointer space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-ink-secondary border-b border-paper-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-ink text-paper font-bold text-[10px] uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {exp.badge}
                      </span>
                    )}
                    {!exp.isCurrent && (
                      <span className="inline-block px-2 py-0.5 border border-paper-border text-ink-secondary text-[10px] uppercase tracking-wider font-semibold">
                        {exp.badge}
                      </span>
                    )}
                    <span className="font-semibold text-ink">{exp.company}</span>
                  </div>
                  <span className="font-mono text-ink-muted text-xs">{exp.period}</span>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <h3 className={`font-mono font-bold text-lg sm:text-xl uppercase tracking-tight text-ink ${isOrdinal ? 'text-ink' : ''}`}>
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-ink-muted hover:text-ink transition-colors select-none">
                    {isExpanded ? '[ Less - ]' : '[ Details + ]'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="typewriter-text text-xs sm:text-sm text-ink-secondary leading-relaxed pt-3">
                {exp.description}
              </p>

              {/* Highlights & Tags */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-4 mt-4 border-t border-paper-border/60 space-y-3"
                  >
                    <div className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
                      Key Focus & Skill Areas:
                    </div>
                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                      {exp.highlights.map((item) => (
                        <span 
                          key={item} 
                          className="px-2.5 py-1 border border-paper-border bg-paper text-ink font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Journey;

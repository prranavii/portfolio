import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Journey = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 md:px-12 border-t border-dark-border relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-dark-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-2">
              <Sparkles size={14} />
              <span>CAREER & EDUCATION</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-ink-primary">
              EXPERIENCE TIMELINE
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary mt-3 md:mt-0 max-w-md">
            Academic foundation in Computer Science & Engineering combined with practical AI research and full-stack software development.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative max-w-4xl mx-auto border-l-2 border-dark-border pl-6 sm:pl-10 space-y-12">
          {portfolioData.journey.map((item, idx) => (
            <motion.div
              key={`${item.year}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-dark-card border-2 border-lime-accent group-hover:bg-lime-accent group-hover:scale-125 transition-all duration-200" />

              <div className="p-6 rounded-xl bg-dark-card border border-dark-border hover:border-lime-accent/50 transition-all duration-200 space-y-4 lime-glow-card">
                
                {/* Year & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs border-b border-dark-border pb-3">
                  <div className="flex items-center gap-2 text-lime-accent font-bold text-sm">
                    <Calendar size={14} />
                    <span>{item.year}</span>
                  </div>
                  <span className="text-ink-muted uppercase tracking-wider font-semibold">
                    {item.company}
                  </span>
                </div>

                {/* Role Title */}
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink-primary uppercase tracking-tight group-hover:text-lime-accent transition-colors">
                    {item.role}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-dark-surface border border-dark-border text-ink-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Journey;

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const HowIBuild = () => {
  return (
    <section className="py-24 px-4 sm:px-8 md:px-12 border-t border-dark-border relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-dark-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-2">
              <Sparkles size={14} />
              <span>ENGINEERING METHODOLOGY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-ink-primary">
              HOW I BUILD
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary mt-3 md:mt-0 max-w-md">
            Disciplined software engineering lifecycle from initial problem decomposition to shipping production intelligent systems.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.howIBuild.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-xl bg-dark-card border border-dark-border hover:border-lime-accent/50 transition-all duration-200 group flex flex-col justify-between lime-glow-card"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs border-b border-dark-border pb-3">
                  <span className="text-lime-accent font-bold text-sm">
                    {step.step}
                  </span>
                  <span className="text-ink-muted uppercase tracking-wider">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-mono font-bold text-base text-ink-primary group-hover:text-lime-accent transition-colors">
                  {step.title}
                </h3>

                <p className="font-sans text-xs text-ink-secondary leading-relaxed pt-1">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-dark-border/60 flex items-center justify-between font-mono text-[10px] text-ink-muted group-hover:text-lime-accent transition-colors">
                <span>SYSTEM PROCESS</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowIBuild;

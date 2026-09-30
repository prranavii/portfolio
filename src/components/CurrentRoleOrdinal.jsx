import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Mic, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CurrentRoleOrdinal = () => {
  const { ordinalRole } = portfolioData;

  return (
    <section id="role" className="py-20 px-4 sm:px-8 md:px-12 border-y border-dark-border bg-dark-surface/60 relative overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-6">
          <Sparkles size={14} />
          <span>{ordinalRole.badge}</span>
          <span className="w-12 h-px bg-lime-accent/30 inline-block ml-2" />
        </div>

        {/* Featured Current Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-dark-card border-2 border-lime-accent/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden lime-glow-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Role Overview */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-ink-muted">
                  <span className="px-2.5 py-1 rounded bg-lime-accent text-dark font-bold uppercase tracking-wider">
                    {ordinalRole.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-lime-accent font-semibold">
                    <Calendar size={14} />
                    <span>{ordinalRole.duration}</span>
                  </div>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl text-ink-primary uppercase tracking-tight">
                  {ordinalRole.role}
                </h3>
                <div className="font-mono text-base font-bold text-lime-accent tracking-wider">
                  @ {ordinalRole.company}
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-base text-ink-secondary leading-relaxed font-normal">
                {ordinalRole.description}
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-2.5 font-sans text-sm text-ink-primary">
                {ordinalRole.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-lime-accent mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Focus Areas Badge Grid */}
            <div className="lg:col-span-5 p-6 rounded-lg bg-dark-surface border border-dark-border space-y-4 font-mono">
              <div className="flex items-center gap-2 border-b border-dark-border pb-3 text-xs text-ink-muted uppercase tracking-widest font-semibold">
                <Mic size={15} className="text-lime-accent" />
                <span>ENGINEERING FOCUS AREAS</span>
              </div>

              <div className="space-y-2">
                {ordinalRole.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded bg-dark-card border border-dark-border flex items-center justify-between text-xs text-ink-primary hover:border-lime-accent/40 transition-colors"
                  >
                    <span className="font-medium">{area}</span>
                    <span className="text-[10px] text-lime-accent font-mono font-bold">0{idx + 1}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-dark-border flex items-center justify-between text-[11px] text-ink-muted">
                <span>SYSTEM AGENTIC WORKFLOWS</span>
                <span className="text-lime-accent font-semibold">ACTIVE DEVELOPMENT</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CurrentRoleOrdinal;

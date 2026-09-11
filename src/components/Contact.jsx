import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, ArrowUpRight, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="py-28 px-4 sm:px-8 md:px-12 border-t border-dark-border bg-dark-surface/40 relative overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-lime-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Badge Header */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border">
          <Sparkles size={14} />
          <span>GET IN TOUCH</span>
        </div>

        {/* High Impact Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-ink-primary max-w-3xl mx-auto leading-[0.95]">
          LET'S BUILD SOMETHING INTELLIGENT.
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-xl text-ink-secondary max-w-xl mx-auto leading-relaxed">
          Have an interesting idea, opportunity or problem to solve? Let's talk.
        </p>

        {/* CTA Buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
          <a
            href={personalInfo.email}
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-lime-accent text-dark font-bold text-sm uppercase tracking-wider hover:bg-lime-glow transition-all duration-200 shadow-xl shadow-lime-accent/10"
          >
            <Mail size={16} /> Email Me <ArrowRight size={16} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded bg-dark-card border border-dark-border hover:border-lime-accent/50 text-ink-primary hover:text-lime-accent font-semibold uppercase tracking-wider transition-all duration-200"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded bg-dark-card border border-dark-border hover:border-lime-accent/50 text-ink-primary hover:text-lime-accent font-semibold uppercase tracking-wider transition-all duration-200"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;

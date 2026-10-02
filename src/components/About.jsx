import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personalInfo } = portfolioData;

  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  const emailDisplay = personalInfo.email.replace('mailto:', '');

  return (
    <section id="about" className="py-10 md:py-14 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-8 sm:mb-10">
        <span className="uppercase tracking-widest text-ink font-semibold">01 — ABOUT</span>
        <span className="text-ink-muted text-xs">01</span>
      </div>

      <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 max-w-6xl mx-auto">
        
        {/* Left Column: Identity & Contact */}
        <div className="lg:col-span-5 space-y-3 font-mono text-xs sm:text-sm">
          <h2 className="font-bold text-ink uppercase tracking-wider text-base sm:text-lg">
            PRANAVI JAIN
          </h2>
          <p className="text-ink-secondary">
            Computer Science Engineer (Class of '27)
          </p>
          <p className="text-ink-muted text-xs">
            {personalInfo.location}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
            <a href={personalInfo.email} className="text-ink underline hover:text-ink-secondary">
              {emailDisplay}
            </a>
            <span>·</span>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-ink hover:underline">
              GitHub ↗
            </a>
            <span>·</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-ink hover:underline">
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Column: Short Bio & Small Facts */}
        <div className="lg:col-span-7 space-y-5">
          <p className="typewriter-text text-sm sm:text-base text-ink leading-relaxed font-medium">
            "{personalInfo.shortBio}"
          </p>

          {/* Compact Fact Pills */}
          <div className="flex flex-wrap gap-2 font-mono text-xs text-ink-secondary pt-1">
            <span className="px-2.5 py-1 border border-paper-border bg-paper-light">CSE '27</span>
            <span className="px-2.5 py-1 border border-paper-border bg-paper-light">Greater Noida, India</span>
            <span className="px-2.5 py-1 border border-paper-border bg-paper-light">Software Engineering / Backend / AI</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default About;

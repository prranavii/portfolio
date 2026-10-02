import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personalInfo } = portfolioData;

  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const emailDisplay = personalInfo.email.replace('mailto:', '');

  return (
    <section id="about" className="py-10 md:py-14 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Header bar */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-6 sm:mb-8">
        <span className="uppercase tracking-widest text-ink font-semibold">Curriculum Vitae</span>
        <span className="text-ink-muted text-xs">01</span>
      </div>

      {/* Compact Editorial 2-Column Spread */}
      <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 max-w-6xl mx-auto">
        
        {/* Left Column: Identity & Exact Short Bio */}
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-1 font-mono text-sm">
            <h2 className="font-bold text-ink uppercase tracking-wider text-base sm:text-lg">
              PRANAVI JAIN
            </h2>
            <p className="text-ink-secondary text-xs sm:text-sm">
              Computer Science Engineer (Class of '27)
            </p>
            <p className="text-ink-muted text-xs">
              India — Global Remote
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

          {/* Exact Short Bio */}
          <p className="typewriter-text text-xs sm:text-sm text-ink leading-relaxed pt-1">
            "I build backend systems and intelligent applications, with a focus on clean architecture, RAG, and practical AI."
          </p>
        </div>

        {/* Right Column: Compact Education */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase border-b border-paper-border pb-1.5">
            .EDUCATION
          </h3>
          <div className="font-mono text-xs sm:text-sm space-y-1.5">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline text-ink font-semibold">
              <span>B.Tech Computer Science & Engineering</span>
              <span className="text-ink-muted text-xs font-normal">2023 — 2027</span>
            </div>
            <p className="text-ink-secondary text-xs font-medium">
              Galgotias University
            </p>
            <p className="text-ink-muted text-[11px] leading-relaxed pt-0.5">
              Focus on Algorithms, Distributed Computing & AI Systems.
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default About;

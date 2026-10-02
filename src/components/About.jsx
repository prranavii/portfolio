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
    <section id="about" className="py-12 md:py-20 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Header bar */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-8 sm:mb-12">
        <span className="uppercase tracking-widest text-ink font-semibold">Curriculum Vitae</span>
        <span className="text-ink-muted text-xs">01</span>
      </div>

      {/* Main Grid Spread */}
      <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-6xl mx-auto">
        
        {/* Left Column: Identity & Concise Phrase Bio */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Clean Identity Header */}
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
            <div className="pt-3 flex items-center gap-4 text-xs font-mono">
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

          {/* Shortened Phrase-Based About */}
          <div className="space-y-3 pt-2">
            <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase">
              .ABOUT ME
            </h3>
            <ul className="font-mono text-xs sm:text-sm text-ink-secondary space-y-2 leading-relaxed">
              <li>- Focus on resilient backend systems & production AI microservices.</li>
              <li>- RAG pipelines, offline LLM orchestration (LangChain, Ollama) & vector search optimization.</li>
              <li>- Algorithmic discipline, clean software design & performant full-stack architectures.</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Education */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* .EDUCATION */}
          <div className="space-y-3">
            <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase">
              .EDUCATION
            </h3>
            <div className="font-mono text-xs sm:text-sm space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline text-ink font-semibold">
                <span>B.Tech Computer Science & Engineering</span>
                <span className="text-ink-muted text-xs font-normal">2023 — 2027</span>
              </div>
              <p className="text-ink-secondary text-xs leading-relaxed">
                Focus on Algorithms, Distributed Computing & AI Systems.
              </p>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default About;

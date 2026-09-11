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
        <span>Portfolio/ Pranavi Jain</span>
        <span className="uppercase tracking-widest text-ink font-semibold">Curriculum Vitae</span>
      </div>

      {/* Main Grid Spread with generous breathing room */}
      <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-6xl mx-auto">
        
        {/* Left Column: Identity & Narrative Bio */}
        <div className="lg:col-span-5 space-y-8">
          
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

          {/* Narrative About */}
          <div className="space-y-3 pt-2">
            <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase">
              .ABOUT ME
            </h3>
            <div className="font-mono text-xs sm:text-sm text-ink-secondary leading-relaxed space-y-4">
              <p>
                I am a Computer Science & Engineering student (Class of 2027) focused on building resilient backend systems, robust API microservices, and production-ready intelligent applications.
              </p>
              <p>
                My engineering focus centers on Retrieval-Augmented Generation (RAG), offline LLM orchestration using LangChain & Ollama, vector search optimization, and performant full-stack architectures.
              </p>
              <p>
                Driven by algorithmic discipline and clean software design, I transform complex data workflows into performant software built for real-world impact.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Education, Experience, Software & Skills */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* .EDUCATION */}
          <div className="space-y-2">
            <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase">
              .EDUCATION
            </h3>
            <div className="font-mono text-xs sm:text-sm space-y-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline text-ink font-semibold">
                <span>B.Tech Computer Science & Engineering</span>
                <span className="text-ink-muted text-xs font-normal">2023 — 2027</span>
              </div>
              <p className="text-ink-secondary text-xs">
                Focus on Algorithms, Distributed Computing & AI Systems
              </p>
            </div>
          </div>

          {/* .EXPERIENCE */}
          <div className="space-y-2">
            <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase">
              .EXPERIENCE
            </h3>
            <div className="font-mono text-xs sm:text-sm space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline text-ink font-semibold">
                <span>AI/ML Engineer & Systems Research</span>
                <span className="text-ink-muted text-xs font-normal">2024 — present</span>
              </div>
              <ul className="text-xs text-ink-secondary space-y-1 pt-1 leading-relaxed">
                <li>- Design of offline RAG pipelines & chunking strategies.</li>
                <li>- FAISS vector indexing & local LLM runtime optimization.</li>
                <li>- Production full-stack services with real-time SSE streams.</li>
              </ul>
            </div>
          </div>

          {/* Clean Dual Column Lists: .SOFTWARE & .TECHNICAL SKILLS */}
          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-paper-border/60">
            {/* .SOFTWARE */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase">
                .SOFTWARE
              </h4>
              <ul className="font-mono text-xs text-ink-secondary space-y-1.5 leading-relaxed">
                <li>Python / C++</li>
                <li>React / Next.js</li>
                <li>FastAPI / Node.js</li>
                <li>FAISS / Vector DBs</li>
                <li>LangChain / Ollama</li>
                <li>MongoDB / PostgreSQL</li>
                <li>Tailwind CSS / Git</li>
              </ul>
            </div>

            {/* .TECHNICAL SKILLS */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase">
                .TECHNICAL SKILLS
              </h4>
              <ul className="font-mono text-xs text-ink-secondary space-y-1.5 leading-relaxed">
                <li>RAG Architecture</li>
                <li>System Optimization</li>
                <li>Algorithmic Problem Solving</li>
                <li>800+ Solved Algorithms</li>
                <li>Concurrency Control</li>
                <li>API Architecture</li>
              </ul>
            </div>
          </div>

        </div>

      </motion.div>

      {/* Bottom Corner Markers */}
      <div className="flex justify-between items-center w-full font-mono text-sm text-ink-muted tracking-widest pt-4 mt-12 border-t border-paper-border/50">
        <span>2023</span>
        <span>2027</span>
      </div>
    </section>
  );
};

export default About;

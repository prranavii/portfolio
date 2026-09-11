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
    <section id="about" className="py-10 md:py-16 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Header bar of section */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-6">
        <span>Portfolio/ Pranavi Jain</span>
        <span className="uppercase tracking-widest text-ink font-semibold">Curriculum Vitae</span>
      </div>

      {/* Main Grid Spread */}
      <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
        
        {/* Left Column: Executive Identity Spec & Narrative Bio */}
        <div className="lg:col-span-5 space-y-6">
          {/* Executive Contact & Spec Badge */}
          <div className="border border-paper-border p-5 bg-paper-light/60 font-mono text-xs space-y-3">
            <div className="flex justify-between items-baseline border-b border-paper-border/80 pb-2">
              <span className="font-bold text-sm text-ink uppercase tracking-wider">PRANAVI JAIN</span>
              <span className="text-ink-muted text-[11px]">CSE '27 // CORE</span>
            </div>
            <div className="space-y-2 text-ink-secondary">
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Role:</span>
                <span className="text-ink font-medium">Software & Systems Engineer</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Location:</span>
                <span className="text-ink">India — Global Remote</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Direct Email:</span>
                <a href={personalInfo.email} className="text-ink underline hover:text-ink-secondary font-semibold">
                  {emailDisplay}
                </a>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-paper-border/50 text-ink">
                <span className="text-ink-muted">Profiles:</span>
                <div className="flex gap-4">
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="underline hover:text-ink-secondary font-medium">
                    GitHub ↗
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-ink-secondary font-medium">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="space-y-3">
            <h3 className="font-mono font-bold text-sm text-ink tracking-tight">
              .ABOUT ME
            </h3>
            <div className="font-mono text-xs sm:text-sm text-ink-secondary leading-relaxed space-y-3">
              <p>
                I am a Computer Science & Engineering student (Class of 2027) focused on building resilient backend systems, robust API microservices, and production-ready intelligent applications.
              </p>
              <p>
                My engineering focus centers on Retrieval-Augmented Generation (RAG), offline LLM orchestration using LangChain & Ollama, vector search optimization, and performant full-stack architectures.
              </p>
              <p>
                Driven by algorithmic discipline and clean software design, I transform complex data workflows into intuitive, high-performance software built for real-world impact.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Education, Experience, Software & Capabilities */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          
          {/* .EDUCATION */}
          <div className="space-y-2.5">
            <h3 className="font-mono font-bold text-sm text-ink tracking-tight border-b border-paper-border/60 pb-1.5">
              .EDUCATION
            </h3>
            <div className="font-mono text-xs sm:text-sm space-y-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline text-ink font-semibold">
                <span>B.Tech Computer Science & Engineering</span>
                <span className="text-ink-muted text-xs">2023 — 2027</span>
              </div>
              <p className="text-ink-secondary text-xs">
                Focus on Algorithms, Distributed Computing & AI Systems
              </p>
            </div>
          </div>

          {/* .EXPERIENCE */}
          <div className="space-y-2.5">
            <h3 className="font-mono font-bold text-sm text-ink tracking-tight border-b border-paper-border/60 pb-1.5">
              .EXPERIENCE
            </h3>
            <div className="font-mono text-xs sm:text-sm space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline text-ink font-semibold">
                  <span>AI/ML Engineer & Systems Research</span>
                  <span className="text-ink-muted text-xs">2024 — present</span>
                </div>
                <div className="text-xs text-ink-secondary space-y-1 mt-2">
                  <p className="flex items-start gap-2">
                    <span className="text-ink font-bold">•</span>
                    <span>Design of offline RAG pipelines & chunking strategies.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-ink font-bold">•</span>
                    <span>FAISS vector indexing & local LLM runtime optimization.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-ink font-bold">•</span>
                    <span>Production full-stack services with real-time SSE streams.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dual Grid: .SOFTWARE & .TECHNICAL SKILLS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-paper-border/60">
            {/* .SOFTWARE */}
            <div className="space-y-2">
              <h4 className="font-mono font-bold text-xs sm:text-sm text-ink border-b border-paper-border/40 pb-1">
                .SOFTWARE & STACK
              </h4>
              <ul className="font-mono text-xs text-ink-secondary space-y-1.5">
                <li className="flex justify-between"><span>Python / C++</span><span className="text-ink-muted text-[11px]">Core Languages</span></li>
                <li className="flex justify-between"><span>React / Next.js</span><span className="text-ink-muted text-[11px]">Frontend</span></li>
                <li className="flex justify-between"><span>FastAPI / Node.js</span><span className="text-ink-muted text-[11px]">Backend API</span></li>
                <li className="flex justify-between"><span>FAISS / Vector DBs</span><span className="text-ink-muted text-[11px]">Search & Indexing</span></li>
                <li className="flex justify-between"><span>LangChain / Ollama</span><span className="text-ink-muted text-[11px]">LLM Infra</span></li>
                <li className="flex justify-between"><span>MongoDB / PostgreSQL</span><span className="text-ink-muted text-[11px]">Databases</span></li>
                <li className="flex justify-between"><span>Tailwind CSS / Git</span><span className="text-ink-muted text-[11px]">Tooling</span></li>
              </ul>
            </div>

            {/* .TECHNICAL SKILLS */}
            <div className="space-y-2">
              <h4 className="font-mono font-bold text-xs sm:text-sm text-ink border-b border-paper-border/40 pb-1">
                .TECHNICAL CAPABILITIES
              </h4>
              <ul className="font-mono text-xs text-ink-secondary space-y-1.5">
                <li className="flex justify-between"><span>RAG Architecture</span><span className="text-ink-muted text-[11px]">GenAI</span></li>
                <li className="flex justify-between"><span>System Optimization</span><span className="text-ink-muted text-[11px]">Perf</span></li>
                <li className="flex justify-between"><span>Algorithmic Problem Solving</span><span className="text-ink-muted text-[11px]">DSA</span></li>
                <li className="flex justify-between"><span>800+ Solved Algorithms</span><span className="text-ink-muted text-[11px]">LeetCode/GFG</span></li>
                <li className="flex justify-between"><span>Concurrency Control</span><span className="text-ink-muted text-[11px]">Systems</span></li>
                <li className="flex justify-between"><span>API Architecture</span><span className="text-ink-muted text-[11px]">Microservices</span></li>
              </ul>
            </div>
          </div>

        </div>

      </motion.div>

      {/* Bottom Corner Markers */}
      <div className="flex justify-between items-center w-full font-mono text-sm text-ink-muted tracking-widest pt-4 mt-8 border-t border-paper-border/50">
        <span>2023</span>
        <span>2027</span>
      </div>
    </section>
  );
};

export default About;

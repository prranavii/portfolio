import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const softwareStack = [
    { name: 'Python / C++', desc: 'Core language algorithms, low-level efficiency & data processing.' },
    { name: 'React / Next.js', desc: 'Modern reactive component UI frameworks & server-side rendering.' },
    { name: 'FastAPI / Node.js', desc: 'High-performance ASGI microservices & asynchronous event-driven APIs.' },
    { name: 'FAISS / Vector DBs', desc: 'High-density vector indexing & fast semantic similarity search.' },
    { name: 'LangChain / Ollama', desc: 'LLM prompt orchestration, local weights hosting & offline RAG.' },
    { name: 'MongoDB / PostgreSQL', desc: 'Relational data modeling, ACID transactions & document databases.' },
    { name: 'Tailwind CSS / Git', desc: 'Design systems, responsive layout engineering & repository versioning.' },
  ];

  const technicalCapabilities = [
    { title: 'RAG Architecture', note: 'Chunking, embedding strategies & grounded context synthesis.' },
    { title: 'System Optimization', note: 'Low-latency API response loops & local model runtime tuning.' },
    { title: 'Algorithmic Problem Solving', note: 'Data structure optimization & dynamic programming.' },
    { title: '800+ Solved Algorithms', note: 'Proven problem-solving discipline on LeetCode & platforms.' },
    { title: 'Concurrency Control', note: 'Asynchronous event handling, locks & real-time SSE streams.' },
    { title: 'API Architecture', note: 'Clean REST contracts, payload validation & error boundary design.' },
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-8 sm:mb-12">
        <span className="uppercase tracking-widest text-ink font-semibold">Engineering Stack & Skills</span>
        <span className="text-ink-muted text-xs">02</span>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Dual Showcase: Software Stack & Technical Capabilities */}
        <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          
          {/* Software Column */}
          <div className="lg:col-span-6 border border-paper-border bg-paper-light/80 p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-center border-b border-paper-border pb-3">
              <h3 className="font-mono font-bold text-sm sm:text-base text-ink tracking-widest uppercase">
                .SOFTWARE & CORE STACK
              </h3>
              <span className="font-mono text-[10px] text-ink-muted uppercase">TOOLS & PLATFORMS</span>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              {softwareStack.map((item, index) => (
                <div key={item.name} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-3 border-b border-paper-border/40 last:border-0 last:pb-0">
                  <span className="font-bold text-ink shrink-0 sm:w-44">{item.name}</span>
                  <span className="text-ink-secondary text-xs">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Capabilities Column */}
          <div className="lg:col-span-6 border border-paper-border bg-paper-light/80 p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-center border-b border-paper-border pb-3">
              <h3 className="font-mono font-bold text-sm sm:text-base text-ink tracking-widest uppercase">
                .TECHNICAL CAPABILITIES
              </h3>
              <span className="font-mono text-[10px] text-ink-muted uppercase">SYSTEMS & ARCHITECTURE</span>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              {technicalCapabilities.map((item) => (
                <div key={item.title} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-3 border-b border-paper-border/40 last:border-0 last:pb-0">
                  <span className="font-bold text-ink shrink-0 sm:w-48">{item.title}</span>
                  <span className="text-ink-secondary text-xs">{item.note}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Detailed Category Grid (Languages, Backend, Databases, AI Systems) */}
        <motion.div {...fadeUp} className="space-y-6 pt-4 border-t border-paper-border/60">
          <div className="font-mono text-xs text-ink-muted uppercase tracking-wider">
            .SYSTEM CATEGORY BREAKDOWN
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.categories.map((cat) => (
              <div key={cat.name} className="border border-paper-border/70 p-5 bg-paper/60 space-y-3">
                <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-ink border-b border-paper-border pb-2">
                  {cat.name}
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-xs">
                  {cat.items.map((item) => (
                    <span 
                      key={item.name} 
                      className="px-2.5 py-1 border border-paper-border/80 bg-paper-light text-ink font-medium"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

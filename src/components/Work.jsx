import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowUpRight, ExternalLink, GitBranch, Layers, ShieldCheck, Cpu, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom Technical Visual Mockup Components for each project
const ProjectVisualPlaceholder = ({ projectId }) => {
  switch (projectId) {
    case 'intellirag':
      return (
        <div className="w-full h-full bg-dark-surface p-5 flex flex-col justify-between font-mono select-none relative overflow-hidden group">
          <div className="flex justify-between items-center text-[10px] text-ink-muted border-b border-dark-border pb-2">
            <span className="text-lime-accent font-semibold">FIG. 01 — RAG PIPELINE</span>
            <span>FAISS / CHROMADB</span>
          </div>

          <div className="my-auto py-4 flex flex-col items-center justify-center relative">
            <svg viewBox="0 0 200 120" className="w-full max-h-40 stroke-lime-accent stroke-[1.2] fill-none">
              <rect x="20" y="15" width="45" height="24" rx="3" stroke="rgba(255,255,255,0.2)" fill="#111318" />
              <text x="42.5" y="30" fontSize="7" fontFamily="monospace" textAnchor="middle" fill="#F5F5F5" stroke="none">PDF / REPO</text>

              <line x1="65" y1="27" x2="85" y2="27" stroke="#A3E635" strokeDasharray="2 2" />

              <rect x="85" y="15" width="45" height="24" rx="3" stroke="#A3E635" fill="#111318" />
              <text x="107.5" y="30" fontSize="7" fontFamily="monospace" textAnchor="middle" fill="#A3E635" stroke="none">CHUNKS</text>

              <line x1="130" y1="27" x2="150" y2="27" stroke="#A3E635" />

              <circle cx="165" cy="27" r="12" stroke="#A3E635" fill="#111318" />
              <text x="165" y="30" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#F5F5F5" stroke="none">EMBED</text>

              <line x1="107.5" y1="39" x2="107.5" y2="65" stroke="#A3E635" />

              <rect x="55" y="65" width="105" height="30" rx="3" stroke="#A3E635" fill="#0E1014" />
              <text x="107.5" y="83" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="#A3E635" stroke="none">GROQ + LLAMA 3.1 STREAM</text>
            </svg>
          </div>

          <div className="flex justify-between items-end text-[10px] text-ink-muted border-t border-dark-border pt-2">
            <span>OLLAMA / GROQ INFERENCE</span>
            <span className="text-lime-accent font-semibold">100% GROUNDED</span>
          </div>
        </div>
      );

    case 'refactoriq':
      return (
        <div className="w-full h-full bg-dark-surface p-5 flex flex-col justify-between font-mono select-none relative overflow-hidden group">
          <div className="flex justify-between items-center text-[10px] text-ink-muted border-b border-dark-border pb-2">
            <span className="text-lime-accent font-semibold">FIG. 02 — AST ANALYZER</span>
            <span>FASTAPI / SSE</span>
          </div>

          <div className="my-auto py-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full max-h-40 stroke-lime-accent stroke-[1.2] fill-none">
              <rect x="15" y="15" width="75" height="40" rx="3" stroke="rgba(255,255,255,0.15)" fill="#111318" />
              <line x1="22" y1="28" x2="70" y2="28" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 1" />
              <line x1="22" y1="36" x2="60" y2="36" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 1" />
              <text x="52.5" y="48" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#9CA3AF" stroke="none">LEGACY.PY</text>

              <line x1="90" y1="35" x2="110" y2="35" stroke="#A3E635" />

              <circle cx="122" cy="35" r="12" stroke="#A3E635" fill="#111318" />
              <text x="122" y="38" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#A3E635" stroke="none">AST</text>

              <line x1="134" y1="35" x2="154" y2="35" stroke="#A3E635" />

              <rect x="154" y="15" width="35" height="40" rx="3" stroke="#22C55E" fill="#111318" />
              <line x1="160" y1="28" x2="182" y2="28" stroke="#22C55E" strokeWidth="1.5" />
              <line x1="160" y1="36" x2="178" y2="36" stroke="#22C55E" strokeWidth="1.5" />
              <text x="171.5" y="48" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#22C55E" stroke="none">DIFF</text>

              <rect x="40" y="75" width="120" height="24" rx="3" stroke="#A3E635" fill="#0E1014" />
              <text x="100" y="90" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fill="#A3E635" stroke="none">LOCAL OLLAMA ENGINE</text>
            </svg>
          </div>

          <div className="flex justify-between items-end text-[9px] text-ink-muted border-t border-dark-border pt-2">
            <span>OFFLINE SCANNER</span>
            <span className="text-lime-accent font-semibold">ZERO DATA LEAK</span>
          </div>
        </div>
      );

    case 'placepilot':
      return (
        <div className="w-full h-full bg-dark-surface p-5 flex flex-col justify-between font-mono select-none relative overflow-hidden group">
          <div className="flex justify-between items-center text-[10px] text-ink-muted border-b border-dark-border pb-2">
            <span className="text-lime-accent font-semibold">FIG. 03 — CAREER ENGINE</span>
            <span>VECTOR MATCH / RAG</span>
          </div>

          <div className="my-auto py-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full max-h-40 stroke-lime-accent stroke-[1.2] fill-none">
              <rect x="20" y="15" width="70" height="30" rx="3" stroke="rgba(255,255,255,0.2)" fill="#111318" />
              <text x="55" y="32" fontSize="7" fontFamily="monospace" textAnchor="middle" fill="#F5F5F5" stroke="none">RESUME VECTORS</text>

              <rect x="110" y="15" width="70" height="30" rx="3" stroke="rgba(255,255,255,0.2)" fill="#111318" />
              <text x="145" y="32" fontSize="7" fontFamily="monospace" textAnchor="middle" fill="#F5F5F5" stroke="none">JOB MATRIX</text>

              <line x1="55" y1="45" x2="100" y2="70" stroke="#A3E635" />
              <line x1="145" y1="45" x2="100" y2="70" stroke="#A3E635" />

              <circle cx="100" cy="75" r="16" stroke="#A3E635" fill="#0E1014" />
              <text x="100" y="78" fontSize="8" fontFamily="monospace" font-weight="bold" textAnchor="middle" fill="#A3E635" stroke="none">94% FIT</text>
            </svg>
          </div>

          <div className="flex justify-between items-end text-[9px] text-ink-muted border-t border-dark-border pt-2">
            <span>RAG MATCHER</span>
            <span className="text-lime-accent font-semibold">LIVE INTERVIEWER</span>
          </div>
        </div>
      );

    case 'ai-doctor':
      return (
        <div className="w-full h-full bg-dark-surface p-5 flex flex-col justify-between font-mono select-none relative overflow-hidden group">
          <div className="flex justify-between items-center text-[10px] text-ink-muted border-b border-dark-border pb-2">
            <span className="text-lime-accent font-semibold">FIG. 04 — HEALTH TRIAGE</span>
            <span>MERN STACK</span>
          </div>

          <div className="my-auto py-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full max-h-40 stroke-lime-accent stroke-[1.2] fill-none">
              <rect x="25" y="20" width="150" height="70" rx="4" stroke="#A3E635" fill="#111318" />
              <line x1="25" y1="40" x2="175" y2="40" stroke="rgba(255,255,255,0.1)" />
              <circle cx="40" cy="30" r="3" fill="#A3E635" />
              <circle cx="52" cy="30" r="3" fill="#6B7280" />
              <circle cx="64" cy="30" r="3" fill="#6B7280" />
              <text x="100" y="65" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="#F5F5F5" stroke="none">CLINICAL SCHEDULER & EHR</text>
            </svg>
          </div>

          <div className="flex justify-between items-end text-[9px] text-ink-muted border-t border-dark-border pt-2">
            <span>TRIAGE ROUTER</span>
            <span className="text-lime-accent font-semibold">ZERO COLLISIONS</span>
          </div>
        </div>
      );

    case 'resume-editor':
      return (
        <div className="w-full h-full bg-dark-surface p-5 flex flex-col justify-between font-mono select-none relative overflow-hidden group">
          <div className="flex justify-between items-center text-[10px] text-ink-muted border-b border-dark-border pb-2">
            <span className="text-lime-accent font-semibold">FIG. 05 — ATS STUDIO</span>
            <span>PDF / REACT</span>
          </div>

          <div className="my-auto py-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full max-h-40 stroke-lime-accent stroke-[1.2] fill-none">
              <rect x="35" y="15" width="60" height="80" rx="3" stroke="rgba(255,255,255,0.2)" fill="#111318" />
              <line x1="45" y1="28" x2="80" y2="28" stroke="#F5F5F5" strokeWidth="1.5" />
              <line x1="45" y1="38" x2="75" y2="38" stroke="#9CA3AF" strokeWidth="1" />
              <line x1="45" y1="46" x2="82" y2="46" stroke="#9CA3AF" strokeWidth="1" />

              <line x1="95" y1="55" x2="115" y2="55" stroke="#A3E635" />

              <rect x="115" y="15" width="60" height="80" rx="3" stroke="#A3E635" fill="#0E1014" />
              <line x1="125" y1="28" x2="165" y2="28" stroke="#A3E635" strokeWidth="1.5" />
              <line x1="125" y1="38" x2="160" y2="38" stroke="#A3E635" strokeWidth="1" />
              <line x1="125" y1="46" x2="162" y2="46" stroke="#A3E635" strokeWidth="1" />
            </svg>
          </div>

          <div className="flex justify-between items-end text-[9px] text-ink-muted border-t border-dark-border pt-2">
            <span>PDF PARSER</span>
            <span className="text-lime-accent font-semibold">ATS OPTIMIZED</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => {
        if (e.key === 'Escape') setSelectedProject(null);
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleEsc);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 px-4 sm:px-8 md:px-12 border-t border-dark-border relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-dark-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-2">
              <Sparkles size={14} />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-ink-primary">
              FEATURED WORK
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary mt-3 md:mt-0 max-w-md">
            Production-ready Generative AI systems, Retrieval-Augmented Generation engines, and full-stack software applications.
          </p>
        </div>

        {/* Large Visual Project Cards List */}
        <div className="space-y-12">
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl bg-dark-card border border-dark-border hover:border-lime-accent/50 transition-all duration-300 overflow-hidden group lime-glow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left Visual Container */}
                <div className="lg:col-span-6 h-64 lg:h-auto min-h-[260px] border-b lg:border-b-0 lg:border-r border-dark-border relative overflow-hidden">
                  <ProjectVisualPlaceholder projectId={project.id} />
                </div>

                {/* Right Project Details */}
                <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    {/* Number & Category */}
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-lime-accent font-bold text-sm">
                        {project.number}
                      </span>
                      <span className="text-ink-muted uppercase tracking-wider">
                        {project.id === 'intellirag' || project.id === 'placepilot' ? 'AI / RAG ARCHITECTURE' : project.id === 'refactoriq' ? 'CODE INTELLIGENCE' : 'FULL STACK'}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-ink-primary uppercase tracking-tight group-hover:text-lime-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="font-mono text-xs text-lime-accent mt-1">
                        {project.tagline}
                      </div>
                    </div>

                    {/* Short Explanation */}
                    <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-2.5 py-1 rounded bg-dark-surface border border-dark-border text-ink-primary font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-dark-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-lime-accent text-dark font-bold hover:bg-lime-glow transition-colors cursor-pointer"
                    >
                      View Case Study <ArrowRight size={14} />
                    </button>

                    <div className="flex items-center gap-4 text-ink-secondary">
                      {project.demo && project.demo !== '#' && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="hover:text-lime-accent transition-colors inline-flex items-center gap-1"
                        >
                          Live Demo <ArrowUpRight size={13} />
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="hover:text-lime-accent transition-colors inline-flex items-center gap-1"
                        >
                          GitHub <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Technical Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark/90 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-dark-card border border-dark-border rounded-xl shadow-2xl overflow-y-auto z-10 p-6 sm:p-8 md:p-10 font-sans"
            >
              {/* Modal Top Header */}
              <div className="flex justify-between items-center border-b border-dark-border pb-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-lime-accent">
                  <Terminal size={15} />
                  <span className="font-bold uppercase">// TECHNICAL CASE STUDY — {selectedProject.number}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded bg-dark-surface border border-dark-border text-ink-secondary hover:text-ink-primary transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Title Header */}
              <div className="my-6 space-y-2">
                <h2 className="font-display font-black text-3xl sm:text-4xl text-ink-primary uppercase tracking-tight">
                  {selectedProject.title}
                </h2>
                <div className="font-mono text-sm text-lime-accent font-semibold">
                  {selectedProject.tagline}
                </div>
              </div>

              {/* Case Study Sections */}
              <div className="space-y-8 font-sans">
                
                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded bg-dark-surface border border-dark-border space-y-2">
                    <h4 className="font-mono text-xs font-bold text-lime-accent uppercase tracking-wider">
                      .THE PROBLEM
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded bg-dark-surface border border-dark-border space-y-2">
                    <h4 className="font-mono text-xs font-bold text-lime-accent uppercase tracking-wider">
                      .THE SOLUTION
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Diagram */}
                <div className="p-5 rounded bg-dark-surface border border-dark-border space-y-3">
                  <h4 className="font-mono text-xs font-bold text-lime-accent uppercase tracking-wider">
                    .TECHNICAL ARCHITECTURE
                  </h4>
                  <div className="p-4 rounded bg-dark border border-dark-border font-mono text-xs text-ink-primary leading-relaxed">
                    {selectedProject.architecture}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs font-bold text-lime-accent uppercase tracking-wider">
                    .KEY CAPABILITIES & FEATURES
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-ink-secondary">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 p-2.5 rounded bg-dark-surface border border-dark-border">
                        <span className="text-lime-accent font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="p-5 rounded bg-lime-accent/10 border border-lime-accent/30 space-y-1">
                  <h4 className="font-mono text-xs font-bold text-lime-accent uppercase tracking-wider">
                    .ENGINEERING OUTCOME
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-primary font-medium leading-relaxed">
                    {selectedProject.outcome}
                  </p>
                </div>

              </div>

              {/* Modal Footer Links */}
              <div className="mt-8 pt-6 border-t border-dark-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  {selectedProject.demo && selectedProject.demo !== '#' && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded bg-lime-accent text-dark font-bold hover:bg-lime-glow transition-colors inline-flex items-center gap-1.5"
                    >
                      Live Application Demo <ArrowUpRight size={14} />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded bg-dark-surface border border-dark-border text-ink-primary hover:border-lime-accent transition-colors inline-flex items-center gap-1.5"
                    >
                      GitHub Source <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <span className="text-ink-muted">
                  PROJECT {selectedProject.number} OF 05
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;

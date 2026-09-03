import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, ExternalLink, GitBranch, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Tall Architectural Thumbnail Cards matching Image 3 (Pagnotta Contenido)
const ProjectCardVisual = ({ projectId }) => {
  switch (projectId) {
    case 'intellirag':
      return (
        <div className="w-full h-full bg-paper-dark/40 p-4 flex flex-col justify-between relative overflow-hidden font-mono select-none group-hover:bg-paper-dark/70 transition-colors">
          {/* Top telemetry */}
          <div className="flex justify-between items-start text-[9px] text-ink-muted border-b border-paper-border/80 pb-1">
            <span>FIG. 01 — RAG</span>
            <span>VECTOR // FAISS</span>
          </div>

          {/* Central Architectural Blueprint Illustration */}
          <div className="my-auto py-4 flex flex-col items-center justify-center relative">
            <svg viewBox="0 0 120 180" className="w-full max-h-56 stroke-ink stroke-[1.1] fill-none">
              {/* Document chunk slabs stacking */}
              <rect x="25" y="20" width="70" height="22" strokeDasharray="3 2" />
              <text x="60" y="34" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="#141414" stroke="none">DOC_CHUNKS</text>
              
              <line x1="60" y1="42" x2="60" y2="58" strokeWidth="1" />
              <polygon points="58,54 60,60 62,54" fill="#141414" />

              {/* Embedding Matrix */}
              <circle cx="60" cy="74" r="16" />
              <circle cx="60" cy="74" r="8" strokeDasharray="2 2" />
              <text x="60" y="77" fontSize="7" fontFamily="monospace" textAnchor="middle" fill="#141414" stroke="none">EMBED</text>

              <line x1="60" y1="90" x2="60" y2="106" strokeWidth="1" />
              <polygon points="58,102 60,108 62,102" fill="#141414" />

              {/* Vector Space FAISS cluster */}
              <rect x="20" y="108" width="80" height="32" />
              <circle cx="35" cy="120" r="2.5" fill="#141414" />
              <circle cx="50" cy="128" r="2.5" fill="#141414" />
              <circle cx="70" cy="118" r="2.5" fill="#141414" />
              <circle cx="85" cy="126" r="2.5" fill="#141414" />
              <line x1="35" y1="120" x2="50" y2="128" strokeWidth="0.5" strokeDasharray="1 1" />
              <line x1="50" y1="128" x2="70" y2="118" strokeWidth="0.5" strokeDasharray="1 1" />
              <line x1="70" y1="118" x2="85" y2="126" strokeWidth="0.5" strokeDasharray="1 1" />
              <text x="60" y="136" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#5A5A5A" stroke="none">FAISS INDEX</text>

              <line x1="60" y1="140" x2="60" y2="152" strokeWidth="1" />
              <polygon points="58,148 60,154 62,148" fill="#141414" />

              {/* Output context */}
              <rect x="30" y="154" width="60" height="18" fill="#141414" />
              <text x="60" y="166" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fill="#F0EBE1" stroke="none">LLM GROUND</text>
            </svg>
          </div>

          {/* Bottom telemetry */}
          <div className="flex justify-between items-end text-[9px] text-ink-muted border-t border-paper-border/80 pt-1">
            <span>OLLAMA / LLAMA 3.1</span>
            <span>100% LOCAL</span>
          </div>
        </div>
      );

    case 'refactoriq':
      return (
        <div className="w-full h-full bg-paper-dark/40 p-4 flex flex-col justify-between relative overflow-hidden font-mono select-none group-hover:bg-paper-dark/70 transition-colors">
          <div className="flex justify-between items-start text-[9px] text-ink-muted border-b border-paper-border/80 pb-1">
            <span>FIG. 02 — CODE AST</span>
            <span>FASTAPI // REACT</span>
          </div>

          <div className="my-auto py-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 120 180" className="w-full max-h-56 stroke-ink stroke-[1.1] fill-none">
              {/* Syntax Diff Windows */}
              <rect x="15" y="20" width="90" height="60" />
              <line x1="15" y1="32" x2="105" y2="32" strokeWidth="0.75" />
              <circle cx="22" cy="26" r="1.5" fill="#141414" />
              <circle cx="28" cy="26" r="1.5" fill="#141414" />
              <circle cx="34" cy="26" r="1.5" fill="#141414" />
              <text x="60" y="27" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#8C8479" stroke="none">ORIGINAL.PY</text>
              {/* Red deleted lines */}
              <line x1="22" y1="42" x2="80" y2="42" stroke="#B91C1C" strokeWidth="2" strokeDasharray="4 2" />
              <line x1="22" y1="52" x2="65" y2="52" stroke="#B91C1C" strokeWidth="2" strokeDasharray="4 2" />
              <line x1="22" y1="62" x2="90" y2="62" stroke="#B91C1C" strokeWidth="2" strokeDasharray="4 2" />

              {/* Transform Node */}
              <circle cx="60" cy="98" r="14" />
              <text x="60" y="101" fontSize="7" fontFamily="monospace" textAnchor="middle" fill="#141414" stroke="none">SSE STREAM</text>

              {/* Clean Output Window */}
              <rect x="15" y="118" width="90" height="50" />
              <line x1="15" y1="128" x2="105" y2="128" strokeWidth="0.75" />
              <text x="60" y="124" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#8C8479" stroke="none">OPTIMIZED.PY</text>
              {/* Green added lines */}
              <line x1="22" y1="138" x2="85" y2="138" stroke="#15803D" strokeWidth="2" />
              <line x1="22" y1="148" x2="70" y2="148" stroke="#15803D" strokeWidth="2" />
              <line x1="22" y1="158" x2="95" y2="158" stroke="#15803D" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex justify-between items-end text-[9px] text-ink-muted border-t border-paper-border/80 pt-1">
            <span>OFFLINE SCANNER</span>
            <span>ZERO CLOUD LEAK</span>
          </div>
        </div>
      );

    case 'placepilot':
      return (
        <div className="w-full h-full bg-paper-dark/40 p-4 flex flex-col justify-between relative overflow-hidden font-mono select-none group-hover:bg-paper-dark/70 transition-colors">
          <div className="flex justify-between items-start text-[9px] text-ink-muted border-b border-paper-border/80 pb-1">
            <span>FIG. 01 — COMMAND AI</span>
            <span>REACT // RAG // LLM</span>
          </div>

          <div className="my-auto py-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 120 180" className="w-full max-h-56 stroke-ink stroke-[1.1] fill-none">
              {/* Resume vector block */}
              <rect x="15" y="16" width="90" height="34" />
              <line x1="15" y1="28" x2="105" y2="28" strokeWidth="0.75" />
              <text x="22" y="25" fontSize="6" fontFamily="monospace" fill="#141414" stroke="none">RESUME_VECTORS</text>
              <text x="82" y="25" fontSize="6" fontFamily="monospace" fill="#15803D" stroke="none">94% FIT</text>
              <line x1="22" y1="36" x2="75" y2="36" strokeWidth="1" strokeDasharray="3 1" />
              <line x1="22" y1="42" x2="90" y2="42" strokeWidth="1" strokeDasharray="3 1" />

              {/* RAG Job Matching Ring */}
              <line x1="60" y1="50" x2="60" y2="64" strokeWidth="1" />
              <circle cx="60" cy="78" r="14" />
              <circle cx="60" cy="78" r="7" strokeDasharray="2 2" />
              <text x="60" y="81" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#141414" stroke="none">JD MATCH</text>

              {/* Mock Interview Stream */}
              <line x1="60" y1="92" x2="60" y2="106" strokeWidth="1" />
              <polygon points="58,102 60,108 62,102" fill="#141414" />

              {/* Pipeline Kanban Blocks */}
              <rect x="15" y="110" width="90" height="52" />
              <line x1="15" y1="122" x2="105" y2="122" strokeWidth="0.75" />
              <text x="60" y="119" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#141414" stroke="none">APPLICATION_PIPELINE</text>
              
              {/* 3 stages columns */}
              <rect x="20" y="128" width="22" height="14" fill="#141414" />
              <text x="31" y="137" fontSize="5" fontFamily="monospace" textAnchor="middle" fill="#F0EBE1" stroke="none">APPLIED</text>

              <rect x="49" y="128" width="22" height="14" strokeDasharray="2 2" />
              <text x="60" y="137" fontSize="5" fontFamily="monospace" textAnchor="middle" fill="#141414" stroke="none">OA/INTERV</text>

              <rect x="78" y="128" width="22" height="14" />
              <text x="89" y="137" fontSize="5" fontFamily="monospace" textAnchor="middle" fill="#141414" stroke="none">OFFER</text>

              <line x1="20" y1="150" x2="100" y2="150" strokeWidth="0.75" strokeDasharray="2 2" />
              <text x="60" y="157" fontSize="5.5" fontFamily="monospace" textAnchor="middle" fill="#5A5A5A" stroke="none">AI MOCK INTERVIEWER</text>
            </svg>
          </div>

          <div className="flex justify-between items-end text-[9px] text-ink-muted border-t border-paper-border/80 pt-1">
            <span>RAG RESUME MATCHER</span>
            <span>VERCEL DEPLOYED</span>
          </div>
        </div>
      );

    case 'hand-gesture':
      return (
        <div className="w-full h-full bg-paper-dark/40 p-4 flex flex-col justify-between relative overflow-hidden font-mono select-none group-hover:bg-paper-dark/70 transition-colors">
          <div className="flex justify-between items-start text-[9px] text-ink-muted border-b border-paper-border/80 pb-1">
            <span>FIG. 04 — CV MESH</span>
            <span>PYTHON // MEDIAPIPE</span>
          </div>

          <div className="my-auto py-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 120 180" className="w-full max-h-56 stroke-ink stroke-[1.1] fill-none">
              {/* Bounding box / Camera FOV */}
              <rect x="15" y="16" width="90" height="120" strokeDasharray="4 2" strokeWidth="0.75" />
              <text x="20" y="26" fontSize="6" fontFamily="monospace" fill="#8C8479" stroke="none">FOV: 1280x720</text>
              <text x="80" y="26" fontSize="6" fontFamily="monospace" fill="#8C8479" stroke="none">60 FPS</text>

              {/* Hand landmark skeleton */}
              <circle cx="60" cy="115" r="3.5" fill="#141414" />
              
              {/* Thumb */}
              <line x1="60" y1="115" x2="40" y2="95" />
              <circle cx="40" cy="95" r="2" />
              <line x1="40" y1="95" x2="30" y2="75" />
              <circle cx="30" cy="75" r="2.5" fill="#141414" />

              {/* Index */}
              <line x1="60" y1="115" x2="52" y2="80" />
              <circle cx="52" cy="80" r="2" />
              <line x1="52" y1="80" x2="48" y2="45" />
              <circle cx="48" cy="45" r="2.5" fill="#141414" />

              {/* Middle */}
              <line x1="60" y1="115" x2="62" y2="75" />
              <circle cx="62" cy="75" r="2" />
              <line x1="62" y1="75" x2="64" y2="40" />
              <circle cx="64" cy="40" r="2.5" fill="#141414" />

              {/* Ring */}
              <line x1="60" y1="115" x2="72" y2="82" />
              <circle cx="72" cy="82" r="2" />
              <line x1="72" y1="82" x2="76" y2="52" />
              <circle cx="76" cy="52" r="2.5" fill="#141414" />

              {/* Pinky */}
              <line x1="60" y1="115" x2="80" y2="92" />
              <circle cx="80" cy="92" r="2" />
              <line x1="80" y1="92" x2="86" y2="68" />
              <circle cx="86" cy="68" r="2.5" fill="#141414" />

              {/* Output Label */}
              <rect x="25" y="146" width="70" height="22" fill="#141414" />
              <text x="60" y="156" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#A09890" stroke="none">OUTPUT_TOKEN</text>
              <text x="60" y="165" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fill="#FFFFFF" stroke="none">"HELLO WORLD"</text>
            </svg>
          </div>

          <div className="flex justify-between items-end text-[9px] text-ink-muted border-t border-paper-border/80 pt-1">
            <span>REAL-TIME TRACK</span>
            <span>21 3D LANDMARKS</span>
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
    <section id="work" className="py-20 md:py-32 px-6 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Top Section Header matching Pagnotta Image 3 */}
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-secondary border-b border-paper-border pb-4 mb-14">
        <span>Portfolio/ Pranavi Jain</span>
        <span className="uppercase tracking-widest text-ink font-semibold">Contenido / Works</span>
      </div>

      {/* 4-Column Architectural Showcase (Image 3 Reference) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-7xl mx-auto">
        {portfolioData.projects.map((project, index) => {
          const projectNum = String(index + 1).padStart(2, '0');
          const projectYear = project.id === 'placepilot' ? '2025' : project.id === 'intellirag' ? '2025' : project.id === 'refactoriq' ? '2024' : '2023';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col cursor-pointer group"
            >
              {/* Number above the card as in Image 3 */}
              <div className="font-mono text-xs text-ink-muted mb-2 tracking-wider">
                {projectNum}
              </div>

              {/* Tall Framed Picture Window */}
              <div className="w-full aspect-[9/15] sm:aspect-[9/16] border border-ink/80 bg-paper-light overflow-hidden transition-all duration-300 group-hover:border-ink group-hover:shadow-md relative">
                <ProjectCardVisual projectId={project.id} />
              </div>

              {/* Title and metadata below the card */}
              <div className="mt-3 space-y-1">
                <h3 className="font-mono font-bold text-xs uppercase tracking-tight text-ink group-hover:underline">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center font-mono text-[10px] text-ink-muted">
                  <span>{projectYear}</span>
                  <span className="uppercase tracking-wider">[ Inspect ]</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Corner Markers */}
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-muted tracking-widest pt-12 mt-16 border-t border-paper-border/50">
        <span>2023</span>
        <span>2027</span>
      </div>

      {/* Architectural Editorial Case Study Modal (Images 4 & 5 Reference) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-paper/90 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Document Frame */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-paper border border-ink/80 shadow-2xl overflow-y-auto z-10 flex flex-col p-6 sm:p-10 md:p-12"
            >
              {/* Top Modal Header Line */}
              <div className="flex justify-between items-center border-b border-paper-border pb-4 font-mono text-xs text-ink-secondary">
                <span>Portfolio/ Pranavi Jain</span>
                <span className="text-ink font-bold tracking-wider uppercase">Project Case Study</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 border border-paper-border hover:bg-paper-dark transition-colors cursor-pointer text-ink"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Title & Metadata Layout (As seen in Image 4) */}
              <div className="mt-8 mb-8 space-y-6">
                <div>
                  <h2 className="font-mono font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-ink">
                    0{portfolioData.projects.findIndex(p => p.id === selectedProject.id) + 1} {selectedProject.title}
                  </h2>
                  <p className="font-mono text-xs text-ink-secondary mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Technical Metadata Spec Block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border border-paper-border bg-paper-light font-mono text-xs">
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase">Domain</span>
                    <span className="font-medium text-ink">
                      {selectedProject.id === 'placepilot' ? 'Career AI / Placement Command' : selectedProject.id === 'intellirag' ? 'RAG / Document AI' : selectedProject.id === 'refactoriq' ? 'Code Intelligence / AST' : 'Computer Vision'}
                    </span>
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase">Architecture</span>
                    <span className="font-medium text-ink">
                      {selectedProject.id === 'placepilot' ? 'React + RAG + LLM Interviewer' : selectedProject.id === 'intellirag' ? 'FAISS + Ollama' : selectedProject.id === 'refactoriq' ? 'FastAPI + SSE Stream' : 'MediaPipe + OpenCV'}
                    </span>
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase">Deployment</span>
                    <span className="font-medium text-ink">Local Offline / Production</span>
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase">Author</span>
                    <span className="font-medium text-ink">Pranavi Jain</span>
                  </div>
                </div>
              </div>

              {/* Problem & Strategy / Architecture Grid (Matching Image 5) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
                {/* Left Column: Problemática & Estrategia */}
                <div className="lg:col-span-6 space-y-6 font-mono text-xs">
                  <div className="space-y-2">
                    <h4 className="font-bold text-ink uppercase tracking-wider">
                      .PROBLEMÁTICA / THE PROBLEM
                    </h4>
                    <p className="typewriter-text text-ink-secondary text-[12px] leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-ink uppercase tracking-wider">
                      .ESTRATEGIA / SOLUTION
                    </h4>
                    <p className="typewriter-text text-ink-secondary text-[12px] leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-ink uppercase tracking-wider">
                      .RETOS Y APRENDIZAJE / CHALLENGES
                    </h4>
                    <p className="typewriter-text text-ink-secondary text-[12px] leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                    <p className="typewriter-text text-ink-muted text-[11px] leading-relaxed pt-1">
                      {selectedProject.learning}
                    </p>
                  </div>
                </div>

                {/* Right Column: Architectural Diagram / Schematic */}
                <div className="lg:col-span-6 border border-paper-border p-4 bg-paper-light flex flex-col justify-between">
                  <div className="flex justify-between items-center font-mono text-[10px] text-ink-muted border-b border-paper-border pb-2">
                    <span>SCHEMATIC / DIAGRAM</span>
                    <span>PJ-SYS-SPEC</span>
                  </div>

                  <div className="py-6 flex flex-col items-center justify-center">
                    {/* SVG Diagram modeled after Image 5 (Three interconnected analytical circles) */}
                    <svg viewBox="0 0 200 160" className="w-full max-h-52 stroke-ink stroke-[1] fill-none">
                      {/* 3 Interconnected Venn circles */}
                      <circle cx="100" cy="55" r="42" strokeDasharray="3 2" />
                      <circle cx="68" cy="105" r="42" strokeDasharray="3 2" />
                      <circle cx="132" cy="105" r="42" strokeDasharray="3 2" />

                      {/* Central core node */}
                      <circle cx="100" cy="88" r="16" fill="#141414" />
                      <text x="100" y="91" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#F0EBE1" stroke="none">CORE</text>

                      {/* Domain labels */}
                      <text x="100" y="45" fontSize="7" fontFamily="monospace" textAnchor="middle" fill="#141414" stroke="none">INGESTION</text>
                      <text x="56" y="115" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#141414" stroke="none">RETRIEVAL</text>
                      <text x="144" y="115" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fill="#141414" stroke="none">INFERENCE</text>
                    </svg>
                  </div>

                  <div className="space-y-1 font-mono text-[10px] text-ink-muted border-t border-paper-border pt-2">
                    <span className="block uppercase text-ink font-semibold">Technologies Utilized:</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 border border-paper-border bg-paper text-ink-secondary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer / Action Links matching Image 4 */}
              <div className="mt-8 pt-4 border-t border-paper-border flex flex-wrap justify-between items-center gap-4 font-mono text-xs">
                <div className="flex items-center gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink hover:underline flex items-center gap-1 border border-paper-border px-3 py-1.5 hover:bg-paper-dark transition-colors"
                    >
                      [ View Source ↗ ]
                    </a>
                  )}
                  {selectedProject.demo && selectedProject.demo !== '#' && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-ink text-paper px-4 py-1.5 hover:bg-ink-secondary transition-colors flex items-center gap-1"
                    >
                      [ Live Demo ↗ ]
                    </a>
                  )}
                </div>

                <div className="font-mono text-xs text-ink-muted">
                  PAGE 0{portfolioData.projects.findIndex(p => p.id === selectedProject.id) + 1} / 04
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;

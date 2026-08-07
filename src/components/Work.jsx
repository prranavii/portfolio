import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const PreviewMockup = ({ projectId }) => {
  if (projectId === 'intellirag') {
    return (
      <div className="flex items-center justify-center h-full w-full bg-dark p-4 font-mono text-[10px] text-warm-secondary text-center">
        <div>
          <span className="text-warm-faint">{'>'}</span> doc.pdf <br/>
          <span className="text-accent">↓</span><br/>
          chunk <br/>
          <span className="text-accent">↓</span><br/>
          embed <br/>
          <span className="text-accent">↓</span><br/>
          FAISS <br/>
          <span className="text-accent">↓</span><br/>
          LLM
        </div>
      </div>
    );
  }
  if (projectId === 'refactoriq') {
    return (
      <div className="flex flex-col justify-center h-full w-full bg-dark p-4 font-mono text-xs">
        <div className="text-red-500/80 bg-red-500/10 px-2 py-1 mb-1 rounded">- old_spaghetti_code()</div>
        <div className="text-red-500/80 bg-red-500/10 px-2 py-1 mb-2 rounded">-   // FIXME: crashes sometimes</div>
        <div className="text-green-500/80 bg-green-500/10 px-2 py-1 mb-1 rounded">+ clean_architecture()</div>
        <div className="text-green-500/80 bg-green-500/10 px-2 py-1 rounded">+   return optimized_result;</div>
      </div>
    );
  }
  if (projectId === 'ai-doctor') {
    return (
      <div className="flex items-center justify-center h-full w-full bg-dark p-4 font-sans">
        <div className="bg-dark-surface border border-dark-border rounded p-3 w-full">
          <div className="text-warm text-sm font-medium mb-1">Dr. Smith</div>
          <div className="text-warm-secondary text-xs mb-3">Cardiology • 10:00 AM</div>
          <div className="bg-accent/20 text-accent text-xs text-center py-1 rounded">Confirmed</div>
        </div>
      </div>
    );
  }
  if (projectId === 'hand-gesture') {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full bg-dark p-4">
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-accent stroke-2 fill-none mb-4">
          <path d="M50 80 V50 M50 50 L30 30 M50 50 L40 20 M50 50 L60 20 M50 50 L70 30 M50 80 L70 90" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="font-mono text-xs text-warm text-center">GESTURE_DETECTED:<br/>PEACE</div>
      </div>
    );
  }
  
  // Default preview
  return (
    <div className="flex items-center justify-center h-full w-full bg-dark p-4">
      <div className="font-display italic text-2xl text-warm-faint">Preview</div>
    </div>
  );
};

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-12 max-w-5xl mx-auto relative">
      <span className="text-[7rem] md:text-[10rem] font-display italic text-warm-faint/20 select-none pointer-events-none absolute -top-8 -left-4 md:-left-8 leading-none">
        03
      </span>
      <span className="text-xs uppercase tracking-[0.3em] font-sans font-medium text-accent block mb-16">
        Selected Works
      </span>

      <div 
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {portfolioData.projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex items-baseline justify-between py-6 md:py-8 cursor-pointer group border-b border-dark-border ${index === 0 ? 'border-t' : ''}`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="font-display italic text-3xl md:text-5xl text-warm group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-warm-faint group-hover:text-warm-secondary transition-colors text-right pl-4 hidden md:block">
              {project.tech.slice(0, 3).join(' / ')}
            </span>
          </div>
        ))}
        
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                left: mousePos.x + 20,
                top: mousePos.y - 100,
              }}
              className="fixed w-72 h-48 bg-dark-surface border border-dark-border rounded-lg overflow-hidden shadow-2xl pointer-events-none z-40 hidden md:block"
            >
              <PreviewMockup projectId={hoveredProject} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-dark-surface border border-dark-border rounded-2xl flex flex-col overflow-hidden"
            >
              <div className="p-6 md:p-8 border-b border-dark-border flex justify-between items-start shrink-0">
                <div>
                  <h3 className="font-display italic text-3xl md:text-4xl text-warm mb-2">{selectedProject.title}</h3>
                  <p className="text-warm-secondary text-sm md:text-base">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-warm-faint hover:text-warm transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="font-mono text-xs border border-dark-border rounded px-2 py-0.5 text-warm-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  {selectedProject.problem && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-accent mb-1">Problem</h4>
                      <p className="text-sm text-warm-secondary leading-relaxed">{selectedProject.problem}</p>
                    </div>
                  )}
                  {selectedProject.idea && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-accent mb-1">Idea</h4>
                      <p className="text-sm text-warm-secondary leading-relaxed">{selectedProject.idea}</p>
                    </div>
                  )}
                  {selectedProject.solution && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-accent mb-1">Solution</h4>
                      <p className="text-sm text-warm-secondary leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  )}
                  {selectedProject.architecture && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-accent mb-1">Architecture</h4>
                      <p className="text-sm text-warm-secondary leading-relaxed">{selectedProject.architecture}</p>
                    </div>
                  )}
                  {selectedProject.challenges && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-accent mb-1">Challenges</h4>
                      <p className="text-sm text-warm-secondary leading-relaxed">{selectedProject.challenges}</p>
                    </div>
                  )}
                  {selectedProject.learning && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-accent mb-1">Learning</h4>
                      <p className="text-sm text-warm-secondary leading-relaxed">{selectedProject.learning}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6 md:p-8 border-t border-dark-border bg-dark flex justify-end gap-6 shrink-0">
                {selectedProject.github && selectedProject.github !== '#' && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-warm hover:text-accent transition-colors flex items-center gap-1 group cursor-pointer">
                    GitHub
                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
                {selectedProject.demo ? (
                  selectedProject.demo !== '#' ? (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-warm hover:text-accent transition-colors flex items-center gap-1 group cursor-pointer">
                      Live Demo
                      <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-warm-faint cursor-not-allowed">Coming Soon</span>
                  )
                ) : null}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;

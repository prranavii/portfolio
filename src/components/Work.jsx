import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, ExternalLink, X, Code, Calendar, MessageSquare, Camera, FileText, Layers, Database, Search, Cpu, Brain } from 'lucide-react';

export default function Work({ hoveredTech, setHoveredTech }) {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnterCard = (projectTechs) => {
    setHoveredTech(projectTechs);
  };

  const handleMouseLeaveCard = () => {
    setHoveredTech(null);
  };

  // Determine if a card should glow because its tech tag is hovered in the Skills grid
  const isCardHighlighted = (projectTechs) => {
    if (!hoveredTech) return false;
    if (Array.isArray(hoveredTech)) return false; // Hovering project itself shouldn't trigger card highlight
    return projectTechs.includes(hoveredTech);
  };

  // Custom UI Mockups for each project instead of stock images
  const renderProjectMockup = (id) => {
    switch (id) {
      case 'intellirag':
        return (
          <div className="w-full h-64 md:h-80 bg-charcoal-light border border-white/5 rounded-2xl p-4 overflow-hidden flex flex-col text-xs text-left shadow-2xl relative group-hover:border-accent-cyan/20 transition-colors">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider flex items-center gap-1 font-mono">
                <Database size={10} className="text-accent-cyan" /> intellirag_pipeline.sh
              </span>
              <div className="w-10" />
            </div>

            {/* RAG pipeline flowchart mockup */}
            <div className="flex-1 flex flex-col justify-center gap-3 relative select-none">
              
              {/* Indexing row */}
              <div className="grid grid-cols-5 gap-1.5 items-center text-[9px] font-mono text-center text-zinc-500">
                <div className="bg-charcoal border border-white/5 py-1.5 px-1 rounded-lg flex flex-col items-center gap-1">
                  <FileText size={12} className="text-accent-cyan" />
                  <span>PDF/DOC</span>
                </div>
                
                <div className="flex flex-col items-center justify-center text-accent-cyan/40 text-[8px] animate-pulse">
                  <span>Chunk</span>
                  <span>➔</span>
                </div>

                <div className="bg-charcoal border border-white/5 py-1.5 px-1 rounded-lg flex flex-col items-center gap-1">
                  <Layers size={12} className="text-accent-cyan" />
                  <span>EMBED</span>
                </div>

                <div className="flex flex-col items-center justify-center text-accent-cyan/40 text-[8px] animate-pulse">
                  <span>Store</span>
                  <span>➔</span>
                </div>

                <div className="bg-charcoal border border-accent-cyan/15 py-1.5 px-1 rounded-lg flex flex-col items-center gap-1 relative shadow-[0_0_10px_rgba(0,242,254,0.05)]">
                  <Database size={12} className="text-accent-cyan" />
                  <span>FAISS</span>
                </div>
              </div>

              {/* Connecting vertical pipe */}
              <div className="self-center h-2 w-[1px] bg-accent-cyan/20 border-dashed" />

              {/* Retrieval row */}
              <div className="grid grid-cols-5 gap-1.5 items-center text-[9px] font-mono text-center text-zinc-500">
                <div className="bg-charcoal border border-white/5 py-1.5 px-1 rounded-lg flex flex-col items-center gap-1">
                  <Search size={12} className="text-accent-cyan" />
                  <span>QUERY</span>
                </div>
                
                <div className="flex flex-col items-center justify-center text-accent-cyan/40 text-[8px] animate-pulse">
                  <span>Match</span>
                  <span>➔</span>
                </div>

                <div className="bg-charcoal border border-white/5 py-1.5 px-1 rounded-lg flex flex-col items-center gap-1">
                  <Cpu size={12} className="text-accent-cyan" />
                  <span>CONTEXT</span>
                </div>

                <div className="flex flex-col items-center justify-center text-accent-cyan/40 text-[8px] animate-pulse">
                  <span>LLM</span>
                  <span>➔</span>
                </div>

                <div className="bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan py-1.5 px-1 rounded-lg flex flex-col items-center gap-1 font-bold">
                  <Brain size={12} className="text-accent-cyan animate-pulse" />
                  <span>LLAMA 3.1</span>
                </div>
              </div>

            </div>
          </div>
        );
      case 'refactoriq':
        return (
          <div className="w-full h-64 md:h-80 bg-charcoal-light border border-white/5 rounded-2xl p-4 overflow-hidden flex flex-col font-mono text-xs text-left shadow-2xl relative group-hover:border-accent-cyan/20 transition-colors">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                <Code size={10} className="text-accent-cyan" /> refactor_engine.py
              </span>
              <div className="w-10" />
            </div>
            {/* Diff panel */}
            <div className="grid grid-cols-2 gap-4 h-full overflow-hidden select-none">
              <div className="bg-red-950/20 border border-red-900/30 rounded p-2.5 text-red-300 overflow-y-auto">
                <span className="text-[9px] uppercase font-bold text-red-500 block mb-1">- Original</span>
                <span className="opacity-50"># O(n^2) inefficient</span>
                <p className="line-through text-red-400/90 mt-1">for i in range(len(arr)):</p>
                <p className="line-through text-red-400/90 pl-3">for j in range(len(arr)):</p>
                <p className="line-through text-red-400/90 pl-6">if arr[i] == arr[j]:</p>
                <p className="line-through text-red-400/90 pl-9">matches.append((i,j))</p>
              </div>
              <div className="bg-green-950/20 border border-green-900/30 rounded p-2.5 text-green-300 overflow-y-auto relative">
                <span className="text-[9px] uppercase font-bold text-accent-cyan block mb-1">+ Refactored</span>
                <span className="opacity-50"># O(n) HashMap query</span>
                <p className="text-green-400 mt-1">seen = &#123;&#125;</p>
                <p className="text-green-400">for i, val in enumerate(arr):</p>
                <p className="text-green-400 pl-3">if val in seen:</p>
                <p className="text-green-400 pl-6">matches.append((seen[val], i))</p>
                <span className="absolute bottom-2 right-2 text-[9px] bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan px-1.5 py-0.5 rounded uppercase tracking-widest animate-pulse">Llama 3.1</span>
              </div>
            </div>
          </div>
        );
      case 'ai-doctor':
        return (
          <div className="w-full h-64 md:h-80 bg-charcoal-light border border-white/5 rounded-2xl p-4 overflow-hidden flex flex-col text-xs text-left shadow-2xl relative group-hover:border-accent-cyan/20 transition-colors">
            {/* Browser top */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                <Calendar size={10} className="text-accent-cyan" /> medical-portal.local
              </span>
              <div className="w-10" />
            </div>
            {/* Widget layout */}
            <div className="flex flex-col gap-3 h-full select-none">
              <div className="bg-charcoal border border-white/5 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white">Dr. Sarah Jenkins</h4>
                  <p className="text-[10px] text-zinc-500">Neurologist &bull; Hospital Center</p>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">Active</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button className="py-2.5 border border-white/5 bg-charcoal rounded text-center text-zinc-400 font-semibold">09:00 AM</button>
                <button className="py-2.5 border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan rounded text-center font-bold relative overflow-hidden">
                  10:00 AM
                  <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-accent-cyan rounded-full animate-ping" />
                </button>
                <button className="py-2.5 border border-white/5 bg-charcoal rounded text-center text-zinc-400 font-semibold">11:00 AM</button>
              </div>
              <div className="mt-2 py-3 bg-accent-cyan text-charcoal font-bold text-center rounded-lg uppercase tracking-widest text-[10px] shadow-lg">
                Confirm Booking
              </div>
            </div>
          </div>
        );
      case 'hand-gesture':
        return (
          <div className="w-full h-64 md:h-80 bg-charcoal-light border border-white/5 rounded-2xl p-4 overflow-hidden flex flex-col text-xs text-left shadow-2xl relative group-hover:border-accent-cyan/20 transition-colors">
            {/* Bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                <Camera size={10} className="text-accent-cyan" /> opencv_feed_0
              </span>
              <div className="w-10" />
            </div>
            {/* OpenCV skeleton view */}
            <div className="relative flex-1 bg-charcoal border border-white/5 rounded-xl flex items-center justify-center overflow-hidden">
              <svg className="w-32 h-32 text-accent-cyan/60" viewBox="0 0 100 100">
                {/* Hand Skeleton vector design */}
                <circle cx="50" cy="85" r="3" fill="#00F2FE" /> {/* Wrist */}
                <line x1="50" y1="85" x2="35" y2="70" stroke="#00F2FE" strokeWidth="1.5" />
                <line x1="35" y1="70" x2="25" y2="55" stroke="#00F2FE" strokeWidth="1.5" />
                
                {/* Knuckles and index finger */}
                <line x1="50" y1="85" x2="48" y2="55" stroke="#00F2FE" strokeWidth="1.5" />
                <line x1="48" y1="55" x2="46" y2="35" stroke="#00F2FE" strokeWidth="1.5" />
                <circle cx="46" cy="35" r="3" fill="#00F2FE" className="animate-ping" />
                
                {/* Mid knuckles */}
                <line x1="50" y1="85" x2="58" y2="58" stroke="#00F2FE" strokeWidth="1.5" />
                <line x1="58" y1="58" x2="60" y2="40" stroke="#00F2FE" strokeWidth="1.5" />
                
                {/* Pinky */}
                <line x1="50" y1="85" x2="70" y2="65" stroke="#00F2FE" strokeWidth="1.5" />
                <line x1="70" y1="65" x2="78" y2="50" stroke="#00F2FE" strokeWidth="1.5" />
              </svg>
              <div className="absolute top-2 left-2 bg-black/75 px-2 py-0.5 rounded text-[8px] text-zinc-400 font-mono">FPS: 29.8</div>
              <div className="absolute bottom-2 left-2 right-2 bg-black/85 border border-accent-cyan/30 rounded p-2 text-center text-accent-cyan font-mono text-[10px] uppercase tracking-widest">
                Output: H E L L O _ W O R L D<span className="w-1.5 h-3 bg-accent-cyan inline-block ml-1 animate-pulse" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="work" 
      className="py-24 md:py-36 w-full flex flex-col justify-center px-6 md:px-12 bg-charcoal border-b border-white/5 relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-left mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-accent-cyan mb-3 block">Projects</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-none text-white">
            Selected Work.
          </h2>
        </div>

        {/* Cinematic list (Alternating left-right showcase rows) */}
        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const highlighted = isCardHighlighted(project.tech);
            return (
              <motion.div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center p-4 md:p-6 rounded-3xl border transition-all duration-500 group ${
                  highlighted 
                    ? 'border-accent-cyan/40 bg-accent-cyan/[0.02] shadow-[0_0_30px_rgba(0,242,254,0.06)]' 
                    : 'border-transparent bg-transparent'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => handleMouseEnterCard(project.tech)}
                onMouseLeave={handleMouseLeaveCard}
              >
                {/* Visual mockup slot */}
                <div className={`lg:col-span-6 w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {renderProjectMockup(project.id)}
                </div>

                {/* Meta details slot */}
                <div className={`lg:col-span-6 text-left flex flex-col items-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((t, i) => (
                      <span key={i} className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest border border-white/5 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-black tracking-tight text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                    {project.subtitle}
                  </p>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-xs font-semibold text-accent-cyan uppercase tracking-widest hover:text-white transition-colors group/btn clickable"
                  >
                    View Project Details
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Immersive Project Modal Details */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Wrapper */}
            <motion.div 
              className="relative w-full max-w-4xl max-h-[85vh] bg-charcoal-light border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,242,254,0.15)] flex flex-col overflow-hidden z-10"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              {/* Top Banner Header */}
              <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/5 bg-charcoal-lighter/20">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-black text-white">{selectedProject.title}</h3>
                  <p className="text-[10px] md:text-xs text-accent-cyan uppercase tracking-widest font-bold mt-1">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-accent-cyan hover:text-accent-cyan transition-colors flex items-center justify-center text-zinc-400 clickable"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 space-y-8 text-left text-sm">
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="text-[9px] font-bold text-accent-cyan uppercase tracking-widest bg-accent-cyan/5 border border-accent-cyan/15 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                {/* RAG pipeline visual inside modal if intellirag */}
                {selectedProject.id === 'intellirag' && (
                  <div className="bg-charcoal border border-white/5 p-5 rounded-2xl text-center space-y-3 font-mono">
                    <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-accent-cyan block mb-2">Retrieval-Augmented Generation pipeline flow</span>
                    <div className="flex flex-wrap items-center justify-center gap-2 text-[9px] text-zinc-400">
                      <span className="px-2 py-1 bg-charcoal-light border border-white/5 rounded">Doc Upload</span>
                      <span className="text-accent-cyan font-bold">&rarr;</span>
                      <span className="px-2 py-1 bg-charcoal-light border border-white/5 rounded">Parsing</span>
                      <span className="text-accent-cyan font-bold">&rarr;</span>
                      <span className="px-2 py-1 bg-charcoal-light border border-white/5 rounded">Chunking</span>
                      <span className="text-accent-cyan font-bold">&rarr;</span>
                      <span className="px-2 py-1 bg-charcoal-light border border-white/5 rounded">FAISS Embeds</span>
                      <span className="text-accent-cyan font-bold">&rarr;</span>
                      <span className="px-2 py-1 bg-charcoal-light border border-white/5 rounded">Query Semantic Match</span>
                      <span className="text-accent-cyan font-bold">&rarr;</span>
                      <span className="px-2 py-1 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan rounded font-bold">Local LLM Output</span>
                    </div>
                  </div>
                )}

                {/* Section details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-1">The Problem</h4>
                      <p className="text-zinc-300 leading-relaxed font-light">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-1">The Idea</h4>
                      <p className="text-zinc-300 leading-relaxed font-light">{selectedProject.idea}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-1">The Solution</h4>
                      <p className="text-zinc-300 leading-relaxed font-light">{selectedProject.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-1">Architecture</h4>
                      <p className="text-zinc-300 leading-relaxed font-light">{selectedProject.architecture}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-1">Key Challenges</h4>
                      <p className="text-zinc-300 leading-relaxed font-light">{selectedProject.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-1">What I Learned</h4>
                      <p className="text-zinc-300 leading-relaxed font-light">{selectedProject.learning}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTAs */}
              <div className="px-6 md:px-8 py-5 border-t border-white/5 bg-charcoal-lighter/10 flex items-center justify-between gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-accent-cyan text-white hover:text-accent-cyan text-xs font-semibold uppercase tracking-widest transition-colors duration-300 clickable"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg> Github
                </a>
                {selectedProject.demo && selectedProject.demo !== '#' ? (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-cyan hover:bg-white text-charcoal hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] text-xs font-bold uppercase tracking-widest transition-all duration-300 clickable"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700/50 text-xs font-bold uppercase tracking-widest cursor-not-allowed select-none"
                  >
                    <ExternalLink size={14} /> Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

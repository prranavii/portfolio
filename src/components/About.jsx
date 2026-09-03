import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personalInfo, journey, certifications, skills } = portfolioData;

  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="about" className="py-20 md:py-32 px-6 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Header bar of section matching Image 2 */}
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-secondary border-b border-paper-border pb-4 mb-14">
        <span>Portfolio/ Pranavi Jain</span>
        <span className="uppercase tracking-widest text-ink font-semibold">Curriculum vitae</span>
      </div>

      {/* Main Grid Spread */}
      <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 max-w-7xl mx-auto">
        
        {/* Left Column: .SOBRE MÍ / Narrative Bio */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="font-mono font-bold text-sm text-ink tracking-tight">
            .SOBRE MÍ / ABOUT
          </h3>
          <div className="typewriter-text text-xs sm:text-[13px] text-ink-secondary leading-relaxed space-y-4 text-justify">
            <p>
              Soy estudiante de Ingeniería en Ciencias de la Computación (graduación 2027), apasionada por el diseño de sistemas resilientes, arquitecturas de software limpias y la inteligencia artificial generativa.
            </p>
            <p>
              I specialize in turning complex algorithmic challenges into elegant, efficient software. My core technical exploration centers around Retrieval-Augmented Generation (RAG), local LLM deployments with Ollama, and performant backend services.
            </p>
            <p>
              Para mí, el código no es solo una herramienta funcional, sino una disciplina formal donde la precisión lógica y la simplicidad estructural conviven para resolver problemas reales y duraderos.
            </p>
          </div>
        </div>

        {/* Column 2: Portrait Block & Identity */}
        <div className="lg:col-span-3 flex flex-col items-center sm:items-start space-y-4">
          {/* Framed Editorial Portrait Container */}
          <div className="w-full max-w-[240px] aspect-[4/5] border border-paper-border p-2 bg-paper-dark/30 shadow-inner relative overflow-hidden group">
            {/* Architectural / Engineering Blueprint Art Frame */}
            <div className="w-full h-full bg-paper-light border border-paper-border/80 flex flex-col justify-between p-3 relative">
              <div className="flex justify-between items-start font-mono text-[9px] text-ink-muted">
                <span>REF. PJ-27</span>
                <span>CSE // CORE</span>
              </div>

              {/* Minimal SVG Graphic Representation */}
              <div className="my-auto flex flex-col items-center justify-center opacity-85">
                <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-ink stroke-[1.2] fill-none">
                  {/* Stylized wireframe geometric head / system cube */}
                  <circle cx="50" cy="40" r="22" strokeDasharray="2 2" />
                  <path d="M50 18 L50 62 M28 40 L72 40" strokeWidth="0.75" />
                  <path d="M24 82 Q50 66 76 82" />
                  <rect x="36" y="32" width="28" height="16" strokeWidth="0.75" />
                  <circle cx="44" cy="40" r="2" fill="#141414" />
                  <circle cx="56" cy="40" r="2" fill="#141414" />
                </svg>
                <span className="font-mono text-[9px] text-ink-muted tracking-widest mt-2 uppercase">
                  [ System Architect ]
                </span>
              </div>

              <div className="flex justify-between items-end font-mono text-[9px] text-ink-muted">
                <span>LAT: 28.6°N</span>
                <span>STATUS: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Under-Photo Typography block as in reference */}
          <div className="space-y-1 font-mono text-xs text-left w-full max-w-[240px]">
            <div className="font-bold text-ink uppercase tracking-wider">
              PRANAVI JAIN
            </div>
            <div className="text-ink-secondary text-[11px]">
              Computer Science Engineer
            </div>
            <div className="text-ink-muted text-[11px]">
              India — Global Remote
            </div>
            <div className="pt-2 text-[11px] break-all">
              <a 
                href={personalInfo.email} 
                className="text-ink border-b border-paper-border hover:border-ink transition-colors"
              >
                pranavijain47@gmail.com
              </a>
            </div>
            <div className="pt-1 flex gap-3 text-[11px]">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-ink underline">GitHub</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink underline">LinkedIn</a>
              <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="hover:text-ink underline">LeetCode</a>
            </div>
          </div>
        </div>

        {/* Right Section: .EDUCACIÓN, .EXPERIENCIA, .SOFTWARE, .HABILIDADES */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* .EDUCACIÓN */}
          <div className="space-y-2">
            <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-tight">
              .EDUCACIÓN / EDUCATION
            </h3>
            <div className="font-mono text-xs space-y-1">
              <div className="flex justify-between items-baseline text-ink font-semibold">
                <span>B.Tech Computer Science & Engineering</span>
                <span className="text-ink-muted text-[11px]">2023 — 2027</span>
              </div>
              <p className="text-ink-secondary text-[11px]">
                Focus on Algorithms, Distributed Computing & AI Systems
              </p>
            </div>
          </div>

          {/* .EXPERIENCIA */}
          <div className="space-y-2">
            <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-tight">
              .EXPERIENCIA / EXPERIENCE
            </h3>
            <div className="font-mono text-xs space-y-3">
              <div>
                <div className="flex justify-between items-baseline text-ink font-semibold">
                  <span>AI/ML Engineer & Systems Research</span>
                  <span className="text-ink-muted text-[11px]">2024 — present</span>
                </div>
                <div className="text-[11px] text-ink-secondary space-y-0.5 mt-1 typewriter-text">
                  <p>- Design of offline RAG pipelines & chunking strategies.</p>
                  <p>- FAISS vector indexing & local LLM runtime optimization.</p>
                  <p>- Production full-stack services with real-time SSE streams.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dual Columns: .SOFTWARE & .HABILIDADES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-paper-border/60">
            {/* .SOFTWARE */}
            <div className="space-y-2">
              <h4 className="font-mono font-bold text-xs text-ink">
                .SOFTWARE
              </h4>
              <ul className="font-mono text-[11px] text-ink-secondary space-y-1 leading-tight">
                <li>Python / C++</li>
                <li>React / Next.js</li>
                <li>FastAPI / Node.js</li>
                <li>FAISS / Vector DBs</li>
                <li>LangChain / Ollama</li>
                <li>MongoDB / PostgreSQL</li>
                <li>Tailwind CSS / Git</li>
              </ul>
            </div>

            {/* .HABILIDADES & .MÉTRICAS */}
            <div className="space-y-2">
              <h4 className="font-mono font-bold text-xs text-ink">
                .HABILIDADES / SKILLS
              </h4>
              <ul className="font-mono text-[11px] text-ink-secondary space-y-1 leading-tight">
                <li>RAG Architecture</li>
                <li>System Optimization</li>
                <li>LeetCode 1765 Rating</li>
                <li>800+ Solved Algorithms</li>
                <li>Concurrency Control</li>
                <li>API Architecture</li>
              </ul>
            </div>
          </div>

        </div>

      </motion.div>

      {/* Bottom Corner Markers */}
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-muted tracking-widest pt-12 mt-12 border-t border-paper-border/50">
        <span>2023</span>
        <span>2027</span>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-10 md:py-14 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-8 sm:mb-10">
        <span className="uppercase tracking-widest text-ink font-semibold">03 — SELECTED WORKS</span>
        <span className="text-ink-muted text-xs">03</span>
      </div>

      {/* Structured Project List */}
      <div className="max-w-5xl mx-auto space-y-6">
        {portfolioData.projects.map((project, index) => {
          const projectNum = String(index + 1).padStart(2, '0');

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border border-paper-border bg-paper-light/80 p-5 sm:p-7 space-y-4 hover:border-ink transition-colors group"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-paper-border/60 pb-3 font-mono">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-ink-muted">{projectNum}</span>
                  <h3 className="font-bold text-lg sm:text-xl text-ink uppercase tracking-tight group-hover:underline">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink hover:underline flex items-center gap-1"
                    >
                      [ GitHub ↗ ]
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink font-bold hover:underline flex items-center gap-1"
                    >
                      [ Live Demo ↗ ]
                    </a>
                  )}
                </div>
              </div>

              {/* One-Line Subtitle */}
              <p className="typewriter-text text-xs sm:text-sm text-ink-secondary font-medium leading-relaxed">
                {project.subtitle}
              </p>

              {/* 2–3 Concise Technical Bullets */}
              <ul className="font-mono text-xs text-ink-secondary space-y-1.5 pl-2 leading-relaxed">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-ink font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 border border-paper-border bg-paper text-ink font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;

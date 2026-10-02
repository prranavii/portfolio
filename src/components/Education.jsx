import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education, achievements, certifications } = portfolioData;

  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="education" className="py-10 md:py-14 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-8 sm:mb-10">
        <span className="uppercase tracking-widest text-ink font-semibold">05 — EDUCATION & ACHIEVEMENTS</span>
        <span className="text-ink-muted text-xs">05</span>
      </div>

      <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 max-w-6xl mx-auto">
        
        {/* Left Column: Education */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase border-b border-paper-border pb-2">
            .EDUCATION
          </h3>

          <div className="font-mono text-xs sm:text-sm space-y-2 border border-paper-border bg-paper-light/80 p-5">
            <div className="flex justify-between items-baseline text-ink font-bold">
              <span>{education.degree}</span>
              <span className="text-ink-muted text-xs font-normal">{education.period}</span>
            </div>
            <p className="text-ink font-semibold text-xs">
              {education.institution}
            </p>
            <p className="text-ink-secondary text-xs leading-relaxed pt-1">
              {education.details}
            </p>
          </div>
        </div>

        {/* Right Column: Achievements & Certifications */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Achievements */}
          <div className="space-y-3">
            <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase border-b border-paper-border pb-2">
              .ACHIEVEMENTS & DISCIPLINE
            </h3>
            <ul className="font-mono text-xs text-ink-secondary space-y-2 pl-1 leading-relaxed">
              {achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-ink font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-3 pt-2">
            <h3 className="font-mono font-bold text-xs sm:text-sm text-ink tracking-widest uppercase border-b border-paper-border pb-2">
              .CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              {certifications.map((cert) => (
                <div key={cert.title} className="border border-paper-border bg-paper-light/60 p-3 space-y-1">
                  <div className="font-bold text-ink text-xs">{cert.title}</div>
                  <div className="text-ink-muted text-[11px]">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default Education;

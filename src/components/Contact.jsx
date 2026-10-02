import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personalInfo } = portfolioData;

  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  const socials = [
    { name: 'LinkedIn', label: 'in/pranavi-jain5', url: personalInfo.linkedin },
    { name: 'GitHub', label: 'github.com/prranavii', url: personalInfo.github },
  ];

  const emailDisplay = personalInfo.email.replace('mailto:', '');

  return (
    <section id="contact" className="py-10 md:py-16 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-8 sm:mb-10">
        <span className="uppercase tracking-widest text-ink font-semibold">06 — CONTACT</span>
        <span className="text-ink-muted text-xs">06</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="space-y-6">
          <div>
            <h2 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-ink mb-3">
              LET'S BUILD SOMETHING.
            </h2>
            <p className="typewriter-text text-sm sm:text-base text-ink-secondary max-w-xl leading-relaxed">
              Open to software engineering, backend and AI opportunities.
            </p>
          </div>

          <div className="border border-paper-border p-6 sm:p-8 bg-paper-light/80 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 font-mono text-sm border-b border-paper-border/80 pb-4">
              <span className="text-ink-muted uppercase text-xs">DIRECT EMAIL DISPATCH</span>
              <a 
                href={personalInfo.email} 
                className="text-ink font-bold text-base sm:text-lg hover:underline break-all"
              >
                {emailDisplay} ↗
              </a>
            </div>

            <div className="space-y-2.5 font-mono text-sm">
              <span className="text-ink-muted text-xs uppercase tracking-wider block">PROFILES & NETWORKS</span>
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center py-2.5 border-b border-paper-border/50 text-ink hover:bg-paper-dark/30 px-1 transition-colors group cursor-pointer"
                >
                  <span className="font-semibold">{social.name}</span>
                  <span className="text-ink-secondary text-xs group-hover:text-ink flex items-center gap-1">
                    {social.label}
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

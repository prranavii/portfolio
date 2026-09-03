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
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const socials = [
    { name: 'LinkedIn', label: 'in/pranavi-jain5', url: personalInfo.linkedin },
    { name: 'GitHub', label: 'github.com/prranavii', url: personalInfo.github },
    { name: 'LeetCode', label: 'leetcode.com/u/prranavii_ (1765)', url: personalInfo.leetcode },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-6 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-secondary border-b border-paper-border pb-4 mb-14">
        <span>Portfolio/ Pranavi Jain</span>
        <span className="uppercase tracking-widest text-ink font-semibold">.Contact & Inquiries</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="space-y-12">
          <div>
            <h2 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-ink mb-4">
              .LET'S TALK
            </h2>
            <p className="typewriter-text text-xs sm:text-sm text-ink-secondary max-w-xl leading-relaxed">
              Currently preparing for 2027 Software Engineering roles. Open to discussions regarding distributed systems, Retrieval-Augmented Generation, and full-stack engineering challenges.
            </p>
          </div>

          <div className="border border-paper-border p-6 sm:p-8 bg-paper-light/70 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 font-mono text-xs border-b border-paper-border/80 pb-4">
              <span className="text-ink-muted uppercase">DIRECT DISPATCH</span>
              <a 
                href={personalInfo.email} 
                className="text-ink font-semibold text-sm sm:text-base hover:underline break-all"
              >
                pranavijain47@gmail.com ↗
              </a>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <span className="text-ink-muted text-[10px] uppercase tracking-wider block">PROFILES & NETWORKS</span>
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center py-2.5 border-b border-paper-border/50 text-ink hover:bg-paper-dark/30 px-1 transition-colors group cursor-pointer"
                >
                  <span className="font-semibold">{social.name}</span>
                  <span className="text-ink-secondary text-[11px] group-hover:text-ink flex items-center gap-1">
                    {social.label}
                    <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Corner Markers */}
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-muted tracking-widest pt-12 mt-16 border-t border-paper-border/50">
        <span>2023</span>
        <span>2027</span>
      </div>
    </section>
  );
};

export default Contact;

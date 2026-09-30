import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Journey = () => {
  const combinedEntries = useMemo(() => {
    const journeyEntries = portfolioData.journey.map(item => ({
      year: item.year,
      title: item.title,
      description: item.description,
      type: 'journey'
    }));

    const certEntries = portfolioData.certifications.map(cert => ({
      year: cert.year,
      title: cert.title,
      description: `Issued by ${cert.issuer}`,
      type: 'certification'
    }));

    return [...journeyEntries, ...certEntries].sort((a, b) => {
      const yearA = parseInt(a.year.split('-')[0]) || parseInt(a.year) || 0;
      const yearB = parseInt(b.year.split('-')[0]) || parseInt(b.year) || 0;
      return yearB - yearA;
    });
  }, []);

  return (
    <section id="journey" className="py-12 md:py-20 px-4 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full font-mono text-xs sm:text-sm text-ink-secondary border-b border-paper-border pb-3 mb-8 sm:mb-12">
        <span className="uppercase tracking-widest text-ink font-semibold">Career Timeline</span>
        <span className="text-ink-muted text-xs">03</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="border-t border-paper-border">
          {combinedEntries.map((entry, index) => (
            <motion.div
              key={`${entry.title}-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-4 border-b border-paper-border items-baseline hover:bg-paper-light/50 transition-colors px-2"
            >
              <div className="sm:col-span-3 font-mono text-sm text-ink-muted">
                {entry.year}
              </div>
              <div className="sm:col-span-6 font-mono text-sm text-ink font-semibold">
                {entry.title}
              </div>
              <div className="sm:col-span-3 font-mono text-xs text-ink-secondary sm:text-right">
                {entry.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

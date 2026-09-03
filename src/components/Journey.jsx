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
    <section id="journey" className="py-20 md:py-32 px-6 sm:px-10 md:px-16 border-t border-paper-border/60 relative">
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-secondary border-b border-paper-border pb-4 mb-14">
        <span>Portfolio/ Pranavi Jain</span>
        <span className="uppercase tracking-widest text-ink font-semibold">.Trayectoria / Timeline</span>
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
              <div className="sm:col-span-3 font-mono text-xs text-ink-muted">
                {entry.year}
              </div>
              <div className="sm:col-span-6 font-mono text-xs text-ink font-semibold">
                {entry.title}
              </div>
              <div className="sm:col-span-3 font-mono text-[11px] text-ink-secondary sm:text-right">
                {entry.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Corner Markers */}
      <div className="flex justify-between items-center w-full font-mono text-xs text-ink-muted tracking-widest pt-12 mt-16 border-t border-paper-border/50">
        <span>2023</span>
        <span>2027</span>
      </div>
    </section>
  );
};

export default Journey;

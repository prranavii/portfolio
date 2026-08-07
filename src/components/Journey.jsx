import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Journey = () => {
  const mergedItems = [
    ...portfolioData.journey,
    ...portfolioData.certifications.map(cert => ({
      year: cert.year,
      title: cert.title,
      description: `Issued by ${cert.issuer}`
    }))
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const grouped = mergedItems.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  const sortedYears = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <section id="journey" className="py-32 md:py-48 px-6 md:px-12 max-w-5xl mx-auto relative">
      <span className="text-[7rem] md:text-[10rem] font-display italic text-warm-faint/20 select-none pointer-events-none absolute -top-8 -left-4 md:-left-8 leading-none">
        05
      </span>
      <span className="text-xs uppercase tracking-[0.3em] font-sans font-medium text-accent block mb-16">
        Timeline
      </span>
      <h2 className="font-display italic text-4xl md:text-5xl text-warm mb-16">
        The Path.
      </h2>

      <div className="flex flex-col">
        {sortedYears.map((year, index) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {grouped[year].map((item, i) => (
              <div key={i} className="flex gap-8 md:gap-16 py-6 border-b border-dark-border items-baseline">
                <div className="font-mono text-sm text-warm-faint w-16 shrink-0">
                  {i === 0 ? year : ''}
                </div>
                <div>
                  <h3 className="text-base text-warm font-medium">{item.title}</h3>
                  <p className="text-sm text-warm-secondary mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;

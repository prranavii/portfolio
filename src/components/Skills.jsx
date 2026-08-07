import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-48 px-6 md:px-12 max-w-5xl mx-auto relative">
      <span className="text-[7rem] md:text-[10rem] font-display italic text-warm-faint/20 select-none pointer-events-none absolute -top-8 -left-4 md:-left-8 leading-none">
        04
      </span>
      <span className="text-xs uppercase tracking-[0.3em] font-sans font-medium text-accent block mb-16">
        Expertise
      </span>
      <h2 className="font-display italic text-4xl md:text-5xl text-warm mb-16">
        The Toolkit.
      </h2>

      <div className="flex flex-col">
        {portfolioData.skills.categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`mb-10 ${index !== portfolioData.skills.categories.length - 1 ? 'border-b border-dark-border pb-8' : ''}`}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-warm-faint mb-3 block">
              {category.name}
            </span>
            <p className="text-base md:text-lg text-warm-secondary font-light leading-relaxed">
              {category.items.map(item => item.name).join(' · ')}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

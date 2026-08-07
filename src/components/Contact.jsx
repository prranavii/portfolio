import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personalInfo, dsa } = portfolioData;

  const leetcodeUrl = dsa.platforms.find(p => p.name.toLowerCase() === 'leetcode')?.url || '#';

  const socialLinks = [
    { name: 'LinkedIn', url: personalInfo.linkedin },
    { name: 'GitHub', url: personalInfo.github },
    { name: 'LeetCode', url: leetcodeUrl },
  ];

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-5xl mx-auto relative">
        <span className="text-[7rem] md:text-[10rem] font-display italic text-warm-faint/20 select-none pointer-events-none absolute -top-8 -left-4 md:-left-8 leading-none">
          06
        </span>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-sans font-medium text-accent block mb-8">
            Contact
          </span>
          
          <h2 className="font-display italic text-5xl md:text-7xl text-warm leading-[1.1]">
            Let's talk.
          </h2>

          <div className="mt-8">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-lg text-warm-secondary hover:text-accent transition-colors font-mono cursor-pointer"
            >
              {personalInfo.email} ↗
            </a>
          </div>

          <div className="mt-12 flex flex-col">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-dark-border text-sm text-warm-secondary hover:text-accent transition-colors group cursor-pointer"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

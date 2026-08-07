import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personalInfo, stats, dsa } = portfolioData;

  const renderBioWithEmphasis = (bioText) => {
    // Simple approach: emphasize a few hardcoded terms based on the bio if they exist,
    // or just let it render naturally if complex parsing isn't strictly required.
    // We will render it directly as requested: with some words wrapped for emphasis.
    // Assuming personalInfo.bio has plain text, we'll bold a few AI/SWE keywords manually or just output it.
    // For a generic safe fallback, we just output it. 
    return (
      <React.Fragment>
        {bioText}
      </React.Fragment>
    );
  };

  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-5xl mx-auto relative">
        <span className="text-[7rem] md:text-[10rem] font-display italic text-warm-faint/20 select-none pointer-events-none absolute -top-8 -left-4 md:-left-8 leading-none">
          02
        </span>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-sans font-medium text-accent block mb-8">
            About
          </span>
          
          <p className="text-lg md:text-xl text-warm-secondary leading-relaxed max-w-3xl font-light">
            I am a <span className="text-warm font-normal">software engineer</span> specializing in building scalable web applications and intelligent systems. 
            Passionate about <span className="text-warm font-normal">problem-solving</span> and crafting elegant solutions through clean code. {personalInfo.bio}
          </p>

          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 text-sm font-mono text-warm-secondary">
            <span>B.Tech CSE <span className="text-accent">'27</span></span>
            <span>{dsa.solved}+ <span className="text-accent">DSA Problems</span></span>
            <span>{dsa.rating} <span className="text-accent">Contest Rating</span></span>
          </div>

          <p className="mt-8 text-sm text-warm-secondary italic">
            Currently exploring Retrieval-Augmented Generation and building offline AI pipelines.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

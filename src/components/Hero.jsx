import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-display italic text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] text-warm leading-[1.1] select-none"
        >
          Pranavi Jain
        </motion.h1>
        
        <motion.div 
          variants={itemVariants}
          className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-warm-secondary mt-6"
        >
          Software Engineer
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8 flex items-center space-x-3 text-sm text-warm-secondary"
        >
          <a 
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300 flex items-center"
          >
            Resume ↗
          </a>
          <span>&middot;</span>
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300 flex items-center"
          >
            GitHub ↗
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import InteractiveHeroBg from './InteractiveHeroBg';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const { personalInfo } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#work');
    if (el) {
      const navHeight = 90;
      const targetPosition = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[96svh] md:min-h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden bg-charcoal"
    >
      {/* Background Interactive RAG Nodes Canvas */}
      <InteractiveHeroBg />

      {/* Grid Pattern with fading mask */}
      <div className="absolute inset-0 grid-bg z-[0]" />

      {/* Ambient center radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none z-[0]" />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div 
          className="mb-6 px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 backdrop-blur-md flex items-center gap-2 text-[10px] font-medium text-accent-cyan tracking-widest uppercase"
          variants={itemVariants}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          {personalInfo.availability}
        </motion.div>

        {/* Massive Typography Name */}
        <motion.h1 
          className="font-display font-black text-[12vw] sm:text-[10vw] md:text-[7.5rem] lg:text-[8.5rem] tracking-tight leading-[0.85] uppercase text-white select-none flex flex-col gap-1"
          variants={itemVariants}
        >
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">PRANAVI</span>
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-accent-cyan to-white">JAIN</span>
        </motion.h1>

        {/* Supporting identity statement */}
        <motion.p 
          className="mt-8 text-base sm:text-lg md:text-xl text-zinc-400 font-normal max-w-2xl leading-relaxed"
          variants={itemVariants}
        >
          "Engineering software. Exploring intelligence."
        </motion.p>

        {/* Technical Subheading */}
        <motion.div 
          className="mt-4 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-accent-cyan/80"
          variants={itemVariants}
        >
          Software Engineer &middot; Systems &middot; Algorithms &middot; Intelligent Applications
        </motion.div>

        {/* Action CTAs */}
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          variants={itemVariants}
        >
          <a
            href="#work"
            onClick={handleExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-xs tracking-widest uppercase bg-accent-cyan text-charcoal hover:bg-white border border-accent-cyan transition-all duration-300 shadow-[0_0_20px_rgba(0,242,254,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] clickable"
          >
            Explore My Work
          </a>
          <a
            href={personalInfo.resumeLink}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-xs tracking-widest uppercase bg-transparent text-white border border-white/10 hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 clickable"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 z-10 select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <span className="text-[9px] tracking-[0.35em] uppercase font-semibold">Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={12} className="text-accent-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}

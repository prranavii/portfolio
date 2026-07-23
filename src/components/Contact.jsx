import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Award, ArrowUpRight } from 'lucide-react';

// Custom inline SVG icons because brand icons are removed from Lucide-React
const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

// Custom wrapper for organic magnetic button pulls
function MagneticButton({ children, className, href }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const btn = ref.current;
    if (!btn) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = btn.getBoundingClientRect();
    
    // Compute distance from button center
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Magnetic intensity ratio (0.35 pull force)
    const intensity = 0.35;
    setPosition({ x: x * intensity, y: y * intensity });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`${className} inline-flex items-center justify-center transition-transform duration-200 ease-out`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const { personalInfo } = portfolioData;

  const socialLinks = [
    { label: 'LinkedIn', url: personalInfo.linkedin, icon: <LinkedinIcon /> },
    { label: 'GitHub', url: personalInfo.github, icon: <GithubIcon /> },
    { label: 'LeetCode', url: personalInfo.leetcode, icon: <Award size={14} /> },
    { label: 'Email', url: personalInfo.email, icon: <Mail size={14} /> },
  ];

  return (
    <section 
      id="contact" 
      className="py-24 md:py-36 w-full flex flex-col justify-center px-6 md:px-12 bg-charcoal border-b border-white/5 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Availability info */}
        <motion.div 
          className="mb-8 px-4 py-1.5 rounded-full border border-accent-cyan/15 bg-accent-cyan/5 text-[9px] font-bold text-accent-cyan tracking-widest uppercase flex items-center gap-1.5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          Looking for Software Engineering Opportunities
        </motion.div>

        {/* Dramatic Headline */}
        <motion.h2 
          className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-none text-white max-w-2xl select-none"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Have an idea? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-white">Let's build it.</span>
        </motion.h2>

        {/* Magnetic CTA button */}
        <motion.div 
          className="mt-14 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <MagneticButton 
            href={personalInfo.email}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 hover:bg-accent-cyan hover:text-charcoal hover:shadow-[0_0_40px_rgba(0,242,254,0.35)] transition-all duration-300 flex flex-col items-center justify-center gap-2 font-display text-base font-bold text-accent-cyan uppercase tracking-widest clickable"
          >
            <span>Say Hello</span>
            <ArrowUpRight size={20} />
          </MagneticButton>
        </motion.div>

        {/* Direct Connections / Social Handles */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-accent-cyan uppercase tracking-widest transition-colors duration-300 group clickable"
            >
              {link.icon}
              <span>{link.label}</span>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

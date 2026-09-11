import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-dark-border py-12 px-4 sm:px-8 md:px-12 bg-dark font-mono text-xs text-ink-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-bold text-ink-primary text-sm uppercase">PRANAVI JAIN</span>
          <span className="hidden sm:inline text-dark-border">•</span>
          <span className="text-lime-accent">{personalInfo.role}</span>
        </div>

        {/* Center Quick Links */}
        <div className="flex items-center gap-6 text-ink-secondary">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-lime-accent transition-colors">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-lime-accent transition-colors">
            LinkedIn
          </a>
          <a href={personalInfo.email} className="hover:text-lime-accent transition-colors">
            Email
          </a>
          <a href={personalInfo.resumeLink} target="_blank" rel="noreferrer" className="hover:text-lime-accent transition-colors">
            Resume
          </a>
        </div>

        {/* Right Copyright & Back to top */}
        <div className="flex items-center gap-6">
          <span>© 2026 Pranavi Jain</span>
          <button
            onClick={scrollToTop}
            className="hover:text-lime-accent transition-colors cursor-pointer uppercase tracking-wider text-ink-primary border-b border-dark-border hover:border-lime-accent"
          >
            [ Top ↑ ]
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-paper-border py-10 px-6 sm:px-10 md:px-16 bg-paper font-mono text-xs text-ink-muted">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-ink font-semibold">Portfolio/ Pranavi Jain</span>
          <span className="ml-2">© 2026 — All Rights Reserved.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <span>CSE '27</span>
          <button 
            onClick={scrollToTop} 
            className="hover:text-ink transition-colors cursor-pointer uppercase tracking-wider text-ink border-b border-paper-border hover:border-ink"
          >
            [ Back to Top ↑ ]
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

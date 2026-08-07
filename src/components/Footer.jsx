import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-dark-border py-8 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-warm-faint font-sans">
        <div>Pranavi Jain &copy; 2026</div>
        <button 
          onClick={scrollToTop}
          className="hover:text-accent transition-colors cursor-pointer"
        >
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
};

export default Footer;

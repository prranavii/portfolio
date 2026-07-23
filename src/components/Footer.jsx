import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-charcoal py-8 px-6 md:px-12 border-t border-white/5 relative z-10 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-light">
        
        {/* Playful quote */}
        <div className="text-center md:text-left italic">
          "Built with code, caffeine &amp; questionable debugging decisions."
        </div>

        {/* Copyright credits */}
        <div className="text-center md:text-right flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <span>Designed &amp; built by <strong className="text-zinc-400 font-medium">Pranavi Jain</strong></span>
          <span className="hidden sm:inline">&bull;</span>
          <span>&copy; 2026</span>
        </div>

        {/* Scroll back to top button */}
        <button
          onClick={handleScrollTop}
          className="w-8 h-8 rounded-full border border-white/5 bg-charcoal-light/10 hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 flex items-center justify-center text-zinc-500 group clickable"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>

      </div>
    </footer>
  );
}

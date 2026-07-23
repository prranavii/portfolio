import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section 
      id="credentials" 
      className="py-24 w-full flex flex-col justify-center px-6 md:px-12 bg-charcoal border-b border-white/5 relative"
    >
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Title */}
        <div className="text-left mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-accent-cyan mb-3 block">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight leading-none text-white">
            Experience &amp; <br className="sm:hidden" /> Certifications.
          </h2>
        </div>

        {/* Editorial list */}
        <div className="border-t border-white/5 divide-y divide-white/5 text-left">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* Hover highlight background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Title & Issuer */}
              <div className="flex-1 md:max-w-[45%] relative z-10">
                <span className="text-[10px] uppercase font-bold text-accent-cyan/85 tracking-widest block mb-1">
                  {cert.issuer}
                </span>
                <h3 className="text-base md:text-lg font-display font-bold text-white group-hover:text-accent-cyan transition-colors duration-300 flex items-center gap-2">
                  {cert.title}
                </h3>
              </div>

              {/* Details scope summary */}
              <div className="flex-1 md:max-w-[40%] text-xs text-zinc-400 font-light leading-relaxed relative z-10">
                {cert.details}
              </div>

              {/* Year & Arrow indicator */}
              <div className="flex items-center justify-between md:justify-end gap-6 relative z-10">
                <span className="font-mono text-xs text-zinc-500">{cert.year}</span>
                <span className="w-8 h-8 rounded-full border border-white/5 group-hover:border-accent-cyan/45 group-hover:text-accent-cyan transition-all duration-300 flex items-center justify-center text-zinc-600">
                  <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

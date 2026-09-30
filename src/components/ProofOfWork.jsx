import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ProofOfWork = () => {
  const { proofOfWork } = portfolioData;

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 border-t border-dark-border bg-dark-card/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center justify-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-8">
          <ShieldCheck size={16} />
          <span>PROOF OF WORK // CREDIBILITY METRICS</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {proofOfWork.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-xl bg-dark-surface border border-dark-border hover:border-lime-accent/40 transition-all text-center group font-mono"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-lime-accent tracking-tight group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-ink-primary uppercase tracking-wider mt-2">
                {stat.label}
              </div>
              <div className="text-[10px] text-ink-muted mt-1 uppercase tracking-widest">
                VERIFIED RECORD
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProofOfWork;

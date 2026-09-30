import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Cpu, GitBranch, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const EngineeringJourney = () => {
  const { journeyNodes } = portfolioData;
  const [selectedNodeId, setSelectedNodeId] = useState(journeyNodes[0].id);

  const selectedNode = journeyNodes.find(n => n.id === selectedNodeId) || journeyNodes[0];

  return (
    <section id="journey" className="py-24 px-4 sm:px-8 md:px-12 border-t border-dark-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-dark-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-2">
              <Sparkles size={14} />
              <span>SYSTEM MAP</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-ink-primary">
              ENGINEERING JOURNEY
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary mt-3 md:mt-0 max-w-md">
            Interactive system map of industry internships, freelance engineering, production AI platforms, and hackathons.
          </p>
        </div>

        {/* Interactive Engineering System Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Connected Node Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono text-xs text-ink-muted uppercase tracking-widest pb-2 border-b border-dark-border flex justify-between items-center">
              <span>SELECT NODE // PATHWAY</span>
              <span className="text-lime-accent font-semibold">4 ACTIVE NODES</span>
            </div>

            <div className="space-y-3 font-mono">
              {journeyNodes.map((node, idx) => {
                const isSelected = node.id === selectedNodeId;

                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer relative ${
                      isSelected
                        ? 'bg-lime-accent/10 border-lime-accent text-ink-primary shadow-lg scale-[1.01]'
                        : 'bg-dark-card border-dark-border text-ink-secondary hover:border-lime-accent/40 hover:text-ink-primary'
                    }`}
                  >
                    {/* Node Connecting Path Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-lime-accent animate-pulse' : 'bg-dark-border'}`} />
                        <span className="text-xs font-bold text-ink-primary uppercase tracking-tight">
                          {node.title}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        isSelected ? 'bg-lime-accent text-dark' : 'bg-dark-surface text-ink-muted'
                      }`}>
                        {node.status}
                      </span>
                    </div>

                    <div className="mt-2 pl-5 flex items-center justify-between text-[11px] text-ink-muted">
                      <span>@ {node.entity}</span>
                      <span>{node.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Node Inspector Card */}
          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-ink-muted uppercase tracking-widest pb-2 border-b border-dark-border flex justify-between items-center mb-4">
              <span>NODE INSPECTOR TELEMETRY</span>
              <span className="text-lime-accent font-semibold">{selectedNode.type}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-xl bg-dark-card border-2 border-lime-accent/40 space-y-6 shadow-2xl lime-glow-card font-sans"
              >
                
                {/* Node Metadata Header */}
                <div className="space-y-2 border-b border-dark-border pb-4 font-mono">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-lime-accent font-bold uppercase tracking-wider">
                      [{selectedNode.status}]
                    </span>
                    <span className="text-ink-muted">{selectedNode.date}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-ink-primary uppercase tracking-tight">
                    {selectedNode.title}
                  </h3>
                  <div className="text-sm font-bold text-lime-accent">
                    @ {selectedNode.entity}
                  </div>
                </div>

                {/* Node Description */}
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {selectedNode.description}
                </p>

                {/* Key Contribution Bullet Points */}
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-xs font-bold text-lime-accent uppercase tracking-wider">
                    .ENGINEERING CONTRIBUTIONS & OUTPUTS
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm text-ink-primary font-sans">
                    {selectedNode.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-lime-accent mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Stack Badges */}
                <div className="pt-4 border-t border-dark-border space-y-2 font-mono text-xs">
                  <span className="text-ink-muted text-[11px] uppercase tracking-wider block">
                    TECHNOLOGIES & TOOLS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-dark-surface border border-dark-border text-ink-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EngineeringJourney;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Layers, Database, Code2, Wrench, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  ai: Cpu,
  backend: Terminal,
  frontend: Layers,
  databases: Database,
  languages: Code2,
  "dev-tools": Wrench,
};

const EngineeringStackPanel = () => {
  const { stackControlPanel } = portfolioData;
  const [selectedCatId, setSelectedCatId] = useState(stackControlPanel[0].id);

  const selectedCategory = stackControlPanel.find(c => c.id === selectedCatId) || stackControlPanel[0];
  const IconComp = categoryIcons[selectedCategory.id] || Terminal;

  return (
    <section id="stack" className="py-24 px-4 sm:px-8 md:px-12 border-t border-dark-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-dark-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-2">
              <Sparkles size={14} />
              <span>SYSTEM CONTROL PANEL</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-ink-primary">
              ENGINEERING STACK
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary mt-3 md:mt-0 max-w-md">
            Interactive system architecture control panel. Select sub-systems to inspect active production frameworks and tooling.
          </p>
        </div>

        {/* Control Panel Interactive Dashboard */}
        <div className="rounded-xl bg-dark-card border border-dark-border p-6 sm:p-8 shadow-2xl relative overflow-hidden font-mono">
          
          {/* Top Control Bar Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-dark-border text-xs">
            <div className="flex items-center gap-2">
              <Terminal size={15} className="text-lime-accent" />
              <span className="font-bold text-ink-primary uppercase tracking-wider">stack_control_panel.sys</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
              <span className="text-lime-accent font-semibold">STATE: ACTIVE PIPELINE</span>
            </div>
          </div>

          {/* Interactive Category Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 my-8">
            {stackControlPanel.map((cat) => {
              const isSelected = cat.id === selectedCatId;
              const Icon = categoryIcons[cat.id] || Terminal;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCatId(cat.id)}
                  className={`p-3.5 rounded-lg border text-left font-mono text-xs transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-lime-accent text-dark border-lime-accent font-bold shadow-lg scale-[1.03]'
                      : 'bg-dark-surface border-dark-border text-ink-secondary hover:border-lime-accent/50 hover:text-ink-primary'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon size={16} />
                    <span className="text-[10px] opacity-75">
                      [{cat.techs.length}]
                    </span>
                  </div>
                  <span className="font-bold tracking-wider text-[11px] block uppercase">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Node Inspector Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-lg bg-dark-surface border border-dark-border space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-dark-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-lime-accent/10 border border-lime-accent/30 text-lime-accent">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-ink-primary uppercase tracking-tight">
                      {selectedCategory.name}
                    </h3>
                    <span className="text-xs text-ink-muted">
                      {selectedCategory.tagline}
                    </span>
                  </div>
                </div>

                <span className="text-xs text-lime-accent font-semibold uppercase tracking-wider">
                  // {selectedCategory.techs.length} PRODUCTION MODULES
                </span>
              </div>

              {/* Technologies Connected Badges Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedCategory.techs.map((tech, idx) => (
                  <div
                    key={tech}
                    className="p-3 rounded bg-dark-card border border-dark-border flex items-center justify-between text-xs text-ink-primary hover:border-lime-accent/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" />
                      <span className="font-semibold">{tech}</span>
                    </div>
                    <span className="text-[10px] text-ink-muted group-hover:text-lime-accent font-mono">
                      NODE 0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default EngineeringStackPanel;

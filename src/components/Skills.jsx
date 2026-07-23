import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

export default function Skills({ hoveredTech, setHoveredTech }) {
  const { categories } = portfolioData.skills;
  const [activeConsoleSkill, setActiveConsoleSkill] = useState(null);

  // Helper check to see if a skill name is highlighted from parent props
  const isSkillHighlighted = (skillName) => {
    if (!hoveredTech) return false;
    if (Array.isArray(hoveredTech)) {
      return hoveredTech.includes(skillName);
    }
    return hoveredTech === skillName;
  };

  // Sync parent hover states with terminal output
  useEffect(() => {
    if (!hoveredTech) {
      setActiveConsoleSkill(null);
      return;
    }

    if (Array.isArray(hoveredTech)) {
      // Find the first matching skill object to show in the CLI panel
      let foundSkill = null;
      for (const cat of categories) {
        const match = cat.items.find(item => item.name === hoveredTech[0]);
        if (match) {
          foundSkill = match;
          break;
        }
      }
      setActiveConsoleSkill(foundSkill);
    } else {
      // It's a single string
      let foundSkill = null;
      for (const cat of categories) {
        const match = cat.items.find(item => item.name === hoveredTech);
        if (match) {
          foundSkill = match;
          break;
        }
      }
      setActiveConsoleSkill(foundSkill);
    }
  }, [hoveredTech, categories]);

  const handleMouseEnter = (skill) => {
    setHoveredTech(skill.name);
    setActiveConsoleSkill(skill);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
    setActiveConsoleSkill(null);
  };

  return (
    <section 
      id="skills" 
      className="py-24 md:py-36 w-full flex flex-col justify-center px-6 md:px-12 bg-charcoal border-b border-white/5 relative"
    >
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-left mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-accent-cyan mb-3 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-none text-white">
            The Toolkit.
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Categorized skill cards */}
          <div className="lg:col-span-7 space-y-8">
            {categories.map((category, catIdx) => (
              <motion.div 
                key={catIdx}
                className="text-left space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: catIdx * 0.08 }}
              >
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 border-b border-white/5 pb-2">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill, skillIdx) => {
                    const isHighlighted = isSkillHighlighted(skill.name);
                    const isDirectHover = activeConsoleSkill?.name === skill.name;
                    return (
                      <div
                        key={skillIdx}
                        className={`px-4 py-2 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-300 select-none cursor-pointer flex items-center gap-2 clickable ${
                          isHighlighted || isDirectHover
                            ? 'border-accent-cyan bg-accent-cyan/10 text-accent-cyan shadow-[0_0_12px_rgba(0,242,254,0.15)] -translate-y-0.5'
                            : 'border-white/5 bg-charcoal-light/30 text-zinc-400 hover:border-white/20 hover:text-white'
                        }`}
                        onMouseEnter={() => handleMouseEnter(skill)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          isHighlighted || isDirectHover ? 'bg-accent-cyan animate-pulse' : 'bg-zinc-600'
                        }`} />
                        {skill.name}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Interactive CLI Terminal */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div 
              className="bg-charcoal-light border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl font-mono text-[11px] md:text-xs text-left"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-1">
                  <Terminal size={12} className="text-accent-cyan" /> pjain@toolkit_shell
                </span>
                <div className="w-10" />
              </div>

              {/* Terminal display */}
              <div className="space-y-4 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-accent-cyan font-bold">pjain@terminal:~$</span>
                    <span>
                      {hoveredTech 
                        ? (Array.isArray(hoveredTech) 
                          ? `inspect --project system_stack` 
                          : `inspect --tool ${hoveredTech.toLowerCase().replace(/[.\s&]/g, '')}`) 
                        : 'help --system'}
                    </span>
                  </div>
                  
                  {activeConsoleSkill ? (
                    <motion.div 
                      key={activeConsoleSkill.name}
                      className="mt-3 text-zinc-300 leading-relaxed space-y-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-zinc-500 font-bold uppercase text-[9px] tracking-wider">
                        STATUS: {Array.isArray(hoveredTech) ? 'SYSTEM STACK HIGHLIGHT' : 'INITIALIZED & DEPLOYED'}
                      </p>
                      <p>
                        <span className="text-accent-cyan font-bold">&gt;&gt; {activeConsoleSkill.name}</span>: {activeConsoleSkill.useCase}
                      </p>
                      {Array.isArray(hoveredTech) && (
                        <p className="text-[10px] text-zinc-500 italic mt-2">
                          * Inspecting system architecture. Hover over individual pills to query specific diagnostics.
                        </p>
                      )}
                    </motion.div>
                  ) : (
                    <div className="mt-3 text-zinc-500 leading-relaxed">
                      <p className="animate-pulse"># Listening for inspection triggers...</p>
                      <p className="mt-2 text-zinc-400">
                        Hover over any active technology pill in the categories grid to query utilization records and diagnostic logs.
                      </p>
                      <p className="mt-2 text-zinc-500 text-[10px]">
                        * Hovering projects in the Work showcase will also query and map tech stacks in real-time here.
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[10px] text-zinc-500">
                  <span>SYSTEM: OK</span>
                  <span>v2.0.0</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Code2, Database, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  "AI / GENAI": Cpu,
  "AI FRAMEWORKS": Sparkles,
  "DEVELOPMENT": Layers,
  "LANGUAGES": Code2,
  "ENGINEERING": Terminal,
};

const categoryBadges = {
  "AI / GENAI": ["Generative AI", "LLMs", "RAG", "Prompt Engineering", "AI Agents"],
  "AI FRAMEWORKS": ["LangChain", "LangGraph", "Hugging Face", "ChromaDB", "Groq", "FAISS", "Ollama"],
  "DEVELOPMENT": ["React", "Node.js", "Express", "FastAPI", "MongoDB", "PostgreSQL", "Tailwind CSS"],
  "LANGUAGES": ["Python", "Java", "JavaScript", "SQL", "C++"],
  "ENGINEERING": ["Git", "GitHub", "REST APIs", "Data Structures & Algorithms", "System Design"],
};

const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-4 sm:px-8 md:px-12 border-t border-dark-border bg-dark-surface/30 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-dark-border pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-2">
              <Sparkles size={14} />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-ink-primary">
              ENGINEERING / AI STACK
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary mt-3 md:mt-0 max-w-md">
            Categorized technical stack focused on practical AI integration, intelligent retrieval, and full-stack software development.
          </p>
        </div>

        {/* 5 Stack Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.stackCategories.map((cat, idx) => {
            const IconComponent = categoryIcons[cat.name] || Terminal;
            const badges = categoryBadges[cat.name] || [];

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-xl bg-dark-card border border-dark-border hover:border-lime-accent/40 transition-all duration-200 group flex flex-col justify-between lime-glow-card"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-dark-border pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded bg-lime-accent/10 text-lime-accent border border-lime-accent/20">
                        <IconComponent size={18} />
                      </div>
                      <h3 className="font-mono font-bold text-sm text-ink-primary group-hover:text-lime-accent transition-colors">
                        {cat.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-ink-muted">0{idx + 1}</span>
                  </div>

                  {/* Category Badges */}
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                    {badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1.5 rounded bg-dark-surface border border-dark-border text-ink-primary hover:border-lime-accent/50 hover:text-lime-accent transition-colors"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-dark-border font-mono text-[11px] text-ink-muted">
                  {cat.description}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechStack;

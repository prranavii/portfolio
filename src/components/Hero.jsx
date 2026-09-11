import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Cpu, Database, Terminal, Shield, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Interactive Vercel-style AI Agent System Architecture Diagram
const HeroSystemVisual = () => {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    { id: 'rag', label: 'RAG Pipeline', detail: 'FAISS & ChromaDB vector retrieval' },
    { id: 'tools', label: 'Tools & APIs', detail: 'AST Code Parser & Execution Pipe' },
    { id: 'memory', label: 'Vector Memory', detail: 'Episodic context retention' },
    { id: 'llm', label: 'Local LLM / Groq', detail: 'Sub-second Llama 3.1 inference' },
  ];

  return (
    <div className="w-full max-w-xl p-6 rounded-xl bg-dark-card border border-dark-border relative overflow-hidden group shadow-2xl">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Header bar */}
      <div className="flex justify-between items-center pb-4 border-b border-dark-border font-mono text-[11px] text-ink-muted">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-lime-accent" />
          <span className="text-ink-primary font-semibold">sys_agent_architecture.v2</span>
        </div>
        <div className="flex items-center gap-1.5 text-lime-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-ping" />
          <span>LIVE PIPELINE</span>
        </div>
      </div>

      {/* Architecture Flow Stack */}
      <div className="py-6 space-y-5 font-mono">
        {/* Node 1: User Request */}
        <div className="flex items-center justify-between p-3 rounded bg-dark-surface border border-dark-border">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-lime-accent/10 border border-lime-accent/30 flex items-center justify-center text-lime-accent font-bold text-xs">
              U
            </div>
            <div>
              <div className="text-xs font-semibold text-ink-primary">USER INPUT / PROMPT</div>
              <div className="text-[10px] text-ink-muted">Natural language query or code patch request</div>
            </div>
          </div>
          <span className="text-[10px] text-lime-accent px-2 py-0.5 rounded bg-lime-accent/10">INGEST</span>
        </div>

        {/* Down Arrow Flow Connector */}
        <div className="flex justify-center my-1">
          <div className="w-px h-6 bg-gradient-to-b from-lime-accent to-dark-border animate-pulse" />
        </div>

        {/* Node 2: Central AI Agent Orchestrator */}
        <div className="p-3.5 rounded bg-gradient-to-r from-lime-accent/10 via-dark-surface to-dark-surface border border-lime-accent/40 text-center relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-lime-accent tracking-wider uppercase">
            <Sparkles size={14} />
            AI AGENT ORCHESTRATOR
          </div>
          <div className="text-[10px] text-ink-secondary mt-1">
            Dynamic Intent Classifier & Tool Execution Planner
          </div>
        </div>

        {/* Flow Connector Split */}
        <div className="flex justify-center my-1">
          <div className="w-px h-6 bg-gradient-to-b from-lime-accent to-dark-border" />
        </div>

        {/* Node 3: 4 Sub-System Modules Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {nodes.map((node) => (
            <div
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-2.5 rounded border text-left transition-all duration-200 cursor-pointer ${
                activeNode === node.id
                  ? 'bg-lime-accent/15 border-lime-accent text-ink-primary scale-[1.02]'
                  : 'bg-dark-surface border-dark-border text-ink-secondary hover:border-lime-accent/40'
              }`}
            >
              <div className="text-[11px] font-bold text-ink-primary flex items-center justify-between">
                <span>{node.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" />
              </div>
              <div className="text-[9.5px] text-ink-muted mt-1 leading-tight">
                {node.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Down Arrow Flow Connector */}
        <div className="flex justify-center my-1">
          <div className="w-px h-6 bg-gradient-to-b from-lime-accent to-dark-border" />
        </div>

        {/* Node 4: Grounded Result */}
        <div className="flex items-center justify-between p-3 rounded bg-lime-accent/10 border border-lime-accent/50 text-ink-primary">
          <div className="flex items-center gap-2.5">
            <Cpu size={16} className="text-lime-accent" />
            <div>
              <div className="text-xs font-bold text-lime-accent">GROUNDED RESULT & INFERENCE</div>
              <div className="text-[10px] text-ink-secondary">Hallucination-free output with sub-second latency</div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-dark bg-lime-accent px-2 py-0.5 rounded uppercase">
            99.4% FIT
          </span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const { personalInfo } = portfolioData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative pt-32 pb-20 px-4 sm:px-8 md:px-12 flex flex-col justify-center overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border text-xs font-mono text-ink-secondary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-accent" />
            </span>
            <span className="text-ink-primary font-medium">{personalInfo.availability}</span>
          </div>

          {/* Name & Title Block */}
          <div className="space-y-2">
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-ink-primary uppercase leading-[0.95]">
              PRANAVI JAIN
            </h1>
            <div className="font-mono text-sm sm:text-base font-bold text-lime-accent tracking-widest uppercase">
              {personalInfo.role}
            </div>
          </div>

          {/* Quote & Bio */}
          <div className="space-y-4 max-w-xl">
            <p className="font-display text-xl sm:text-2xl text-ink-primary font-medium leading-snug italic text-lime-accent/90 border-l-2 border-lime-accent pl-4 py-1">
              "{personalInfo.headlineQuote}"
            </p>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('work')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-lime-accent text-dark font-mono font-bold text-xs uppercase tracking-wider hover:bg-lime-glow transition-all duration-200 shadow-lg shadow-lime-accent/10 cursor-pointer"
            >
              View My Work <ArrowRight size={16} />
            </button>

            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-dark-card border border-dark-border hover:border-lime-accent/50 text-ink-primary hover:text-lime-accent font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
            >
              Resume <ArrowUpRight size={15} />
            </a>

            <div className="flex items-center gap-3 pl-2 font-mono text-xs text-ink-muted">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-ink-primary transition-colors underline"
              >
                GitHub ↗
              </a>
              <span>·</span>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-ink-primary transition-colors underline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroSystemVisual />
        </div>

      </div>
    </section>
  );
};

export default Hero;

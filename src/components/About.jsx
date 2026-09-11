import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="py-24 px-4 sm:px-8 md:px-12 border-t border-dark-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-lime-accent uppercase tracking-widest font-semibold mb-6">
          <Sparkles size={14} />
          <span>ENGINEERING PHILOSOPHY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Headline */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-ink-primary leading-[1.05]">
              {personalInfo.aboutHeadline}
            </h2>

            <div className="space-y-4 font-sans text-base sm:text-lg text-ink-secondary leading-relaxed pt-2">
              {personalInfo.aboutBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6 font-mono text-xs text-ink-muted">
              <div className="flex items-center gap-2 text-ink-primary">
                <CheckCircle2 size={16} className="text-lime-accent" />
                <span>Class of 2027</span>
              </div>
              <div className="flex items-center gap-2 text-ink-primary">
                <CheckCircle2 size={16} className="text-lime-accent" />
                <span>India — Global Remote</span>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Card */}
          <div className="lg:col-span-5 rounded-xl bg-dark-card border border-dark-border p-6 sm:p-8 space-y-6 font-mono text-xs">
            <div className="flex justify-between items-center border-b border-dark-border pb-4">
              <span className="font-bold text-ink-primary text-sm uppercase">CANDIDATE BRIEF</span>
              <span className="text-lime-accent font-semibold">PRANAVI JAIN</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Primary Role:</span>
                <span className="text-ink-primary font-semibold">AI / Software Engineer</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Degree:</span>
                <span className="text-ink-primary">B.Tech Computer Science</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Core Focus:</span>
                <span className="text-lime-accent font-medium">Generative AI, RAG & Full-Stack</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Status:</span>
                <span className="text-lime-accent font-bold">Open to Internships '27</span>
              </div>
            </div>

            <div className="pt-4 border-t border-dark-border flex items-center justify-between">
              <a
                href={personalInfo.email}
                className="text-ink-primary hover:text-lime-accent transition-colors font-bold underline"
              >
                pranavijain47@gmail.com
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-lime-accent hover:underline flex items-center gap-1 font-semibold"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

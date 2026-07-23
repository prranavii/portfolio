import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award, BookOpen, Brain, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function Journey() {
  const { journey } = portfolioData;

  // Icon chooser helper based on journey item details
  const getMilestoneIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('started')) return <BookOpen size={16} />;
    if (t.includes('internship')) return <Briefcase size={16} />;
    if (t.includes('hackathon') || t.includes('projects')) return <Code size={16} />;
    if (t.includes('prep') || t.includes('prepares')) return <Brain size={16} />;
    if (t.includes('graduat') || t.includes('chapter')) return <GraduationCap size={16} />;
    return <Award size={16} />;
  };

  return (
    <section 
      id="journey" 
      className="py-24 md:py-36 w-full flex flex-col justify-center px-6 md:px-12 bg-charcoal border-b border-white/5 relative overflow-hidden"
    >
      {/* Background glow lights */}
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full">
        {/* Title */}
        <div className="text-left mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-accent-cyan mb-3 block">Timeline</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-none text-white">
            The Journey So Far.
          </h2>
        </div>

        {/* Timeline wrapper */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-8 space-y-12 text-left">
          
          {/* Vertical line glow indicator */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-accent-cyan via-white/20 to-transparent pointer-events-none" />

          {journey.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            >
              {/* Outer timeline ring node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 md:h-6 md:w-6 h-5 rounded-full bg-charcoal border-2 border-white/10 group-hover:border-accent-cyan transition-colors duration-300 flex items-center justify-center text-zinc-500 group-hover:text-accent-cyan text-[10px]">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-accent-cyan group-hover:scale-125 transition-all duration-300" />
              </div>

              {/* Box container */}
              <div className="bg-charcoal-light/20 hover:bg-charcoal-light/45 border border-white/5 p-6 rounded-2xl transition-colors duration-300 relative">
                
                {/* Year tag floating */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent-cyan flex items-center gap-1.5">
                    {getMilestoneIcon(item.title)} {item.year}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-2.5 max-w-2xl">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

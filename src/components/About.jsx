import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

// Incremental numerical counter hook for stats
function AnimatedCounter({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Extract number and suffix, e.g., "200+" -> number: 200, suffix: "+"
  const numericMatch = value.toString().match(/\d+/);
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.toString().replace(/\d+/g, '');

  useEffect(() => {
    if (!isInView) return;
    
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { personalInfo, stats } = portfolioData;

  return (
    <section 
      id="about" 
      className="relative py-24 md:py-36 w-full flex flex-col justify-center px-6 md:px-12 bg-charcoal overflow-hidden border-b border-white/5"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-accent-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
        
        {/* Left Side: Bio Editorial */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-accent-cyan mb-3">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-none text-white mb-8">
            Behind <br className="hidden md:inline" />
            the Code.
          </h2>

          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed max-w-xl mb-6">
            {personalInfo.shortBio.split(" DSA problems")[0]} <strong className="text-white font-semibold">DSA problems</strong>
            {personalInfo.shortBio.split(" DSA problems")[1] ? personalInfo.shortBio.split(" DSA problems")[1].split(" full-stack")[0] : ""} <strong className="text-white font-semibold">full-stack applications</strong>
            {personalInfo.shortBio.split(" full-stack")[1] ? personalInfo.shortBio.split(" full-stack")[1] : ""}
          </p>

          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-xl border-l border-accent-cyan/30 pl-4 py-1.5 italic">
            "I spend way too much time debugging systems, analyzing computational bounds, and refining UI interactions. I believe code should not only compile, but feel delightful to interact with."
          </p>
        </motion.div>

        {/* Right Side: Stats Showcase Grid */}
        <motion.div 
          className="lg:col-span-5 w-full grid grid-cols-2 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glow-border bg-charcoal-light/35 border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-start text-left group hover:bg-charcoal-lighter/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-accent-cyan tracking-tight mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {stat.label}
              </span>
            </div>
          ))}

          {/* Decorative info cell */}
          <div className="col-span-2 bg-gradient-to-r from-accent-cyan/10 to-transparent border border-accent-cyan/20 p-5 rounded-2xl text-left">
            <span className="text-[10px] uppercase font-bold text-accent-cyan tracking-widest block mb-1">Current Focus</span>
            <p className="text-xs text-zinc-400">
              Applying algorithm engineering to AI frameworks and web services.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle, ExternalLink, Activity } from 'lucide-react';

export default function DSA() {
  const { problemsSolved, leetcodeRating, platforms, leetcodeUrl } = portfolioData.dsa;

  // Mock data for contribution grid: 7 rows (days of week) x 24 columns (weeks)
  const activityWeeks = 24;
  const activityDays = 7;
  
  // Deterministic random intensity: 0 (none), 1 (light), 2 (mid), 3 (high)
  const getActivityLevel = (r, c) => {
    // Generate patterns to look like a realistic engineering graph
    const seed = (r * 13 + c * 37) % 100;
    if (seed < 40) return 0;
    if (seed < 70) return 1;
    if (seed < 90) return 2;
    return 3;
  };

  const getIntensityColor = (level) => {
    switch (level) {
      case 1: return 'bg-accent-cyan/15 border-accent-cyan/20';
      case 2: return 'bg-accent-cyan/40 border-accent-cyan/50';
      case 3: return 'bg-accent-cyan/80 border-accent-cyan';
      default: return 'bg-charcoal-lighter/20 border-white/5';
    }
  };

  // Sparkline coordinates for contest rating progression (1400 to 1565 max)
  // 6 ratings points: 1410, 1425, 1405, 1460, 1512, 1565
  const ratingTrendPoints = [1410, 1435, 1415, 1470, 1520, 1565];
  const chartHeight = 80;
  const chartWidth = 320;
  const padding = 10;
  
  const getSvgCoordinates = () => {
    const minRating = 1350;
    const maxRating = 1600;
    const rangeY = maxRating - minRating;
    const count = ratingTrendPoints.length;

    return ratingTrendPoints.map((val, idx) => {
      const x = padding + (idx / (count - 1)) * (chartWidth - 2 * padding);
      // Invert Y because SVG coordinates start at 0 (top)
      const y = chartHeight - padding - ((val - minRating) / rangeY) * (chartHeight - 2 * padding);
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <section 
      id="dsa" 
      className="py-24 md:py-36 w-full flex flex-col justify-center px-6 md:px-12 bg-charcoal border-b border-white/5 relative"
    >
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-left mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-accent-cyan mb-3 block">Algorithms</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-none text-white">
            Problem Solving.
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* Left Column: Metrics & Platform Links */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-charcoal-light/35 border border-white/5 p-5 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest block mb-1">Solved</span>
                <div className="font-display font-black text-3xl text-accent-cyan">{problemsSolved}+</div>
                <span className="text-[10px] text-zinc-400">Total LeetCode &amp; GFG</span>
              </motion.div>

              <motion.div 
                className="bg-charcoal-light/35 border border-white/5 p-5 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest block mb-1">Max Rating</span>
                <div className="font-display font-black text-3xl text-white">{leetcodeRating}</div>
                <span className="text-[10px] text-accent-cyan/80">LeetCode Contest Peak</span>
              </motion.div>
            </div>

            {/* Platform Links list */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-2">Verified Profiles</h3>
              {platforms.map((platform, idx) => (
                <a
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-charcoal-light/20 border border-white/5 rounded-xl hover:border-accent-cyan/20 hover:bg-charcoal-lighter/30 transition-all duration-300 group clickable"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-accent-cyan" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors">{platform.name}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 group-hover:text-accent-cyan transition-colors flex items-center gap-1 font-mono uppercase">
                    {platform.status} <ExternalLink size={10} />
                  </span>
                </a>
              ))}
            </div>

            {/* LeetCode Button */}
            <a
              href={leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan hover:text-charcoal transition-all duration-300 font-semibold text-xs tracking-widest uppercase clickable"
            >
              View LeetCode Dashboard
            </a>

          </div>

          {/* Right Column: Dynamic SVG Chart & Git Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Contest progression chart */}
            <motion.div 
              className="bg-charcoal-light/30 border border-white/5 rounded-2xl p-5 md:p-6 text-left flex flex-col justify-between h-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xs uppercase font-bold text-zinc-400 tracking-wider">Rating Sparkline</h3>
                  <p className="text-[10px] text-zinc-500">Contest rating progression timeline</p>
                </div>
                <Award size={16} className="text-accent-cyan" />
              </div>

              {/* Sparkline curve */}
              <div className="w-full flex items-center justify-center py-2">
                <svg className="w-full h-24 overflow-visible" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
                  {/* Grid Lines */}
                  <line x1="10" y1="10" x2="310" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="10" y1="40" x2="310" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="10" y1="70" x2="310" y2="70" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                  {/* Gradient Area Fill */}
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.25"/>
                      <stop offset="100%" stopColor="#00F2FE" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path
                    d={`M ${padding},${chartHeight - padding} L ${getSvgCoordinates()} L ${chartWidth - padding},${chartHeight - padding} Z`}
                    fill="url(#chartGrad)"
                  />

                  {/* Rating Line */}
                  <polyline
                    fill="none"
                    stroke="#00F2FE"
                    strokeWidth="2.5"
                    points={getSvgCoordinates()}
                  />

                  {/* Interactive node indicator */}
                  <circle cx="310" cy="10" r="3.5" fill="#00F2FE" className="animate-pulse" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[9px] text-zinc-500 font-mono mt-2 uppercase">
                <span>Start (1410)</span>
                <span>Peak Rating (1565)</span>
              </div>
            </motion.div>

            {/* Consistency Git Grid */}
            <motion.div 
              className="bg-charcoal-light/30 border border-white/5 rounded-2xl p-5 md:p-6 text-left flex flex-col justify-between h-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xs uppercase font-bold text-zinc-400 tracking-wider">Algorithmic Activity Map</h3>
                  <p className="text-[10px] text-zinc-500">6-Month grid of problem solving submissions</p>
                </div>
                <Activity size={16} className="text-accent-cyan" />
              </div>

              {/* Grid visualization */}
              <div className="w-full overflow-x-auto pb-1 scrollbar-thin">
                <div className="flex gap-1 min-w-[380px] justify-between">
                  {Array.from({ length: activityWeeks }).map((_, cIdx) => (
                    <div key={cIdx} className="flex flex-col gap-1">
                      {Array.from({ length: activityDays }).map((_, rIdx) => {
                        const level = getActivityLevel(rIdx, cIdx);
                        return (
                          <div
                            key={rIdx}
                            className={`w-2.5 h-2.5 rounded-[2px] border transition-colors duration-300 ${getIntensityColor(level)}`}
                            title={`Activity intensity: ${level}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend bar */}
              <div className="flex items-center justify-between text-[9px] text-zinc-500 mt-2 font-mono uppercase">
                <span>Less Active</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-[1px] bg-charcoal-lighter/20 border border-white/5" />
                  <span className="w-2 h-2 rounded-[1px] bg-accent-cyan/15 border border-accent-cyan/20" />
                  <span className="w-2 h-2 rounded-[1px] bg-accent-cyan/40 border border-accent-cyan/50" />
                  <span className="w-2 h-2 rounded-[1px] bg-accent-cyan/80 border border-accent-cyan" />
                  <span className="ml-1">More Active</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Info } from 'lucide-react';

const curiosityNodes = [
  {
    id: 'ai-ml',
    label: 'Artificial Intelligence',
    x: 250,
    y: 40,
    why: 'The overarching envelope. I am interested in how neural networks model representation patterns and make predictions.',
    connections: ['gen-ai']
  },
  {
    id: 'gen-ai',
    label: 'Generative AI',
    x: 180,
    y: 110,
    why: 'Studying models that synthesize new content (code, text, visuals) using transformer mechanisms.',
    connections: ['llms']
  },
  {
    id: 'llms',
    label: 'Large Language Models',
    x: 180,
    y: 190,
    why: 'Working with context lengths, system prompts, token weights, and local weights deployments (e.g., Llama 3.1).',
    connections: ['rag', 'agents']
  },
  {
    id: 'rag',
    label: 'RAG Pipelines',
    x: 100,
    y: 270,
    why: 'Retrieval-Augmented Generation. Connecting LLMs with external files, chunking, parsing, and context feeding.',
    connections: ['vector-search']
  },
  {
    id: 'agents',
    label: 'AI Agents',
    x: 260,
    y: 270,
    why: 'Autonomous loops where an LLM is equipped with tools, memory, and routing choices to execute multi-step scripts.',
    connections: ['vector-search']
  },
  {
    id: 'vector-search',
    label: 'Vector Search',
    x: 180,
    y: 350,
    why: 'Encoding text into multidimensional floats (embeddings) and searching via cosine similarity distance algorithms.',
    connections: []
  },
  {
    id: 'backend',
    label: 'Backend Systems',
    x: 380,
    y: 130,
    why: 'Designing high-throughput server routers, databases, threading schemas, and ASGI pipelines to serve AI models.',
    connections: ['sys-design']
  },
  {
    id: 'sys-design',
    label: 'System Design',
    x: 380,
    y: 230,
    why: 'Exploring load balancing, microservices, caches, and scalable data layouts supporting complex applications.',
    connections: ['agents', 'vector-search']
  }
];

export default function CuriousAbout() {
  const [activeNode, setActiveNode] = useState(null);

  // Check if a line should be highlighted
  const isLineActive = (fromNode, toId) => {
    if (!activeNode) return false;
    if (activeNode.id === fromNode.id && fromNode.connections.includes(toId)) return true;
    
    // Reverse highlight if destination is hovered
    const toNode = curiosityNodes.find(n => n.id === toId);
    if (activeNode.id === toId && fromNode.connections.includes(toId)) return true;
    
    return false;
  };

  return (
    <section 
      id="curiosities" 
      className="py-24 md:py-36 w-full flex flex-col justify-center px-6 md:px-12 bg-charcoal border-b border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-left mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-accent-cyan mb-3 block">Interests</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-none text-white">
            Things I'm Curious About.
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Left Column: Constellation SVG */}
          <div className="lg:col-span-8 w-full flex justify-center items-center bg-charcoal-light/10 border border-white/5 p-4 md:p-6 rounded-3xl relative overflow-hidden">
            <svg 
              className="w-full max-w-[550px] h-auto overflow-visible select-none" 
              viewBox="0 0 500 400"
            >
              {/* Render Connection Edges */}
              {curiosityNodes.map((fromNode) => (
                fromNode.connections.map((toId) => {
                  const toNode = curiosityNodes.find(n => n.id === toId);
                  if (!toNode) return null;
                  const active = isLineActive(fromNode, toId);
                  return (
                    <line
                      key={`${fromNode.id}-${toId}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke={active ? '#00F2FE' : 'rgba(255,255,255,0.06)'}
                      strokeWidth={active ? 1.5 : 1}
                      strokeDasharray={active ? 'none' : '3,3'}
                      className="transition-all duration-300"
                    />
                  );
                })
              ))}

              {/* Render Nodes */}
              {curiosityNodes.map((node) => {
                const isActive = activeNode?.id === node.id;
                return (
                  <g 
                    key={node.id} 
                    className="cursor-pointer group"
                    onMouseEnter={() => setActiveNode(node)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    {/* Ring background */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isActive ? 10 : 5}
                      fill={isActive ? 'rgba(0, 242, 254, 0.2)' : 'rgba(10, 11, 16, 0.8)'}
                      stroke={isActive ? '#00F2FE' : 'rgba(255, 255, 255, 0.2)'}
                      strokeWidth={1.5}
                      className="transition-all duration-300"
                    />
                    {/* Core Point */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isActive ? 3.5 : 2}
                      fill={isActive ? '#00F2FE' : '#9CA3AF'}
                      className="transition-all duration-300"
                    />
                    {/* Text Label */}
                    <text
                      x={node.x}
                      y={node.y - 12}
                      textAnchor="middle"
                      className={`font-mono text-[9px] font-bold tracking-wider transition-colors duration-300 ${
                        isActive ? 'fill-accent-cyan' : 'fill-zinc-500 group-hover:fill-zinc-300'
                      }`}
                    >
                      {node.label.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right Column: Dynamic Terminal / Details Explainer */}
          <div className="lg:col-span-4 w-full h-full flex flex-col justify-center">
            <motion.div 
              className="bg-charcoal-light border border-white/10 rounded-2xl p-5 text-left font-mono text-[11px] md:text-xs min-h-[220px] flex flex-col justify-between shadow-2xl relative"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4">
                <Network size={14} className="text-accent-cyan animate-pulse" />
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">inspect_graph.sh</span>
              </div>

              {/* Explainer */}
              <div className="flex-1 space-y-3">
                {activeNode ? (
                  <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <p className="text-accent-cyan font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                      <Info size={12} /> {activeNode.label}
                    </p>
                    <p className="text-zinc-300 leading-relaxed font-light">
                      {activeNode.why}
                    </p>
                  </motion.div>
                ) : (
                  <div className="text-zinc-500 leading-relaxed font-light space-y-2">
                    <p className="animate-pulse"># Shell ready...</p>
                    <p>
                      Hover over any node in the knowledge graph to trace connections and reveal diagnostic insights on current topics under research.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-white/5 pt-3 mt-4 text-[10px] text-zinc-500 flex items-center justify-between">
                <span>GRAPH: CONNECTED</span>
                <span>v2.0.0</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

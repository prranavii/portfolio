import { useEffect, useRef } from 'react';

export default function InteractiveHeroBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let textNodes = [];
    
    const hasHover = window.matchMedia('(hover: hover)').matches;
    const particleCount = hasHover ? (window.innerWidth < 1024 ? 40 : 65) : 10;
    const connectionDistance = 100;
    const mouse = { x: null, y: null, radius: 180 };

    const dataTokens = [
      "FAISS", "RAG", "Vector", "Embedding", "Llama 3.1", 
      "Ollama", "LangChain", "DSA", "Java", "Python", 
      "React", "FastAPI", "Node.js", "SQL", "OpenCV"
    ];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    if (hasHover) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    }
    
    handleResize();

    // Standard dust particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.size = Math.random() * 1.5 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 0.3;
            this.y += (dy / dist) * force * 0.3;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 242, 254, 0.2)';
        ctx.fill();
      }
    }

    // Textual RAG Data Tokens
    class TextNode {
      constructor(text) {
        this.text = text;
        this.x = Math.random() * (canvas.width - 100) + 50;
        this.y = Math.random() * (canvas.height - 100) + 50;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.alpha = 0.15;
        this.targetAlpha = 0.15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Keep inside boundaries
        if (this.x < 20) this.vx *= -1;
        if (this.x > canvas.width - 60) this.vx *= -1;
        if (this.y < 20) this.vy *= -1;
        if (this.y > canvas.height - 20) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            this.targetAlpha = 0.75;
            const force = (mouse.radius - dist) / mouse.radius;
            // Draw close text nodes in towards cursor position (semantic retrieval visual)
            this.x += (dx / dist) * force * 0.65;
            this.y += (dy / dist) * force * 0.65;
          } else {
            this.targetAlpha = 0.15;
          }
        } else {
          this.targetAlpha = 0.12;
        }

        // Smooth alpha transitions
        this.alpha += (this.targetAlpha - this.alpha) * 0.08;
      }

      draw() {
        ctx.font = 'bold 9px monospace';
        ctx.fillStyle = `rgba(0, 242, 254, ${this.alpha})`;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    // Instantiation
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    if (hasHover) {
      dataTokens.forEach(token => {
        textNodes.push(new TextNode(token));
      });
    }

    // Animation ticks
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render standard particle nodes & connections
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect nodes with each other
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // Render floating textual data tokens & connections (RAG simulation)
      for (let i = 0; i < textNodes.length; i++) {
        textNodes[i].update();
        textNodes[i].draw();

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - textNodes[i].x;
          const dy = mouse.y - textNodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * textNodes[i].alpha;
            ctx.beginPath();
            ctx.setLineDash([2, 2]); // Dashed vector retrieve path
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(textNodes[i].x + 15, textNodes[i].y - 3); // Draw to center of text block
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
            ctx.setLineDash([]); // Reset
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (hasHover) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-50"
    />
  );
}

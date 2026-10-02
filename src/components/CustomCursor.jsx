import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [hoverState, setHoverState] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [sparks, setSparks] = useState([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktop mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let lastSparkTime = 0;

    const moveCursor = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Spawn subtle particle sparkle occasionally on move
      const now = Date.now();
      if (now - lastSparkTime > 120 && Math.random() > 0.4) {
        lastSparkTime = now;
        const newSpark = {
          id: now + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          size: Math.random() * 3 + 2,
        };
        setSparks((prev) => [...prev.slice(-8), newSpark]);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverCheck = (e) => {
      const target = e.target;
      if (!target) return;

      if (target.closest('.hero-character-zone')) {
        setHoverState('character');
      } else if (target.closest('a, button, [role="button"]')) {
        setHoverState('interactive');
      } else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverCheck);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverCheck);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Clean up old sparkles
  useEffect(() => {
    if (sparks.length === 0) return;
    const timer = setTimeout(() => {
      setSparks((prev) => prev.slice(1));
    }, 400);
    return () => clearTimeout(timer);
  }, [sparks]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Sparkles */}
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0, y: spark.y - 12 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: spark.x,
            top: spark.y,
            width: spark.size,
            height: spark.size,
            backgroundColor: 'var(--text-ink)',
            borderRadius: '50%',
          }}
        />
      ))}

      {/* Lagging Soft Trail Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-ink/40 pointer-events-none"
        style={{
          x: trailX,
          y: trailY,
          width: hoverState === 'interactive' ? 38 : hoverState === 'character' ? 48 : 24,
          height: hoverState === 'interactive' ? 38 : hoverState === 'character' ? 48 : 24,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: hoverState === 'character' ? 'var(--text-ink)' : 'transparent',
          opacity: hoverState === 'character' ? 0.15 : 0.4,
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
        }}
      />

      {/* Center Sharp Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-ink pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          width: hoverState === 'interactive' ? 8 : hoverState === 'character' ? 10 : 6,
          height: hoverState === 'interactive' ? 8 : hoverState === 'character' ? 10 : 6,
          translateX: '-50%',
          translateY: '-50%',
          transition: 'width 0.15s ease, height 0.15s ease',
        }}
      />
    </div>
  );
};

export default CustomCursor;

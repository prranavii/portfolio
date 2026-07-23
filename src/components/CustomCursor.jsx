import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia('(hover: none)').matches) {
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const onMouseEnterClickable = () => setHovered(true);
    const onMouseLeaveClickable = () => setHovered(false);

    const attachListeners = () => {
      const clickables = document.querySelectorAll('a, button, [role="button"], .clickable, input, textarea, select');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterClickable);
        el.addEventListener('mouseleave', onMouseLeaveClickable);
      });
    };

    // Observe document mutations to dynamic elements
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    attachListeners();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
      
      const clickables = document.querySelectorAll('a, button, [role="button"], .clickable, input, textarea, select');
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterClickable);
        el.removeEventListener('mouseleave', onMouseLeaveClickable);
      });
    };
  }, [cursorX, cursorY, hidden]);

  if (hidden) return null;

  return (
    <>
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent-cyan rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Outer ambient tracking ring */}
      <motion.div
        className="fixed top-0 left-0 border border-accent-cyan/30 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovered ? 44 : 20,
          height: hovered ? 44 : 20,
          backgroundColor: hovered ? 'rgba(0, 242, 254, 0.08)' : 'rgba(0, 242, 254, 0)',
          borderColor: hovered ? 'rgba(0, 242, 254, 0.8)' : 'rgba(0, 242, 254, 0.3)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
      />
    </>
  );
}

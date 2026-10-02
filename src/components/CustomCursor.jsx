import React, { useEffect, useRef } from 'react';

/**
 * Subtle custom cursor: a sharp dot + a softly lagging ring.
 * - grows over links/buttons
 * - turns warm (accent) when it is over the hero companion
 * - leaves the occasional tiny star that fades quickly
 * Everything is written to the DOM via refs; React renders it exactly once.
 * Only mounted behaviour on fine pointers (mouse / trackpad).
 */
const SIZES = {
  default: { ring: 24, dot: 6 },
  interactive: { ring: 38, dot: 8 },
  character: { ring: 52, dot: 8 },
};

const CustomCursor = () => {
  const root = useRef(null);
  const ring = useRef(null);
  const dot = useRef(null);
  const stars = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const html = document.documentElement;
    html.classList.add('has-custom-cursor');

    let tx = -100, ty = -100, rx = -100, ry = -100;
    let raf = 0;
    let state = 'default';
    let overCompanion = false;
    let overInteractive = false;
    let shown = false;
    let alive = 0;
    const lastStar = { x: -999, y: -999, t: 0 };

    const paint = () => {
      const sz = SIZES[state];
      ring.current.style.width = `${sz.ring}px`;
      ring.current.style.height = `${sz.ring}px`;
      ring.current.style.backgroundColor =
        state === 'character' ? 'color-mix(in srgb, var(--accent) 16%, transparent)' : 'transparent';
      ring.current.style.borderColor =
        state === 'character' ? 'var(--accent)' : 'color-mix(in srgb, var(--text-ink) 40%, transparent)';
      dot.current.style.width = `${sz.dot}px`;
      dot.current.style.height = `${sz.dot}px`;
      dot.current.style.backgroundColor = state === 'character' ? 'var(--accent)' : 'var(--text-ink)';
    };
    const setState = () => {
      const next = overCompanion ? 'character' : overInteractive ? 'interactive' : 'default';
      if (next !== state) {
        state = next;
        paint();
      }
    };

    const loop = () => {
      rx += (tx - rx) * 0.2;
      ry += (ty - ry) * 0.2;
      ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = Math.abs(tx - rx) + Math.abs(ty - ry) > 0.1 ? requestAnimationFrame(loop) : 0;
    };

    const spawnStar = (x, y) => {
      if (reduced || alive >= 7) return;
      const el = document.createElement('span');
      el.textContent = '✦';
      const size = 7 + Math.random() * 4;
      el.style.cssText = `position:fixed;left:0;top:0;font-size:${size}px;line-height:1;color:var(--text-ink-muted);pointer-events:none;`;
      stars.current.appendChild(el);
      alive += 1;
      const dx = (Math.random() - 0.5) * 14;
      const a = el.animate(
        [
          { transform: `translate(${x + dx}px, ${y}px) scale(1) rotate(0deg)`, opacity: 0.75 },
          { transform: `translate(${x + dx}px, ${y - 14}px) scale(0.3) rotate(45deg)`, opacity: 0 },
        ],
        { duration: 520, easing: 'ease-out' }
      );
      a.onfinish = () => { el.remove(); alive -= 1; };
    };

    const onMove = (e) => {
      if (e.pointerType === 'touch') return;
      tx = e.clientX;
      ty = e.clientY;
      dot.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      if (!shown) {
        shown = true;
        rx = tx; ry = ty;
        root.current.style.opacity = '1';
      }
      if (!raf) raf = requestAnimationFrame(loop);

      const now = performance.now();
      if (now - lastStar.t > 110 && Math.hypot(tx - lastStar.x, ty - lastStar.y) > 30 && Math.random() < 0.55) {
        lastStar.x = tx; lastStar.y = ty; lastStar.t = now;
        spawnStar(tx, ty);
      }
    };
    const onOver = (e) => {
      overInteractive = !!(e.target instanceof Element && e.target.closest('a, button, [role="button"], [data-look]'));
      setState();
    };
    const onCompanion = (e) => { overCompanion = !!e.detail; setState(); };
    const onDown = () => { dot.current.style.scale = '0.7'; ring.current.style.scale = '0.85'; };
    const onUp = () => { dot.current.style.scale = ''; ring.current.style.scale = ''; };
    const onLeave = () => { root.current.style.opacity = '0'; };
    const onEnter = () => { if (shown) root.current.style.opacity = '1'; };

    paint();
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    window.addEventListener('companion-hover', onCompanion);
    html.addEventListener('mouseleave', onLeave);
    html.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(raf);
      html.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('companion-hover', onCompanion);
      html.removeEventListener('mouseleave', onLeave);
      html.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
      style={{ opacity: 0, transition: 'opacity 0.2s ease' }}
    >
      <div ref={stars} />
      <div
        ref={ring}
        className="fixed top-0 left-0 rounded-full border"
        style={{ transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, scale 0.15s ease' }}
      />
      <div
        ref={dot}
        className="fixed top-0 left-0 rounded-full"
        style={{ transition: 'width 0.15s ease, height 0.15s ease, background-color 0.2s ease, scale 0.15s ease' }}
      />
    </div>
  );
};

export default CustomCursor;

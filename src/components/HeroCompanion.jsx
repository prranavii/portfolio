import React, { useEffect, useRef, useState } from 'react';

/**
 * HeroCompanion — "Nari", a tiny creature that lives in the hero.
 *
 * Flat SVG + one requestAnimationFrame loop. All motion is written straight to
 * DOM attributes through refs, so React never re-renders while it animates.
 *
 * Behaviour (state machine):
 *   home     stands by its desk: breathes, blinks, glances around, fidgets
 *   notice   cursor appeared -> turns, "!" pops up, short pause
 *   follow   chases the cursor on an under-damped spring (lag, overshoot, tilt)
 *   linger   caught up -> looks at the cursor, one little hop, keeps it company
 *   excited  cursor passes over it -> blink, wave, hops, happy face
 *   return   ignored for a few seconds -> strolls back home
 *   wander   (idle only) potters a short way from home and comes back
 *
 * Touch devices have no cursor: it wanders on its own and runs to a tap.
 * prefers-reduced-motion: static pose at home, no loop.
 */

const CW = 84; // creature box width (px) at scale 1
const CH = 100.8; // creature box height (px) at scale 1
const FEET = 91.5; // y of the feet baseline inside the box (px)
const HOME_W = 260; // home SVG viewBox width

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (a, b) => a + Math.random() * (b - a);

const CAPTION = {
  home: 'nari, at their desk',
  notice: 'nari noticed you',
  follow: 'nari, in pursuit',
  linger: 'nari, keeping you company',
  return: 'nari, heading back to work',
  wander: 'nari, stretching their legs',
  excited: 'nari says hi',
};

const setT = (el, v) => {
  if (el && el._t !== v) {
    el.setAttribute('transform', v);
    el._t = v;
  }
};
const setAttrOnce = (el, name, v) => {
  if (el && el['_' + name] !== v) {
    el.setAttribute(name, v);
    el['_' + name] = v;
  }
};

export default function HeroCompanion() {
  const stageRef = useRef(null);
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const P = {};
    stage.querySelectorAll('[data-p]').forEach((el) => {
      P[el.dataset.p] = el;
    });

    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const t0 = () => performance.now() / 1000;

    // ---------- geometry (cached, never read inside the frame) ----------
    const rect = { left: 0, top: 0 };
    const S = {
      W: 600, H: 400, s: 1,
      home: { x: 0, y: 0 },
      minX: 0, maxX: 0, minY: 0, maxY: 0,

      x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0,
      mode: 'home', modeAt: 0,

      air: 0, airV: 0, squash: 0,
      runPhase: 0, runBlend: 0, energy: 0, exc: 0,
      tuftA: 0, tuftV: 0,

      gx: 0, gy: 0, gazePt: { x: 0, y: 0 }, gazeAt: 0,
      blinkAt: t0() + 1.8, blinkT: -1, dbl: false, eyeS: 1, placed: false,

      excitedUntil: 0, exciteCool: 0, nextExcHop: 0,
      bangUntil: 0,
      nextWander: t0() + 8, wanderPhase: 0, wanderPt: { x: 0, y: 0 }, waitUntil: 0,
      nextHop: t0() + 10,
      hint: true, hovered: false, shown: { happy: null },
      glance: null, caption: '',
    };
    const cur = { cx: -999, cy: -999, has: false, last: -100, speed: 0, px: 0, py: 0, pt: 0 };

    // ---------- layout ----------
    const measure = () => {
      const sr = stage.getBoundingClientRect();
      const hr = P.home.getBoundingClientRect();
      rect.left = sr.left;
      rect.top = sr.top;
      S.W = sr.width;
      S.H = sr.height;
      S.s = clamp(hr.width / HOME_W, 0.72, 1.05);
      S.home.x = hr.left - sr.left + hr.width * 0.5;
      S.home.y = hr.top - sr.top + hr.height * (127 / 150);
      S.minX = 34 * S.s;
      S.maxX = S.W - 34 * S.s;
      S.minY = CH * 0.92 * S.s + 6;
      S.maxY = S.H - 30;
      if (S.mode === 'home' || !S.placed) {
        S.x = S.tx = S.home.x;
        S.y = S.ty = S.home.y;
        S.placed = true;
      }
    };
    const updateRect = () => {
      const sr = stage.getBoundingClientRect();
      rect.left = sr.left;
      rect.top = sr.top;
    };

    // ---------- helpers ----------
    const caption = () => {
      const base = CAPTION[S.mode];
      const hint = S.hint && S.mode === 'home' ? (coarse ? ' · tap to call' : ' · move your cursor') : '';
      const text = 'fig. 01 — ' + base + hint;
      if (text !== S.caption) {
        S.caption = text;
        P.caption.textContent = text;
      }
    };
    const setMode = (m, now) => {
      S.mode = m;
      S.modeAt = now;
      caption();
    };
    const jump = (v) => {
      if (S.air <= 0.01) S.airV = v;
    };
    const pickGaze = (now, around) => {
      const { home, s } = S;
      const o = around
        ? [
            { x: S.x - 220, y: S.y - 60 }, { x: S.x + 160, y: S.y - 90 },
            { x: S.x - 120, y: S.y + 40 }, { x: S.x + 40, y: S.y - 160 },
          ]
        : [
            { x: home.x - 90 * s, y: home.y - 50 * s }, // laptop
            { x: home.x - 90 * s, y: home.y - 50 * s },
            { x: home.x + 80 * s, y: home.y - 34 * s }, // mug
            { x: home.x + 125 * s, y: home.y - 44 * s }, // plant
            { x: home.x - 230, y: home.y - 110 }, // out into the room
            { x: home.x, y: home.y + 60 }, // at you
          ];
      S.gazePt = o[Math.floor(Math.random() * o.length)];
      S.gazeAt = now + rand(1.3, 3.2);
    };
    const startNotice = (now) => {
      setMode('notice', now);
      S.hint = false;
      S.bangUntil = now + 0.75;
      S.tuftV -= 420;
      S.blinkT = -1;
      jump(210);
    };
    const startExcited = (now) => {
      setMode('excited', now);
      S.excitedUntil = now + 1.9;
      S.nextExcHop = now + 0.05;
      S.blinkT = 0; // blink first, then the happy face
      S.hint = false;
    };
    const startWander = (now) => {
      const reach = S.W > 480 ? 1 : 0.55;
      S.wanderPt = {
        x: clamp(S.home.x - rand(90, 230) * reach, S.minX, S.maxX),
        y: clamp(S.home.y - rand(0, 55), S.minY, S.maxY),
      };
      S.wanderPhase = 0;
      setMode('wander', now);
    };

    // ---------- simulation ----------
    const step = (now, dt) => {
      const s = S.s;
      const bodyC = 0.45 * CH * s;
      const sinceMove = now - cur.last;
      const active = cur.has && sinceMove < 4.5;
      const lx = cur.cx - rect.left;
      const ly = cur.cy - rect.top;
      const dCur = Math.hypot(lx - S.x, ly - (S.y - bodyC));
      const glancing = S.glance && now < S.glance.until;
      const sp = Math.hypot(S.vx, S.vy);

      // proximity hover (drives the custom cursor + the excited reaction)
      const hov = active && dCur < 46 * s;
      if (hov !== S.hovered) {
        S.hovered = hov;
        window.dispatchEvent(new CustomEvent('companion-hover', { detail: hov }));
      }
      if (S.mode !== 'excited' && active && now > S.exciteCool && dCur < 34 * s + 8 && sinceMove < 1.2) {
        startExcited(now);
      }

      const hold = () => { S.tx = S.x; S.ty = S.y; };

      switch (S.mode) {
        case 'home':
          S.tx = S.home.x; S.ty = S.home.y;
          if (active && !glancing && sinceMove < 0.25) startNotice(now);
          else if (!active && now > S.nextWander) startWander(now);
          else if (!active && now > S.nextHop) { S.nextHop = now + rand(9, 16); jump(170); }
          break;

        case 'notice':
          hold();
          if (!active) setMode('return', now);
          else if (now - S.modeAt > 0.55) setMode('follow', now);
          break;

        case 'follow':
        case 'linger': {
          if (!active) { setMode('return', now); break; }
          if (glancing) { hold(); break; }
          const stop = 68 * s;
          if (dCur > stop + 26 * s || (sinceMove < 0.12 && dCur > stop)) {
            if (S.mode === 'linger') setMode('follow', now);
            const dx = S.x - lx;
            const dy = S.y - bodyC - ly;
            const d = Math.hypot(dx, dy) || 1;
            S.tx = lx + (dx / d) * stop;
            S.ty = ly + (dy / d) * stop + bodyC;
          } else if (S.mode === 'follow' && sinceMove > 0.3 && sp < 60 && Math.hypot(S.tx - S.x, S.ty - S.y) < 20) {
            setMode('linger', now);
            jump(270); // "got you" hop
            hold();
          }
          break;
        }

        case 'excited':
          hold();
          if (now > S.excitedUntil) {
            S.exciteCool = now + 3.5;
            setMode(active ? 'linger' : 'return', now);
          }
          break;

        case 'return':
          S.tx = S.home.x; S.ty = S.home.y;
          if (active && sinceMove < 0.2 && !glancing) { setMode('follow', now); jump(170); }
          else if (Math.hypot(S.home.x - S.x, S.home.y - S.y) < 5 && sp < 25) {
            setMode('home', now);
            S.nextWander = now + rand(8, 13);
          }
          break;

        case 'wander':
          if (active && sinceMove < 0.25 && !glancing) { startNotice(now); break; }
          if (S.wanderPhase === 0) {
            S.tx = S.wanderPt.x; S.ty = S.wanderPt.y;
            if (Math.hypot(S.tx - S.x, S.ty - S.y) < 8 && sp < 30) {
              S.wanderPhase = 1;
              S.waitUntil = now + rand(1.6, 2.8);
              pickGaze(now, true);
            }
          } else {
            hold();
            if (now > S.gazeAt) pickGaze(now, true);
            if (now > S.waitUntil) setMode('return', now);
          }
          break;
        default:
      }

      S.tx = clamp(S.tx, S.minX, S.maxX);
      S.ty = clamp(S.ty, S.minY, S.maxY);

      // spring (semi-implicit Euler, 2 sub-steps)
      let k = 40, zeta = 0.9;
      if (S.mode === 'follow') { k = 52; zeta = 0.55; }
      else if (S.mode === 'linger') { k = 30; zeta = 0.8; }
      else if (S.mode === 'return') { k = 9; zeta = 0.95; }
      else if (S.mode === 'wander') { k = 12; zeta = 0.95; }
      const c = 2 * zeta * Math.sqrt(k);
      const h = dt / 2;
      for (let i = 0; i < 2; i += 1) {
        S.vx += (k * (S.tx - S.x) - c * S.vx) * h;
        S.vy += (k * (S.ty - S.y) - c * S.vy) * h;
        S.x += S.vx * h;
        S.y += S.vy * h;
      }
      const spNow = Math.hypot(S.vx, S.vy);
      if (spNow > 1100) { S.vx *= 1100 / spNow; S.vy *= 1100 / spNow; }
      S.x = clamp(S.x, S.minX - 6, S.maxX + 6);
      S.y = clamp(S.y, S.minY - 6, S.maxY + 6);

      // energy follows how fast the cursor (and creature) are moving
      cur.speed *= Math.exp(-5 * dt);
      const eT = clamp(0.55 * Math.min(1, spNow / 700) + 0.45 * Math.min(1, cur.speed / 2200), 0, 1);
      S.energy = lerp(S.energy, eT, 1 - Math.exp(-6 * dt));
      S.runBlend = lerp(S.runBlend, clamp((spNow - 30) / 90, 0, 1), 1 - Math.exp(-12 * dt));
      S.runPhase += dt * (6 + spNow * 0.018 + 6 * S.energy) * (0.35 + 0.65 * S.runBlend);
      S.exc = lerp(S.exc, S.mode === 'excited' ? 1 : 0, 1 - Math.exp(-12 * dt));

      // little hops: vertical ballistic
      if (S.mode === 'excited' && S.air <= 0.01 && now > S.nextExcHop) {
        jump(300);
        S.nextExcHop = now + 0.52;
      }
      S.airV -= 2600 * dt;
      S.air += S.airV * dt;
      if (S.air <= 0) {
        if (S.airV < -140) S.squash = clamp(-S.airV / 700, 0, 1);
        S.air = 0;
        S.airV = 0;
      }
      S.squash *= Math.exp(-14 * dt);

      // tuft: its own under-damped spring -> secondary motion
      const tuftT = clamp(-S.vx * 0.03, -40, 40) + S.gx * 6;
      S.tuftV += (-120 * (S.tuftA - tuftT) - 7 * S.tuftV) * dt;
      S.tuftA += S.tuftV * dt;

      // gaze
      const headX = S.x;
      const headY = S.y - 0.62 * CH * s;
      let px;
      let py;
      if (glancing) {
        px = S.glance.cx - rect.left; py = S.glance.cy - rect.top;
      } else if (active) {
        px = lx; py = ly;
      } else if (S.mode === 'return') {
        px = S.home.x; py = S.home.y - 40;
      } else {
        if (now > S.gazeAt) pickGaze(now, S.mode !== 'home');
        px = S.gazePt.x; py = S.gazePt.y;
      }
      const gxT = clamp((px - headX) / 140, -1, 1);
      const gyT = clamp((py - headY) / 110, -1, 1);
      S.gx = lerp(S.gx, gxT, 1 - Math.exp(-9 * dt));
      S.gy = lerp(S.gy, gyT, 1 - Math.exp(-9 * dt));

      // blink
      let eyeS = 1;
      if (S.blinkT < 0 && now > S.blinkAt) S.blinkT = 0;
      if (S.blinkT >= 0) {
        S.blinkT += dt;
        const p = S.blinkT / 0.15;
        if (p < 1) eyeS = 1 - 0.94 * Math.sin(Math.PI * p);
        else {
          S.blinkT = -1;
          S.blinkAt = now + (S.dbl ? 0.14 : rand(2.4, 5.2));
          S.dbl = !S.dbl && Math.random() < 0.18;
        }
      }
      S.eyeS = eyeS;
    };

    // ---------- drawing ----------
    const draw = (now) => {
      const s = S.s;
      const sinP = Math.abs(Math.sin(S.runPhase));
      const rb = S.runBlend;
      const runHop = sinP * (2.5 + 9 * S.energy) * rb;
      const lift = S.air + runHop;

      const breathe = Math.sin(now * 3.2) * 0.014 * (1 - rb);
      const sy = (1 + breathe) * (1 - 0.07 * (1 - sinP) * rb - 0.12 * S.squash);
      const sx = (1 - breathe * 0.6) * (1 + 0.09 * S.squash + 0.04 * (1 - sinP) * rb);
      const tilt =
        clamp(S.vx * 0.028, -16, 16) + S.gx * 2.5 + Math.sin(now * 10) * 4 * S.exc;
      setT(P.body, `translate(50 109) rotate(${tilt.toFixed(2)}) scale(${sx.toFixed(3)} ${sy.toFixed(3)}) translate(-50 -109)`);

      // feet
      const stepL = -Math.max(0, Math.sin(S.runPhase)) * 5 * rb;
      const stepR = -Math.max(0, -Math.sin(S.runPhase)) * 5 * rb;
      setT(P.footL, `translate(${(-rb * 1.5).toFixed(2)} ${stepL.toFixed(2)})`);
      setT(P.footR, `translate(${(rb * 1.5).toFixed(2)} ${stepR.toFixed(2)})`);

      // arms
      const flap = sinP * (30 + 40 * S.energy) * rb;
      let aL = 10 + flap + Math.sin(now * 0.9) * 1.5;
      let aR = -10 - flap - Math.sin(now * 0.8) * 1.5;
      if (S.exc > 0.01) {
        const w = Math.sin(now * 15);
        aR = lerp(aR, -(135 + w * 22), S.exc);
        aL = lerp(aL, 22 + Math.sin(now * 15 + 1) * 7, S.exc);
      }
      setT(P.armL, `translate(24 72) rotate(${aL.toFixed(2)})`);
      setT(P.armR, `translate(76 72) rotate(${aR.toFixed(2)})`);

      // tuft + face
      setT(P.tuft, `translate(50 28) rotate(${S.tuftA.toFixed(2)})`);
      setT(P.face, `translate(${(S.gx * 6.4).toFixed(2)} ${(S.gy * 3.4).toFixed(2)})`);
      setT(
        P.eyes,
        `translate(${(S.gx * 3).toFixed(2)} ${(S.gy * 1.8).toFixed(2)}) translate(50 57) scale(1 ${S.eyeS.toFixed(3)}) translate(-50 -57)`
      );

      const happy = S.mode === 'excited' && now - S.modeAt > 0.18;
      if (happy !== S.shown.happy) {
        S.shown.happy = happy;
        setAttrOnce(P.happy, 'display', happy ? 'inline' : 'none');
        setAttrOnce(P.eyes, 'display', happy ? 'none' : 'inline');
        setAttrOnce(P.mouthO, 'display', happy ? 'inline' : 'none');
        setAttrOnce(P.mouthN, 'display', happy ? 'none' : 'inline');
      }

      // "!" pop
      if (now < S.bangUntil) {
        const p = 1 - (S.bangUntil - now) / 0.75;
        const pop = p < 0.2 ? (p / 0.2) * 1.2 : 1;
        setT(P.bang, `translate(78 6) scale(${pop.toFixed(2)})`);
        setAttrOnce(P.bang, 'opacity', p > 0.85 ? ((1 - p) / 0.15).toFixed(2) : '1');
      } else {
        setAttrOnce(P.bang, 'opacity', '0');
      }

      // place creature + shadow (positions live in CSS transforms, not layout)
      P.creature.style.transform = `translate3d(${(S.x - CW / 2).toFixed(2)}px, ${(S.y - FEET - lift).toFixed(2)}px, 0) scale(${s.toFixed(3)})`;
      const sh = clamp(1 - lift / 70, 0.5, 1);
      P.shadow.style.transform = `translate3d(${(S.x - 28).toFixed(2)}px, ${(S.y - 5).toFixed(2)}px, 0) scale(${(sh * s).toFixed(3)})`;
      P.shadow.style.opacity = sh.toFixed(2);
    };

    // ---------- loop ----------
    let rafId = 0;
    let running = false;
    let visible = true;
    let lastMs = 0;
    const frame = (ms) => {
      if (!running) return;
      const dt = Math.min(0.033, (ms - lastMs) / 1000 || 0.016);
      lastMs = ms;
      const now = ms / 1000;
      step(now, dt);
      draw(now);
      rafId = requestAnimationFrame(frame);
    };
    const sync = () => {
      const should = visible && !document.hidden;
      if (should && !running) {
        running = true;
        lastMs = performance.now();
        rafId = requestAnimationFrame(frame);
      } else if (!should && running) {
        running = false;
        cancelAnimationFrame(rafId);
      }
    };

    // ---------- init ----------
    measure();
    caption();

    if (reduced) {
      // static pose at home, looking at the laptop; no loop, no listeners that move it
      S.gx = -0.7; S.gy = 0.15; S.eyeS = 1;
      draw(0);
      const ro0 = new ResizeObserver(() => { measure(); draw(0); });
      ro0.observe(stage);
      return () => ro0.disconnect();
    }

    pickGaze(t0(), false);
    S.gx = -0.6;
    draw(t0());

    // ---------- input ----------
    const onMove = (e) => {
      if (e.pointerType === 'touch') return;
      const now = t0();
      const dtm = Math.max(0.008, now - cur.pt);
      cur.speed = lerp(cur.speed, Math.hypot(e.clientX - cur.px, e.clientY - cur.py) / dtm, 0.3);
      cur.px = e.clientX; cur.py = e.clientY; cur.pt = now;
      cur.cx = e.clientX; cur.cy = e.clientY;
      cur.last = now;
      cur.has = true;
    };
    const onTap = (e) => {
      if (e.pointerType === 'mouse') return;
      updateRect();
      cur.cx = e.clientX; cur.cy = e.clientY;
      cur.last = t0();
      cur.has = true;
      cur.speed = 900;
    };
    const onOver = (e) => {
      const el = e.target instanceof Element ? e.target.closest('[data-look], nav a, nav button') : null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      S.glance = {
        el,
        cx: r.left + r.width / 2,
        cy: r.top + r.height / 2,
        until: el.hasAttribute('data-look') ? Infinity : t0() + 2.4,
      };
      S.tuftV -= 160;
    };
    const onOut = (e) => {
      if (S.glance && !(e.relatedTarget instanceof Node && S.glance.el.contains(e.relatedTarget))) S.glance = null;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    stage.addEventListener('pointerdown', onTap, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    document.addEventListener('pointerout', onOut, { passive: true });
    window.addEventListener('scroll', updateRect, { passive: true });
    document.addEventListener('visibilitychange', sync);

    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    ro.observe(P.home);
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; sync(); });
    io.observe(stage);
    sync();

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerdown', onTap);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      window.removeEventListener('scroll', updateRect);
      document.removeEventListener('visibilitychange', sync);
      ro.disconnect();
      io.disconnect();
      if (S.hovered) window.dispatchEvent(new CustomEvent('companion-hover', { detail: false }));
    };
  }, [reduced]);

  return (
    <figure
      ref={stageRef}
      data-companion-stage
      aria-hidden="true"
      className="relative w-full h-[300px] sm:h-[380px] lg:h-[440px] select-none m-0"
      style={{ contain: 'layout style' }}
    >
      {/* editorial crop marks */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-paper-line" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-paper-line" />
      <span className="absolute bottom-6 left-0 w-3 h-3 border-b border-l border-paper-line" />
      <span className="absolute bottom-6 right-0 w-3 h-3 border-b border-r border-paper-line" />

      {/* ---------------- the little home ---------------- */}
      <svg
        data-p="home"
        viewBox="0 0 260 150"
        className="absolute right-3 sm:right-5 bottom-9 w-[min(260px,76%)] h-auto overflow-visible"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* rug */}
        <ellipse cx="130" cy="132" rx="112" ry="10" className="fill-paper-dark" />
        <ellipse cx="130" cy="132" rx="104" ry="6" className="stroke-paper-line" strokeWidth="1" strokeDasharray="3 4" />

        {/* books + laptop */}
        <g className="stroke-ink" strokeWidth="1.6">
          <rect x="10" y="116" width="66" height="13" rx="1.5" className="fill-paper-light" />
          <rect x="16" y="103" width="56" height="13" rx="1.5" className="fill-accent" />
          <rect x="13" y="91" width="60" height="12" rx="1.5" className="fill-paper-light" />
          <path d="M18 116v13M22 103v13M19 91v12" className="stroke-ink-faint" strokeWidth="1.2" />
          <rect x="6" y="85" width="74" height="6" rx="2" className="fill-paper-light" />
          <rect x="18" y="46" width="50" height="39" rx="3" className="fill-ink" />
        </g>
        <g className="stroke-paper" strokeWidth="1.6" opacity="0.8">
          <path d="M25 55h16M25 62h26M29 69h12M25 76h18" />
        </g>
        <rect x="46" y="73" width="5" height="3" className="fill-accent companion-caret" stroke="none" />

        {/* mug on a book */}
        <g className="stroke-ink" strokeWidth="1.6">
          <rect x="178" y="116" width="46" height="13" rx="1.5" className="fill-paper-dark" />
          <path d="M186 96h24v17q0 5-5 5h-14q-5 0-5-5Z" className="fill-paper-light" />
          <path d="M210 100q9 0 9 8q0 7-9 7" />
          <path d="M186 104h24" className="stroke-accent" strokeWidth="2.2" />
        </g>
        <g className="stroke-ink-faint companion-steam" strokeWidth="1.5">
          <path d="M192 90q-3-5 0-9q3-4 0-8" />
          <path d="M198 90q-3-5 0-9q3-4 0-8" style={{ animationDelay: '0.9s' }} />
          <path d="M204 90q-3-5 0-9q3-4 0-8" style={{ animationDelay: '1.8s' }} />
        </g>

        {/* plant */}
        <g className="stroke-ink" strokeWidth="1.6">
          <path d="M243 110C243 98 243 90 243 82" />
          <path d="M243 110C240 96 233 92 226 93C227 102 233 109 243 110Z" className="fill-paper-dark" />
          <path d="M243 110C245 94 252 88 258 90C257 100 252 108 243 110Z" className="fill-paper-dark" />
          <path d="M243 82C238 76 239 70 244 66C249 71 248 77 243 82Z" className="fill-paper-dark" />
          <path d="M232 110h22l-3 20h-16Z" className="fill-paper-light" />
        </g>
      </svg>

      {/* shadow (separate so it never tilts) */}
      <div
        data-p="shadow"
        className="absolute left-0 top-0 pointer-events-none will-change-transform"
        style={{
          width: 56,
          height: 10,
          background: 'radial-gradient(closest-side, color-mix(in srgb, var(--text-ink) 24%, transparent), transparent)',
        }}
      />

      {/* ---------------- the creature ---------------- */}
      <div
        data-p="creature"
        className="absolute left-0 top-0 pointer-events-none will-change-transform"
        style={{ width: CW, height: CH, transformOrigin: `${CW / 2}px ${FEET}px` }}
      >
        <svg viewBox="0 0 100 120" width={CW} height={CH} overflow="visible" focusable="false" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <g data-p="body">
            {/* arms (behind body) */}
            <g data-p="armL" transform="translate(24 72) rotate(10)">
              <path d="M0 0Q-6 6-8 15" className="stroke-ink" strokeWidth="3.2" />
            </g>
            <g data-p="armR" transform="translate(76 72) rotate(-10)">
              <path d="M0 0Q6 6 8 15" className="stroke-ink" strokeWidth="3.2" />
            </g>
            {/* feet */}
            <g data-p="footL"><ellipse cx="39" cy="105.5" rx="7.5" ry="3.6" className="fill-ink" /></g>
            <g data-p="footR"><ellipse cx="61" cy="105.5" rx="7.5" ry="3.6" className="fill-ink" /></g>

            {/* body */}
            <path
              d="M22 70C22 42 34 26 50 26C66 26 78 42 78 70C78 90 68 103 50 103C32 103 22 90 22 70Z"
              className="fill-paper-light stroke-ink"
              strokeWidth="2.4"
            />
            <path d="M27 82l5-3M28 89l6-3" className="stroke-ink" strokeWidth="1.3" opacity="0.3" />

            {/* tuft */}
            <g data-p="tuft" transform="translate(50 28)">
              <path d="M-5 1C-8-8-2-15 8-17C9-8 5-1-5 1Z" className="fill-accent stroke-ink" strokeWidth="2" />
            </g>

            {/* face */}
            <g data-p="face">
              <ellipse cx="32" cy="66" rx="5.5" ry="3.4" className="fill-accent" opacity="0.4" />
              <ellipse cx="68" cy="66" rx="5.5" ry="3.4" className="fill-accent" opacity="0.4" />
              <g data-p="eyes" transform="translate(50 57) scale(1 1) translate(-50 -57)">
                <ellipse cx="40" cy="57" rx="3.3" ry="4.6" className="fill-ink" />
                <ellipse cx="60" cy="57" rx="3.3" ry="4.6" className="fill-ink" />
                <circle cx="41.2" cy="55.2" r="1.15" className="fill-paper-light" />
                <circle cx="61.2" cy="55.2" r="1.15" className="fill-paper-light" />
              </g>
              <g data-p="happy" display="none">
                <path d="M35.5 59Q40 51.5 44.5 59M55.5 59Q60 51.5 64.5 59" className="stroke-ink" strokeWidth="2.6" />
              </g>
              <path data-p="mouthN" d="M46 68Q50 71.5 54 68" className="stroke-ink" strokeWidth="2" />
              <path data-p="mouthO" display="none" d="M45 66.5Q50 79 55 66.5Z" className="fill-ink stroke-ink" strokeWidth="1.6" />
            </g>

            {/* "!" when it notices you */}
            <g data-p="bang" opacity="0" transform="translate(78 6) scale(0)">
              <path d="M0 -4v10" className="stroke-accent" strokeWidth="3.4" />
              <circle cx="0" cy="12" r="2" className="fill-accent" />
            </g>
          </g>
        </svg>
      </div>

      <figcaption
        className="absolute left-0 bottom-0 font-mono text-[10px] sm:text-xs tracking-wider text-ink-muted lowercase"
      >
        <span data-p="caption">fig. 01 — nari, at their desk</span>
      </figcaption>
    </figure>
  );
}

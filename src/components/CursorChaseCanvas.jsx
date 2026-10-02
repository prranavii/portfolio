import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

const CursorChaseCanvas = ({ onStateChange }) => {
  const containerRef = useRef(null);
  const [speechBubble, setSpeechBubble] = useState('');
  const [speechPos, setSpeechPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.5, 14);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color system from CSS variables
    const getThemeColors = () => {
      const style = getComputedStyle(document.documentElement);
      const ink = style.getPropertyValue('--text-ink').trim() || '#141414';
      const bgLight = style.getPropertyValue('--bg-paper-light').trim() || '#F8F5EE';
      const border = style.getPropertyValue('--border-paper').trim() || '#D8D1C3';
      const secondary = style.getPropertyValue('--text-ink-secondary').trim() || '#4A4742';
      return { ink, bgLight, border, secondary };
    };

    let colors = getThemeColors();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.95);
    mainLight.position.set(6, 10, 8);
    scene.add(mainLight);

    const fillLight = new THREE.PointLight(0xffedd5, 0.6, 25);
    fillLight.position.set(-6, 4, 6);
    scene.add(fillLight);

    // ----------------------------------------------------
    // HOME MICRO-ENVIRONMENT (Desk, Laptop, Plant, Mug)
    // ----------------------------------------------------
    const homePos = new THREE.Vector3(1.8, -1.2, 0); // Home desk base location
    const envGroup = new THREE.Group();
    envGroup.position.copy(homePos);
    scene.add(envGroup);

    // Wooden Desk Surface
    const deskGeo = new THREE.BoxGeometry(3.8, 0.22, 1.8);
    const deskMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.border),
      roughness: 0.6,
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.set(0, 0, 0);
    envGroup.add(desk);

    // Desk Legs
    const legGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.8);
    const legMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(colors.secondary), roughness: 0.5 });
    const leg1 = new THREE.Mesh(legGeo, legMat);
    leg1.position.set(-1.7, -0.9, 0.7);
    envGroup.add(leg1);
    const leg2 = new THREE.Mesh(legGeo, legMat);
    leg2.position.set(1.7, -0.9, 0.7);
    envGroup.add(leg2);

    // Mini Open Laptop
    const laptopBaseGeo = new THREE.BoxGeometry(0.9, 0.04, 0.65);
    const laptopMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(colors.secondary), roughness: 0.3 });
    const laptopBase = new THREE.Mesh(laptopBaseGeo, laptopMat);
    laptopBase.position.set(-0.6, 0.13, 0.2);
    envGroup.add(laptopBase);

    const screenGeo = new THREE.BoxGeometry(0.88, 0.58, 0.03);
    const screenMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(colors.ink), roughness: 0.2 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(-0.6, 0.44, -0.1);
    screen.rotation.x = -0.15;
    envGroup.add(screen);

    // Glow on Screen
    const displayGlowGeo = new THREE.PlaneGeometry(0.8, 0.5);
    const displayGlowMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
    const displayGlow = new THREE.Mesh(displayGlowGeo, displayGlowMat);
    displayGlow.position.set(-0.6, 0.44, -0.08);
    displayGlow.rotation.x = -0.15;
    envGroup.add(displayGlow);

    // Mini Coffee Mug
    const mugGeo = new THREE.CylinderGeometry(0.18, 0.15, 0.32, 16);
    const mugMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(colors.bgLight), roughness: 0.4 });
    const mug = new THREE.Mesh(mugGeo, mugMat);
    mug.position.set(0.6, 0.28, 0.3);
    envGroup.add(mug);

    // Mini Potted Plant
    const potGeo = new THREE.CylinderGeometry(0.22, 0.17, 0.35, 16);
    const potMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(colors.secondary), roughness: 0.5 });
    const pot = new THREE.Mesh(potGeo, potMat);
    pot.position.set(1.3, 0.29, -0.2);
    envGroup.add(pot);

    const leafMat = new THREE.MeshStandardMaterial({ color: 0x48bb78, roughness: 0.5 });
    const leaf1 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), leafMat);
    leaf1.position.set(1.3, 0.52, -0.2);
    leaf1.scale.set(1, 1.4, 0.6);
    envGroup.add(leaf1);
    const leaf2 = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), leafMat);
    leaf2.position.set(1.42, 0.48, -0.1);
    leaf2.rotation.z = -0.5;
    envGroup.add(leaf2);

    // ----------------------------------------------------
    // HANDCRAFTED CREATURE ("Nari") - 250px–320px Visual Scale
    // ----------------------------------------------------
    const characterGroup = new THREE.Group();
    characterGroup.position.copy(homePos);
    characterGroup.position.y += 1.1; // Sits on desk at home
    scene.add(characterGroup);

    // 1. Oversized Rounded Head
    const headGeo = new THREE.SphereGeometry(1.65, 32, 32);
    headGeo.scale(1, 1.06, 0.98);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.bgLight),
      roughness: 0.35,
      metalness: 0.05,
    });
    const head = new THREE.Mesh(headGeo, bodyMat);
    head.position.set(0, 1.4, 0);
    characterGroup.add(head);

    // Stylized Hair Bun on top
    const hairBunGeo = new THREE.SphereGeometry(0.75, 24, 24);
    const hairMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.secondary),
      roughness: 0.5,
    });
    const hairBun = new THREE.Mesh(hairBunGeo, hairMat);
    hairBun.position.set(0, 3.1, -0.3);
    characterGroup.add(hairBun);

    // Hair Lock Accents
    const lock1 = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), hairMat);
    lock1.position.set(-1.2, 2.2, 0.3);
    characterGroup.add(lock1);
    const lock2 = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), hairMat);
    lock2.position.set(1.2, 2.2, 0.3);
    characterGroup.add(lock2);

    // 2. Face Details: Expressive Eyes & Pupil Reflection Highlights
    const eyeGroup = new THREE.Group();
    eyeGroup.position.set(0, 1.4, 1.35);
    characterGroup.add(eyeGroup);

    const eyeGeo = new THREE.SphereGeometry(0.32, 20, 20);
    eyeGeo.scale(1, 1.25, 0.4);
    const eyeMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(colors.ink), roughness: 0.1 });

    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.55, 0.1, 0.2);
    eyeGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.55, 0.1, 0.2);
    eyeGroup.add(rightEye);

    // White Pupil Reflections
    const reflectGeo = new THREE.SphereGeometry(0.09, 8, 8);
    const reflectMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const leftReflect = new THREE.Mesh(reflectGeo, reflectMat);
    leftReflect.position.set(-0.48, 0.18, 0.34);
    eyeGroup.add(leftReflect);

    const rightReflect = new THREE.Mesh(reflectGeo, reflectMat);
    rightReflect.position.set(0.62, 0.18, 0.34);
    eyeGroup.add(rightReflect);

    // Warm Blush Cheeks
    const blushGeo = new THREE.SphereGeometry(0.24, 16, 16);
    blushGeo.scale(1.2, 0.7, 0.3);
    const blushMat = new THREE.MeshBasicMaterial({ color: 0xf472b6, transparent: true, opacity: 0.5 });

    const leftBlush = new THREE.Mesh(blushGeo, blushMat);
    leftBlush.position.set(-0.85, -0.3, 0.15);
    eyeGroup.add(leftBlush);

    const rightBlush = new THREE.Mesh(blushGeo, blushMat);
    rightBlush.position.set(0.85, -0.3, 0.15);
    eyeGroup.add(rightBlush);

    // 3. Cute Sweater Body
    const sweaterGeo = new THREE.SphereGeometry(1.2, 28, 28);
    sweaterGeo.scale(0.95, 1.1, 0.9);
    const sweaterMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.border),
      roughness: 0.6,
    });
    const sweater = new THREE.Mesh(sweaterGeo, sweaterMat);
    sweater.position.set(0, -0.3, 0);
    characterGroup.add(sweater);

    // 4. Arms & Hands
    const armGeo = new THREE.CylinderGeometry(0.16, 0.14, 0.9);
    const armMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(colors.bgLight), roughness: 0.4 });

    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-1.05, 0.1, 0);
    characterGroup.add(leftArmGroup);
    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(0, -0.4, 0);
    leftArmGroup.add(leftArm);

    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(1.05, 0.1, 0);
    characterGroup.add(rightArmGroup);
    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0, -0.4, 0);
    rightArmGroup.add(rightArm);

    // Tiny Shoes / Feet
    const shoeGeo = new THREE.SphereGeometry(0.28, 16, 16);
    shoeGeo.scale(1, 0.7, 1.4);
    const shoeMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(colors.ink), roughness: 0.4 });

    const leftFoot = new THREE.Mesh(shoeGeo, shoeMat);
    leftFoot.position.set(-0.45, -1.3, 0.2);
    characterGroup.add(leftFoot);

    const rightFoot = new THREE.Mesh(shoeGeo, shoeMat);
    rightFoot.position.set(0.45, -1.3, 0.2);
    characterGroup.add(rightFoot);

    // Dynamic Character Shadow
    const shadowGeo = new THREE.PlaneGeometry(2.6, 2.6);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const ctx = shadowCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
    grad.addColorStop(0, 'rgba(0,0,0,0.28)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(homePos.x, -1.18, homePos.z);
    scene.add(shadowMesh);

    // ----------------------------------------------------
    // STAR TRAIL PARTICLES (Subtle Hand-drawn Star Trail)
    // ----------------------------------------------------
    const trailCount = 20;
    const trailGeo = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(trailCount * 3);
    const trailOpacities = new Float32Array(trailCount);

    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    const trailMat = new THREE.PointsMaterial({
      color: new THREE.Color(colors.ink),
      size: 0.25,
      transparent: true,
      opacity: 0.4,
    });

    const trailSystem = new THREE.Points(trailGeo, trailMat);
    scene.add(trailSystem);

    let trailPointer = 0;

    // ----------------------------------------------------
    // STATE MACHINE & PHYSICS VARIABLES
    // ----------------------------------------------------
    const position = new THREE.Vector3().copy(characterGroup.position);
    const velocity = new THREE.Vector3(0, 0, 0);
    const targetPos = new THREE.Vector3().copy(characterGroup.position);

    let currentState = 'IDLE_HOME'; // IDLE_HOME | CHASING | CATCHING_UP | HOVER | RETURNING_HOME
    let lastMouseMoveTime = Date.now();
    let speechCooldown = 0;
    let blinkTimer = 0;
    let blinkDuration = 0;
    let runCycle = 0;

    // Convert mouse to 3D world target
    const handleMouseMove = (e) => {
      lastMouseMoveTime = Date.now();
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Bound target within viewport
      targetPos.x = THREE.MathUtils.clamp(mouseX * 6.5, -6.5, 6.5);
      targetPos.y = THREE.MathUtils.clamp(mouseY * 4.2 - 0.2, -2.8, 3.8);
      targetPos.z = 0.5;

      // Check hover
      const targetEl = document.elementFromPoint(e.clientX, e.clientY);
      if (targetEl && container.contains(targetEl)) {
        currentState = 'HOVER';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Theme Change Observer
    const themeObserver = new MutationObserver(() => {
      colors = getThemeColors();
      deskMat.color.set(colors.border);
      legMat.color.set(colors.secondary);
      laptopMat.color.set(colors.secondary);
      screenMat.color.set(colors.ink);
      mugMat.color.set(colors.bgLight);
      potMat.color.set(colors.secondary);
      bodyMat.color.set(colors.bgLight);
      hairMat.color.set(colors.secondary);
      eyeMat.color.set(colors.ink);
      sweaterMat.color.set(colors.border);
      armMat.color.set(colors.bgLight);
      shoeMat.color.set(colors.ink);
      trailMat.color.set(colors.ink);
    });

    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // ----------------------------------------------------
    // ANIMATION LOOP (60 FPS DAMPED SPRING PHYSICS)
    // ----------------------------------------------------
    let animationFrameId;
    const clock = new THREE.Clock();

    const triggerSpeech = (text) => {
      if (speechCooldown > 0) return;
      setSpeechBubble(text);
      speechCooldown = 3.5;
      setTimeout(() => setSpeechBubble(''), 2200);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (speechCooldown > 0) speechCooldown -= delta;

      const idleDuration = (Date.now() - lastMouseMoveTime) / 1000;
      const distToTarget = position.distanceTo(targetPos);
      const distToHome = position.distanceTo(new THREE.Vector3(homePos.x, homePos.y + 1.1, homePos.z));

      // State Transition Evaluation
      if (currentState === 'HOVER') {
        // Handled via hover event
      } else if (idleDuration > 3.8 && distToHome > 0.4) {
        // User ignored -> Return Home!
        if (currentState !== 'RETURNING_HOME') {
          currentState = 'RETURNING_HOME';
          triggerSpeech('hm... back to work! ☕');
        }
        targetPos.set(homePos.x, homePos.y + 1.1, homePos.z);
      } else if (distToHome <= 0.4 && currentState === 'RETURNING_HOME') {
        currentState = 'IDLE_HOME';
      } else if (distToTarget > 2.2 && idleDuration <= 3.8) {
        if (currentState === 'IDLE_HOME') {
          triggerSpeech('wait for me! 🏃');
        }
        currentState = 'CHASING';
      } else if (distToTarget <= 1.5 && currentState === 'CHASING') {
        currentState = 'CATCHING_UP';
        triggerSpeech('got you! ✦');
      }

      // Spring Physics Movement Calculation
      let springStiffness = 0.05;
      let damping = 0.76;

      if (currentState === 'RETURNING_HOME') {
        springStiffness = 0.025; // Gentle walk home
      } else if (currentState === 'CHASING') {
        springStiffness = 0.065; // Eager run
      }

      const force = new THREE.Vector3().subVectors(targetPos, position).multiplyScalar(springStiffness);
      velocity.add(force);
      velocity.multiplyScalar(damping);
      position.add(velocity);

      characterGroup.position.copy(position);

      // Shadow Position & Scale
      shadowMesh.position.x = position.x;
      shadowMesh.position.z = position.z;
      const shadowY = Math.max(0.3, 1 - (position.y - (homePos.y + 1.1)) * 0.25);
      shadowMesh.scale.set(shadowY, shadowY, 1);

      // Speed & Running Mechanics
      const speed = velocity.length();

      if (speed > 0.05) {
        runCycle += speed * 8;
        // Legs stepping movement
        leftFoot.position.z = 0.2 + Math.sin(runCycle) * 0.35;
        rightFoot.position.z = 0.2 - Math.sin(runCycle) * 0.35;
        leftFoot.position.y = -1.3 + Math.abs(Math.sin(runCycle)) * 0.15;
        rightFoot.position.y = -1.3 + Math.abs(Math.cos(runCycle)) * 0.15;

        // Arms swinging movement
        leftArmGroup.rotation.x = Math.sin(runCycle) * 0.6;
        rightArmGroup.rotation.x = -Math.sin(runCycle) * 0.6;

        // Inertia Body Tilt
        characterGroup.rotation.z = THREE.MathUtils.lerp(characterGroup.rotation.z, -velocity.x * 0.5, 0.15);
        characterGroup.rotation.x = THREE.MathUtils.lerp(characterGroup.rotation.x, velocity.y * 0.3, 0.15);

        // Emit Trail Particle
        if (Math.random() < 0.35) {
          const tPos = trailGeo.attributes.position.array;
          tPos[trailPointer * 3] = position.x + (Math.random() - 0.5) * 0.4;
          tPos[trailPointer * 3 + 1] = position.y - 0.8;
          tPos[trailPointer * 3 + 2] = position.z + (Math.random() - 0.5) * 0.4;
          trailPointer = (trailPointer + 1) % trailCount;
          trailGeo.attributes.position.needsUpdate = true;
        }
      } else {
        // Idle / Sitting at desk posture
        leftFoot.position.set(-0.45, -1.3, 0.2);
        rightFoot.position.set(0.45, -1.3, 0.2);
        characterGroup.rotation.z = THREE.MathUtils.lerp(characterGroup.rotation.z, 0, 0.1);
        characterGroup.rotation.x = THREE.MathUtils.lerp(characterGroup.rotation.x, 0, 0.1);

        if (currentState === 'IDLE_HOME') {
          // Resting hands on laptop
          leftArmGroup.rotation.x = THREE.MathUtils.lerp(leftArmGroup.rotation.x, -0.6, 0.1);
          rightArmGroup.rotation.x = THREE.MathUtils.lerp(rightArmGroup.rotation.x, -0.6, 0.1);
        }
      }

      // Hover Wave Gesture
      if (currentState === 'HOVER') {
        rightArmGroup.rotation.z = Math.sin(elapsedTime * 12) * 0.5 + 1.2;
        rightArmGroup.rotation.x = -0.3;
      } else if (speed <= 0.05 && currentState !== 'IDLE_HOME') {
        rightArmGroup.rotation.z = THREE.MathUtils.lerp(rightArmGroup.rotation.z, 0, 0.1);
      }

      // Head Eye Tracking
      const eyeLookTarget = new THREE.Vector3();
      if (currentState === 'IDLE_HOME') {
        // Look at laptop
        eyeLookTarget.set(homePos.x - 0.6, homePos.y + 0.5, 0.5);
      } else {
        // Look at cursor target
        eyeLookTarget.set(targetPos.x, targetPos.y + 1, 6);
      }
      eyeGroup.lookAt(eyeLookTarget);

      // Gentle Breathing
      const breath = Math.sin(elapsedTime * 3) * 0.03;
      head.position.y = 1.4 + breath;

      // Blinking
      blinkTimer += delta;
      if (blinkTimer > 3.2 && Math.random() < 0.04) {
        blinkTimer = 0;
        blinkDuration = 0.16;
      }
      if (blinkDuration > 0) {
        blinkDuration -= delta;
        leftEye.scale.y = 0.08;
        rightEye.scale.y = 0.08;
      } else {
        leftEye.scale.y = 1.25;
        rightEye.scale.y = 1.25;
      }

      // Update Speech Bubble Screen Coordinate Position
      const headWorldPos = new THREE.Vector3();
      head.getWorldPosition(headWorldPos);
      headWorldPos.y += 1.8;
      headWorldPos.project(camera);

      const screenX = (headWorldPos.x * 0.5 + 0.5) * container.clientWidth;
      const screenY = (-headWorldPos.y * 0.5 + 0.5) * container.clientHeight;
      setSpeechPos({ x: screenX, y: screenY });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      themeObserver.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      deskGeo.dispose();
      deskMat.dispose();
      legGeo.dispose();
      legMat.dispose();
      laptopBaseGeo.dispose();
      laptopMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      displayGlowGeo.dispose();
      displayGlowMat.dispose();
      mugGeo.dispose();
      mugMat.dispose();
      potGeo.dispose();
      potMat.dispose();
      headGeo.dispose();
      bodyMat.dispose();
      hairBunGeo.dispose();
      hairMat.dispose();
      eyeGeo.dispose();
      eyeMat.dispose();
      reflectGeo.dispose();
      reflectMat.dispose();
      blushGeo.dispose();
      blushMat.dispose();
      sweaterGeo.dispose();
      sweaterMat.dispose();
      armGeo.dispose();
      armMat.dispose();
      shoeGeo.dispose();
      shoeMat.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTex.dispose();
      trailGeo.dispose();
      trailMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-character-zone w-full h-[360px] sm:h-[440px] md:h-[520px] relative select-none">
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Floating React Speech Bubble */}
      <AnimatePresence>
        {speechBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -5 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              left: speechPos.x,
              top: speechPos.y - 20,
              transform: 'translate(-50%, -100%)',
            }}
            className="pointer-events-none z-30 font-mono text-xs px-3 py-1.5 rounded-lg border border-paper-border bg-paper shadow-md text-ink font-semibold flex items-center gap-1.5 whitespace-nowrap"
          >
            {speechBubble}
            {/* Speech bubble tail pointer */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-paper-border" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CursorChaseCanvas;

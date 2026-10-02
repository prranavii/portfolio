import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CursorChaseCanvas = ({ onCursorMoveFirstTime }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Get current theme colors
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5, 20);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // ----------------------------------------------------
    // CHARACTER BUILDING (Tiny Abstract Digital Companion "Echo")
    // ----------------------------------------------------
    const characterGroup = new THREE.Group();
    scene.add(characterGroup);

    // Main Body: Soft Rounded Pill Blob
    const bodyGeo = new THREE.SphereGeometry(1.4, 32, 32);
    bodyGeo.scale(1, 1.15, 0.95); // Slightly elongated cute capsule
    const bodyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.bgLight),
      roughness: 0.35,
      metalness: 0.05,
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    characterGroup.add(body);

    // Belly Accent Patch
    const bellyGeo = new THREE.SphereGeometry(0.9, 24, 24);
    bellyGeo.scale(0.9, 1, 0.5);
    const bellyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.border),
      roughness: 0.5,
    });
    const belly = new THREE.Mesh(bellyGeo, bellyMat);
    belly.position.set(0, -0.15, 0.85);
    characterGroup.add(belly);

    // Head / Eye Anchor Group
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.4, 0.7);
    characterGroup.add(headGroup);

    // Expressive Left & Right Eyes
    const eyeGeo = new THREE.SphereGeometry(0.2, 16, 16);
    eyeGeo.scale(1, 1.25, 0.5);
    const eyeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.ink),
      roughness: 0.1,
    });

    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.45, 0.1, 0.5);
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.45, 0.1, 0.5);
    headGroup.add(rightEye);

    // Shiny Eye Reflection Highlights
    const pupilReflectGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const pupilReflectMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const leftReflect = new THREE.Mesh(pupilReflectGeo, pupilReflectMat);
    leftReflect.position.set(-0.4, 0.16, 0.72);
    headGroup.add(leftReflect);

    const rightReflect = new THREE.Mesh(pupilReflectGeo, pupilReflectMat);
    rightReflect.position.set(0.5, 0.16, 0.72);
    headGroup.add(rightReflect);

    // Cute Ears / Antennae
    const earGeo = new THREE.ConeGeometry(0.25, 0.7, 16);
    const earMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.secondary),
      roughness: 0.4,
    });

    const leftEar = new THREE.Mesh(earGeo, earMat);
    leftEar.position.set(-0.7, 1.1, -0.1);
    leftEar.rotation.z = 0.4;
    leftEar.rotation.x = -0.2;
    characterGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, earMat);
    rightEar.position.set(0.7, 1.1, -0.1);
    rightEar.rotation.z = -0.4;
    rightEar.rotation.x = -0.2;
    characterGroup.add(rightEar);

    // Floating Satellite Nodule above head
    const antennaNodeGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const antennaNodeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.ink),
      roughness: 0.2,
    });
    const antennaNode = new THREE.Mesh(antennaNodeGeo, antennaNodeMat);
    antennaNode.position.set(0, 1.75, 0);
    characterGroup.add(antennaNode);

    // Ground Shadow Mesh
    const shadowGeo = new THREE.PlaneGeometry(2.4, 2.4);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const ctx = shadowCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
    grad.addColorStop(0, 'rgba(0,0,0,0.3)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -1.65, 0);
    scene.add(shadowMesh);

    // ----------------------------------------------------
    // ENVIRONMENT SUPPORT PROPS (Miniature Notebook & Floating Stars)
    // ----------------------------------------------------
    const envGroup = new THREE.Group();
    scene.add(envGroup);

    // Mini Notebook
    const bookGeo = new THREE.BoxGeometry(0.7, 0.9, 0.12);
    const bookMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.secondary),
      roughness: 0.6,
    });
    const book = new THREE.Mesh(bookGeo, bookMat);
    book.position.set(-2.2, -0.9, -0.5);
    book.rotation.z = 0.25;
    book.rotation.x = 0.4;
    envGroup.add(book);

    // Notebook Pages Spine Accent
    const pagesGeo = new THREE.BoxGeometry(0.66, 0.86, 0.1);
    const pagesMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const pages = new THREE.Mesh(pagesGeo, pagesMat);
    pages.position.set(-2.18, -0.9, -0.48);
    pages.rotation.z = 0.25;
    pages.rotation.x = 0.4;
    envGroup.add(pages);

    // 3 Floating Minimal Star / Spark Shapes
    const starShape = new THREE.Shape();
    starShape.moveTo(0, 0.2);
    starShape.quadraticCurveTo(0, 0, 0.2, 0);
    starShape.quadraticCurveTo(0, 0, 0, -0.2);
    starShape.quadraticCurveTo(0, 0, -0.2, 0);
    starShape.quadraticCurveTo(0, 0, 0, 0.2);

    const starExtrudeGeo = new THREE.ExtrudeGeometry(starShape, {
      depth: 0.05,
      bevelEnabled: false,
    });
    const starMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colors.ink),
      transparent: true,
      opacity: 0.5,
    });

    const star1 = new THREE.Mesh(starExtrudeGeo, starMat);
    star1.position.set(2.2, 1.4, -1);
    star1.scale.set(1.4, 1.4, 1.4);
    envGroup.add(star1);

    const star2 = new THREE.Mesh(starExtrudeGeo, starMat);
    star2.position.set(-2.4, 1.8, -1.5);
    star2.scale.set(0.9, 0.9, 0.9);
    envGroup.add(star2);

    // ----------------------------------------------------
    // SPRING PHYSICS & STATE MACHINE ENGINE
    // ----------------------------------------------------
    const position = new THREE.Vector3(1.5, 0, 0);
    const velocity = new THREE.Vector3(0, 0, 0);
    const targetPos = new THREE.Vector3(1.5, 0, 0);

    const springStiffness = 0.045; // Spring force strength
    const damping = 0.78; // Friction damping

    let isMouseActive = false;
    let hoverType = 'none'; // 'none', 'character', 'nav', 'cta'
    let blinkTimer = 0;
    let blinkDuration = 0;
    let bounceY = 0;
    let bounceVel = 0;

    // Track Cursor
    const handleMouseMove = (e) => {
      if (!isMouseActive) {
        isMouseActive = true;
        if (onCursorMoveFirstTime) onCursorMoveFirstTime();
      }

      // Convert mouse position to 3D world plane coordinates
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Restrict target area so character stays inside hero right zone naturally
      targetPos.x = THREE.MathUtils.clamp(mouseX * 4.5 + 1.2, -3.5, 4.5);
      targetPos.y = THREE.MathUtils.clamp(mouseY * 3.5, -2.5, 3.2);

      // Check hover zone
      const targetEl = document.elementFromPoint(e.clientX, e.clientY);
      if (targetEl) {
        if (container.contains(targetEl) || targetEl.closest('.hero-character-zone')) {
          hoverType = 'character';
        } else if (targetEl.closest('a[href^="#"], nav button')) {
          hoverType = 'nav';
        } else if (targetEl.closest('.cta-button-group, a[href="#about"], a[href="#work"]')) {
          hoverType = 'cta';
        } else {
          hoverType = 'none';
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Theme Change Observer
    const themeObserver = new MutationObserver(() => {
      colors = getThemeColors();
      bodyMat.color.set(colors.bgLight);
      bellyMat.color.set(colors.border);
      eyeMat.color.set(colors.ink);
      earMat.color.set(colors.secondary);
      antennaNodeMat.color.set(colors.ink);
      bookMat.color.set(colors.secondary);
      starMat.color.set(colors.ink);
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // ----------------------------------------------------
    // ANIMATION LOOP (60 FPS DAMPED SPRING PHYSICS)
    // ----------------------------------------------------
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // 1. Damped Spring Physics Calculation
      const force = new THREE.Vector3().subVectors(targetPos, position).multiplyScalar(springStiffness);
      velocity.add(force);
      velocity.multiplyScalar(damping);
      position.add(velocity);

      // Apply 3D position to character
      characterGroup.position.x = position.x;
      characterGroup.position.y = position.y + bounceY;
      characterGroup.position.z = position.z;

      // Update Shadow Mesh under character
      shadowMesh.position.x = position.x;
      shadowMesh.position.z = position.z;
      const shadowScale = Math.max(0.4, 1 - (bounceY + position.y * 0.1) * 0.3);
      shadowMesh.scale.set(shadowScale, shadowScale, 1);

      // 2. Velocity-based Inertia Tilt & Squash-and-Stretch
      const speed = velocity.length();
      const tiltZ = -velocity.x * 0.45;
      const tiltX = velocity.y * 0.3;

      characterGroup.rotation.z = THREE.MathUtils.lerp(characterGroup.rotation.z, tiltZ, 0.1);
      characterGroup.rotation.x = THREE.MathUtils.lerp(characterGroup.rotation.x, tiltX, 0.1);

      // Squash and stretch deformation
      const stretchY = 1 + speed * 0.35 + Math.sin(elapsedTime * 4) * 0.03;
      const stretchX = 1 / Math.sqrt(stretchY);
      characterGroup.scale.set(stretchX, stretchY, stretchX);

      // 3. Head & Eye Tracking Target
      let lookTarget = new THREE.Vector3();

      if (hoverType === 'character') {
        // Character excited bounce
        if (bounceY <= 0.01) {
          bounceVel = 0.18;
        }
        lookTarget.set(position.x, position.y + 2, 8);
      } else if (hoverType === 'nav') {
        // Looking up at nav
        lookTarget.set(position.x * 0.5, 6, 4);
      } else if (hoverType === 'cta') {
        // Looking down toward CTAs
        lookTarget.set(-4, -3, 5);
      } else {
        // Default follow cursor
        lookTarget.set(targetPos.x * 1.2, targetPos.y * 1.2, 8);
      }

      // Smooth Head Rotation towards lookTarget
      headGroup.lookAt(lookTarget);

      // 4. Excited Hop Bounce Physics
      bounceY += bounceVel;
      if (bounceY > 0) {
        bounceVel -= 0.015; // Gravity
      } else {
        bounceY = 0;
        bounceVel = 0;
      }

      // 5. Idle Blinking & Antenna Nodule Wobble
      blinkTimer += 0.016;
      if (blinkTimer > 3.5 && Math.random() < 0.03) {
        blinkTimer = 0;
        blinkDuration = 0.15;
      }

      if (blinkDuration > 0) {
        blinkDuration -= 0.016;
        leftEye.scale.y = 0.1;
        rightEye.scale.y = 0.1;
      } else {
        leftEye.scale.y = 1.25;
        rightEye.scale.y = 1.25;
      }

      // Antenna Nodule Orbit
      antennaNode.position.x = Math.sin(elapsedTime * 3) * 0.15;
      antennaNode.position.y = 1.75 + Math.cos(elapsedTime * 4) * 0.08;

      // Environment props idle animation
      book.position.y = -0.9 + Math.sin(elapsedTime * 2) * 0.08;
      book.rotation.y = Math.sin(elapsedTime * 1.5) * 0.15;

      star1.rotation.z = elapsedTime * 0.5;
      star2.rotation.z = -elapsedTime * 0.3;
      star1.position.y = 1.4 + Math.sin(elapsedTime * 2.5) * 0.1;
      star2.position.y = 1.8 + Math.cos(elapsedTime * 2.2) * 0.08;

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
      bodyGeo.dispose();
      bodyMat.dispose();
      bellyGeo.dispose();
      bellyMat.dispose();
      eyeGeo.dispose();
      eyeMat.dispose();
      pupilReflectGeo.dispose();
      pupilReflectMat.dispose();
      earGeo.dispose();
      earMat.dispose();
      antennaNodeGeo.dispose();
      antennaNodeMat.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTex.dispose();
      bookGeo.dispose();
      bookMat.dispose();
      pagesGeo.dispose();
      pagesMat.dispose();
      starExtrudeGeo.dispose();
      starMat.dispose();
      renderer.dispose();
    };
  }, [onCursorMoveFirstTime]);

  return (
    <div
      ref={containerRef}
      className="hero-character-zone w-full h-[340px] sm:h-[420px] md:h-[480px] relative overflow-hidden"
    />
  );
};

export default CursorChaseCanvas;

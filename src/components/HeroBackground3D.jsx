import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Get current theme color
    const getThemeColor = () => {
      const inkColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--text-ink')
        .trim();
      return inkColor || '#141414';
    };

    let currentColor = new THREE.Color(getThemeColor());

    // 1. Central 3D Wireframe Polyhedron
    const geo = new THREE.IcosahedronGeometry(6, 2);
    const wireframeGeo = new THREE.WireframeGeometry(geo);
    const lineMat = new THREE.LineBasicMaterial({
      color: currentColor,
      transparent: true,
      opacity: 0.15,
      linewidth: 1,
    });
    const polyhedron = new THREE.LineSegments(wireframeGeo, lineMat);
    scene.add(polyhedron);

    // Inner secondary rotating ring
    const torusGeo = new THREE.TorusGeometry(8.5, 0.05, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: currentColor,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    // 2. 3D Particle Cloud
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      velocities.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015,
      });
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: currentColor,
      size: 0.18,
      transparent: true,
      opacity: 0.35,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 3. Dynamic Connecting Network Lines
    const maxConnections = 60;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineNetworkGeo = new THREE.BufferGeometry();
    lineNetworkGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );

    const lineNetworkMat = new THREE.LineBasicMaterial({
      color: currentColor,
      transparent: true,
      opacity: 0.08,
    });

    const networkLines = new THREE.LineSegments(
      lineNetworkGeo,
      lineNetworkMat
    );
    scene.add(networkLines);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Theme Change Observer
    const observer = new MutationObserver(() => {
      const newColor = new THREE.Color(getThemeColor());
      lineMat.color = newColor;
      torusMat.color = newColor;
      particleMat.color = newColor;
      lineNetworkMat.color = newColor;
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Animation Loop
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera lerp toward mouse position
      targetX += (mouseX * 2.5 - targetX) * 0.04;
      targetY += (-mouseY * 2.5 - targetY) * 0.04;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(scene.position);

      // Rotate 3D geometries
      polyhedron.rotation.x += 0.0015;
      polyhedron.rotation.y += 0.0025;

      torus.rotation.y += 0.001;
      torus.rotation.z += 0.0015;

      // Animate particles
      const posAttr = particleGeo.attributes.position;
      const posArr = posAttr.array;

      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3] += velocities[i].x;
        posArr[i * 3 + 1] += velocities[i].y;
        posArr[i * 3 + 2] += velocities[i].z;

        // Bounce boundaries
        if (Math.abs(posArr[i * 3]) > 20) velocities[i].x *= -1;
        if (Math.abs(posArr[i * 3 + 1]) > 15) velocities[i].y *= -1;
        if (Math.abs(posArr[i * 3 + 2]) > 12) velocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      // Update connecting line geometry
      let lineIndex = 0;
      const lineArray = lineNetworkGeo.attributes.position.array;

      for (let i = 0; i < particleCount && lineIndex < maxConnections; i++) {
        for (let j = i + 1; j < particleCount && lineIndex < maxConnections; j++) {
          const dx = posArr[i * 3] - posArr[j * 3];
          const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
          const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 4.5) {
            lineArray[lineIndex * 6] = posArr[i * 3];
            lineArray[lineIndex * 6 + 1] = posArr[i * 3 + 1];
            lineArray[lineIndex * 6 + 2] = posArr[i * 3 + 2];

            lineArray[lineIndex * 6 + 3] = posArr[j * 3];
            lineArray[lineIndex * 6 + 4] = posArr[j * 3 + 1];
            lineArray[lineIndex * 6 + 5] = posArr[j * 3 + 2];
            lineIndex++;
          }
        }
      }
      lineNetworkGeo.setDrawRange(0, lineIndex * 2);
      lineNetworkGeo.attributes.position.needsUpdate = true;

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
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geo.dispose();
      wireframeGeo.dispose();
      lineMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineNetworkGeo.dispose();
      lineNetworkMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default HeroBackground3D;

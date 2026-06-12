import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      // Parallax based on mouse
      const targetX = (state.pointer.x * 0.2);
      const targetY = (state.pointer.y * 0.2);
      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial color="#7C3AED" wireframe />
      {/* Floating Labels (simplified as small orbiting spheres) */}
      <group>
        {['React', 'Node.js', 'Next.js', 'MongoDB', 'MySQL', 'Python'].map((tech, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 3;
          return (
            <mesh key={tech} position={[Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshBasicMaterial color="#06B6D4" />
            </mesh>
          );
        })}
      </group>
    </mesh>
  );
};

export const Hero3DGlobe = () => {
  return (
    <div className="w-full h-[520px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} color="#06B6D4" />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#7C3AED" />
        <Globe />
      </Canvas>
    </div>
  );
};

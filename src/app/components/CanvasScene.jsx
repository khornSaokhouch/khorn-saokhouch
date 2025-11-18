'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function RotatingAbstractShape() {
  const meshRef = useRef();
  const { viewport } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.z += 0.001;

      // Optional: react to scroll
      const scrollY = window.scrollY;
      meshRef.current.position.y = -scrollY * 0.002; // subtle vertical movement
      meshRef.current.position.x = Math.sin(scrollY * 0.001) * 0.5; // subtle side sway
    }
  });

  const accentColor = new THREE.Color('#00b8ff').lerp(new THREE.Color('#ffffff'), 0.2);

  return (
    <group ref={meshRef} scale={[1.8, 1.8, 1.8]}>
      {/* Main translucent shape */}
      <mesh>
        <dodecahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial 
          color={accentColor} 
          roughness={0.1} 
          metalness={0.9} 
          transmission={0.5} 
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <dodecahedronGeometry args={[1, 0]} />
        <meshBasicMaterial 
          color="#00b8ff" 
          wireframe 
          opacity={0.3}
          transparent
        />
      </mesh>
    </group>
  );
}

export default function CanvasScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <ambientLight intensity={0.2} />

      <Suspense fallback={null}>
        <RotatingAbstractShape />
        {/* <Environment preset="night" /> */}
      </Suspense>
    </Canvas>
  );
}

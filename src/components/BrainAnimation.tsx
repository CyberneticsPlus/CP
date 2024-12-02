import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const NeuralConnections = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesCount = 500;
  const positions = new Float32Array(particlesCount * 3);
  const connections = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 3;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
    
    connections[i * 3] = Math.random() * Math.PI * 2;
    connections[i * 3 + 1] = Math.random() * Math.PI * 2;
    connections[i * 3 + 2] = Math.random();
  }

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3] += Math.sin(time + connections[i3]) * 0.002;
      positions[i3 + 1] += Math.cos(time + connections[i3 + 1]) * 0.002;
      positions[i3 + 2] += Math.sin(time + connections[i3 + 2]) * 0.002;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#4299e1"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const BrainAnimation = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere args={[1.5, 32, 32]} scale={0.5}>
          <meshStandardMaterial
            color="#2563eb"
            transparent
            opacity={0.1}
            wireframe
          />
        </Sphere>
        <NeuralConnections />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default BrainAnimation;
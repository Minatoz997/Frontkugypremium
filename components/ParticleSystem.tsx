import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

const Particles = ({ count = 1000, mousePosition }) => {
  const mesh = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = mousePosition.y * 0.2;
    mesh.current.rotation.y = mousePosition.x * 0.2;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#4285f4"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const ParticleSystem = ({ count, mousePosition }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.5} />
      <Particles count={count} mousePosition={mousePosition} />
    </Canvas>
  );
};

export default ParticleSystem;
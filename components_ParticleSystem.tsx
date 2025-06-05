import React from 'react';
import { motion } from 'framer-motion';

interface ParticleSystemProps {
  mousePosition?: { x: number; y: number };
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ mousePosition = { x: 0, y: 0 } }) => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            translateX: mousePosition.x * 5,
            translateY: mousePosition.y * 5,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
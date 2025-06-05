import React from 'react';
import { motion } from 'framer-motion';

interface HologramEffectProps {
  children: React.ReactNode;
}

export const HologramEffect: React.FC<HologramEffectProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Hologram glow effect */}
      <motion.div
        className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {/* Main content */}
      {children}
    </div>
  );
};

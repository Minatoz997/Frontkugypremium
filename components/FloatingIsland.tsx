import React from 'react';
import { motion } from 'framer-motion';

interface FloatingIslandProps {
  className?: string;
  children?: React.ReactNode;
  floatHeight?: number;
  duration?: number;
}

export const FloatingIsland: React.FC<FloatingIslandProps> = ({
  className = '',
  children,
  floatHeight = 20,
  duration = 6,
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -floatHeight, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {children}
      
      {/* Shadow Effect */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-blue-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

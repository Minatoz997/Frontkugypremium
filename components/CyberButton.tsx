import { motion } from 'framer-motion';
import { useState } from 'react';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  glowColor?: string;
  className?: string;
}

export const CyberButton = ({ 
  children, 
  onClick, 
  glowColor = '#4f46e5',
  className = ''
}: CyberButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`relative px-8 py-3 bg-gray-900 text-white font-cyber
                 border border-${glowColor} rounded-md overflow-hidden
                 hover:bg-gray-800 transition-colors ${className}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: isHovered ? ['-100%', '100%'] : '-100%',
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: isHovered ? Infinity : 0,
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute inset-0 animate-cyber-pulse"
        style={{ 
          boxShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
          opacity: 0.5,
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Border animation */}
      <div className="absolute inset-0 border border-white/20 rounded-md" />
    </motion.button>
  );
};
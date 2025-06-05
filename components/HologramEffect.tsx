import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface HologramEffectProps {
  children: React.ReactNode;
  delay?: number;
}

export const HologramEffect = ({ children, delay = 0 }: HologramEffectProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0.5, 1, 0.5],
      filter: [
        'brightness(1) saturate(1)',
        'brightness(1.2) saturate(1.2)',
        'brightness(1) saturate(1)'
      ],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        delay
      }
    });
  }, [controls, delay]);

  return (
    <div className="relative">
      {/* Hologram lines effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent 
                    opacity-50 mix-blend-overlay pointer-events-none" 
           style={{ backgroundSize: '3px 3px' }} />
      
      {/* Glitch effect */}
      <motion.div
        animate={controls}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-50 animate-pulse-glow" />
    </div>
  );
};
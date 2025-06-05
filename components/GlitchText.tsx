import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main text */}
      <motion.span
        className="relative inline-block font-cyber text-white"
        animate={{
          x: [-1, 1, -1],
          transition: {
            repeat: Infinity,
            duration: 0.1,
            repeatType: 'mirror',
          },
        }}
      >
        {text}
      </motion.span>

      {/* Glitch layers */}
      <span
        className="absolute top-0 left-0 -ml-[2px] text-red-500 opacity-50 font-cyber"
        style={{ clipPath: 'rect(24px, 550px, 90px, 0)' }}
      >
        {text}
      </span>
      <span
        className="absolute top-0 left-0 -ml-[2px] text-blue-500 opacity-50 font-cyber"
        style={{ clipPath: 'rect(85px, 550px, 140px, 0)' }}
      >
        {text}
      </span>
    </div>
  );
};
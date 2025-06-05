import { motion } from 'framer-motion';

interface EnergyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const EnergyButton = ({ children, onClick }: EnergyButtonProps) => {
  return (
    <motion.button
      className="relative px-8 py-3 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Energy core */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-75 blur-xl 
                    group-hover:opacity-100 transition-opacity" />

      {/* Button background */}
      <div className="relative bg-gray-900 rounded-lg px-8 py-3 border border-white/10">
        {/* Energy particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 0],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: Math.random(),
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <span className="relative z-10 text-white font-cyber">
          {children}
        </span>
      </div>
    </motion.button>
  );
};
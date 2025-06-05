import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '../components/AppLayout';
import { GlitchText } from '../components/GlitchText';
import { CyberButton } from '../components/CyberButton';

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <AppLayout>
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        {/* Glitch Effect Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            animate={{
              x: [0, Math.random() * 1000 - 500],
              y: [0, Math.random() * 1000 - 500],
              scale: [1, 0],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.div
            animate={{
              rotateX: mousePosition.y * 20,
              rotateY: mousePosition.x * 20,
            }}
            className="perspective-1000"
          >
            <GlitchText
              text="404"
              className="text-8xl md:text-9xl font-cyber mb-6"
            />
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl text

-cyan-400 font-futuristic mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Page Not Found in This Dimension
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-md mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Looks like you've ventured into uncharted territory. 
            Let's get you back to a safe zone.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link href="/">
              <CyberButton glowColor="#06b6d4">
                Return Home
                <span className="ml-2">→</span>
              </CyberButton>
            </Link>
          </motion.div>
        </div>

        {/* Animated Glitch Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute left-0 right-0 h-px bg-cyan-500/50"
            animate={{
              y: ['100%', '-100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              top: `${33 * (i + 1)}%`,
            }}
          />
        ))}
      </div>
    </AppLayout>
  );
};

export default NotFoundPage;
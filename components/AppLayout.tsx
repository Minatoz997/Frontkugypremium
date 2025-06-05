import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { PremiumNavigation } from './PremiumNavigation';

const DynamicParticles = dynamic(() => import('./ParticleSystem'), { ssr: false });

export const AppLayout = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useViewportScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgb(10, 10, 30)', 'rgb(30, 10, 40)']
  );

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
    <motion.div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor }}
    >
      <DynamicParticles count={100} mousePosition={mousePosition} />
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${
            mousePosition.y * 100 + 50
          }%, rgba(62, 87, 229, 0.1) 0%, rgba(0,0,0,0) 50%)`
        }}
      />

      <PremiumNavigation />

      <main className="relative z-10">
        {children}
      </main>
    </motion.div>
  );
};
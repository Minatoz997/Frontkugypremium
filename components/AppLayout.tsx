import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';
import dynamic from 'next/dynamic';

const DynamicParticles = dynamic(() => import('./ParticleSystem'), { ssr: false });

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useViewportScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(17, 24, 39, 1)', 'rgba(13, 17, 23, 1)']
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
      style={{ backgroundColor }}
      className="min-h-screen text-white"
    >
      <DynamicParticles mousePosition={mousePosition} />
      <main>{children}</main>
    </motion.div>
  );
};

import { motion } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';
import dynamic from 'next/dynamic';

const DynamicParticles = dynamic(() => import('./ParticleSystem'), { ssr: false });

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
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
    <div className="min-h-screen bg-gray-900 text-white">
      <DynamicParticles mousePosition={mousePosition} />
      <main>{children}</main>
    </div>
  );
};

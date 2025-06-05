import React, { useState, useEffect, ReactNode } from 'react';
import dynamic from 'next/dynamic';

const DynamicParticles = dynamic(() => import('./ParticleSystem'), { ssr: false });

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <DynamicParticles mousePosition={mousePosition} />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

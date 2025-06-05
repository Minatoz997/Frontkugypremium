import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const DynamicParticles = dynamic(() => import('./ParticleSystem'), { ssr: false });

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <DynamicParticles />
      <main className="container mx-auto px-4">
        {children}
      </main>
    </div>
  );
};
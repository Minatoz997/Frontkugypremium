import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { HologramEffect } from '../components/HologramEffect';
import { CyberButton } from '../components/CyberButton';
import { GlitchText } from '../components/GlitchText';
import { MatrixRain } from '../components/MatrixRain';
import Head from 'next/head';
import Link from 'next/link';

const IndexPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    { title: 'AI Chat', icon: '💬', description: 'Chat with your favorite anime characters' },
    { title: 'Image Creation', icon: '🎨', description: 'Generate stunning anime artwork' },
    { title: 'Novel Writing', icon: '📚', description: 'Create amazing stories with AI' }
  ];

  return (
    <>
      <Head>
        <title>MyKugy AI - Next Generation Anime AI Platform</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <AppLayout>
        <MatrixRain />
        
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"
            style={{ y }}
          />

          <div className="max-w-7xl mx-auto px-4 pt-40 pb-20 relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <HologramEffect>
                  <GlitchText 
                    text="MYKUGY AI" 
                    className="text-6xl md:text-8xl font-cyber font-bold mb-6"
                  />
                </HologramEffect>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-blue-400 font-futuristic mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Next Generation Anime AI Experience
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Link href="/chat">
                  <CyberButton glowColor="#3b82f6">
                    Start Chatting
                    <span className="ml-2">→</span>
                  </CyberButton>
                </Link>

                <Link href="/create">
                  <CyberButton glowColor="#8b5cf6">
                    Create Art
                    <span className="ml-2">🎨</span>
                  </CyberButton>
                </Link>
              </motion.div>
            </div>

            {/* Floating Features */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-xl border border-white/10">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 font-cyber">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {mounted && [...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500 rounded-full"
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
          </div>
        </section>
      </AppLayout>
    </>
  );
};

export default IndexPage;
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AppLayout } from '../components/AppLayout';
import { HologramEffect } from '../components/HologramEffect';
import { GlitchText } from '../components/GlitchText';
import { CyberButton } from '../components/CyberButton';
import { MatrixRain } from '../components/MatrixRain';
import Image from 'next/image';

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  
  const features = [
    {
      id: 1,
      title: "AI Chat System",
      description: "Chat with AI-powered anime characters with unique personalities",
      icon: "🤖",
      stats: "1M+ conversations"
    },
    {
      id: 2,
      title: "Art Generation",
      description: "Create stunning anime artwork using advanced AI algorithms",
      icon: "🎨",
      stats: "500K+ artworks"
    },
    {
      id: 3,
      title: "Novel Writing",
      description: "Write compelling stories with AI assistance",
      icon: "📚",
      stats: "100K+ chapters"
    },
    {
      id: 4,
      title: "Community",
      description: "Connect with fellow creators and share your work",
      icon: "🌐",
      stats: "250K+ members"
    }
  ];

  const technologies = [
    {
      name: "Next.js",
      icon: "/tech/nextjs.svg",
      description: "React framework for production"
    },
    {
      name: "TailwindCSS",
      icon: "/tech/tailwind.svg",
      description: "Utility-first CSS framework"
    },
    {
      name: "Framer Motion",
      icon: "/tech/framer.svg",
      description: "Production-ready animations"
    }
  ];

  const team = [
    {
      name: "Minatoz997",
      role: "Founder & Lead Developer",
      avatar: "/team/minatoz997.jpg",
      links: {
        github: "https://github.com/Minatoz997",
        twitter: "https://twitter.com/Minatoz997"
      }
    }
  ];

  return (
    <AppLayout>
      <div className="relative min-h-screen">
        <MatrixRain />
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"
            style={{ y }}
          />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HologramEffect>
                <GlitchText 
                  text="About MyKugy AI"
                  className="text-6xl md:text-7xl font-cyber mb-6"
                />
              </HologramEffect>
              
              <motion.p
                className="text-xl md:text-2xl text-blue-400 font-futuristic mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                The Next Generation of Anime AI Creation
              </motion.p>

              <motion.div
                className="max-w-2xl mx-auto text-gray-300 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p>
                  MyKugy AI combines cutting-edge artificial intelligence with anime aesthetics
                  to create a unique platform for artists, writers, and creators.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <span className="text-cyan-400 text-4xl">↓</span>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <GlitchText
                text="Platform Features"
                className="text-4xl mb-4"
              />
              <p className="text-cyan-400 font-futuristic">
                Discover what makes MyKugy AI unique
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gray-800/50 rounded-xl p-6 h-full">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-cyber text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <div className="text-cyan-400 font-mono">{feature.stats}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <GlitchText
                text="Technology Stack"
                className="text-4xl mb-4"
              />
              <p className="text-purple-400 font-futuristic">
                Built with cutting-edge technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                                rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gray-800/50 rounded-xl p-6 text-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-cyber text-white mb-2">{tech.name}</h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <GlitchText
                text="Meet the Team"
                className="text-4xl mb-4"
              />
              <p className="text-pink-400 font-futuristic">
                The creators behind MyKugy AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 
                                rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gray-800/50 rounded-xl p-6 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        layout="fill"
                        className="rounded-full"
                        objectFit="cover"
                      />
                    </div>
                    <h3 className="text-xl font-cyber text-white mb-2">{member.name}</h3>
                    <p className="text-pink-400 mb-4">{member.role}</p>
                    <div className="flex justify-center gap-4">
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.419 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href={member.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <HologramEffect>
              <GlitchText
                text="Join the Future of Anime Creation"
                className="text-4xl mb-6"
              />
            </HologramEffect>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the next generation of creators and bring your imagination to life
            </p>
            <CyberButton
              glowColor="#ec4899"
              className="text-lg px-8 py-4"
            >
              Get Started Now
              <span className="ml-2">→</span>
            </CyberButton>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default AboutPage;
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { HologramEffect } from '../components/HologramEffect';
import { GlitchText } from '../components/GlitchText';
import { CyberButton } from '../components/CyberButton';
import Image from 'next/image';

const NovelPage = () => {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [isWriting, setIsWriting] = useState(false);
  const [activeTab, setActiveTab] = useState('write');

  const novelThemes = [
    {
      id: 'fantasy',
      name: 'Fantasy Adventure',
      icon: '⚔️',
      description: 'Epic journeys in magical realms'
    },
    {
      id: 'scifi',
      name: 'Sci-Fi Romance',
      icon: '🚀',
      description: 'Love stories in futuristic worlds'
    },
    {
      id: 'school',
      name: 'School Life',
      icon: '🏫',
      description: 'Drama and friendship in academy'
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Novel Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <HologramEffect>
              <GlitchText
                text="AI Novel Creator"
                className="text-5xl mb-4"
              />
            </HologramEffect>
            <p className="text-xl text-purple-400 font-futuristic">
              Create captivating anime stories with AI assistance
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            {['write', 'chapters', 'settings'].map((tab) => (
              <motion.button
                key={tab}
                className={`px-6 py-2 rounded-lg font-cyber ${
                  activeTab === tab 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-800 text-gray-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode='wait'>
            {activeTab === 'write' && (
              <motion.div
                key="write"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Writing Area */}
                <div className="space-y-6">
                  <div className="bg-gray-900/80 rounded-xl p-6 border border-purple-500/30">
                    <h3 className="text-xl font-cyber mb-4">Chapter {currentChapter}</h3>
                    <textarea
                      className="w-full h-64 bg-gray-800 text-white rounded-lg p-4 
                               border border-white/10 focus:border-purple-500 focus:ring-2 
                               focus:ring-purple-500/20 outline-none transition-all resize-none
                               font-futuristic"
                      placeholder="Start writing your story..."
                    />
                  </div>

                  <div className="flex justify-between">
                    <CyberButton
                      glowColor="#a855f7"
                      onClick={() => setIsWriting(true)}
                    >
                      Generate Content
                      <span className="ml-2">✨</span>
                    </CyberButton>

                    <CyberButton
                      glowColor="#ec4899"
                    >
                      Save Chapter
                      <span className="ml-2">💾</span>
                    </CyberButton>
                  </div>
                </div>

                {/* Story Assistant */}
                <div className="bg-gray-900/80 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-xl font-cyber mb-4">Story Assistant</h3>
                  
                  {/* Theme Selection */}
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {novelThemes.map((theme) => (
                      <motion.div
                        key={theme.id}
                        className="p-4 bg-gray-800 rounded-lg cursor-pointer
                                 hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{theme.icon}</span>
                          <div>
                            <h4 className="font-cyber text-white">{theme.name}</h4>
                            <p className="text-sm text-gray-400">{theme.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* AI Suggestions */}
                  <div className="space-y-4">
                    <h4 className="font-cyber text-purple-400">AI Suggestions</h4>
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <p className="text-sm text-gray-300">
                        Try adding more character development in this chapter...
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'chapters' && (
              <motion.div
                key="chapters"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                                  rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative p-6 bg-gray-900/80 rounded-xl border border-white/10">
                      <h3 className="font-cyber text-lg mb-2">Chapter {i + 1}</h3>
                      <p className="text-sm text-gray-400 mb-4">
                        Last edited: 2025-06-{(i + 1).toString().padStart(2, '0')}
                      </p>
                      <div className="flex justify-between">
                        <button className="text-purple-400 hover:text-purple-300">Edit</button>
                        <button className="text-pink-400 hover:text-pink-300">Preview</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AppLayout>
  );
};

export default NovelPage;
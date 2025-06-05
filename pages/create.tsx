import { motion } from 'framer-motion';
import { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { HologramEffect } from '../components/HologramEffect';
import { GlitchText } from '../components/GlitchText';
import { CyberButton } from '../components/CyberButton';
import { EnergyButton } from '../components/EnergyButton';

const CreatePage = () => {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [style, setStyle] = useState('anime');

  const animeStyles = [
    {
      id: 'anime',
      name: 'Classic Anime',
      icon: '🎨',
      sample: '/styles/anime.jpg'
    },
    {
      id: 'cyberpunk',
      name: 'Cyber Punk',
      icon: '🌆',
      sample: '/styles/cyberpunk.jpg'
    },
    {
      id: 'watercolor',
      name: 'Watercolor',
      icon: '🎨',
      sample: '/styles/watercolor.jpg'
    },
    {
      id: 'manga',
      name: 'Manga',
      icon: '📚',
      sample: '/styles/manga.jpg'
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <HologramEffect>
              <GlitchText
                text="AI Anime Art Creator"
                className="text-5xl mb-4"
              />
            </HologramEffect>
            <p className="text-xl text-blue-400 font-futuristic">
              Transform your imagination into stunning anime artwork
            </p>
          </motion.div>

          {/* Style Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {animeStyles.map((animeStyle) => (
              <motion.div
                key={animeStyle.id}
                className={`relative cursor-pointer ${
                  style === animeStyle.id ? 'ring-2 ring-blue-500' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setStyle(animeStyle.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                              rounded-xl backdrop-blur-sm" />
                <div className="relative p-4 text-center">
                  <span className="text-3xl mb-2 block">{animeStyle.icon}</span>
                  <h3 className="font-cyber text-white">{animeStyle.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Prompt Input */}
          <motion.div
            className="max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your anime artwork..."
              className="w-full h-32 bg-gray-900/80 text-white rounded-xl p-4 
                       border border-white/10 focus:border-blue-500 focus:ring-2 
                       focus:ring-blue-500/20 outline-none transition-all resize-none
                       font-futuristic"
            />
          </motion.div>

          {/* Generation Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <EnergyButton
              onClick={() => setGenerating(true)}
            >
              {generating ? 'Generating...' : 'Generate Artwork'}
            </EnergyButton>
          </motion.div>

          {/* Results Area */}
          {generating && (
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative aspect-square max-w-2xl mx-auto rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                              animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-cyber">Generating your masterpiece...</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default CreatePage;
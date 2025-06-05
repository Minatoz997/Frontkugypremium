import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AppLayout } from '../components/AppLayout';
import { HologramEffect } from '../components/HologramEffect';
import { GlitchText } from '../components/GlitchText';
import { CyberButton } from '../components/CyberButton';
import Image from 'next/image';

const GalleryPage = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [filter, setFilter] = useState('all');
  const [layoutType, setLayoutType] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Works', icon: '🎨' },
    { id: 'characters', name: 'Characters', icon: '👥' },
    { id: 'landscapes', name: 'Landscapes', icon: '🌄' },
    { id: 'portraits', name: 'Portraits', icon: '👤' },
    { id: 'mecha', name: 'Mecha', icon: '🤖' }
  ];

  // Sample gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Cyber Samurai",
      creator: "Minatoz997",
      image: "/gallery/cyber-samurai.jpg",
      category: "characters",
      likes: 1234,
      createdAt: "2025-06-05",
      description: "A futuristic samurai with neon accents"
    },
    // ... more items
  ];

  return (
    <AppLayout>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Gallery Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <HologramEffect>
              <GlitchText
                text="Artistic Showcase"
                className="text-5xl mb-4"
              />
            </HologramEffect>
            <p className="text-xl text-cyan-400 font-futuristic">
              Discover amazing AI-generated anime artworks
            </p>
          </motion.div>

          {/* Gallery Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  className={`px-4 py-2 rounded-full font-cyber flex items-center gap-2
                            ${filter === cat.id 
                              ? 'bg-cyan-500 text-white' 
                              : 'bg-gray-800 text-gray-400'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(cat.id)}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                </motion.button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <CyberButton
                onClick={() => setLayoutType('grid')}
                glowColor={layoutType === 'grid' ? '#06b6d4' : '#1f2937'}
              >
                Grid View
              </CyberButton>
              <CyberButton
                onClick={() => setLayoutType('masonry')}
                glowColor={layoutType === 'masonry' ? '#06b6d4' : '#1f2937'}
              >
                Masonry View
              </CyberButton>
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className={`grid gap-6 ${
              layoutType === 'grid' 
                ? 'grid-cols-1 md:grid-cols-3' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            <AnimatePresence>
              {galleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  layoutId={`gallery-${item.id}`}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedWork(item)}
                >
                  {/* Artwork Card */}
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-cyber text-white mb-2">{item.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-cyan-400 font-futuristic">@{item.creator}</span>
                          <div className="flex items-center gap-2">
                            <span>❤️</span>
                            <span className="text-white">{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-xl opacity-0 
                                group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Selected Work Modal */}
          <AnimatePresence>
            {selectedWork && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                onClick={() => setSelectedWork(null)}
              >
                <motion.div
                  layoutId={`gallery-${selectedWork.id}`}
                  className="relative max-w-4xl w-full bg-gray-900 rounded-xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={selectedWork.image}
                      alt={selectedWork.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-cyber text-white mb-4">{selectedWork.title}</h2>
                    <p className="text-gray-300 mb-4">{selectedWork.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={`https://github.com/${selectedWork.creator}.png`}
                          alt={selectedWork.creator}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-cyber text-cyan-400">@{selectedWork.creator}</p>
                          <p className="text-sm text-gray-400">{selectedWork.createdAt}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <CyberButton glowColor="#06b6d4">
                          <span>❤️</span>
                          Like
                        </CyberButton>
                        <CyberButton glowColor="#06b6d4">
                          <span>💾</span>
                          Save
                        </CyberButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AppLayout>
  );
};

export default GalleryPage;
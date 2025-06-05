import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppLayout } from '../components/AppLayout';

interface ArtWork {
  id: number;
  title: string;
  creator: string;
  image: string;
  category: string;
  likes: number;
  createdAt: string;
  description: string;
}

export default function Gallery() {
  const [selectedWork, setSelectedWork] = useState<ArtWork | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Data dummy untuk gallery
  const artworks: ArtWork[] = [
    {
      id: 1,
      title: "Digital Dreams",
      creator: "AI Artist",
      image: "data:image/svg+xml,<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><rect fill='%234F46E5' width='100' height='100'/></svg>",
      category: "digital",
      likes: 156,
      createdAt: "2025-06-05",
      description: "An exploration of digital consciousness."
    },
    {
      id: 2,
      title: "Neural Network",
      creator: "Tech Creative",
      image: "data:image/svg+xml,<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><rect fill='%23A855F7' width='100' height='100'/></svg>",
      category: "abstract",
      likes: 89,
      createdAt: "2025-06-04",
      description: "Visualization of neural networks in action."
    },
    {
      id: 3,
      title: "Future City",
      creator: "Digital Nomad",
      image: "data:image/svg+xml,<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><rect fill='%230EA5E9' width='100' height='100'/></svg>",
      category: "landscape",
      likes: 234,
      createdAt: "2025-06-03",
      description: "A glimpse into the cities of tomorrow."
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'digital', name: 'Digital' },
    { id: 'abstract', name: 'Abstract' },
    { id: 'landscape', name: 'Landscape' }
  ];

  const filteredWorks = activeCategory === 'all' 
    ? artworks 
    : artworks.filter(work => work.category === activeCategory);

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            AI Art Gallery
          </h1>

          {/* Categories */}
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((item) => (
              <motion.div
                key={item.id}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedWork(item)}
              >
                {/* Artwork Card */}
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">
                        by {item.creator}
                      </span>
                      <span className="text-sm text-gray-300">
                        ❤️ {item.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          {selectedWork && (
            <div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedWork(null)}
            >
              <div 
                className="bg-gray-900 rounded-xl p-6 max-w-3xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {selectedWork.title}
                </h2>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">by {selectedWork.creator}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-300">❤️ {selectedWork.likes}</span>
                    <span className="text-gray-300">{selectedWork.createdAt}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  {selectedWork.description}
                </p>
                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                    onClick={() => setSelectedWork(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AppLayout>
  );
                }

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppLayout } from '../components/AppLayout';
import { HologramEffect } from '../components/HologramEffect';

interface Character {
  id: number;
  name: string;
  avatar: string;
  background: string;
  personality: string;
}

export default function Chat() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const characters: Character[] = [
    {
      id: 1,
      name: "AI Assistant",
      avatar: "/avatars/ai-assistant.png",
      background: "from-blue-500 to-purple-500",
      personality: "Helpful and friendly AI assistant"
    },
    {
      id: 2,
      name: "Creative Partner",
      avatar: "/avatars/creative.png",
      background: "from-pink-500 to-orange-500",
      personality: "Creative and imaginative companion"
    },
    // Add more characters as needed
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Choose Your AI Companion
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character) => (
              <motion.div
                key={character.id}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCharacter(character)}
              >
                <HologramEffect>
                  <div className={`relative bg-gradient-to-r ${character.background} 
                    rounded-lg p-6 h-64 flex flex-col items-center justify-center
                    transition-all duration-300 group-hover:shadow-lg`}
                  >
                    <img
                      src={character.avatar}
                      alt={character.name}
                      className="w-24 h-24 rounded-full mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">
                      {character.name}
                    </h3>
                    <p className="text-sm text-white/80 text-center">
                      {character.personality}
                    </p>
                  </div>
                </HologramEffect>
              </motion.div>
            ))}
          </div>

          {selectedCharacter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-gray-800/50 rounded-xl p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={selectedCharacter.avatar}
                  alt={selectedCharacter.name}
                  className="w-12 h-12 rounded-full"
                />
                <h2 className="text-xl font-bold text-white">
                  {selectedCharacter.name}
                </h2>
              </div>
              <div className="space-y-4">
                {/* Chat interface akan ditambahkan di sini */}
                <p className="text-gray-300">Start chatting with {selectedCharacter.name}...</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AppLayout>
  );
}

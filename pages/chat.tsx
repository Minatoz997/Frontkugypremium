import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AppLayout } from '../components/AppLayout';
import { HologramEffect } from '../components/HologramEffect';
import { GlitchText } from '../components/GlitchText';
import { CyberButton } from '../components/CyberButton';
import Image from 'next/image';

const ChatPage = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const animeCharacters = [
    {
      id: 1,
      name: "Sakura AI",
      avatar: "/characters/sakura.png",
      background: "from-pink-500 to-purple-500",
      personality: "Cheerful & Energetic"
    },
    {
      id: 2,
      name: "Cyber Ninja",
      avatar: "/characters/ninja.png",
      background: "from-blue-500 to-cyan-500",
      personality: "Mysterious & Strategic"
    },
    {
      id: 3,
      name: "Magic Scholar",
      avatar: "/characters/mage.png",
      background: "from-purple-500 to-indigo-500",
      personality: "Wise & Knowledgeable"
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4">
          {!selectedCharacter ? (
            // Character Selection Screen
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-10"
            >
              <GlitchText 
                text="Select Your AI Companion"
                className="text-4xl text-center mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {animeCharacters.map((character) => (
                  <motion.div
                    key={character.id}
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedCharacter(character)}
                  >
                    <HologramEffect>
                      <div className={`relative bg-gradient-to-r ${character.background} 
                                    rounded-xl p-6 overflow-hidden`}>
                        {/* Character Avatar */}
                        <div className="relative h-48 w-48 mx-auto mb-4">
                          <Image
                            src={character.avatar}
                            alt={character.name}
                            layout="fill"
                            className="rounded-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>

                        {/* Character Info */}
                        <div className="text-center">
                          <h3 className="text-xl font-cyber text-white mb-2">
                            {character.name}
                          </h3>
                          <p className="text-white/80 font-futuristic">
                            {character.personality}
                          </p>
                        </div>

                        {/* Hover Effects */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                    opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                        </div>
                      </div>
                    </HologramEffect>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // Chat Interface
            <div className="h-[calc(100vh-5rem)] flex flex-col">
              {/* Chat Header */}
              <motion.div 
                className="flex items-center p-4 bg-gray-900/80 backdrop-blur-xl border-b border-white/10"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Image
                  src={selectedCharacter.avatar}
                  alt={selectedCharacter.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-cyber text-white">{selectedCharacter.name}</h3>
                  <p className="text-sm text-white/60">{selectedCharacter.personality}</p>
                </div>
                <CyberButton
                  className="ml-auto"
                  onClick={() => setSelectedCharacter(null)}
                >
                  Change Character
                </CyberButton>
              </motion.div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] p-4 rounded-xl ${
                        message.isUser 
                          ? 'bg-blue-500 text-white ml-12'
                          : 'bg-gray-800 text-white/90 mr-12'
                      }`}>
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex space-x-2 p-4 bg-gray-800 rounded-xl w-20"
                    >
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-200" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Chat Input */}
              <motion.div
                className="p-4 bg-gray-900/80 backdrop-blur-xl border-t border-white/10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-800 text-white rounded-xl px-4 py-2 
                             border border-white/10 focus:border-blue-500 focus:ring-2 
                             focus:ring-blue-500/20 outline-none transition-all"
                  />
                  <CyberButton>
                    Send Message
                    <span className="ml-2">→</span>
                  </CyberButton>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default ChatPage;
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AppLayout } from '../components/AppLayout';
import { HologramEffect } from '../components/HologramEffect';
import { GlitchText } from '../components/GlitchText';
import { CyberButton } from '../components/CyberButton';
import Image from 'next/image';

const CommunityPage = () => {
  const [activeSection, setActiveSection] = useState('trending');
  const [showEventModal, setShowEventModal] = useState(false);

  const trendingTopics = [
    {
      id: 1,
      title: "Summer Anime Art Challenge",
      author: "Minatoz997",
      tags: ["contest", "summer", "art"],
      likes: 1234,
      comments: 89,
      timestamp: "2025-06-05 03:45:23",
      image: "/community/summer-challenge.jpg"
    },
    {
      id: 2,
      title: "AI Collab: Cyberpunk x Traditional",
      author: "artmaster",
      tags: ["collab", "cyberpunk", "traditional"],
      likes: 892,
      comments: 56,
      timestamp: "2025-06-05 02:30:15",
      image: "/community/cyberpunk-collab.jpg"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Mecha Design Workshop",
      date: "2025-06-10",
      time: "15:00 UTC",
      host: "RoboArtist",
      participants: 156,
      thumbnail: "/events/mecha-workshop.jpg",
      description: "Learn the art of mecha design with AI assistance"
    },
    {
      id: 2,
      title: "Anime Character Contest",
      date: "2025-06-15",
      time: "18:00 UTC",
      host: "CharacterPro",
      participants: 234,
      thumbnail: "/events/character-contest.jpg",
      description: "Create unique anime characters and win prizes"
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      username: "Minatoz997",
      points: 12500,
      badge: "🏆",
      avatar: "/avatars/minatoz997.jpg"
    },
    {
      rank: 2,
      username: "ArtMaster",
      points: 11200,
      badge: "🎨",
      avatar: "/avatars/artmaster.jpg"
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Community Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <HologramEffect>
              <GlitchText
                text="MyKugy Community"
                className="text-5xl mb-4"
              />
            </HologramEffect>
            <p className="text-xl text-pink-400 font-futuristic">
              Connect, Create, and Collaborate with Fellow Artists
            </p>
          </motion.div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Trending Topics */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-900/80 rounded-xl p-6 border border-pink-500/30">
                <h2 className="text-2xl font-cyber mb-6">Trending Topics</h2>
                <div className="space-y-6">
                  {trendingTopics.map((topic) => (
                    <motion.div
                      key={topic.id}
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 
                                    rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative bg-gray-800/50 rounded-xl overflow-hidden">
                        <div className="flex gap-4 p-4">
                          {/* Topic Image */}
                          <div className="relative w-48 h-32 rounded-lg overflow-hidden">
                            <Image
                              src={topic.image}
                              alt={topic.title}
                              layout="fill"
                              objectFit="cover"
                              className="transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>

                          {/* Topic Content */}
                          <div className="flex-1">
                            <h3 className="text-xl font-cyber text-white mb-2">{topic.title}</h3>
                            <div className="flex items-center gap-2 mb-3">
                              <img
                                src={`https://github.com/${topic.author}.png`}
                                alt={topic.author}
                                className="w-6 h-6 rounded-full"
                              />
                              <span className="text-pink-400">@{topic.author}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {topic.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1 text-gray-400">
                                <span>❤️</span> {topic.likes}
                              </span>
                              <span className="flex items-center gap-1 text-gray-400">
                                <span>💭</span> {topic.comments}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Events & Leaderboard */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <div className="bg-gray-900/80 rounded-xl p-6 border border-purple-500/30">
                <h2 className="text-2xl font-cyber mb-6">Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setShowEventModal(event)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                                    rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative bg-gray-800/50 rounded-lg p-4">
                        <h3 className="font-cyber text-white mb-2">{event.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                          <span>📅</span> {event.date}
                          <span className="mx-2">|</span>
                          <span>⏰</span> {event.time}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400">@{event.host}</span>
                          <span className="text-sm text-gray-400">
                            {event.participants} participants
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Leaderboard */}
              <div className="bg-gray-900/80 rounded-xl p-6 border border-yellow-500/30">
                <h2 className="text-2xl font-cyber mb-6">Top Creators</h2>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <motion.div
                      key={user.rank}
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 
                                    rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative bg-gray-800/50 rounded-lg p-4 flex items-center gap-4">
                        <div className="text-2xl font-bold text-yellow-500">#{user.rank}</div>
                        <img
                          src={`https://github.com/${user.username}.png`}
                          alt={user.username}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-cyber text-white">@{user.username}</span>
                            <span>{user.badge}</span>
                          </div>
                          <div className="text-sm text-yellow-400">{user.points} points</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {showEventModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowEventModal(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full bg-gray-900 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="relative h-48">
                <Image
                  src={showEventModal.thumbnail}
                  alt={showEventModal.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-cyber text-white mb-4">{showEventModal.title}</h2>
                <p className="text-gray-300 mb-4">{showEventModal.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-400">Date & Time</div>
                    <div className="text-white">{showEventModal.date}</div>
                    <div className="text-white">{showEventModal.time}</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-400">Host</div>
                    <div className="text-white">@{showEventModal.host}</div>
                    <div className="text-purple-400">{showEventModal.participants} joining</div>
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <CyberButton
                    onClick={() => setShowEventModal(null)}
                    glowColor="#4f46e5"
                  >
                    Join Event
                  </CyberButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AppLayout>
  );
};

export default CommunityPage;
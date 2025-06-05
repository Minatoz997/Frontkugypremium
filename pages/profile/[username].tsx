import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppLayout } from '../../components/AppLayout';
import { HologramEffect } from '../../components/HologramEffect';
import { GlitchText } from '../../components/GlitchText';
import { CyberButton } from '../../components/CyberButton';
import Image from 'next/image';

const ProfilePage = () => {
  const router = useRouter();
  const { username } = router.query;
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  const userStats = {
    level: 42,
    exp: 8750,
    nextLevel: 10000,
    rank: 'Legendary Creator',
    joinDate: '2025-01-15',
    creations: 156,
    followers: 1234,
    following: 421
  };

  const achievements = [
    {
      id: 1,
      name: 'Master Artist',
      icon: '🎨',
      rarity: 'legendary',
      progress: 100,
      description: 'Created 100+ masterpieces'
    },
    {
      id: 2,
      name: 'Story Weaver',
      icon: '📚',
      rarity: 'epic',
      progress: 75,
      description: 'Published 50 chapters'
    },
    {
      id: 3,
      name: 'Community Star',
      icon: '⭐',
      rarity: 'rare',
      progress: 90,
      description: 'Received 1000+ likes'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'creation',
      title: 'Created new artwork',
      description: 'Cyber Samurai in Neon City',
      timestamp: '2025-06-05 03:45:23'
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Unlocked achievement',
      description: 'Master of Creativity',
      timestamp: '2025-06-04 18:30:00'
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen pt-20">
        {/* Profile Header */}
        <div className="relative h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
          
          {/* Profile Stats */}
          <div className="absolute -bottom-24 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <div className="flex items-end gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-50" />
                    <div className="relative w-32 h-32 rounded-xl overflow-hidden border-4 border-white/10">
                      <Image
                        src={`https://github.com/${username}.png`}
                        alt={username as string}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h1 className="text-3xl font-cyber text-white">@{username}</h1>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium">
                        {userStats.rank}
                      </span>
                    </div>
                    
                    {/* Level Progress */}
                    <div className="w-full max-w-md">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">Level {userStats.level}</span>
                        <span className="text-blue-400">{userStats.exp}/{userStats.nextLevel} XP</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${(userStats.exp / userStats.nextLevel) * 100}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{userStats.creations}</div>
                      <div className="text-gray-400">Creations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{userStats.followers}</div>
                      <div className="text-gray-400">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{userStats.following}</div>
                      <div className="text-gray-400">Following</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pt-32">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            {['overview', 'achievements', 'gallery', 'novels'].map((tab) => (
              <motion.button
                key={tab}
                className={`px-6 py-2 rounded-lg font-cyber ${
                  activeTab === tab 
                    ? 'bg-blue-500 text-white' 
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

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Recent Activity */}
                <div className="bg-gray-900/80 rounded-xl p-6 border border-white/10">
                  <h2 className="text-xl font-cyber mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <motion.div
                        key={activity.id}
                        className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          {activity.type === 'creation' ? '🎨' : '🏆'}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{activity.title}</h3>
                          <p className="text-sm text-gray-400">{activity.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Achievements Showcase */}
                <div className="bg-gray-900/80 rounded-xl p-6 border border-white/10">
                  <h2 className="text-xl font-cyber mb-6">Recent Achievements</h2>
                  <div className="space-y-4">
                    {achievements.map((achievement) => (
                      <motion.div
                        key={achievement.id}
                        className="relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`p-4 rounded-lg bg-gray-800/50 border border-${
                          achievement.rarity === 'legendary' ? 'yellow' :
                          achievement.rarity === 'epic' ? 'purple' : 'blue'
                        }-500/30`}>
                          <div className="flex items-center gap-4">
                            <div className="text-3xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <h3 className="font-medium text-white">{achievement.name}</h3>
                              <p className="text-sm text-gray-400">{achievement.description}</p>
                              <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${
                                    achievement.rarity === 'legendary' ? 'from-yellow-500 to-orange-500' :
                                    achievement.rarity === 'epic' ? 'from-purple-500 to-pink-500' :
                                    'from-blue-500 to-cyan-500'
                                  }`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${achievement.progress}%` }}
                                  transition={{ duration: 1, ease: "easeOut" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;

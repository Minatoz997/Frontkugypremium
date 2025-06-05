import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AppLayout } from '../components/AppLayout';
import { HologramEffect } from '../components/HologramEffect';
import { GlitchText } from '../components/GlitchText';
import { CyberButton } from '../components/CyberButton';
import { useTheme } from '../hooks/useTheme';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('appearance');
  const [savedTheme, setSavedTheme] = useState('cyber');
  const [themeColor, setThemeColor] = useState('#4f46e5');
  const [fontSize, setFontSize] = useState('normal');
  const [animations, setAnimations] = useState(true);
  const [loading, setLoading] = useState(false);

  const themePresets = [
    {
      id: 'cyber',
      name: 'Cyber Anime',
      preview: '/themes/cyber.jpg',
      colors: {
        primary: '#4f46e5',
        secondary: '#a855f7',
        accent: '#ec4899'
      }
    },
    {
      id: 'magical',
      name: 'Magical Girl',
      preview: '/themes/magical.jpg',
      colors: {
        primary: '#db2777',
        secondary: '#9333ea',
        accent: '#f472b6'
      }
    },
    {
      id: 'mecha',
      name: 'Mecha Future',
      preview: '/themes/mecha.jpg',
      colors: {
        primary: '#0ea5e9',
        secondary: '#06b6d4',
        accent: '#14b8a6'
      }
    }
  ];

  const notificationSettings = [
    {
      id: 'messages',
      label: 'Private Messages',
      description: 'Get notified when someone messages you',
      enabled: true
    },
    {
      id: 'mentions',
      label: 'Mentions',
      description: 'Get notified when someone mentions you',
      enabled: true
    },
    {
      id: 'follows',
      label: 'New Followers',
      description: 'Get notified when someone follows you',
      enabled: true
    }
  ];

  const privacySettings = [
    {
      id: 'profile',
      label: 'Public Profile',
      description: 'Allow others to view your profile',
      enabled: true
    },
    {
      id: 'gallery',
      label: 'Gallery Visibility',
      description: 'Make your gallery visible to everyone',
      enabled: true
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Settings Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <HologramEffect>
              <GlitchText
                text="Settings & Preferences"
                className="text-5xl mb-4"
              />
            </HologramEffect>
            <p className="text-xl text-cyan-400 font-futuristic">
              Customize your MyKugy AI experience
            </p>
          </motion.div>

          {/* Settings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/80 rounded-xl p-6 border border-cyan-500/30 sticky top-24">
                <nav className="space-y-2">
                  {['appearance', 'profile', 'notifications', 'privacy'].map((tab) => (
                    <motion.button
                      key={tab}
                      className={`w-full px-4 py-3 rounded-lg font-cyber text-left ${
                        activeTab === tab 
                          ? 'bg-cyan-500 text-white' 
                          : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(tab)}
                    >
                      <div className="flex items-center">
                        {tab === 'appearance' && '🎨'}
                        {tab === 'profile' && '👤'}
                        {tab === 'notifications' && '🔔'}
                        {tab === 'privacy' && '🔒'}
                        <span className="ml-3 capitalize">{tab}</span>
                      </div>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {activeTab === 'appearance' && (
                  <motion.div
                    key="appearance"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    {/* Theme Selection */}
                    <div className="bg-gray-900/80 rounded-xl p-6 border border-cyan-500/30">
                      <h3 className="text-xl font-cyber mb-6">Theme Selection</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {themePresets.map((theme) => (
                          <motion.div
                            key={theme.id}
                            className={`relative cursor-pointer ${
                              savedTheme === theme.id ? 'ring-2 ring-cyan-500' : ''
                            }`}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSavedTheme(theme.id)}
                          >
                            <div className="aspect-video rounded-lg overflow-hidden">
                              <img
                                src={theme.preview}
                                alt={theme.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h4 className="text-white font-cyber">{theme.name}</h4>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Color Customization */}
                    <div className="bg-gray-900/80 rounded-xl p-6 border border-cyan-500/30">
                      <h3 className="text-xl font-cyber mb-6">Color Customization</h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">
                            Primary Color
                          </label>
                          <input
                            type="color"
                            value={themeColor}
                            onChange={(e) => setThemeColor(e.target.value)}
                            className="w-full h-10 rounded-lg cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">
                            Font Size
                          </label>
                          <select
                            value={fontSize}
                            onChange={(e) => setFontSize(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white border border-gray-700 focus:border-cyan-500"
                          >
                            <option value="small">Small</option>
                            <option value="normal">Normal</option>
                            <option value="large">Large</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Animation Settings */}
                    <div className="bg-gray-900/80 rounded-xl p-6 border border-cyan-500/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-cyber">Animations</h3>
                          <p className="text-gray-400">Enable or disable UI animations</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={animations}
                            onChange={(e) => setAnimations(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer 
                                      peer-checked:after:translate-x-full peer-checked:after:border-white 
                                      after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                      after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all 
                                      peer-checked:bg-cyan-500"></div>
                        </label>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'notifications' && (
                  <motion.div
                    key="notifications"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-gray-900/80 rounded-xl p-6 border border-cyan-500/30"
                  >
                    <h3 className="text-xl font-cyber mb-6">Notification Preferences</h3>
                    <div className="space-y-6">
                      {notificationSettings.map((setting) => (
                        <div
                          key={setting.id}
                          className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
                        >
                          <div>
                            <h4 className="font-medium text-white">{setting.label}</h4>
                            <p className="text-sm text-gray-400">{setting.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={setting.enabled}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer 
                                        peer-checked:after:translate-x-full peer-checked:after:border-white 
                                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                        after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all 
                                        peer-checked:bg-cyan-500"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'privacy' && (
                  <motion.div
                    key="privacy"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-gray-900/80 rounded-xl p-6 border border-cyan-500/30"
                  >
                    <h3 className="text-xl font-cyber mb-6">Privacy Settings</h3>
                    <div className="space-y-6">
                      {privacySettings.map((setting) => (
                        <div
                          key={setting.id}
                          className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
                        >
                          <div>
                            <h4 className="font-medium text-white">{setting.label}</h4>
                            <p className="text-sm text-gray-400">{setting.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={setting.enabled}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer 
                                        peer-checked:after:translate-x-full peer-checked:after:border-white 
                                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                        after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all 
                                        peer-checked:bg-cyan-500"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Save Button */}
              <motion.div
                className="mt-8 flex justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <CyberButton
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => setLoading(false), 1000);
                  }}
                  glowColor="#06b6d4"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                  ) : (
                    'Save Changes'
                  )}
                </CyberButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
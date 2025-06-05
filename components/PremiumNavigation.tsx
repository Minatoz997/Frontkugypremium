import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export const PremiumNavigation = () => {
  const [activeItem, setActiveItem] = useState(null);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(10,10,30,0.8)']
  );

  const menuItems = [
    { id: 'chat', label: 'AI Chat', icon: '💬', href: '/chat' },
    { id: 'image', label: 'Create Image', icon: '🎨', href: '/create' },
    { id: 'novel', label: 'Write Novel', icon: '📚', href: '/novel' }
  ];

  return (
    <motion.nav
      style={{ backgroundColor: navBackground }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <motion.div
              className="text-2xl font-bold relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">MyKugy AI</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.id}>
                <motion.button
                  className={`relative px-4 py-2 text-sm font-medium ${
                    activeItem === item.id ? 'text-white' : 'text-gray-400'
                  }`}
                  onHoverStart={() => setActiveItem(item.id)}
                  onHoverEnd={() => setActiveItem(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  {activeItem === item.id && (
                    <motion.div
                      layoutId="menu-background"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </motion.button>
              </Link>
            ))}
          </div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <button className="flex items-center space-x-3 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <span className="text-white font-medium">Get Started</span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};
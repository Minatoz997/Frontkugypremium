import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface PremiumNavigationProps {
  items: NavigationItem[];
}

export const PremiumNavigation: React.FC<PremiumNavigationProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div
        className="bg-gray-900/80 backdrop-blur-sm rounded-r-2xl p-4 space-y-6"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {items.map((item) => (
          <Link href={item.href} key={item.id}>
            <motion.div
              className={`flex items-center space-x-4 cursor-pointer group ${
                activeItem === item.id ? 'text-white' : 'text-gray-400'
              }`}
              onHoverStart={() => setActiveItem(item.id)}
              onHoverEnd={() => setActiveItem(null)}
              whileHover={{ x: 5 }}
            >
              {item.icon && (
                <motion.div
                  className="w-8 h-8 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  {item.icon}
                </motion.div>
              )}
              <motion.span
                className="text-sm font-medium opacity-0 group-hover:opacity-100"
                initial={{ width: 0 }}
                animate={activeItem === item.id ? { width: 'auto' } : { width: 0 }}
              >
                {item.label}
              </motion.span>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

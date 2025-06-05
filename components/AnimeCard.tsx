import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimeCardProps {
  title: string;
  image: string;
  description: string;
  onClick?: () => void;
}

export const AnimeCard = ({ title, image, description, onClick }: AnimeCardProps) => {
  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.05, rotateY: 10 }}
      onClick={onClick}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-50 
                    group-hover:opacity-75 transition-opacity" />

      {/* Card content */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-xl border border-white/10">
        {/* Image */}
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 font-anime">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-400">{description}</p>

        {/* Hover effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        </div>
      </div>
    </motion.div>
  );
};

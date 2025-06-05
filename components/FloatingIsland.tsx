import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingIslandProps {
  children: React.ReactNode;
  floatHeight?: number;
  duration?: number;
}

export const FloatingIsland = ({
  children,
  floatHeight = 20,
  duration = 6,
}: FloatingIslandProps) =>
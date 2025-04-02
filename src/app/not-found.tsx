'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import Link from 'next/link';
import { siteConfig } from './config/siteConfig';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-3xl">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center py-20 px-4 text-center transition-colors duration-300">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-semibold mb-8 transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mb-12 max-w-lg mx-auto transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Return to home page"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 
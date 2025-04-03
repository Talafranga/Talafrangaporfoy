'use client';

import { useEffect, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { setRequestLocale } from 'next-intl/server';

export default function NotFound({ params }: { params: { locale: string } }) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const t = useTranslations('NotFound');
  
  // Enable static rendering
  if (params?.locale) {
    setRequestLocale(params.locale);
  }
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-2xl">Loading...</div>
    </div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg"
      >
        <h1 className="text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {t('title')}
        </h1>
        <h2 
          className="text-3xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('heading')}
        </h2>
        <p 
          className="text-lg mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('description')}
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {t('goHome')}
        </Link>
      </motion.div>

      <div 
        className="absolute inset-0 -z-10"
        style={{ 
          background: theme === 'dark' 
            ? 'radial-gradient(circle at center, #1a1a2e 0%, #121212 100%)' 
            : 'radial-gradient(circle at center, #f1f5f9 0%, #e2e8f0 100%)'
        }}
      ></div>
    </div>
  );
} 
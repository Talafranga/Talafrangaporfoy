'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import { useTheme } from '../../context/ThemeContext';
import { useTranslations } from 'next-intl';

interface PrivacyPageProps {
  locale: string;
}

export default function PrivacyPage({ locale }: PrivacyPageProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Privacy');
  const commonT = useTranslations('Common');
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-3xl">{commonT('loading')}</div>
      </div>
    );
  }
  
  // Define sections based on translations
  const sections = [
    {
      title: t('sections.informationCollect.title'),
      content: t('sections.informationCollect.content')
    },
    {
      title: t('sections.informationUse.title'),
      content: t('sections.informationUse.content')
    },
    {
      title: t('sections.informationSharing.title'),
      content: t('sections.informationSharing.content')
    },
    {
      title: t('sections.dataSecurity.title'),
      content: t('sections.dataSecurity.content')
    },
    {
      title: t('sections.yourRights.title'),
      content: t('sections.yourRights.content')
    },
    {
      title: t('sections.cookies.title'),
      content: t('sections.cookies.content')
    },
    {
      title: t('sections.policyChanges.title'),
      content: t('sections.policyChanges.content')
    },
    {
      title: t('sections.contactUs.title'),
      content: t('sections.contactUs.content')
    }
  ];

  return (
    <main className="min-h-screen transition-colors duration-300">
      <Header />

      {/* Privacy Section */}
      <section className="py-20 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <ShieldCheckIcon className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
              {t('lastUpdated')}
            </p>
          </motion.div>

          {/* Privacy Content */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="rounded-xl p-6 border hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover-glow"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
              >
                <h2 className="text-xl font-semibold mb-4 text-blue-400">
                  {section.title}
                </h2>
                <p className="leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, TagIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import { blogPosts } from '../../constants/blogPosts';
import { useTheme } from '../../context/ThemeContext';
import { useState, useEffect } from 'react';
import OptimizedImage from '../../components/OptimizedImage';
import { Link } from '@/i18n/navigation';

interface BlogTranslations {
  title: string;
  readMore: string;
  readTime: string;
}

interface TranslationsProps {
  blog: BlogTranslations;
  loading: string;
}

interface BlogPageProps {
  locale: string;
  translations: TranslationsProps;
}

export default function BlogPage({ locale, translations }: BlogPageProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const t = translations.blog;
  const loadingText = translations.loading;
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-3xl">{loadingText}</div>
      </div>
    );
  }
  
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Header />

      {/* Blog Section */}
      <section className="py-20 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 pb-2 leading-normal"
          >
            {t.title}
          </motion.h1>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              // Get localized blog post data if available
              const localizedTitle = post.localizations?.[locale]?.title || post.title;
              const localizedExcerpt = post.localizations?.[locale]?.excerpt || post.excerpt;
              const localizedDate = post.localizations?.[locale]?.date || post.date;
              const localizedCategory = post.localizations?.[locale]?.category || post.category;

              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="rounded-xl overflow-hidden border hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover-scale hover-glow"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                >
                  <Link href={`/blog/${post.id}`} className="block h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <OptimizedImage 
                        src={post.image} 
                        alt={localizedTitle}
                        width={600}
                        height={400}
                        objectFit="cover"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1 text-blue-400" />
                          <span className="transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                            {localizedDate}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1 text-blue-400" />
                          <span className="transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                            {post.readTime} {t.readTime}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <TagIcon className="w-4 h-4 mr-1 text-blue-400" />
                          <span className="transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                            {localizedCategory}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-xl font-semibold mb-3 hover:text-blue-400 transition-colors" 
                          style={{ color: 'var(--text-primary)' }}>
                        {localizedTitle}
                      </h2>
                      <p className="mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {localizedExcerpt}
                      </p>
                      <span 
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {t.readMore}
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
} 
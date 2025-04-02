'use client';

import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import { blogPosts } from '../../constants/blogPosts';
import type { BlogPost } from '../../constants/blogPosts';
import { useTheme } from '../../context/ThemeContext';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlogPostStructuredData } from '../../components/StructuredData';
import { siteConfig } from '../../config/siteConfig';
import OptimizedImage from '../../components/OptimizedImage';

export default function BlogPost() {
  const params = useParams();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const post = blogPosts.find(post => post.id === params.id) || {
    id: 'not-found',
    slug: 'not-found',
    title: 'Post not found',
    date: '',
    readTime: '0',
    category: '',
    image: '',
    coverImage: '',
    excerpt: '',
    content: 'The post you are looking for does not exist.'
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-3xl">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen transition-colors duration-300">
      <Header />
      
      {/* Structured Data for SEO */}
      {post.title !== 'Post not found' && (
        <BlogPostStructuredData
          headline={post.title}
          image={post.image}
          datePublished={post.date}
          authorName={siteConfig.author.name}
          description={post.excerpt || post.content.substring(0, 155)}
          url={`${siteConfig.url}/blog/${post.id}`}
          publisherName={siteConfig.author.name}
          publisherLogo={`${siteConfig.url}${siteConfig.images.logo}`}
        />
      )}

      {/* Blog Article Section */}
      <section className="py-20 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-2 leading-normal">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm mb-8 p-4 rounded-lg backdrop-blur-sm border transition-colors duration-300"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2 text-blue-400" />
                <span style={{ color: 'var(--text-primary)' }}>{post.date}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2 text-blue-400" />
                <span style={{ color: 'var(--text-primary)' }}>{post.readTime} min read</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-2 text-blue-400" />
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">{post.category}</span>
              </div>
            </div>

            <div className="mb-12 rounded-xl overflow-hidden border shadow-2xl"
              style={{ borderColor: 'rgba(59, 130, 246, 0.5)', boxShadow: '0 8px 16px -4px rgba(59, 130, 246, 0.2)' }}>
              <OptimizedImage 
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-full object-cover"
              />
            </div>

            <article className="prose prose-lg max-w-none transition-colors duration-300"
              style={{ color: 'var(--text-primary)' }}>
              <ReactMarkdown
                components={{
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-4 pb-2 pt-8 mt-8 border-b border-blue-500/30 text-blue-400" {...props} />,
                  ul: ({node, ...props}) => <ul className="space-y-2 my-6" {...props} />,
                  li: ({node, ...props}) => <li className="flex items-start"><span className="text-blue-400 mr-2">•</span><span style={{ color: 'var(--text-primary)' }} {...props} /></li>,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-500/10 rounded-r-lg italic text-blue-400" {...props} />,
                  code: ({node, className, ...props}: any) => 
                    className?.includes('language-') 
                      ? <code className="block p-4 rounded-lg font-mono text-sm overflow-x-auto" style={{ backgroundColor: theme === 'dark' ? 'rgba(31, 41, 55, 0.8)' : 'rgba(243, 244, 246, 0.8)' }} {...props} />
                      : <code className="px-1 py-0.5 rounded text-blue-400 font-mono text-sm" style={{ backgroundColor: theme === 'dark' ? 'rgba(31, 41, 55, 0.8)' : 'rgba(243, 244, 246, 0.8)' }} {...props} />,
                  pre: ({node, ...props}) => <pre className="mb-8" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }} {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
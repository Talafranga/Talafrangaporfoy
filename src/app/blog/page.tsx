'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import { blogPosts } from '../constants/blogPosts';

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <Header />

      {/* Blog Section */}
      <section className="py-20 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-2 leading-normal"
          >
            Blog
          </motion.h1>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <TagIcon className="w-4 h-4 mr-1" />
                      {post.category}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 
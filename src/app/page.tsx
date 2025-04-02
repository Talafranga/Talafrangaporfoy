'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  PaintBrushIcon,
  CalendarIcon,
  ClockIcon,
  TagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import { blogPosts } from './constants/blogPosts';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Son 2 blogu al
  const latestBlogPosts = blogPosts.slice(0, 2);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Hi, I'm Mustafa Talha Kaman
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 mb-12"
          >
            Software Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-6 justify-center"
          >
            <a href="/projects" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              My Projects
            </a>
            <a href="/contact" className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Contact Me
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center mt-8"
          >
            <a href="https://github.com/Talafranga" target="_blank" rel="noopener noreferrer" 
               className="p-3 text-gray-300 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
               title="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/talha-kaman/" target="_blank" rel="noopener noreferrer"
               className="p-3 text-gray-300 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
               title="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </a>
            <a href="https://leetcode.com/u/talafranga/" target="_blank" rel="noopener noreferrer"
               className="p-3 text-gray-300 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
               title="LeetCode">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-2 leading-normal"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-xl leading-relaxed text-center"
          >
            Hello, I'm Mustafa Talha Kaman, a 23-year-old Management Information Systems student at Istinye University. I work as a Frontend Developer, specializing in building modern, user-friendly websites with clean and responsive designs.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-2 leading-normal"
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'JavaScript', icon: CodeBracketIcon },
              { name: 'React', icon: CodeBracketIcon },
              { name: 'Vue.js', icon: CodeBracketIcon },
              { name: 'Next.js', icon: CommandLineIcon },
              { name: 'Nuxt.js', icon: CommandLineIcon },
              { name: 'TypeScript', icon: CpuChipIcon },
              { name: 'Tailwind CSS', icon: PaintBrushIcon }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800/50 p-8 rounded-xl text-center hover:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-blue-500/50"
              >
                <skill.icon className="w-16 h-16 mx-auto mb-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-2 leading-normal"
          >
            Latest Blog Posts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestBlogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
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
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="/blog" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              View All Posts
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

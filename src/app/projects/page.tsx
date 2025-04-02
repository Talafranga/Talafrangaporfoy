'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <Header />

      {/* Projects Section */}
      <section className="py-20 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-2 leading-normal"
          >
            My Projects
          </motion.h1>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="aspect-video bg-gray-700/50">
                <img src="/project1.jpg" alt="Portfolio Website" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-gray-300 mb-4">A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="aspect-video bg-gray-700/50">
                <img src="/project2.jpg" alt="E-commerce App" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce App</h3>
                <p className="text-gray-300 mb-4">A full-stack e-commerce application with user authentication and payment integration.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 
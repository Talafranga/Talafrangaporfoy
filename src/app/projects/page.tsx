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
            {/* Weather App Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="aspect-video bg-gray-700/50">
                <img src="/weather-app.jpg.png" alt="Weather Forecast App" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Weather Forecast App</h3>
                <p className="text-gray-300 mb-4">A real-time weather forecast application with unit toggle, language support, and dark/light mode.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://talafranga.github.io/talaWeather/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                  >
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href="https://github.com/Talafranga/talaWeather" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                  >
                    <CodeBracketIcon className="h-4 w-4 mr-2" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 
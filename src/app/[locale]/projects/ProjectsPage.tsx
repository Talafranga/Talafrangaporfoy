'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import { projects } from '../../constants/projects';
import { useTheme } from '../../context/ThemeContext';
import { useState, useEffect } from 'react';
import { ProjectStructuredData } from '../../components/StructuredData';
import { siteConfig } from '../../config/siteConfig';
import OptimizedImage from '../../components/OptimizedImage';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  featured: boolean;
  localizations?: {
    [locale: string]: {
      title: string;
      description: string;
    };
  };
}

interface ProjectsTranslations {
  title: string;
  viewLiveDemo: string;
  liveDemo: string;
  github: string;
}

interface TranslationsProps {
  projects: ProjectsTranslations;
  loading: string;
}

interface ProjectsPageProps {
  locale: string;
  translations: TranslationsProps;
}

export default function ProjectsPage({ locale, translations }: ProjectsPageProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const t = translations.projects;
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
      
      {/* Structured Data for SEO */}
      {projects.map((project) => (
        <ProjectStructuredData
          key={project.id}
          name={project.localizations?.[locale]?.title || project.title}
          description={project.localizations?.[locale]?.description || project.description}
          url={`${siteConfig.url}/${locale}/projects#${project.id}`}
          image={project.image}
          creator={siteConfig.author.name}
          keywords={project.technologies}
        />
      ))}

      {/* Projects Section */}
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
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden border backdrop-blur-sm transition-all duration-300 hover-scale hover-glow"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
              >
                <div className="h-52 overflow-hidden bg-gray-800 relative group">
                  <OptimizedImage 
                    src={project.image} 
                    alt={project.localizations?.[locale]?.title || project.title} 
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">{t.viewLiveDemo}</span>
                    </a>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}>
                    {project.localizations?.[locale]?.title || project.title}
                  </h3>
                  <p className="mb-4 transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}>
                    {project.localizations?.[locale]?.description || project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                      >
                        <span>{t.liveDemo}</span>
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-opacity-80"
                        style={{ 
                          backgroundColor: theme === 'light' ? 'rgba(17, 24, 39, 0.8)' : 'var(--bg-primary)', 
                          color: theme === 'light' ? '#ffffff' : 'var(--text-primary)',
                          transform: 'translateY(0)',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <CodeBracketIcon className="h-4 w-4 mr-2" />
                        <span>{t.github}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 
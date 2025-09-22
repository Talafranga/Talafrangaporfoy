'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  MapPinIcon,
  AtSymbolIcon,
  UserIcon,
  PhoneIcon,
  PaperAirplaneIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import emailjs from '@emailjs/browser';
import { useTheme } from '../../context/ThemeContext';
import { siteConfig } from '../../config/siteConfig';

interface ContactTranslations {
  title: string;
  subtitle: string;
  name: string;
  email: string;
  message: string;
  send: string;
  phone: string;
  subject: string;
  getInTouch: string;
  emailLabel: string;
  location: string;
  followMe: string;
  success: string;
  error: string;
  sending: string;
}

interface TranslationsProps {
  contact: ContactTranslations;
  loading: string;
}

interface ContactPageProps {
  locale: string;
  translations: TranslationsProps;
}

export default function ContactPage({ translations }: Omit<ContactPageProps, 'locale'>) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const t = translations.contact;
  const loadingText = translations.loading;
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      await emailjs.send(
        'service_brh883d', 
        'template_v3pfwfi', 
        { name, email, message, phone, subject },
        'BQVOzA4fyz4glcZWn'
      );
      
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
      setSubject('');
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Contact Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            {t.title}
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl p-8 backdrop-blur-sm border"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
            >
              <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>{t.getInTouch}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>{t.emailLabel}</h3>
                    <p className="transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{siteConfig.author.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>{t.location}</h3>
                    <p className="transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Istanbul, Turkey</p>
                  </div>
                </div>
                <div className="pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  <h3 className="font-medium mb-4" style={{ color: 'var(--text-primary)' }}>{t.followMe}</h3>
                  <div className="flex space-x-4">
                    <a href={siteConfig.author.github} target="_blank" rel="noopener noreferrer" 
                       className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                    </a>
                    <a href={siteConfig.author.linkedin} target="_blank" rel="noopener noreferrer"
                       className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                      </svg>
                    </a>
                    <a href="https://leetcode.com/u/talafranga/" target="_blank" rel="noopener noreferrer"
                       className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl p-8 backdrop-blur-sm border"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
            >
              {submitStatus === 'success' && (
                <div className="p-4 mb-6 rounded-lg bg-green-900/30 border border-green-500/30 text-green-200">
                  {t.success}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 mb-6 rounded-lg bg-red-900/30 border border-red-500/30 text-red-200">
                  {t.error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{t.name}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <UserIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      style={{ 
                        backgroundColor: theme === 'dark' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{t.email}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <AtSymbolIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      style={{ 
                        backgroundColor: theme === 'dark' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    {t.phone}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <PhoneIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      style={{ 
                        backgroundColor: theme === 'dark' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    {t.subject}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <TagIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      style={{ 
                        backgroundColor: theme === 'dark' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    style={{ 
                      backgroundColor: theme === 'dark' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>{t.sending}</span>
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      <span>{t.send}</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 
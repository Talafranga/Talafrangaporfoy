'use client';

import { useTheme } from '../context/ThemeContext';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const { theme } = useTheme();
  const t = useTranslations('Navigation');
  const commonT = useTranslations('Common');
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`mt-auto py-6 border-t ${theme === 'dark' ? 'bg-black/60 border-gray-800' : 'bg-white/60 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              © {currentYear} Talha Kaman. {commonT('allRightsReserved')}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
              {commonT('logoCredit')} <span className="text-pink-500">❤️</span>
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href={siteConfig.author.github} target="_blank" rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a href={siteConfig.author.linkedin} target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </a>
            <Link href="/privacy" className="text-sm hover:underline" style={{ color: 'var(--text-primary)' }}>
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 
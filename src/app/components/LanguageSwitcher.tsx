'use client';

import { useTransition } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const { theme } = useTheme();
  
  // Get locale with fallback to default
  const currentLocale = (params?.locale as string) || 'en';
  // Get target locale (opposite of current)
  const targetLocale = currentLocale === 'en' ? 'tr' : 'en';

  const switchLocale = () => {
    startTransition(() => {
      router.replace(pathname, { locale: targetLocale });
    });
  };

  // Decide button styles based on theme
  const buttonBackground = theme === 'light' ? 'bg-blue-100 hover:bg-blue-200' : 'bg-blue-500/10 hover:bg-blue-500/20';
  const buttonBorder = theme === 'light' ? 'border-blue-300' : 'border-blue-400/30';
  const buttonTextColor = theme === 'light' ? 'text-blue-600' : 'text-blue-400';

  return (
    <button
      disabled={isPending}
      onClick={switchLocale}
      className={`flex items-center p-2 rounded-full ${buttonBackground} transition-colors duration-300 border ${buttonBorder}`}
      aria-label="Change language"
    >
      <GlobeAltIcon className={`w-5 h-5 ${buttonTextColor}`} />
      <span className={`text-sm ml-1 uppercase font-medium ${buttonTextColor}`}>
        {currentLocale === 'en' ? 'EN → TR' : 'TR → EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher; 
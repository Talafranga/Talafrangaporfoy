'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import { navigationItems } from '../constants/navigation';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const baseHeaderClassName = `
    fixed w-full z-50 transition-all duration-300 
    ${isScrolled ? 'py-2 backdrop-blur-md' : 'py-4 backdrop-blur-sm'} 
    border-b border-gray-200/10
  `;

  if (!mounted) {
    return (
      <header className={`${baseHeaderClassName} bg-black/60`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Talha Kaman
          </a>
          <div className="w-10 h-10"></div>
        </div>
      </header>
    );
  }

  const headerClassName = `
    ${baseHeaderClassName}
    ${theme === 'dark' ? 'bg-black/60' : 'bg-white/60'}
  `;

  return (
    <header className={headerClassName}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Talha Kaman
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center transition-all duration-300 group ${
                pathname === item.href 
                  ? 'text-blue-400'
                  : 'hover:text-blue-400'
              }`}
              style={{ color: pathname === item.href ? undefined : 'var(--text-primary)' }}
            >
              <item.icon className="w-5 h-5 mr-1" />
              <span className="relative">
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </span>
            </a>
          ))}
          <div className="pl-4 flex items-center gap-3">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? 
              <XMarkIcon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} /> : 
              <Bars3Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="md:hidden overflow-hidden"
      >
        <nav className="flex flex-col px-4 pt-2 pb-4 space-y-3">
          {navigationItems.map((item) => {
            const active = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center p-2 rounded-lg transition-all duration-300 group ${
                  active 
                    ? 'text-blue-400 bg-blue-400/10' 
                    : 'hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                style={{ color: active ? undefined : 'var(--text-primary)' }}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className={`w-5 h-5 mr-2 ${active ? 'text-blue-400' : ''}`} />
                <span className="relative">
                  {item.label}
                  {!active && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  )}
                </span>
              </a>
            );
          })}
        </nav>
      </motion.div>
    </header>
  );
} 
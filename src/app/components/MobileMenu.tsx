'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { navigationItems } from '../constants/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="absolute top-0 right-0 bottom-0 w-72 bg-gradient-to-b from-gray-900 to-black shadow-2xl border-l border-white/10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-full"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Menu items */}
            <nav className="flex flex-col h-full pt-24 px-8 space-y-2">
              {navigationItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  whileHover={{ x: 4 }}
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10"
                >
                  <item.icon className="w-5 h-5 mr-4 text-blue-400" />
                  <span className="font-medium">{item.label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 
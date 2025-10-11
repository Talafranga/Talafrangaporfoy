'use client';

import { useEffect } from 'react';

export default function BrowserDetection() {
  useEffect(() => {
    // Client-side browser and connection detection
    try {
      // Browser detection
      const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
      const isSafari = navigator.userAgent.indexOf('Safari') > -1 && !isChrome;
      const browserClass = isChrome ? 'is-chrome' : isSafari ? 'is-safari' : 'is-other-browser';
      
      if (browserClass && !document.documentElement.classList.contains(browserClass)) {
        document.documentElement.classList.add(browserClass);
      }
      
      // Remove loading class
      const removeLoadingClass = () => {
        document.documentElement.classList.remove('js-loading');
      };
      
      // Add page loaded class after hydration
      const addPageLoadedClass = () => {
        if (!document.documentElement.classList.contains('page-loaded')) {
          document.documentElement.classList.add('page-loaded');
        }
      };
      
      // Remove loading class immediately
      if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', removeLoadingClass);
      } else {
        removeLoadingClass();
      }
      
      // Add page-loaded class after hydration with delay
      window.requestAnimationFrame(() => {
        setTimeout(addPageLoadedClass, 300);
      });
      
      // Connection speed detection (optional)
      if ('connection' in navigator) {
        try {
          interface NavigatorWithConnection extends Navigator {
            connection?: { effectiveType?: string };
            mozConnection?: { effectiveType?: string };
            webkitConnection?: { effectiveType?: string };
          }
          
          const nav = navigator as NavigatorWithConnection;
          const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
          if (connection && connection.effectiveType) {
            const connectionType = `connection-${connection.effectiveType}`;
            document.documentElement.classList.add(connectionType);
          }
        } catch (connectionError) {
          console.error('Connection detection error:', connectionError);
        }
      }
    } catch (error) {
      console.error('Browser detection error:', error);
    }
  }, []);
  
  return null;
} 
'use client';

import { useEffect } from 'react';

export default function BrowserDetection() {
  useEffect(() => {
    // Tarayıcı ve bağlantı hızı tespiti sadece istemci tarafında yapılıyor
    try {
      // Mevcut sınıfları koruduğumuzdan emin oluyoruz
      // BrowserDetection bileşeni mount olduktan sonra document.documentElement'e
      // sınıfları ekliyoruz ama hiçbir zaman className'i tamamen değiştirmiyoruz
      
      // Tarayıcı tespiti
      const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
      const isSafari = navigator.userAgent.indexOf('Safari') > -1 && !isChrome;
      const browserClass = isChrome ? 'is-chrome' : isSafari ? 'is-safari' : 'is-other-browser';
      
      if (browserClass && !document.documentElement.classList.contains(browserClass)) {
        document.documentElement.classList.add(browserClass);
      }
      
      // "js-loading" sınıfını kaldırmak için DOMContentLoaded olayını dinliyoruz
      const handleContentLoaded = () => {
        // İlk olarak js-loading sınıfını kaldır
        document.documentElement.classList.remove('js-loading');
        
        // Sonra page-loaded sınıfını ekle
        // Bunu setTimeout ile yaparak hidrasyon ve ilk render arasındaki uyumsuzluğu önlüyoruz
        setTimeout(() => {
          document.documentElement.classList.add('page-loaded');
        }, 0);
      };
      
      if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', handleContentLoaded);
      } else {
        handleContentLoaded();
      }
      
      // Bağlantı hızı tespiti - opsiyonel, destekleyen tarayıcılarda çalışır
      if ('connection' in navigator) {
        try {
          // @ts-ignore - TypeScript bu özelliği tanımıyor olabilir
          const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
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
  
  // Bileşen görsel olarak hiçbir şey render etmiyor
  return null;
} 
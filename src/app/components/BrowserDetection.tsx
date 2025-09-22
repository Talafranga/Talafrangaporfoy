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
      
      // "js-loading" sınıfını kaldırmak için bir fonksiyon
      const removeLoadingClass = () => {
        // İlk olarak js-loading sınıfını kaldır
        document.documentElement.classList.remove('js-loading');
      };
      
      // page-loaded sınıfını eklemek için ayrı bir fonksiyon
      const addPageLoadedClass = () => {
        // React hydration tamamlandıktan sonra page-loaded sınıfını ekle
        if (!document.documentElement.classList.contains('page-loaded')) {
          document.documentElement.classList.add('page-loaded');
        }
      };
      
      // İlk olarak yükleme sınıfını kaldır - bunu hemen yapabiliriz
      if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', removeLoadingClass);
      } else {
        removeLoadingClass();
      }
      
      // page-loaded sınıfını daha sonra ekle, hydration tamamlandıktan sonra
      // requestAnimationFrame kullanarak tarayıcının render döngüsünü bekleriz
      // ve setTimeout ile daha da ertelemiş oluruz
      window.requestAnimationFrame(() => {
        setTimeout(addPageLoadedClass, 300); // 300ms gecikmeyle ekle
      });
      
      // Bağlantı hızı tespiti - opsiyonel, destekleyen tarayıcılarda çalışır
      if ('connection' in navigator) {
        try {
          const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
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
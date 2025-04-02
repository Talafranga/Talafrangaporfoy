/**
 * Web Vitals Optimization Script
 * This script is loaded after the page content to optimize Core Web Vitals
 */

// Analytics callback for sending Core Web Vitals metrics
const sendToAnalytics = ({ name, delta, id, value }) => {
  // Here you would normally send the data to your analytics service
  // For now, we'll just log it to the console
  console.log(`Web Vitals: ${name}`, {
    name,
    delta: Math.round(delta),
    id,
    value: Math.round(value),
  });
  
  // We could send to Google Analytics 4 like this:
  // if (window.gtag) {
  //   window.gtag('event', name, {
  //     value: delta,
  //     metric_id: id,
  //     metric_value: value,
  //     metric_delta: delta,
  //   });
  // }
}

/**
 * Optimizes Core Web Vitals by:
 * 1. Preloading critical resources
 * 2. Setting up lazy loading for images
 * 3. Managing font loading
 */
export function optimizeWebVitals() {
  // Wait for page to be fully loaded
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      // Preconnect to required origins as soon as possible
      const origins = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];
      
      origins.forEach(origin => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = origin;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
      
      // Optimize LCP image loading
      const heroImages = document.querySelectorAll('.hero-image');
      heroImages.forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.fetchPriority = 'high';
          if (img.loading !== 'eager') {
            img.loading = 'eager';
          }
        }
      });
      
      // Defer non-critical resources
      setTimeout(() => {
        // Lazy load below-the-fold images
        const lazyImages = document.querySelectorAll('img:not(.hero-image)');
        if ('loading' in HTMLImageElement.prototype) {
          // Browser supports native lazy loading
          lazyImages.forEach(img => {
            if (img instanceof HTMLImageElement && img.loading !== 'eager') {
              img.loading = 'lazy';
            }
          });
        }
        
        // Preload next likely pages
        const nextPages = ['/projects', '/blog', '/contact'];
        nextPages.forEach(url => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = url;
          document.head.appendChild(link);
        });
      }, 1000);
      
      // Optimize animations for devices that prefer reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduce-motion');
      }
      
      // Add loading complete class to enable animations
      document.documentElement.classList.add('page-loaded');
    });
    
    // Monitor performance
    if ('performance' in window && 'getEntriesByType' in performance) {
      window.addEventListener('load', () => {
        // Report navigation timing metrics
        const navigationEntries = performance.getEntriesByType('navigation');
        if (navigationEntries.length > 0) {
          const navigationTiming = navigationEntries[0];
          console.log('Navigation timing:', {
            dns: Math.round(navigationTiming.domainLookupEnd - navigationTiming.domainLookupStart),
            tcp: Math.round(navigationTiming.connectEnd - navigationTiming.connectStart),
            request: Math.round(navigationTiming.responseStart - navigationTiming.requestStart),
            response: Math.round(navigationTiming.responseEnd - navigationTiming.responseStart),
            dom: Math.round(navigationTiming.domComplete - navigationTiming.domInteractive),
            load: Math.round(navigationTiming.loadEventEnd - navigationTiming.loadEventStart),
            total: Math.round(navigationTiming.loadEventEnd),
          });
        }
      });
    }
  }
} 
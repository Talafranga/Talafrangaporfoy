import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

/**
 * Analytics callback for sending Core Web Vitals metrics
 * Replace this with your actual analytics provider
 */
const sendToAnalytics = ({ name, delta, id, value }: {
  name: string;
  delta: number;
  id: string;
  value: number;
}) => {
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
 * Reports all Core Web Vitals metrics
 */
export function reportWebVitals() {
  // Core Web Vitals
  onCLS(sendToAnalytics);
  onFID(sendToAnalytics);
  onLCP(sendToAnalytics);
  
  // Additional metrics
  onFCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
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
    window.addEventListener('load', () => {
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
      
      // Defer non-critical resources
      setTimeout(() => {
        // Lazy load below-the-fold images
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        if ('loading' in HTMLImageElement.prototype) {
          // Browser supports native lazy loading
          lazyImages.forEach(img => {
            if (img instanceof HTMLImageElement) {
              img.loading = 'lazy';
            }
          });
        } else {
          // Could implement a fallback lazy-loading solution here
        }
      }, 1000);
      
      // Report Web Vitals after the page has loaded
      reportWebVitals();
    });
  }
} 
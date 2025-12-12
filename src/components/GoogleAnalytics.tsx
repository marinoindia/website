// Google Analytics 4 (GA4) Integration
// Add your Measurement ID to track page views and events
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GoogleAnalytics = () => {
  const location = useLocation();
  
  // Get Google Analytics Measurement ID from environment variable or use default
  // Format: G-XXXXXXXXXX
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-VQ7QD95NVC';

  // Initialize Google Analytics
  // Note: The Google tag is already loaded in index.html, so we just need to track page views
  useEffect(() => {
    // Wait for gtag to be available (loaded from index.html)
    if (!window.gtag) {
      // If gtag is not available yet, wait a bit
      const checkGtag = setInterval(() => {
        if (window.gtag) {
          clearInterval(checkGtag);
          // Track initial page view
          window.gtag('config', measurementId, {
            page_path: location.pathname + location.search,
            page_title: document.title,
          });
          if (import.meta.env.DEV) {
            console.log(`📊 Google Analytics tracking initialized with ID: ${measurementId}`);
          }
        }
      }, 100);
      
      // Clear after 5 seconds max
      setTimeout(() => clearInterval(checkGtag), 5000);
      return () => clearInterval(checkGtag);
    }
  }, [measurementId]);

  // Track page views on route changes
  useEffect(() => {
    if (!measurementId || !window.gtag) {
      return;
    }

    // Track page view
    window.gtag('config', measurementId, {
      page_path: location.pathname + location.search,
      page_title: document.title,
    });

    if (import.meta.env.DEV) {
      console.log('📈 Google Analytics: Page view tracked', {
        path: location.pathname + location.search,
        title: document.title,
      });
    }
  }, [location.pathname, location.search, measurementId]);

  return null; // This component doesn't render anything
};


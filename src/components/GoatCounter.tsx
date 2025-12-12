// GoatCounter Analytics - Free, open-source, privacy-focused analytics
// Works with static sites like GitHub Pages
// Dashboard: https://marinoindia.goatcounter.com/
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    goatcounter?: {
      count: (options?: { path?: string; title?: string; referrer?: string; event?: boolean }) => void;
    };
  }
}

export const GoatCounter = () => {
  const location = useLocation();
  const scriptLoadedRef = useRef(false);
  const trackingInitializedRef = useRef(false);
  
  // GoatCounter code - set via environment variable or use default
  const goatCounterCode = import.meta.env.VITE_GOATCOUNTER_CODE || 'marinoindia';

  // Initialize GoatCounter script on mount
  useEffect(() => {
    if (!goatCounterCode || scriptLoadedRef.current) {
      return;
    }

    // Check if script is already loaded
    if (window.goatcounter) {
      scriptLoadedRef.current = true;
      return;
    }

    // Check if script tag already exists (check for both old and new format)
    const existingScript = document.querySelector(`script[src*="gc.zgo.at/count.js"], script[src*="${goatCounterCode}.goatcounter.com"]`);
    if (existingScript) {
      scriptLoadedRef.current = true;
      // Wait for goatcounter to be available
      const checkInterval = setInterval(() => {
        if (window.goatcounter) {
          clearInterval(checkInterval);
        }
      }, 50);
      return () => clearInterval(checkInterval);
    }

    // Load GoatCounter script with correct URL format
    // GoatCounter uses gc.zgo.at for the script and data-goatcounter attribute for the counter endpoint
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://gc.zgo.at/count.js';
    // Set the data attribute to specify which counter to use
    script.setAttribute('data-goatcounter', `https://${goatCounterCode}.goatcounter.com/count`);
    
    script.onload = () => {
      scriptLoadedRef.current = true;
      if (import.meta.env.DEV) {
        console.log('✅ GoatCounter script loaded');
      }
      // Wait for goatcounter object to be available
      const checkInterval = setInterval(() => {
        if (window.goatcounter) {
          clearInterval(checkInterval);
          if (import.meta.env.DEV) {
            console.log('✅ GoatCounter object available');
          }
        }
      }, 50);
      // Clear after 5 seconds max
      setTimeout(() => clearInterval(checkInterval), 5000);
    };
    script.onerror = (error) => {
      const errorDetails = {
        url: script.src,
        error,
        hint: 'This might be blocked by an ad blocker or browser extension. Try disabling ad blockers or check the Network tab for details.'
      };
      console.warn('❌ Failed to load GoatCounter script', errorDetails);
      
      // In development, provide more helpful debugging info
      if (import.meta.env.DEV) {
        console.group('🔍 GoatCounter Debugging Info');
        console.log('Script URL:', script.src);
        console.log('Counter endpoint:', `https://${goatCounterCode}.goatcounter.com/count`);
        console.log('Check the Network tab for the actual error');
        console.log('Common causes:');
        console.log('1. Ad blockers (uBlock Origin, AdBlock, etc.)');
        console.log('2. Privacy extensions (Privacy Badger, Ghostery)');
        console.log('3. Browser security settings');
        console.log('4. CORS issues (unlikely for GoatCounter)');
        console.log('\n💡 Tip: Try opening the script URL directly in your browser:');
        console.log(script.src);
        console.groupEnd();
      }
    };
    document.head.appendChild(script);
    if (import.meta.env.DEV) {
      console.log(`📊 Loading GoatCounter script from: https://gc.zgo.at/count.js`);
      console.log(`📊 Counter endpoint: https://${goatCounterCode}.goatcounter.com/count`);
    }
  }, [goatCounterCode]);

  // Track page views on route changes and initial load
  useEffect(() => {
    if (!goatCounterCode) {
      return;
    }

    // Function to track page view
    const trackPageView = () => {
      if (window.goatcounter && typeof window.goatcounter.count === 'function') {
        try {
          const path = location.pathname + location.search;
          window.goatcounter.count({
            path: path,
            title: document.title,
            referrer: document.referrer || undefined,
          });
          if (import.meta.env.DEV) {
            console.log('📈 GoatCounter: Page view tracked', { path, title: document.title });
          }
        } catch (error) {
          console.warn('❌ GoatCounter tracking error:', error);
        }
      }
    };

    // If goatcounter is already available, track immediately
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      trackPageView();
      return;
    }

    // Otherwise, wait for it to become available
    const maxAttempts = 20; // 2 seconds max (20 * 100ms)
    let attempts = 0;
    
    const checkAndTrack = setInterval(() => {
      attempts++;
      
      if (window.goatcounter && typeof window.goatcounter.count === 'function') {
        clearInterval(checkAndTrack);
        trackPageView();
      } else if (attempts >= maxAttempts) {
        clearInterval(checkAndTrack);
        console.warn('⚠️ GoatCounter not available after waiting 2 seconds');
      }
    }, 100);

    return () => clearInterval(checkAndTrack);
  }, [location.pathname, location.search, goatCounterCode]);

  return null; // This component doesn't render anything
};


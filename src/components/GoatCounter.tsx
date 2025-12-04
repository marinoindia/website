// GoatCounter Analytics - Free, open-source, privacy-focused analytics
// Works with static sites like GitHub Pages
// Dashboard: https://marinoindia.goatcounter.com/
import { useEffect, useState } from 'react';
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
  const [scriptLoaded, setScriptLoaded] = useState(false);
  // GoatCounter code - set via environment variable or use default
  const goatCounterCode = import.meta.env.VITE_GOATCOUNTER_CODE || 'marinoindia';

  // Initialize GoatCounter script on mount
  useEffect(() => {
    if (!goatCounterCode) {
      return;
    }

    // Check if script is already loaded
    if (window.goatcounter) {
      setScriptLoaded(true);
      return;
    }

    // Check if script tag already exists
    const existingScript = document.querySelector(`script[src*="${goatCounterCode}.goatcounter.com"]`);
    if (existingScript) {
      // Wait for script to load
      existingScript.addEventListener('load', () => setScriptLoaded(true));
      if (window.goatcounter) {
        setScriptLoaded(true);
      }
      return;
    }

    // Load GoatCounter script
    const script = document.createElement('script');
    script.async = true;
    script.src = `//${goatCounterCode}.goatcounter.com/count.js`;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => {
      console.warn('Failed to load GoatCounter script');
    };
    document.head.appendChild(script);
  }, [goatCounterCode]);

  // Track page views on route changes and initial load
  useEffect(() => {
    if (!goatCounterCode) {
      return;
    }

    // Wait for script to be available
    const trackPageView = () => {
      if (window.goatcounter) {
        window.goatcounter.count({
          path: location.pathname + location.search,
          title: document.title,
        });
      }
    };

    // If script is loaded, track immediately
    if (scriptLoaded && window.goatcounter) {
      trackPageView();
    } else if (scriptLoaded) {
      // Script loaded but goatcounter not ready yet, wait a bit
      const timeout = setTimeout(() => {
        if (window.goatcounter) {
          trackPageView();
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [location, goatCounterCode, scriptLoaded]);

  return null; // This component doesn't render anything
};


// Analytics component - automatically tracks page views
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on mount and route change
    // Use fire-and-forget to prevent blocking the UI
    analytics.trackPageView(location.pathname).catch(() => {
      // Silently fail - analytics should never break the site
    });
  }, [location.pathname]);

  return null; // This component doesn't render anything
};


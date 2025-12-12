// Free Visitor Counter from freevisitorcounters.com
// This component loads the visitor counter scripts
import { useEffect, useRef } from 'react';

export const VisitorCounter = () => {
  const scriptsLoadedRef = useRef(false);

  useEffect(() => {
    // Only load scripts once
    if (scriptsLoadedRef.current) {
      return;
    }

    // Check if scripts are already loaded
    const existingAuthScript = document.querySelector('script[src*="freevisitorcounters.com/auth.php"]');
    const existingCounterScript = document.querySelector('script[src*="freevisitorcounters.com/en/home/counter"]');
    
    if (existingAuthScript && existingCounterScript) {
      scriptsLoadedRef.current = true;
      return;
    }

    // Load authentication script
    const authScript = document.createElement('script');
    authScript.type = 'text/javascript';
    authScript.src = 'https://www.freevisitorcounters.com/auth.php?id=8414937dcae23e8707ad97d7ce331ed86f9d176e';
    authScript.async = true;
    authScript.onload = () => {
      if (import.meta.env.DEV) {
        console.log('✅ Free Visitor Counter auth script loaded');
      }
    };
    authScript.onerror = () => {
      console.warn('❌ Failed to load Free Visitor Counter auth script');
    };
    document.head.appendChild(authScript);

    // Load counter script
    const counterScript = document.createElement('script');
    counterScript.type = 'text/javascript';
    counterScript.src = 'https://www.freevisitorcounters.com/en/home/counter/1458911/t/6';
    counterScript.async = true;
    counterScript.onload = () => {
      scriptsLoadedRef.current = true;
      if (import.meta.env.DEV) {
        console.log('✅ Free Visitor Counter script loaded');
      }
    };
    counterScript.onerror = () => {
      console.warn('❌ Failed to load Free Visitor Counter script');
    };
    document.head.appendChild(counterScript);

    if (import.meta.env.DEV) {
      console.log('📊 Loading Free Visitor Counter scripts');
    }
  }, []);

  return null; // This component doesn't render anything
};


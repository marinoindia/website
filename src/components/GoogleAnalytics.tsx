import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { contactActionForHref, trackContactAction, trackPageView } from '@/lib/ga4';

export const GoogleAnalytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Allow Helmet's animation-frame update to set the new route's title.
    let timer: ReturnType<typeof setTimeout> | undefined;
    const frame = requestAnimationFrame(() => {
      timer = setTimeout(trackPageView, 0);
    });
    return () => {
      cancelAnimationFrame(frame);
      if (timer !== undefined) clearTimeout(timer);
    };
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.type === 'auxclick' && event.button !== 1) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[href]');
      if (!link) return;
      const action = contactActionForHref(link.getAttribute('href') || '');
      if (action) trackContactAction(action);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('auxclick', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('auxclick', onClick);
    };
  }, []);

  return null;
};

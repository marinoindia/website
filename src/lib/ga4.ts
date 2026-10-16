// Contact actions indicate intent, not a delivered message or a confirmed lead.
export type ContactAction = 'whatsapp_click' | 'phone_click' | 'email_click' | 'enquiry_handoff';
export type ContactSource = 'link' | 'enquiry_form' | 'checkout';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function isProductionAnalyticsHost(): boolean {
  return ['marinoindia.co.in', 'www.marinoindia.co.in'].includes(window.location.hostname);
}

let lastPageLocation: string | undefined;

export function trackPageView(): void {
  if (!isProductionAnalyticsHost() || !window.gtag) return;
  const pageLocation = window.location.origin + window.location.pathname;
  if (pageLocation === lastPageLocation) return;
  const referrer = lastPageLocation || document.referrer.split(/[?#]/)[0];
  lastPageLocation = pageLocation;
  window.gtag('event', 'page_view', {
    send_to: 'G-VQ7QD95NVC',
    page_location: pageLocation,
    page_path: window.location.pathname,
    page_title: document.title,
    page_referrer: referrer,
  });
}

export function trackContactAction(event: ContactAction, source: ContactSource = 'link'): void {
  if (!isProductionAnalyticsHost() || !window.gtag) return;
  window.gtag('event', event, {
    send_to: 'G-VQ7QD95NVC',
    contact_source: source,
    page_location: window.location.origin + window.location.pathname,
    page_path: window.location.pathname,
    // Omit link URLs, query strings, form fields, numbers and message text.
  });
}

export function contactActionForHref(href: string): ContactAction | undefined {
  if (/^tel:/i.test(href)) return 'phone_click';
  if (/^mailto:/i.test(href)) return 'email_click';
  try {
    const url = new URL(href);
    if (url.protocol === 'https:' && ['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname)) {
      return 'whatsapp_click';
    }
  } catch {
    // Relative and malformed links are not contact actions.
  }
}

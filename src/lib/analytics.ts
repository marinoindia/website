// Analytics tracking utility
// Collects visitor data including location, page views, and other statistics

export interface AnalyticsEvent {
  timestamp: string;
  path: string;
  referrer: string;
  userAgent: string;
  language: string;
  screenWidth: number;
  screenHeight: number;
  timezone: string;
  country?: string;
  region?: string;
  city?: string;
  ip?: string;
  sessionId: string;
  visitId: string;
}

export interface AnalyticsData {
  events: AnalyticsEvent[];
  totalVisits: number;
  uniqueVisitors: number;
  countries: Record<string, number>;
  regions: Record<string, number>;
  cities: Record<string, number>;
  pages: Record<string, number>;
  referrers: Record<string, number>;
  devices: Record<string, number>;
  browsers: Record<string, number>;
}

class Analytics {
  private sessionId: string;
  private visitId: string;
  private apiEndpoint: string;

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.visitId = this.generateId();
    // Use environment variable or default to a serverless function endpoint
    this.apiEndpoint = import.meta.env.VITE_ANALYTICS_API || '/api/analytics';
  }

  private getOrCreateSessionId(): string {
    const stored = sessionStorage.getItem('analytics_session_id');
    if (stored) return stored;
    
    const newId = this.generateId();
    sessionStorage.setItem('analytics_session_id', newId);
    return newId;
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private async getLocationData(): Promise<{ country?: string; region?: string; city?: string; ip?: string }> {
    try {
      // Use a free IP geolocation service
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      return {
        country: data.country_name || data.country,
        region: data.region || data.region_code,
        city: data.city,
        ip: data.ip,
      };
    } catch (error) {
      console.warn('Failed to get location data:', error);
      return {};
    }
  }

  private getDeviceInfo(): { device: string; browser: string } {
    const ua = navigator.userAgent;
    
    // Detect device
    let device = 'Desktop';
    if (/tablet|ipad|playbook|silk/i.test(ua)) {
      device = 'Tablet';
    } else if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(ua)) {
      device = 'Mobile';
    }
    
    // Detect browser
    let browser = 'Unknown';
    if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
    else if (ua.includes('Edg')) browser = 'Edge';
    else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';
    
    return { device, browser };
  }

  async trackPageView(path: string = window.location.pathname): Promise<void> {
    try {
      const locationData = await this.getLocationData();
      const { device, browser } = this.getDeviceInfo();
      
      const event: AnalyticsEvent = {
        timestamp: new Date().toISOString(),
        path,
        referrer: document.referrer || 'direct',
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        country: locationData.country,
        region: locationData.region,
        city: locationData.city,
        ip: locationData.ip,
        sessionId: this.sessionId,
        visitId: this.visitId,
      };

      // Store locally first (for offline support)
      this.storeLocally(event);

      // Send to server
      await this.sendToServer(event);
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }

  private storeLocally(event: AnalyticsEvent): void {
    try {
      const stored = localStorage.getItem('analytics_queue');
      const queue: AnalyticsEvent[] = stored ? JSON.parse(stored) : [];
      queue.push(event);
      
      // Keep only last 100 events locally
      if (queue.length > 100) {
        queue.shift();
      }
      
      localStorage.setItem('analytics_queue', JSON.stringify(queue));
    } catch (error) {
      console.warn('Failed to store analytics locally:', error);
    }
  }

  private async sendToServer(event: AnalyticsEvent): Promise<void> {
    try {
      // For GitHub Pages, we'll use a serverless function
      // This will be set up separately (Vercel, Netlify, or GitHub Actions)
      // Use a timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
    } catch (error) {
      // If server is unavailable, data is stored locally and will sync later
      // Silently fail - don't log to console to avoid cluttering
      // Analytics failures should never break the site
    }
  }

  // Get queued events from local storage
  getQueuedEvents(): AnalyticsEvent[] {
    try {
      const stored = localStorage.getItem('analytics_queue');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  // Clear queued events after successful sync
  clearQueue(): void {
    localStorage.removeItem('analytics_queue');
  }
}

export const analytics = new Analytics();


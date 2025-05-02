
export interface PageView {
  page_path: string;
  referrer: string | null;
  user_agent: string | null;
  session_id: string;
  timestamp: string;
}

export interface AnalyticsEvent {
  event_name: string;
  event_data: Record<string, any>;
  page_path: string;
  session_id: string;
  timestamp: string;
}

export interface UseAnalyticsReturn {
  trackPageView: (path: string) => Promise<void>;
  trackEvent: (name: string, data?: Record<string, any>) => Promise<void>;
  isEnabled: boolean;
}

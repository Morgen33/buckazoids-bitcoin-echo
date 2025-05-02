
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { analyticsConfig } from '@/config/analytics-config';
import { PageView, AnalyticsEvent, UseAnalyticsReturn } from '@/types/analytics';

// We'll need to add the uuid package
// <lov-add-dependency>uuid@latest</lov-add-dependency>
// <lov-add-dependency>@types/uuid@latest</lov-add-dependency>

// Session management helper functions
const getOrCreateSessionId = (): string => {
  // Try to get existing session ID and timestamp
  const storedSession = localStorage.getItem('analytics_session');
  const now = new Date();
  
  if (storedSession) {
    try {
      const { id, timestamp } = JSON.parse(storedSession);
      const sessionTime = new Date(timestamp);
      
      // Check if session is still valid (within the configured duration)
      const minutesDiff = (now.getTime() - sessionTime.getTime()) / (1000 * 60);
      
      if (minutesDiff < analyticsConfig.sessionDurationMinutes) {
        // Session is still valid, update timestamp and return existing ID
        localStorage.setItem('analytics_session', JSON.stringify({
          id,
          timestamp: now.toISOString()
        }));
        return id;
      }
    } catch (e) {
      console.error('Error parsing analytics session', e);
      // Continue to create new session if there's an error
    }
  }
  
  // Create new session
  const newSessionId = uuidv4();
  localStorage.setItem('analytics_session', JSON.stringify({
    id: newSessionId,
    timestamp: now.toISOString()
  }));
  
  return newSessionId;
};

// Anonymous supabase client function
// Note: This is a simplified version - in reality we'd connect to Supabase here
const trackToSupabase = async (table: 'page_views' | 'events', data: PageView | AnalyticsEvent): Promise<void> => {
  // Since we're using the supabase integration, we would use supabase.from(table).insert(data)
  // For now, we'll just log the tracking data
  console.log(`[Analytics] Tracking to ${table}:`, data);
  
  try {
    // Here we would send the data to Supabase
    // const { error } = await supabase.from(table).insert(data);
    // if (error) throw error;
    
    // For now we're just simulating the insertion with a console log
    // Once the Supabase integration is connected, replace this with the actual Supabase call
  } catch (error) {
    console.error(`Error tracking ${table}:`, error);
  }
};

export const useAnalytics = (): UseAnalyticsReturn => {
  const location = useLocation();
  const [sessionId, setSessionId] = useState<string>('');
  const [isEnabled] = useState<boolean>(analyticsConfig.enabled);

  // Initialize session ID on component mount
  useEffect(() => {
    if (isEnabled) {
      const id = getOrCreateSessionId();
      setSessionId(id);
    }
  }, [isEnabled]);

  // Track page views automatically when route changes
  useEffect(() => {
    if (isEnabled && sessionId && analyticsConfig.autoTrackEvents.pageViews) {
      trackPageView(location.pathname).catch(console.error);
    }
  }, [location.pathname, sessionId, isEnabled]);

  // Function to track page views
  const trackPageView = async (path: string): Promise<void> => {
    if (!isEnabled || !sessionId) return;

    const pageView: PageView = {
      page_path: path,
      referrer: document.referrer || null,
      user_agent: analyticsConfig.trackUserAgent ? navigator.userAgent : null,
      session_id: sessionId,
      timestamp: new Date().toISOString(),
    };

    await trackToSupabase('page_views', pageView);
  };

  // Function to track custom events
  const trackEvent = async (name: string, data: Record<string, any> = {}): Promise<void> => {
    if (!isEnabled || !sessionId) return;

    const event: AnalyticsEvent = {
      event_name: name,
      event_data: data,
      page_path: location.pathname,
      session_id: sessionId,
      timestamp: new Date().toISOString(),
    };

    await trackToSupabase('events', event);
  };

  return {
    trackPageView,
    trackEvent,
    isEnabled,
  };
};

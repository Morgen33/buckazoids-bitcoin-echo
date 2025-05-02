
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { analyticsConfig } from '@/config/analytics-config';
import { PageView, AnalyticsEvent, UseAnalyticsReturn } from '@/types/analytics';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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

export const useAnalytics = (): UseAnalyticsReturn => {
  const location = useLocation();
  const [sessionId, setSessionId] = useState<string>('');
  const [isEnabled] = useState<boolean>(analyticsConfig.enabled);
  const { toast } = useToast();

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

    try {
      const { error } = await supabase.from('page_views').insert(pageView);
      
      if (error) {
        console.error('Error tracking page view:', error);
        if (analyticsConfig.showErrors) {
          toast({
            title: "Analytics Error",
            description: "Failed to track page view",
            variant: "destructive",
          });
        }
      } else {
        console.log(`[Analytics] Page view tracked: ${path}`);
      }
    } catch (err) {
      console.error('Error tracking page view:', err);
    }
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

    try {
      const { error } = await supabase.from('events').insert(event);
      
      if (error) {
        console.error(`Error tracking event ${name}:`, error);
        if (analyticsConfig.showErrors) {
          toast({
            title: "Analytics Error",
            description: `Failed to track event: ${name}`,
            variant: "destructive",
          });
        }
      } else {
        console.log(`[Analytics] Event tracked: ${name}`, data);
      }
    } catch (err) {
      console.error(`Error tracking event ${name}:`, err);
    }
  };

  return {
    trackPageView,
    trackEvent,
    isEnabled,
  };
};

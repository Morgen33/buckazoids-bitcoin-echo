
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { analyticsConfig } from '@/config/analytics-config';
import { PageView, AnalyticsEvent, UseAnalyticsReturn } from '@/types/analytics';
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
  const [isEnabled] = useState<boolean>(false); // Force disabled
  const { toast } = useToast();

  // Initialize session ID on component mount
  useEffect(() => {
    if (isEnabled) {
      const id = getOrCreateSessionId();
      setSessionId(id);
    }
  }, [isEnabled]);

  // Function to track page views (now just logs to console)
  const trackPageView = async (path: string): Promise<void> => {
    if (!isEnabled) return;
    console.log(`[Analytics Disabled] Would track page view: ${path}`);
    return;
  };

  // Function to track custom events (now just logs to console)
  const trackEvent = async (name: string, data: Record<string, any> = {}): Promise<void> => {
    if (!isEnabled) return;
    console.log(`[Analytics Disabled] Would track event: ${name}`, data);
    return;
  };

  return {
    trackPageView,
    trackEvent,
    isEnabled,
  };
};

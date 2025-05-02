
import React, { createContext, useContext, ReactNode } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { UseAnalyticsReturn } from '@/types/analytics';

// Create context for analytics
const AnalyticsContext = createContext<UseAnalyticsReturn | undefined>(undefined);

// Provider component for analytics
export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const analytics = useAnalytics();
  
  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Hook to use analytics in components
export const useAnalyticsContext = (): UseAnalyticsReturn => {
  const context = useContext(AnalyticsContext);
  
  if (context === undefined) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  
  return context;
};


// Configuration for analytics
export const analyticsConfig = {
  // Whether analytics is enabled
  enabled: true,
  
  // Session duration in minutes (default: 30 minutes)
  sessionDurationMinutes: 30,
  
  // Whether to anonymize IP addresses
  anonymizeIp: true,
  
  // Whether to track user agent information
  trackUserAgent: true,
  
  // Events to automatically track
  autoTrackEvents: {
    pageViews: true,
    clicks: false, // Set to true to track all clicks
    formSubmissions: false, // Set to true to track all form submissions
  }
};

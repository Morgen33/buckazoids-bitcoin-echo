
import { useAnalyticsContext } from "@/components/analytics/AnalyticsProvider";

type TrackEventFunction = (name: string, data?: Record<string, any>) => Promise<void>;

/**
 * Hook to easily track events from any component
 */
export const useTrackEvent = (): TrackEventFunction => {
  const { trackEvent } = useAnalyticsContext();
  return trackEvent;
};

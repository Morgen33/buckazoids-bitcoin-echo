
import { useAnalyticsContext } from "./AnalyticsProvider";
import { Button } from "@/components/ui/button";

export const AnalyticsDemo = () => {
  const { trackEvent } = useAnalyticsContext();
  
  const handleCustomEvent = () => {
    trackEvent("button_clicked", {
      buttonId: "demo",
      timestamp: new Date().toISOString()
    });
  };
  
  return (
    <div className="mt-4">
      <Button 
        onClick={handleCustomEvent}
        variant="outline"
        className="bg-buckazoids-orange text-white hover:bg-buckazoids-yellow"
      >
        Track Demo Event
      </Button>
    </div>
  );
};

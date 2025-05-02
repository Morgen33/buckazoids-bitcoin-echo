
import { useAnalyticsContext } from "./AnalyticsProvider";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export const AnalyticsDemo = () => {
  const { trackEvent } = useAnalyticsContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [lastEvent, setLastEvent] = useState<{name: string, data: any} | null>(null);
  
  const handleCustomEvent = () => {
    const eventData = {
      buttonId: "demo",
      timestamp: new Date().toISOString()
    };
    
    trackEvent("button_clicked", eventData);
    setLastEvent({
      name: "button_clicked",
      data: eventData
    });
    setIsDialogOpen(true);
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
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Event Tracked!</DialogTitle>
            <DialogDescription>
              The following event was sent to Supabase:
            </DialogDescription>
          </DialogHeader>
          
          {lastEvent && (
            <div className="bg-gray-100 p-4 rounded-md">
              <p><strong>Name:</strong> {lastEvent.name}</p>
              <p><strong>Data:</strong></p>
              <pre className="bg-gray-200 p-2 rounded text-xs mt-2">
                {JSON.stringify(lastEvent.data, null, 2)}
              </pre>
            </div>
          )}
          
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

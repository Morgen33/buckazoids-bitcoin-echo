
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const TwitterCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
      <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
        <X className="text-[#02314d] w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-[#02314d] mb-4">X (formerly known as Twitter)</h3>
      <p className="text-gray-600 mb-6">
        The best way to reach us is by sending a direct message to our X page. Follow us for the latest updates, community events, and discussions about Buckazoids.
      </p>
      <Button 
        className="bg-[#02314d] hover:bg-buckazoid-orange text-white"
        onClick={() => window.open('https://x.com/messages/compose?recipient_id=BuckazoidsSOL', '_blank')}
      >
        Message @Buckazoids
      </Button>
    </div>
  );
};

export default TwitterCard;

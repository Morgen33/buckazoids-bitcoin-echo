
import { Button } from "@/components/ui/button";

const TwitterCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
      <div className="mb-6 w-24 h-24 bg-[#f7f9f9] rounded-full flex items-center justify-center mx-auto">
        {/* Custom X icon that matches the reference image */}
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#0f1419]"
        >
          <path 
            d="M17.1755 4.5H19.9405L13.8655 11.3925L21 19.5H15.4725L11.0482 14.5913L6.0075 19.5H3.2415L9.6893 12.1373L2.8125 4.5H8.4675L12.4605 9.0045L17.1755 4.5ZM16.249 17.85H17.6738L7.8292 6.0795H6.2842L16.249 17.85Z" 
            fill="currentColor"
          />
        </svg>
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

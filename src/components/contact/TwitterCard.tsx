
import { Button } from "@/components/ui/button";

const TwitterCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
      <div className="mb-6 w-24 h-24 bg-[#f7f9f9] rounded-full flex items-center justify-center mx-auto">
        {/* X logo (Twitter) */}
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#0f1419]"
        >
          <path 
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
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

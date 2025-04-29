
import { Button } from "@/components/ui/button";
import { TextRotate } from "@/components/ui/text-rotate";
import { OptimizedTextRotate } from "@/components/ui/optimized-text-rotate";
import CountdownTimer from "./CountdownTimer";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isMobile = useIsMobile();
  const [cacheBuster, setCacheBuster] = useState(`?v=${Date.now()}`);

  // Function to handle video loading
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };
  
  // Refresh cache buster every 30 seconds
  useEffect(() => {
    // Initialize with any global cache buster if available
    if (window.CACHE_BUSTER) {
      setCacheBuster(`?v=${window.CACHE_BUSTER}`);
    }
    
    const interval = setInterval(() => {
      setCacheBuster(`?v=${Date.now()}`);
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#ffffff] relative z-10 py-[16px] mb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Section - Removed text parts */}
        <div className="mt-[60px] mb-12">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/d93c1ad7-d6c5-4bfc-b00e-b28a0e9c022b.png" 
              alt="Buckazoids Logo" 
              className="h-32 sm:h-40 object-contain"
              data-refresh="true"
            />
          </div>
        </div>

        {/* Button section - Updated with better mobile handling */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            className="bg-[#f7931a] hover:bg-[#f7931a]/90 text-white px-8"
            onClick={() => window.location.href = '/about'}
          >
            Get started with Buckazoids
          </Button>
          <Button 
            variant="outline" 
            className="border-[#f7931a] text-[#f7931a] hover:bg-[#f7931a]/10 text-xs sm:text-sm break-all sm:break-normal px-3 sm:px-6 overflow-hidden"
            onClick={() => window.open('https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku', '_blank')}
          >
            <span className="truncate">BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump</span>
          </Button>
          <Button 
            variant="outline" 
            className="border-[#f7931a] text-[#f7931a] hover:bg-[#f7931a]/10"
            onClick={() => window.location.href = '/buy'}
          >
            Buy Buckazoids
          </Button>
        </div>

        {/* Spinning Coin Video moved here - between buttons and countdown timer */}
        <div className="mb-12 relative h-[160px]">
          {!isVideoLoaded && (
            <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 bg-gray-100 rounded-full animate-pulse"></div>
          )}
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
            className={`mx-auto w-32 h-32 sm:w-40 sm:h-40 ${isVideoLoaded ? 'visible' : 'invisible'} absolute top-0 left-0 right-0 bottom-0 m-auto`}
            preload={isMobile ? "metadata" : "auto"}
            poster={`/lovable-uploads/0cfa1a1f-d025-4c12-9b77-2970252ee0c8.png${cacheBuster}`}
            key={`video-${cacheBuster}`} // Key forces React to recreate the element
          >
            <source src={`/lovable-uploads/flipmp4.mp4${cacheBuster}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <CountdownTimer />
        
        {/* Version indicator */}
        <div className="text-[8px] text-gray-300 mt-2 opacity-30">v2.1.2-nocache-{new Date().toISOString().split('T')[0]}</div>
      </div>
    </div>
  );
};

export default HeroSection;

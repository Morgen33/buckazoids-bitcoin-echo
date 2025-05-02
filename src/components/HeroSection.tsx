import { Button } from "@/components/ui/button";
import { TextRotate } from "@/components/ui/text-rotate";
import { OptimizedTextRotate } from "@/components/ui/optimized-text-rotate";
import CountdownTimer from "./CountdownTimer";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MatrixRain from "./ui/MatrixRain";

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
    <div className="relative z-10 py-[16px] mb-24 overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#031c2b] overflow-hidden">
        <MatrixRain 
          color="#F97316" // Bright orange color
          characters="01BUCKAZOIDS" 
          fontSize={isMobile ? 14 : 18}
          fadeOpacity={0.15}
          speed={0.8}
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo Section - Updated with new logo */}
        <div className="mt-[60px] mb-12">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/87fecfb6-21fd-4996-b702-ac86db1214bf.png" 
              alt="Buckazoids Logo" 
              className="h-48 sm:h-64 lg:h-80 object-contain" 
              data-refresh="true"
            />
          </div>
        </div>

        {/* Button section - kept existing code */}
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

        {/* Spinning Coin Video */}
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

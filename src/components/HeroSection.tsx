
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import { OptimizedTextRotate } from "@/components/ui/optimized-text-rotate";
import CountdownTimer from "./CountdownTimer";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isMobile = useIsMobile();

  // Function to handle video loading
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="bg-[#ffffff] relative z-10 py-[16px] mb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Spinning Coin Video with optimized loading - reduced height */}
        <div className="mb-12 pt-8 relative h-[160px]">
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
            poster="/lovable-uploads/0cfa1a1f-d025-4c12-9b77-2970252ee0c8.png"
          >
            <source src="/lovable-uploads/flipmp4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text section with reduced top margin */}
        <div className="mt-[60px] text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="block">Buckazoids is</span>
            <div className="inline-block min-h-[3.5rem]">
              {isMobile ? (
                <OptimizedTextRotate
                  texts={[
                    "coded",
                    "the future",
                    "the lore",
                    "bitcoin"
                  ]}
                  mainClassName="text-[#f7931a] overflow-hidden py-2 justify-center"
                  rotationInterval={2000}
                />
              ) : (
                <TextRotate
                  texts={[
                    "coded",
                    "the future",
                    "the lore",
                    "bitcoin"
                  ]}
                  mainClassName="text-[#f7931a] overflow-hidden py-2 justify-center"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              )}
            </div>
          </div>
        </div>

        {/* Button section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            className="bg-[#f7931a] hover:bg-[#f7931a]/90 text-white px-8"
            onClick={() => window.location.href = '/about'}
          >
            Get started with Buckazoids
          </Button>
          <Button 
            variant="outline" 
            className="border-[#f7931a] text-[#f7931a] hover:bg-[#f7931a]/10"
            onClick={() => window.open('https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku', '_blank')}
          >
            BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump
          </Button>
          <Button 
            variant="outline" 
            className="border-[#f7931a] text-[#f7931a] hover:bg-[#f7931a]/10"
            onClick={() => window.location.href = '/buy'}
          >
            Buy Buckazoids
          </Button>
        </div>

        <CountdownTimer />
        
        {/* Version indicator */}
        <div className="text-[8px] text-gray-300 mt-2 opacity-30">v2.0.8-perf-optimized</div>
      </div>
    </div>
  );
};

export default HeroSection;


import React, { lazy, Suspense } from "react";
import ExchangeListings from "./ExchangeListings";
import { useIsMobile } from "@/hooks/use-mobile";

// Lazy load the Boxes component since it's heavy
const Boxes = lazy(() => import("./ui/boxes").then(module => ({ default: module.Boxes })));

const OverviewSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`relative overflow-hidden ${isMobile ? "min-h-[900px]" : "h-[800px]"} pt-16 sm:pt-32`}>
      {/* Background pattern section */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black/90">
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
        }>
          <Boxes />
        </Suspense>
      </div>
      
      {/* Content section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 h-full pb-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Available on Major Exchanges</h2>
          <p className="text-gray-300 text-base sm:text-lg">Trade Buckazoids on these trusted platforms</p>
        </div>
        <ExchangeListings />
      </div>
    </div>
  );
};

export default OverviewSection;

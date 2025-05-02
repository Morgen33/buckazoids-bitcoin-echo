
import React, { lazy, Suspense, useEffect, useState } from "react";
import ExchangeListings from "./ExchangeListings";
import { useIsMobile } from "@/hooks/use-mobile";

const OverviewSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      id="overview-section" 
      className={`relative overflow-hidden ${isMobile ? "min-h-[900px]" : "h-[1000px]"} pt-8 sm:pt-16 bg-white`}
    >
      {/* Content section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 h-full pb-32">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-buckazoid-navy mb-2 sm:mb-4">Available on Major Exchanges</h2>
          <p className="text-gray-600 text-base sm:text-lg">Trade Buckazoids on these trusted platforms</p>
        </div>
        <ExchangeListings />
      </div>
    </div>
  );
};

export default OverviewSection;

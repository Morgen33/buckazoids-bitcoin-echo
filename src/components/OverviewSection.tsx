
import React, { lazy, Suspense, useEffect, useState } from "react";
import ExchangeListings from "./ExchangeListings";
import { useIsMobile } from "@/hooks/use-mobile";
import MatrixRain from "./ui/MatrixRain";

const OverviewSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      id="overview-section" 
      className={`relative overflow-hidden ${isMobile ? "min-h-[900px]" : "h-[1000px]"} pt-16 sm:pt-32`}
    >
      {/* Background pattern section */}
      <div className="absolute inset-0 w-full h-full z-0 bg-buckazoid-navy overflow-hidden">
        <MatrixRain 
          color="#F97316" // Bright orange color
          characters="01BUCKAZOIDS" 
          fontSize={isMobile ? 14 : 18}
          fadeOpacity={0.15}
          speed={0.8}
        />
      </div>
      
      {/* Content section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 h-full pb-32">
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

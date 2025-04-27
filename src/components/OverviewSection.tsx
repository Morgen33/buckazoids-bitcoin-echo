
import React from "react";
import { Boxes } from "./ui/boxes";
import ExchangeListings from "./ExchangeListings";

const OverviewSection = () => {
  return (
    <div className="relative overflow-hidden h-[800px] pt-32">
      {/* Background pattern section */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black/90">
        <Boxes />
      </div>
      
      {/* Content section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 h-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Available on Major Exchanges</h2>
          <p className="text-gray-300 text-lg">Trade Buckazoids on these trusted platforms</p>
        </div>
        <ExchangeListings />
      </div>
    </div>
  );
};

export default OverviewSection;

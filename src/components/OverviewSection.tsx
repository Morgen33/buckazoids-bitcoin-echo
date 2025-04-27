
import React from "react";
import ExchangeListings from "./ExchangeListings";
import { Badge } from "./ui/badge";

const OverviewSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background image section with higher z-index */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/lovable-uploads/777f297d-8076-480a-bd74-9587880b30ae.png" 
          alt="Hexagon Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content section with highest z-index */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:px-[31px] min-h-screen flex flex-col justify-center">
        <div className="text-center mb-16 mt-48 md:mt-64">
          <Badge className="bg-[#f7931a]/20 text-[#f7931a] mb-4">FEATURED ON</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Listed On Major Exchanges
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Buckazoids is available on top cryptocurrency exchanges worldwide, making it easy for anyone to buy, sell, and trade.
          </p>
        </div>
        
        <div className="pb-24">
          <ExchangeListings />
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;

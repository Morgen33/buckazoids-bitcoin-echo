
import React from "react";
import ExchangeListings from "./ExchangeListings";
import { Badge } from "./ui/badge";

const OverviewSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background image section with higher z-index */}
      <div className="absolute inset-0 w-full h-screen z-0">
        <img 
          src="/lovable-uploads/d5182a22-a86c-4b6b-a66e-e4003d9da4ad.png" 
          alt="Hexagon Background" 
          className="w-full h-screen object-cover"
        />
      </div>
      
      {/* Content section with highest z-index */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32 lg:px-[31px] pt-48">
        <div className="text-center mb-16">
          <Badge className="bg-[#f7931a]/20 text-[#f7931a] mb-4">FEATURED ON</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Listed On Major Exchanges
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Buckazoids is available on top cryptocurrency exchanges worldwide, making it easy for anyone to buy, sell, and trade.
          </p>
        </div>
        
        <ExchangeListings />
      </div>
    </div>
  );
};

export default OverviewSection;

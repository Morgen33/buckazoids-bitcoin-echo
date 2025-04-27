
import React from "react";
import ExchangeListings from "./ExchangeListings";
import { Badge } from "./ui/badge";

const ExchangesSection = () => {
  return (
    <div className="relative bg-[#f7931a]/10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-[#f7931a]/20 text-[#f7931a] mb-4">FEATURED ON</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Listed On Major Exchanges
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Buckazoids is available on top cryptocurrency exchanges worldwide, making it easy for anyone to buy, sell, and trade.
          </p>
        </div>
        
        <ExchangeListings />
      </div>
    </div>
  );
};

export default ExchangesSection;

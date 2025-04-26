
import React from "react";
import ExchangeListings from "./ExchangeListings";
import { Badge } from "./ui/badge";

const OverviewSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image section */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/lovable-uploads/1012c35a-56db-475f-8e55-9de28dbe455c.png"
          alt="Network Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
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
    </section>
  );
};

export default OverviewSection;

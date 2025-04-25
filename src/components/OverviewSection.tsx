
import React from "react";
import ExchangeListings from "./ExchangeListings";
import { Badge } from "./ui/badge";

const OverviewSection = () => {
  return (
    <section 
      className="relative overflow-hidden mt-16"
      style={{
        backgroundImage: "url('/lovable-uploads/bdb73684-4e12-44cb-aba7-5e44ea4e4bc1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
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

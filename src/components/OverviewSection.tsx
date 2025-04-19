
import React from "react";
import NetworkGraphic from "./NetworkGraphic";
import ExchangeListings from "./ExchangeListings";

const OverviewSection = () => {
  return (
    <section className="relative bg-buckazoid-dark py-24 overflow-hidden">
      {/* Network background */}
      <NetworkGraphic />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Listed On Major Exchanges
        </h2>
        
        <ExchangeListings />
      </div>
    </section>
  );
};

export default OverviewSection;

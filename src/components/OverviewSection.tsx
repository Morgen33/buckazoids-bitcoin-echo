
import React from "react";

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
      
      {/* Empty content section with highest z-index */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32 lg:px-[31px]">
      </div>
    </div>
  );
};

export default OverviewSection;


import React from "react";

const OverviewSection = () => {
  return (
    <div className="relative overflow-hidden h-[400px]">
      {/* Background image section */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/lovable-uploads/d5182a22-a86c-4b6b-a66e-e4003d9da4ad.png" 
          alt="Hexagon Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Empty content section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 h-full">
      </div>
    </div>
  );
};

export default OverviewSection;

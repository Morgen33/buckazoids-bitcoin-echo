import React from "react";
const OverviewSection = () => {
  return <div className="relative overflow-hidden h-[600px] pt-32">
      {/* Background image section */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/lovable-uploads/964603b6-7245-438e-bb60-847e669b4254.png" alt="Hexagon Pattern Background" className="w-full h-full object-contain" />
      </div>
      
      {/* Empty content section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 h-full">
      </div>
    </div>;
};
export default OverviewSection;
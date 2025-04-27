
import React from "react";
import { Boxes } from "./ui/boxes";

const OverviewSection = () => {
  return (
    <div className="relative overflow-hidden h-[600px] pt-32">
      {/* Background pattern section */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black/90">
        <Boxes />
      </div>
      
      {/* Content section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 h-full">
      </div>
    </div>
  );
};

export default OverviewSection;

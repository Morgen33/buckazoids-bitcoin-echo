
import React from "react";
import { useNetworkAnimation } from "../hooks/useNetworkAnimation";

const NetworkGraphic = () => {
  const containerRef = useNetworkAnimation();
  
  return (
    <div className="relative w-full h-full">
      {/* Dark background */}
      <div 
        className="absolute inset-0 w-full h-full bg-buckazoid-dark" 
        style={{ opacity: 0.8 }}
      />
      
      {/* Mountain silhouette with nodes */}
      <div className="absolute inset-x-0 top-0 w-full">
        <svg
          ref={containerRef}
          viewBox="0 0 1200 200"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Mountain silhouette */}
          <path
            d="M0,200 L0,120 L100,140 L200,80 L300,130 L400,60 L500,100 L600,70 L700,110 L800,50 L900,90 L1000,40 L1100,80 L1200,60 L1200,200 Z"
            fill="#181E20"
          />
          
          {/* Nodes will be added dynamically via the animation hook */}
          <g className="network-nodes"></g>
        </svg>
      </div>
    </div>
  );
};

export default NetworkGraphic;


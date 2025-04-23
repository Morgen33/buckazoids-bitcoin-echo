
import React from "react";
import { useNetworkAnimation } from "@/hooks/useNetworkAnimation";

const NetworkGraphic = () => {
  const canvasRef = useNetworkAnimation();
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
};

export default NetworkGraphic;

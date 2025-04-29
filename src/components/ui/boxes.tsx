
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

// Optimized version with fewer boxes and mobile optimization
export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);
  
  // Only render on client-side to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Dramatically reduce number of elements on mobile
  const rows = new Array(isMobile ? 15 : 50).fill(1);
  const cols = new Array(isMobile ? 8 : 40).fill(1);

  // Don't render anything during SSR to prevent hydration mismatch
  if (!isClient) return null;

  // Skip rendering on very small devices for better performance
  if (isMobile && window.innerWidth < 500) {
    return (
      <div 
        className={cn("absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black", className)}
        {...rest}
      />
    );
  }

  return (
    <div
      style={{
        transform: `translate(-50%,-50%) scale(1.5) translateZ(0)`,
        position: "absolute",
        width: "150%",
        height: "150%",
        top: "50%",
        left: "50%"
      }}
      className={cn(
        "flex z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div
          key={`row${i}`}
          className="w-16 h-8 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <div
              key={`col${j}`}
              className={`w-16 h-8 border-r border-t border-slate-700 relative ${
                j % 4 === 0 && i % 4 === 0 ? 'before:content-[""] before:absolute before:w-2 before:h-2 before:bg-slate-700 before:top-0 before:left-0' : ''
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

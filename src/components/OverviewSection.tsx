
import React from "react";
import { Card } from "./ui/card";
import { User, Briefcase, Code } from "lucide-react";
import { Button } from "./ui/button";

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
      
      {/* Content section with highest z-index */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-[31px]">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Get a quick overview for
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Individuals Card */}
            <Card className="bg-[#1A1F2C]/80 border-none text-white p-6 flex flex-col items-center hover:bg-[#1A1F2C] transition-colors">
              <User className="w-8 h-8 text-[#f7931a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Individuals</h3>
              <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                Learn more
              </Button>
            </Card>

            {/* Businesses Card */}
            <Card className="bg-[#1A1F2C]/80 border-none text-white p-6 flex flex-col items-center hover:bg-[#1A1F2C] transition-colors">
              <Briefcase className="w-8 h-8 text-[#f7931a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Businesses</h3>
              <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                Learn more
              </Button>
            </Card>

            {/* Developers Card */}
            <Card className="bg-[#1A1F2C]/80 border-none text-white p-6 flex flex-col items-center hover:bg-[#1A1F2C] transition-colors">
              <Code className="w-8 h-8 text-[#f7931a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Developers</h3>
              <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                Learn more
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;

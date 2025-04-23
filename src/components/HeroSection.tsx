
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
          Buckazoids is an innovative payment network and a new kind of money.
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            className="bg-[#f7931a] hover:bg-[#f7931a]/90 text-white px-8"
          >
            Get started with Buckazoids
          </Button>
          <Button 
            variant="outline"
            className="border-[#f7931a] text-[#f7931a] hover:bg-[#f7931a]/10"
          >
            Choose your wallet
          </Button>
          <Button 
            variant="outline"
            className="border-[#f7931a] text-[#f7931a] hover:bg-[#f7931a]/10"
          >
            Buy Buckazoids
          </Button>
        </div>

        <button className="inline-flex items-center gap-2 text-[#f7931a] hover:text-[#f7931a]/90 font-medium">
          <PlayCircle size={24} />
          What is Buckazoids?
        </button>
      </div>
    </div>
  );
};

export default HeroSection;


import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-white py-[100px] px-8 relative z-10">
      <div className="max-w-[770px] mx-auto text-center">
        <h1 className="text-[51px] font-black text-[#1C1F30] leading-[65px] mb-[45px]">
          Buckazoids is an innovative payment network and a new kind of money.
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <Button 
            className="w-[340px] h-[60px] bg-[#FF9500] hover:bg-[#FF9500]/90 text-white text-base font-bold"
          >
            Get started with Buckazoids
          </Button>
          <Button 
            variant="outline"
            className="w-[440px] h-[60px] border-[#FF7E00] text-[#FF7E00] hover:bg-[#FF7E00]/10 font-bold text-sm truncate"
          >
            BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump
          </Button>
          <Button 
            variant="outline"
            className="w-[340px] h-[60px] border-[#FF7E00] text-[#FF7E00] hover:bg-[#FF7E00]/10 font-bold"
          >
            Buy Buckazoids
          </Button>
        </div>

        <button className="inline-flex items-center gap-2 text-[#f7931a] hover:text-[#f7931a]/90 font-medium mt-12">
          <PlayCircle size={24} />
          What is Buckazoids?
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

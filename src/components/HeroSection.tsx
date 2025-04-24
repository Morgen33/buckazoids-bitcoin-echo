
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-white py-[100px] px-8">
      <div className="max-w-[770px] mx-auto text-center">
        <h1 className="text-[51px] font-black text-[#1C1F30] leading-[65px] mb-[45px]">
          Buckazoids is an innovative payment network and a new kind of money.
        </h1>
        
        <div className="flex flex-wrap justify-center items-center gap-2.5">
          <Button 
            className="bg-[#FF9500] hover:bg-[#FF9500]/90 text-white text-sm font-semibold px-5 py-3.5 h-auto rounded"
          >
            Get started
          </Button>
          <Button 
            variant="outline"
            className="border-[#FF7E00] text-[#FF7E00] hover:bg-[#FF7E00]/10 font-semibold text-xs truncate px-5 py-3.5 h-auto rounded"
          >
            BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump
          </Button>
          <Button 
            variant="outline"
            className="border-[#FF7E00] text-[#FF7E00] hover:bg-[#FF7E00]/10 font-semibold px-5 py-3.5 h-auto rounded"
          >
            Buy Buckazoids
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

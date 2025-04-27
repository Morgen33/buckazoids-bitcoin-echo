
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-white relative z-10 py-[16px] mb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Spinning Coin GIF */}
        <div className="mb-12 py-0 my-[50px]">
          <img src="/lovable-uploads/buckspin.gif" alt="Spinning Buckazoids Coin" className="mx-auto w-32 h-32 sm:w-40 sm:h-40" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          Buckazoids is the digital currency found in 1991 space quest 4 with the logo that resembles Bitcoins. Notable Developers for the game were named SATOSHI Eusaka and Rod NAKAMOTO.
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="bg-[#f7931a] hover:bg-[#f7931a]/90 text-white px-8">
            Get started with Buckazoids
          </Button>
          <Button variant="outline" className="border-[#f7931a] text-[#f7931a] hover:bg-[#f7931a]/10">
            BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump
          </Button>
          <Button variant="outline" className="border-[#f7931a] text-[#f7931a] hover:bg-[#f7931a]/10">
            Buy Buckazoids
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

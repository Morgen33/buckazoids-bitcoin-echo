import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <div className="bg-white py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-[39px] py-[99px]">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          Buckazoids is an innovative payment network and a new kind of money.
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
    </div>;
};
export default HeroSection;

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";

const HeroSection = () => {
  return (
    <div className="bg-white relative z-10 py-[16px] mb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Spinning Coin GIF */}
        <div className="mb-12 py-0 my-[50px]">
          <img src="/lovable-uploads/coin.gif" alt="Spinning Buckazoids Coin" className="mx-auto w-32 h-32 sm:w-40 sm:h-40" />
        </div>

        <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 flex items-center justify-center gap-3">
          <motion.span>Buckazoids is</motion.span>
          <TextRotate
            texts={[
              "coded",
              "the future",
              "the lore",
              "bitcoin"
            ]}
            mainClassName="text-white px-4 bg-[#f7931a] overflow-hidden py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            className="bg-[#f7931a] hover:bg-[#f7931a]/90 text-white px-8"
            onClick={() => window.location.href = '/about'}
          >
            Get started with Buckazoids
          </Button>
          <Button 
            variant="outline" 
            className="border-[#f7931a] text-[#f7931a] hover:bg-[#f7931a]/10"
            onClick={() => window.open('https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku', '_blank')}
          >
            BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump
          </Button>
          <Button 
            variant="outline" 
            className="border-[#f7931a] text-[#f7931a] hover:bg-[#f7931a]/10"
            onClick={() => window.location.href = '/buy'}
          >
            Buy Buckazoids
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

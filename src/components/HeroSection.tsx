
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast({
      title: "Contract Address Copied!",
      description: "The contract address has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Token Information Card */}
        <div className="bg-gray-50 border-2 border-buckazoids-orange rounded-xl p-6 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="/lovable-uploads/d019d532-2885-4063-8b9a-3311c707a3bf.png" 
                alt="Buckazoids Token" 
                className="w-48 h-48 object-contain mx-auto"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-buckazoids-blue mb-2">$Buckazoids</h2>
                <div className="flex flex-col sm:flex-row gap-2 items-center bg-white rounded-lg p-3 border border-gray-200">
                  <span className="text-sm text-gray-600 font-medium">Contract Address:</span>
                  <code className="bg-gray-100 px-3 py-1 rounded flex-1 text-sm">{contractAddress}</code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="min-w-[100px]"
                  >
                    {copied ? "Copied!" : "Copy"} <Copy className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button 
                  className="bg-buckazoids-orange hover:bg-buckazoids-yellow text-white text-lg px-8 py-6 w-full sm:w-auto"
                  onClick={() => window.open("https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku", "_blank")}
                >
                  View on DEXScreener <ExternalLink className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Original Hero Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Buckazoids
              <br />
              <span className="text-buckazoids-orange">The Original Digital Currency</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              A Digital Currency from 1989... Rediscovered in 2025. The meme that preceded Bitcoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-buckazoids-orange hover:bg-buckazoids-yellow text-white text-lg px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="border-buckazoids-blue text-buckazoids-blue hover:bg-buckazoids-blue/10 text-lg px-8 py-6">
                Read Whitepaper <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/d019d532-2885-4063-8b9a-3311c707a3bf.png" 
              alt="Buckazoids Coin" 
              className="w-64 h-64 md:w-80 md:h-80 animate-float object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

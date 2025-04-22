import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
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
      description: "The contract address has been copied to your clipboard."
    });
    setTimeout(() => setCopied(false), 2000);
  };
  return <div className="relative bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Buckazoids
              <br />
              <span className="text-buckazoids-orange">The Original Digital Currency</span>
            </h1>
            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-600">
                A Digital Currency from 1986... Rediscovered in 2025.
                The meme that preceded Bitcoin.
              </p>
              <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <span className="text-lg font-bold text-buckazoids-blue">$Buckazoids</span>
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <span className="text-sm text-gray-600 font-medium">Contract Address:</span>
                  <code className="bg-gray-100 px-3 py-1 rounded flex-1 text-sm">{contractAddress}</code>
                  <Button variant="outline" size="sm" onClick={copyToClipboard} className="min-w-[100px]">
                    {copied ? "Copied!" : "Copy"} <Copy className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Fixed DEXScreener button - added explicit colors and increased visibility */}
            <div className="mt-6 mb-4">
              <Button onClick={() => window.open("https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku", "_blank")} className="bg-[#F77F00] hover:bg-[#FFBB1C] text-white font-medium text-lg py-6 px-8 rounded-md inline-flex items-center justify-center w-full sm:w-auto">
                View on DEXScreener <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;
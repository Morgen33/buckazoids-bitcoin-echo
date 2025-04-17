
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-white min-h-[80vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              <span className="text-buckazoid-orange">Buckazoid</span>
              <br />
              The Original Digital Currency
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              A Digital Currency from 1989... Rediscovered in 2025. The meme that preceded Bitcoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-buckazoid-blue text-buckazoid-blue hover:bg-buckazoid-blue hover:text-white px-8 py-6 text-lg">
                Read Whitepaper <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-100 flex items-center justify-center animate-float">
                <img 
                  src="/logo.svg" 
                  alt="Buckazoid Logo" 
                  className="w-48 h-48 md:w-60 md:h-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-buckazoid-navy min-h-[80vh] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-buckazoid-blue opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-buckazoid-orange opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-buckazoid-yellow">Buckazoid</span>
              <br />
              The Original Digital Currency
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              A Digital Currency from 1989... Rediscovered in 2025. The meme that preceded Bitcoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-buckazoid-yellow text-buckazoid-yellow hover:bg-buckazoid-yellow hover:text-buckazoid-dark px-8 py-6 text-lg">
                Read Whitepaper <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-buckazoid-yellow/20 flex items-center justify-center animate-float">
                <img 
                  src="/logo.svg" 
                  alt="Buckazoid Logo" 
                  className="w-48 h-48 md:w-60 md:h-60"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-buckazoid-yellow/30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

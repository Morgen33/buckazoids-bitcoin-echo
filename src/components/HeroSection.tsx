
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Buckazoid
              <br />
              <span className="text-buckazoid-orange">The Original Digital Currency</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              A Digital Currency from 1989... Rediscovered in 2025. The meme that preceded Bitcoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white text-lg px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="border-buckazoid-blue text-buckazoid-blue hover:bg-buckazoid-blue/10 text-lg px-8 py-6">
                Read Whitepaper <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/logo.svg" 
              alt="Buckazoid Logo" 
              className="w-64 h-64 md:w-80 md:h-80 animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

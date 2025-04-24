
import React from "react";
import ExchangeListings from "./ExchangeListings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const OverviewSection = () => {
  return (
    <section className="relative bg-buckazoid-dark overflow-hidden mt-16">
      {/* Background image section */}
      <div className="absolute inset-x-0 top-0 h-[300px] w-full">
        <img
          src="/lovable-uploads/buckazoid-token.png"
          alt="Network Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-buckazoid-dark/80" />
      </div>
      
      {/* Content section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
        <div className="text-center mb-16">
          <Badge className="bg-[#f7931a]/20 text-[#f7931a] mb-4">FEATURED ON</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Listed On Major Exchanges
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Buckazoids is available on top cryptocurrency exchanges worldwide, making it easy for anyone to buy, sell, and trade.
          </p>
        </div>
        
        <ExchangeListings />
        
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 border-none text-white">
            <CardHeader>
              <CardTitle className="text-[#f7931a]">For Individuals</CardTitle>
              <CardDescription className="text-gray-300">
                Fast, secure payments anywhere in the world
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Send and receive Buckazoids instantly with minimal fees. Control your own money without central authority interference.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-none text-white">
            <CardHeader>
              <CardTitle className="text-[#f7931a]">For Businesses</CardTitle>
              <CardDescription className="text-gray-300">
                Accept payments with zero chargebacks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Implement Buckazoids to reduce transaction costs and eliminate fraud. Reach customers globally without currency barriers.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-none text-white">
            <CardHeader>
              <CardTitle className="text-[#f7931a]">For Developers</CardTitle>
              <CardDescription className="text-gray-300">
                Robust API and developer tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Build the next generation of financial applications with our comprehensive toolkit and documentation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;

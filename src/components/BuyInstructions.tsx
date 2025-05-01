
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wallet, Download, CircleCheck, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BuyInstructions = () => {
  const contractAddress = "BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
      .then(() => {
        toast.success("Contract address copied to clipboard");
      })
      .catch(() => {
        toast.error("Failed to copy contract address");
      });
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* First Card - Buying Solana */}
          <Card className="border-2 border-buckazoid-blue/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-buckazoid-navy flex items-center gap-2">
                <Wallet className="w-6 h-6" />
                How to Buy Solana
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-buckazoid-blue/10 flex items-center justify-center">1</span>
                  <p className="text-gray-700">Deposit funds into your central exchange (CEX) wallet through transfer, credit card or any other payment method offered. (Example Coinbase)</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-buckazoid-blue/10 flex items-center justify-center">2</span>
                  <p className="text-gray-700">Swap USD for Solana</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Second Card - Moving Solana to Phantom */}
          <Card className="border-2 border-buckazoid-blue/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-buckazoid-navy flex items-center gap-2">
                <Download className="w-6 h-6" />
                Set Up Phantom Wallet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="font-bold text-buckazoid-blue">A.</span>
                <div>
                  <p className="text-gray-700">Download Phantom wallet from</p>
                  <a href="https://phantom.com" target="_blank" rel="noopener noreferrer" className="text-buckazoid-blue hover:text-buckazoid-orange transition-colors">
                    phantom.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-buckazoid-blue">B.</span>
                <p className="text-gray-700">Create New wallet</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-buckazoid-blue">C.</span>
                <p className="text-gray-700">Save your private key or recovery phrase on a piece of paper and keep it safe! Do not share it with anyone. It's your code to login.</p>
              </div>
            </CardContent>
          </Card>

          {/* Third Card - Transfer Process */}
          <Card className="border-2 border-buckazoid-blue/20 shadow-lg md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-buckazoid-navy flex items-center gap-2">
                <ArrowRight className="w-6 h-6" />
                Transfer & Buy Buckazoids
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-buckazoid-blue">D.</span>
                  <p className="text-gray-700">Click RECEIVE to copy your phantom wallet address. Go back to your Central Exchange wallet. Click on the Solana you purchased and click "send"</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-buckazoid-blue">E.</span>
                  <p className="text-gray-700">Enter your phantom wallet address you copied and select the number of Solana you want to send to the phantom wallet.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-buckazoid-blue">F.</span>
                  <p className="text-gray-700">Go back to phantom. You will see your Solana you sent appear.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-buckazoid-blue">G.</span>
                  <div>
                    <p className="text-gray-700">Go to search bar Enter contract address:</p>
                    <div className="flex items-center mt-2 gap-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm flex-grow">{contractAddress}</code>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1 border-buckazoid-blue/30 hover:bg-buckazoid-blue/10" 
                        onClick={copyToClipboard}
                      >
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-buckazoid-blue">H.</span>
                  <p className="text-gray-700">You will see Buckazoids come up. Swap Solana for Buckazoids</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg flex items-center gap-3">
                <CircleCheck className="w-6 h-6 text-green-500" />
                <p className="text-green-700 font-medium">Congratulations on owning a part of crypto history! The origins of crypto!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BuyInstructions;

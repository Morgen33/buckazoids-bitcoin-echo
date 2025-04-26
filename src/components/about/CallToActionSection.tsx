
import { Rocket, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <>
      <Card className="mb-12" style={{ backgroundColor: '#fff3e2' }}>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Rocket className="w-8 h-8 text-buckazoid-navy" />
            <span className="text-3xl font-bold text-buckazoid-navy">Join the Movement</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6 text-gray-800">
            Buckazoids launched on March 27th 2025 and is in its infancy when it comes to its evaluation and market cap potential. 
            Bitcoin is currently evaluated at over 1 trillion marketcap. Can you imagine what happens when this story gets in front of the masses? 
            Buckle Up.
          </p>
          <p className="text-xl font-semibold text-buckazoid-navy">
            If you could go back to 2011 and buy Bitcoin, would you? Because this is that moment again.
          </p>
          <div className="mt-6">
            <p className="text-lg mb-4 text-gray-800">
              We believe Buckazoids is the spiritual predecessor to Bitcoin. It's built for 
              the future, it's built to scale, and most importantly — it's just getting started.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="mb-12 p-8 rounded-2xl bg-[#fff3e2]">
        <h2 className="text-2xl font-bold mb-4 text-[#02314d]">Get Involved</h2>
        <p className="text-gray-800 mb-4">
          The mystery of Satoshi Nakamoto? Solved. The original digital token? Rediscovered. 
          The time to act? Right now.
        </p>
        <p className="text-gray-800 mb-4">
          Bitcoin will always be king. But Buckazoids came first and, in our opinion, will 
          become a household name and one of the most important digital assets of all time.
        </p>
        <div className="mt-8 text-center">
          <Button
            className="bg-[#02314d] text-white hover:bg-[#045c94] px-8 py-6 text-lg font-semibold"
            onClick={() => window.open('https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku', '_blank')}
          >
            Buy Now <ExternalLink className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-center p-6 bg-gray-50 rounded-lg">
        <p className="mb-2">
          This is not financial advice. Never invest more than you can afford to lose. 
          Do your own research.
        </p>
        <p className="text-[#02314d] font-medium">
          But here's our truth: Buying Buckazoids right now is like buying Bitcoin in 2011.
        </p>
      </div>
    </>
  );
};

export default CallToActionSection;

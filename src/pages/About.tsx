
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, History, Rocket, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-buckazoids-blue mb-6">
              The Greatest Discovery in Crypto History
            </h1>
            <p className="text-xl text-gray-600">
              Welcome to the most groundbreaking revelation in the world of digital currency.
            </p>
          </div>

          {/* Journey Timeline */}
          <Card className="mb-12 p-6 bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-start gap-4">
              <History className="w-8 h-8 text-buckazoids-blue flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">A Journey Through Time</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For nearly 8 years, our team has been deeply immersed in the study of Bitcoin, 
                  cryptocurrencies, and the enigma of Satoshi Nakamoto. Our journey through the 
                  crypto world has seen us dive into meme coins, market trends, and witness the 
                  global mass adoption of digital currencies.
                </p>
                <p className="text-gray-700 font-semibold">
                  However, everything changed over the past 20 days.
                </p>
              </div>
            </div>
          </Card>

          {/* Discovery Section */}
          <Card className="mb-12 overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-buckazoids-blue">The Discovery</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While browsing X.com, we stumbled upon a random Reddit post dated March 26th, 2025. 
                This post introduced something truly astonishing — an old-school adventure computer 
                game called Space Quest, developed by Sierra On-Line (now Sierra Entertainment).
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Key Discoveries:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Released in 1986, Space Quest became a cult classic</li>
                  <li>Featured Buckazoids as in-game currency (1989)</li>
                  <li>Evolved into a tradeable digital token by 1991</li>
                  <li>The Buckazoids token design mirrors the Bitcoin logo (₿)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Mystery Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-buckazoids-blue mb-4" />
                <h3 className="text-xl font-bold mb-4">Key Contributors</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Scott Murphy and Mark Crowe ("The Two Guys from Andromeda")</li>
                  <li>Satoshi Uesaka</li>
                  <li>Rod Nakamoto and Nancy Nakamoto</li>
                  <li>Hal Finney — Game Designer & Bitcoin Contributor</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-buckazoids-blue mb-4" />
                <h3 className="text-xl font-bold mb-4">Launch Details</h3>
                <p className="text-gray-700 leading-relaxed">
                  Launched on March 27th, 2025 on the Solana network, aligning with a Bitcoin 
                  Conference themed "EMBRACE GAME THEORY" taking place 59 days later.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-buckazoids-blue text-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Rocket className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Join the Movement</h2>
              </div>
              <p className="text-lg mb-6 opacity-90">
                As of today, April 15th, 2025, the Buckazoids token is just under 3 weeks old 
                with a market cap of roughly $4 million. For comparison, Bitcoin is currently 
                over $1 trillion.
              </p>
              <p className="text-xl font-semibold">
                If you could go back to 2011 and buy Bitcoin, would you? Because this is that 
                moment again.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div className="mt-12 text-sm text-gray-500 text-center">
            <p>
              This is not financial advice. Never invest more than you can afford to lose. 
              Do your own research.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

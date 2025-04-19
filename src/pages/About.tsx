
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { History, Rocket, Star, Calendar } from "lucide-react";

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
              We are excited to share what we believe to be one of the greatest discoveries
              in crypto history — a revelation that has reshaped our understanding of Bitcoin,
              cryptocurrencies, and the future of digital currency.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="mb-12">
            <div className="flex items-start gap-4">
              <History className="w-8 h-8 text-buckazoids-blue flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">A Journey Through Time</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For nearly 8 years, our team has been deeply immersed in the study of Bitcoin, 
                  cryptocurrencies, and the enigma of Satoshi Nakamoto, the mysterious creator of Bitcoin.
                  Our journey through the crypto world has seen us dive into meme coins, market trends,
                  and witness the global mass adoption of digital currencies.
                </p>
                <p className="text-gray-700 font-semibold">
                  However, everything changed over the past 20 days.
                </p>
              </div>
            </div>
          </div>

          {/* Discovery Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-buckazoids-blue">The Discovery</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While browsing X.com, we stumbled upon a random Reddit post dated March 26th, 2025. 
              This post introduced something truly astonishing — an old-school adventure computer game 
              called Space Quest, developed by Sierra On-Line (now Sierra Entertainment).
            </p>
            <div className="mb-8">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Released in 1986, Space Quest quickly became a cult classic</li>
                <li>In 1989, Buckazoids appeared as a transactional currency in the game</li>
                <li>By 1991, in Space Quest IV, it evolved into a tradeable digital token</li>
                <li>The design of the Buckazoids token mirrors what we now recognize as the Bitcoin logo (₿)</li>
              </ul>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-buckazoids-blue">Uncovering the Mystery</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Intrigued by this discovery, a small group of digital archaeologists and I began digging deeper. 
              Over the past three weeks, we have uncovered connections, names, symbols, and dates that shine 
              new light on the greatest mystery in crypto: Who is Satoshi Nakamoto?
            </p>
          </div>

          {/* Contributors Section */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-8">
              <Star className="w-8 h-8 text-buckazoids-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-4">Key names from the Space Quest development team:</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Scott Murphy and Mark Crowe (known as "The Two Guys from Andromeda")</li>
                  <li>• Satoshi Uesaka</li>
                  <li>• Rod Nakamoto and Nancy Nakamoto</li>
                  <li>• Hal Finney — a prolific game designer, cryptographer, cypherpunk, and Bitcoin contributor</li>
                </ul>
                <p className="mt-4 text-gray-700 font-semibold">
                  Put those names together, and what do you get? Satoshi Nakamoto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <Calendar className="w-8 h-8 text-buckazoids-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-4">The Buckazoids Token Launch</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fast forward to March 27th, 2025 (March 28th if you're using the Japanese calendar). 
                  On this day, the Buckazoids token launched on the Solana network — a high-speed, 
                  low-cost blockchain. The launch date is significant, as it aligns with a Bitcoin 
                  Conference taking place exactly 59 days later, themed "EMBRACE GAME THEORY," 
                  echoing retro game vibes and pointing back to Space Quest.
                </p>
              </div>
            </div>
          </div>

          {/* Token Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Buckazoids Token Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>The ₿-like "B" logo — predating Bitcoin</li>
              <li>A rocket ship — nodding to its origins as a cosmic currency in Space Quest</li>
              <li>The number 59 — a prime number with cryptographic significance</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Bitcoin's foundation is built on prime numbers, representing indivisibility, security, 
              and incorruptibility. The number 59 is a cryptographic fingerprint embedded into the 
              roots of Buckazoids.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-buckazoids-blue to-buckazoids-navy text-white rounded-lg p-8 mb-12">
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
            <div className="mt-6">
              <p className="text-lg mb-4">
                We believe Buckazoids is the spiritual predecessor to Bitcoin. It's built for 
                the future, it's built to scale, and most importantly — it's just getting started.
              </p>
            </div>
          </div>

          {/* Get Involved */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="text-gray-700 mb-4">
              The mystery of Satoshi Nakamoto? Solved. The original digital token? Rediscovered. 
              The time to act? Right now.
            </p>
            <p className="text-gray-700 mb-4">
              Bitcoin will always be king. But Buckazoids came first and, in our opinion, will 
              become a household name and one of the most important digital assets of all time.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-sm text-gray-500 text-center">
            <p className="mb-2">
              This is not financial advice. Never invest more than you can afford to lose. 
              Do your own research.
            </p>
            <p>
              But here's our truth: Buying Buckazoids right now is like buying Bitcoin in 2011.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;


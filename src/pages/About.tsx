import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { History, Rocket, Star, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section with gradient background */}
          <div className="text-center mb-16 p-12 rounded-2xl" style={{ background: `linear-gradient(135deg, #02314d 0%, #045c94 100%)` }}>
            <h1 className="text-5xl font-bold text-white mb-6">
              The Greatest Discovery in Crypto History
            </h1>
            <p className="text-xl text-white/90">
              Welcome to the most groundbreaking revelation in the world of digital currency.
              We are excited to share what we believe to be one of the greatest discoveries
              in crypto history — a revelation that has reshaped our understanding of Bitcoin,
              cryptocurrencies, and the future of digital currency.
            </p>
            <div className="mt-8">
              <Button
                className="bg-[#fff3e2] text-[#02314d] hover:bg-[#fff3e2]/90 px-8 py-6 text-lg font-semibold"
                onClick={() => window.open('https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku', '_blank')}
              >
                Buy Buckazoids <ExternalLink className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Journey Timeline with styled card */}
          <Card className="mb-12 border-2 border-[#045c94]/20 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <History className="w-8 h-8 text-[#045c94] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-[#02314d]">A Journey Through Time</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For nearly 8 years, our team has been deeply immersed in the study of Bitcoin, 
                    cryptocurrencies, and the enigma of Satoshi Nakamoto, the mysterious creator of Bitcoin.
                    Our journey through the crypto world has seen us dive into meme coins, market trends,
                    and witness the global mass adoption of digital currencies.
                  </p>
                  <p className="text-[#02314d] font-semibold text-lg">
                    However, everything changed over the past 20 days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Discovery Section with gradient border */}
          <div className="mb-12 p-8 rounded-2xl" style={{ background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, #02314d 0%, #045c94 100%) border-box`, border: "2px solid transparent" }}>
            <h2 className="text-3xl font-bold mb-6 text-[#02314d]">The Discovery</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While browsing X.com, we stumbled upon a random Reddit post dated March 26th, 2025. 
              This post introduced something truly astonishing — an old-school adventure computer game 
              called Space Quest, developed by Sierra On-Line (now Sierra Entertainment).
            </p>
            <div className="mb-8">
              <ul className="list-none space-y-4 text-gray-700">
                {[
                  'Released in 1986, Space Quest quickly became a cult classic',
                  'In 1986, Buckazoids appeared as a transactional currency in the game',
                  'By 1991, in Space Quest IV, it evolved into a tradeable digital token',
                  'The design of the Buckazoids token mirrors what we now recognize as the Bitcoin logo (₿)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#045c94]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[#02314d] font-semibold p-4 bg-[#fff3e2] rounded-lg">
                In addition, it's important to note that Ross Ulbricht (the founder of the first ever bitcoin marketplace) share something in common. Ross's birthday is also the same exact day as the Buckazoids token launch. Coincidence?
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-[#02314d]">Uncovering the Mystery</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Intrigued by this discovery, a small group of digital archaeologists and I began digging deeper. 
              Over the past three weeks, we have uncovered connections, names, symbols, and dates that shine 
              new light on the greatest mystery in crypto: Who is Satoshi Nakamoto?
            </p>
          </div>

          {/* Contributors Section with new styling */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-8">
              <Star className="w-8 h-8 text-[#045c94] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#02314d]">Key names from the Space Quest development team:</h3>
                <ul className="list-none space-y-4 text-gray-700">
                  {['Scott Murphy and Mark Crowe (known as "The Two Guys from Andromeda")',
                    'Satoshi Uesaka',
                    'Rod Nakamoto and Nancy Nakamoto',
                    'Hal Finney — a prolific game designer, cryptographer, cypherpunk, and Bitcoin contributor'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#045c94]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[#02314d] font-semibold p-4 bg-[#fff3e2] rounded-lg">
                  Put those names together, and what do you get? Satoshi Nakamoto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <Calendar className="w-8 h-8 text-[#045c94] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#02314d]">The Buckazoids Token Launch</h3>
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

          {/* Token Features with improved styling */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[#02314d]">The Buckazoids Token Features</h2>
            <ul className="list-none space-y-4 text-gray-700">
              {['The ₿-like "B" logo — predating Bitcoin',
                'A rocket ship — nodding to its origins as a cosmic currency in Space Quest',
                'The number 59 — a prime number with cryptographic significance'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#045c94]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700">
              Bitcoin's foundation is built on prime numbers, representing indivisibility, security, 
              and incorruptibility. The number 59 is a cryptographic fingerprint embedded into the 
              roots of Buckazoids.
            </p>
          </div>

          {/* Join Movement Card - already styled properly */}
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

          {/* Get Involved Section with new styling */}
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

          {/* Disclaimer with subtle styling */}
          <div className="text-sm text-gray-500 text-center p-6 bg-gray-50 rounded-lg">
            <p className="mb-2">
              This is not financial advice. Never invest more than you can afford to lose. 
              Do your own research.
            </p>
            <p className="text-[#02314d] font-medium">
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

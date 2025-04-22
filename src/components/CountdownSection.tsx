
import CountdownTimer from './CountdownTimer';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const CountdownSection = () => {
  return (
    <section className="bg-gradient-to-r from-buckazoids-blue to-buckazoids-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Bitcoin 2025 - Las Vegas
          </h2>
          <div className="bg-black/50 rounded-xl p-8 shadow-lg backdrop-blur-sm">
            <CountdownTimer />
            <div className="mt-8 space-y-6">
              <h3 className="text-3xl font-semibold text-buckazoids-yellow">
                Exclusive Community Discount 🔥
              </h3>
              <p className="text-xl text-white max-w-2xl mx-auto font-medium">
                All Buckazoids can now attend Bitcoin Conference 2025 at a 21% discount.
              </p>
              <div className="space-y-4">
                <p className="text-white text-lg">
                  🎟️ Link: <a href="https://bm.b.tc/buckazoids" className="text-buckazoids-yellow hover:underline font-medium">bm.b.tc/buckazoids</a>
                </p>
                <p className="text-white text-lg">
                  💬 Code: <span className="font-mono bg-buckazoids-yellow/30 px-3 py-1 rounded text-white font-bold">buckazoids</span>
                </p>
              </div>
              <Button 
                className="bg-buckazoids-yellow hover:bg-buckazoids-orange text-black font-bold mt-6 w-full md:w-auto text-lg"
                onClick={() => window.open('https://bm.b.tc/buckazoids', '_blank')}
              >
                Get Your Tickets <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;

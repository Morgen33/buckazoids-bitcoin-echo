
import CountdownTimer from './CountdownTimer';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const CountdownSection = () => {
  return (
    <section className="bg-gradient-to-r from-buckazoids-blue to-buckazoids-navy py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Bitcoin 2025 - Las Vegas
          </h2>
          <div className="bg-white/10 rounded-xl p-8 shadow-lg backdrop-blur-sm">
            <CountdownTimer />
            <div className="mt-8 space-y-6">
              <h3 className="text-3xl font-semibold text-buckazoids-orange">
                Exclusive Community Discount 🔥
              </h3>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                All Buckazoids can now attend Bitcoin Conference 2025 at a 21% discount.
              </p>
              <div className="space-y-4">
                <p className="text-gray-200">
                  🎟️ Link: <a href="https://bm.b.tc/buckazoids" className="text-buckazoids-orange hover:underline">bm.b.tc/buckazoids</a>
                </p>
                <p className="text-gray-200">
                  💬 Code: <span className="font-mono bg-buckazoids-orange/20 px-3 py-1 rounded text-buckazoids-orange">buckazoids</span>
                </p>
              </div>
              <Button 
                className="bg-buckazoids-orange hover:bg-buckazoids-yellow text-white mt-6 w-full md:w-auto"
                onClick={() => window.open('https://bm.b.tc/buckazoids', '_blank')}
              >
                Get Your Tickets <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;

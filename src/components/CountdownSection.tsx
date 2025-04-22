
import CountdownTimer from './CountdownTimer';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const CountdownSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bitcoin 2025 - Las Vegas
          </h2>
          <CountdownTimer />
          <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-semibold text-buckazoids-orange">
              Exclusive Community Discount 🔥
            </h3>
            <p className="text-lg text-gray-600">
              All Buckazoids can now attend Bitcoin Conference 2025 at a 21% discount.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                🎟️ Link: <a href="https://bm.b.tc/buckazoids" className="text-buckazoids-orange hover:underline">bm.b.tc/buckazoids</a>
              </p>
              <p className="text-gray-600">
                💬 Code: <span className="font-mono bg-gray-100 px-2 py-1 rounded">buckazoids</span>
              </p>
            </div>
            <Button 
              className="bg-buckazoids-orange hover:bg-buckazoids-yellow text-white mt-4"
              onClick={() => window.open('https://bm.b.tc/buckazoids', '_blank')}
            >
              Get Your Tickets <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;

import { Button } from "@/components/ui/button";
import { ExternalLink, History, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-[#FFF5E6] py-24" id="intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Rediscovery of Buckazoids
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The world needs to know that Buckazoids was the first digital currency that showcased the Bitcoin logo before the creation of Bitcoin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <History className="text-buckazoid-orange w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">A Digital Currency From 1989</h3>
            <p className="text-gray-600 mb-6">
              Not everyone is aware that Buckazoids were featured in Star Control, showcasing a digital currency years before Bitcoin was conceived. This rediscovery could lead to more clues on Who is Satoshi Nakamoto.
            </p>
            <Button variant="outline" className="border-buckazoid-blue text-buckazoid-blue hover:bg-buckazoid-blue/10">
              Learn History <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <TrendingUp className="text-buckazoid-orange w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-buckazoid-blue mb-4">Easter Eggs & Connections</h3>
            <p className="text-gray-600 mb-6">
              The similarities between Buckazoids and Bitcoin go beyond coincidence. Explore the connections, easter eggs, and potential clues that might reveal more about cryptocurrency's mysterious origins.
            </p>
            <Button variant="outline" className="border-buckazoid-orange text-buckazoid-orange hover:bg-buckazoid-orange/10">
              Discover Connections <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

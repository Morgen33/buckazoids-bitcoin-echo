
import { Button } from "@/components/ui/button";
import { ExternalLink, History, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  const handleLearnHistoryClick = () => {
    navigate('/community');
  };

  const handleDiscoverMoreClick = () => {
    navigate('/about');
  };

  return (
    <section className="bg-[#FFF5E6] py-24 mt-0" id="intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Buckazoids
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Buckazoids built on the Solana blockchain, uniquely bridges the worlds of classic gaming and cryptocurrency history. Originally featured as the fictional currency in Sierra's legendary "Space Quest" series, Buckazoids notably showcased a ₿ decades before Bitcoin's creation. Rediscovered through a viral Reddit post in March 2025, Buckazoids quickly captivated both gaming and crypto enthusiasts worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <History className="text-buckazoid-orange w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Community & Growth</h3>
            <p className="text-gray-600 mb-6">
              Today, Buckazoids boasts over 10,000 dedicated wallet holders and an organically grown, international community spanning China, Brazil, Greece, Southeast Asia, and Spanish-speaking regions. With no presale or venture capital backing, its growth remains authentic and community-driven.
            </p>
            <Button 
              variant="outline" 
              className="border-buckazoid-blue text-buckazoid-blue hover:bg-buckazoid-blue/10"
              onClick={handleLearnHistoryClick}
            >
              Learn More <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <TrendingUp className="text-buckazoid-orange w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-buckazoid-blue mb-4">Cultural Significance</h3>
            <p className="text-gray-600 mb-6">
              As Buckazoids continues its rise, it represents not only a nostalgic nod to gaming history but also a genuine cultural artifact linking digital nostalgia to blockchain innovation.
            </p>
            <Button 
              variant="outline" 
              className="border-buckazoid-orange text-buckazoid-orange hover:bg-buckazoid-orange/10"
              onClick={handleDiscoverMoreClick}
            >
              Discover More <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

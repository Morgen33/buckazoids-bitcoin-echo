
import { Button } from "@/components/ui/button";
import { ExternalLink, History, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  const handleLearnHistoryClick = () => {
    navigate('/about');
  };

  return (
    <section className="bg-[#FFF5E6] py-24" id="intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Buckazoids
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Buckazoids built on the Solana blockchain, uniquely bridges the worlds of classic gaming and cryptocurrency history. Originally featured as the fictional currency in Sierra's legendary "Space Quest" series, Buckazoids notably showcased a vertical "8" decades before Bitcoin's creation.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Rediscovered through a viral Reddit post in March 2025, Buckazoids quickly captivated both gaming and crypto enthusiasts worldwide. Today, it boasts over 11,900 dedicated wallet holders and an organically grown, international community spanning China, Brazil, Greece, Southeast Asia, and Spanish-speaking regions.
          </p>
          <Button 
            variant="outline" 
            className="border-buckazoid-orange text-buckazoid-orange hover:bg-buckazoid-orange/10"
            onClick={handleLearnHistoryClick}
          >
            Learn More About Our History <ExternalLink className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

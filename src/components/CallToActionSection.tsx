
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-buckazoid-navy to-buckazoid-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-buckazoid-dark rounded-lg shadow-xl p-8 sm:p-12 md:p-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-buckazoid-yellow mb-6">
              Join the Buckazoid Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Be part of cryptocurrency history as we revive this fascinating piece of digital currency lore and explore its connections to modern Bitcoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white px-8 py-6 text-lg">
                Get Started Now
              </Button>
              <Button variant="outline" className="border-buckazoid-yellow text-buckazoid-yellow hover:bg-buckazoid-yellow hover:text-buckazoid-dark px-8 py-6 text-lg">
                Read White Paper <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 sm:p-12 md:p-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-buckazoids-blue mb-6">
              Join the Buckazoids Revolution
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Be part of cryptocurrency history as we revive this fascinating piece of digital currency lore and explore its connections to modern Bitcoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-buckazoids-orange hover:bg-buckazoids-yellow text-white px-8 py-6 text-lg">
                Get Started Now
              </Button>
              <Button variant="outline" className="border-buckazoids-blue text-buckazoids-blue hover:bg-buckazoids-blue hover:text-white px-8 py-6 text-lg">
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

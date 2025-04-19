
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const WhitePaperSection = () => {
  return (
    <section className="bg-white py-24" id="whitepaper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-buckazoid-blue mb-6">
              Buckazoids White Paper
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Explore the comprehensive documentation that explains the history, technology, and significance of Buckazoids as the predecessor to modern cryptocurrency.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-4 mt-1">
                  <FileText className="text-buckazoid-orange w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-buckazoid-blue">Historical Context</h3>
                  <p className="text-gray-600">Uncover the origins of Buckazoids in the Star Control universe and its parallels to Bitcoin.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-4 mt-1">
                  <FileText className="text-buckazoid-orange w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-buckazoid-blue">Technical Analysis</h3>
                  <p className="text-gray-600">In-depth examination of the conceptual framework that predated blockchain technology.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-4 mt-1">
                  <FileText className="text-buckazoid-orange w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-buckazoid-blue">The Satoshi Connection</h3>
                  <p className="text-gray-600">Evidence and theories exploring the link between Buckazoids and Satoshi Nakamoto.</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white px-6 py-2 text-lg"
              onClick={() => window.open('https://github.com/Buckazoidscto/Buckazoids-white-paper-CTO-/wiki/Buckazoids-white-paper-English(CTO)', '_blank')}
            >
              <Download className="mr-2" size={18} />
              View Technical Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaperSection;

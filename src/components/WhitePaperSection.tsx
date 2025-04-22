import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const WhitePaperSection = () => {
  return (
    <section className="bg-white py-24" id="whitepaper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-buckazoid-blue mb-6">
            Buckazoids White Paper
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-xl font-semibold text-buckazoid-blue">BUCKAZOIDS (CTO)</span>
          </div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
            Explore the comprehensive documentation that explains the history, technology, and significance of Buckazoids as the predecessor to modern cryptocurrency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
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

          <div className="space-y-6 bg-[#FDE1D3] p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-buckazoid-blue">White Paper Excerpt:</h4>
            <p className="text-gray-700 leading-relaxed">
              "Buckazoids were introduced in Star Control (1990) as a universal currency used for trade throughout the galaxy... The circular gold coin with the distinctive 'B' symbol bears a striking resemblance to what would later become the Bitcoin logo..."
            </p>
            <p className="text-gray-700 leading-relaxed">
              "This remarkable coincidence raises questions about whether the creators of Bitcoin were inspired by this early digital currency concept, or if there are deeper connections yet to be discovered..."
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white px-6 py-2 text-lg"
            onClick={() => window.open('https://github.com/Buckazoidscto/Buckazoids-white-paper-CTO-/wiki/Buckazoids-white-paper-English(CTO)', '_blank')}
          >
            <Download className="mr-2" size={18} />
            View Whitepaper
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhitePaperSection;

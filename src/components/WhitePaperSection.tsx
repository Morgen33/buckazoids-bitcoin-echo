
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhitePaperSection = () => {
  return (
    <section className="bg-gradient-to-b from-buckazoid-navy to-buckazoid-dark py-24" id="whitepaper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-buckazoid-yellow mb-6">
              Buckazoids White Paper
            </h2>
            <p className="text-white text-lg mb-8">
              Explore the comprehensive documentation that explains the history, technology, and significance of Buckazoids as the predecessor to modern cryptocurrency.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-buckazoid-blue/20 p-2 rounded-full mr-4 mt-1">
                  <FileText className="text-buckazoid-yellow w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-buckazoid-orange">Historical Context</h3>
                  <p className="text-gray-300">Uncover the origins of Buckazoids in the Star Control universe and its parallels to Bitcoin.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-buckazoid-blue/20 p-2 rounded-full mr-4 mt-1">
                  <FileText className="text-buckazoid-yellow w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-buckazoid-orange">Technical Analysis</h3>
                  <p className="text-gray-300">In-depth examination of the conceptual framework that predated blockchain technology.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-buckazoid-blue/20 p-2 rounded-full mr-4 mt-1">
                  <FileText className="text-buckazoid-yellow w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-buckazoid-orange">The Satoshi Connection</h3>
                  <p className="text-gray-300">Evidence and theories exploring the link between Buckazoids and Satoshi Nakamoto.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white px-6 py-2 text-lg">
              <Download className="mr-2" size={18} />
              Download White Paper
            </Button>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <Card className="w-full max-w-md bg-buckazoid-navy border border-buckazoid-blue/20">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <img src="/logo.svg" alt="Buckazoid Logo" className="h-10 w-10 mr-3" />
                    <h3 className="text-xl font-bold text-buckazoid-yellow">BUCKAZOIDS</h3>
                  </div>
                  <span className="text-sm text-gray-400">CTO</span>
                </div>
                
                <div className="space-y-4 text-white">
                  <h4 className="text-lg font-semibold text-buckazoid-orange">White Paper Excerpt:</h4>
                  <p className="text-sm text-gray-300">
                    "Buckazoids were introduced in Star Control (1990) as a universal currency used for trade throughout the galaxy... The circular gold coin with the distinctive 'B' symbol bears a striking resemblance to what would later become the Bitcoin logo..."
                  </p>
                  <p className="text-sm text-gray-300">
                    "This remarkable coincidence raises questions about whether the creators of Bitcoin were inspired by this early digital currency concept, or if there are deeper connections yet to be discovered..."
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-buckazoid-blue/20 flex justify-between items-center">
                  <span className="text-sm text-gray-400">Full document available</span>
                  <Button variant="ghost" className="text-buckazoid-yellow hover:text-buckazoid-orange hover:bg-transparent p-0">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaperSection;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Twitter, Github, MessageCircle } from "lucide-react";

const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="py-24 bg-[#FFF5E6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-buckazoid-blue mb-4">
                Join Our Community
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with fellow Buckazoid enthusiasts, developers, and crypto historians to explore this rediscovered piece of digital currency history.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Twitter className="text-buckazoid-blue w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-buckazoid-blue mb-4">Twitter</h3>
                <p className="text-gray-600 mb-6">
                  Follow us for the latest updates, community events, and discussions about Buckazoids and crypto history.
                </p>
                <Button 
                  className="bg-buckazoid-blue hover:bg-buckazoid-orange text-white"
                  onClick={() => window.open('https://x.com/BuckazoidsSOL', '_blank')}
                >
                  Follow @Buckazoids
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="text-buckazoid-orange w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-buckazoid-orange mb-4">Discord</h3>
                <p className="text-gray-600 mb-6">
                  Join our vibrant Discord community to discuss theories, share discoveries, and connect with like-minded enthusiasts.
                </p>
                <Button 
                  className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white"
                  onClick={() => window.open('https://discord.gg/HqdBVYa4qq', '_blank')}
                >
                  Join Discord
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Github className="text-buckazoid-blue w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-buckazoid-blue mb-4">White Paper</h3>
                <p className="text-gray-600 mb-6">
                  Read our comprehensive white paper to understand the history and vision behind the Buckazoids project.
                </p>
                <Button 
                  className="bg-buckazoid-blue hover:bg-buckazoid-orange text-white"
                  onClick={() => window.open('https://github.com/Buckazoidscto/Buckazoids-white-paper-', '_blank')}
                >
                  View White Paper
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Twitter, Github, MessageCircle, Pill, Youtube } from "lucide-react";

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

            <div className="grid grid-cols-1 md:grid-cols-9 gap-8">
              <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
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

              <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Twitter className="text-buckazoid-orange w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-buckazoid-orange mb-4">Documenting Buckazoids</h3>
                <p className="text-gray-600 mb-6">
                  Explore the rich lore and history of Buckazoids through our dedicated documentation channel.
                </p>
                <Button 
                  className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white"
                  onClick={() => window.open('https://x.com/@59Buckazoids', '_blank')}
                >
                  Follow @59Buckazoids
                </Button>
              </div>

              <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
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

              <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Youtube className="text-buckazoid-orange w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-buckazoid-orange mb-4">YouTube</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our YouTube channel to watch videos about Buckazoids history, updates, and community highlights.
                </p>
                <Button 
                  className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white"
                  onClick={() => window.open('https://www.youtube.com/@DocumentingBuckazoids', '_blank')}
                >
                  Watch on YouTube
                </Button>
              </div>

              <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="text-buckazoid-blue w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-buckazoid-blue mb-4">Reddit</h3>
                <p className="text-gray-600 mb-6">
                  Join our Reddit community to discuss Buckazoids, share insights, and stay updated with the latest developments.
                </p>
                <Button 
                  className="bg-buckazoid-blue hover:bg-buckazoid-navy text-white"
                  onClick={() => window.open('https://www.reddit.com/r/Buckazoids/', '_blank')}
                >
                  Join r/Buckazoids
                </Button>
              </div>

              <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
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

              <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Pill className="text-buckazoid-blue w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-buckazoid-blue mb-4">Pump.fun</h3>
                <p className="text-gray-600 mb-6">
                  Visit the birthplace of Buckazoids on the Solana blockchain and explore where it all began.
                </p>
                <Button 
                  className="bg-buckazoid-blue hover:bg-buckazoid-orange text-white"
                  onClick={() => window.open('https://pump.fun/coin/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump', '_blank')}
                >
                  View on Pump.fun
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

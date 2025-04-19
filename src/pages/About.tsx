
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-buckazoids-blue mb-6">About Buckazoids</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Buckazoids, a digital currency first conceptualized in 1989, has been rediscovered 
            and reimagined for the modern era. Our mission is to bridge the nostalgia of classic 
            gaming with contemporary blockchain technology.
          </p>
          <p className="text-lg mb-6">
            Originally appearing in the Star Control universe, Buckazoids represented a universal 
            currency used across the galaxy. Today, we're bringing that concept to life as a 
            modern digital asset, while paying homage to its gaming heritage.
          </p>
          <p className="text-lg">
            Our project combines the imaginative spirit of classic gaming with the innovative 
            potential of blockchain technology, creating a unique intersection of nostalgia and 
            future-facing digital finance.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

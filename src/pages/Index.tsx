
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import ExchangesSection from "@/components/ExchangesSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Header />
      <main className="flex-grow relative">
        <div className="relative z-10">
          <HeroSection />
        </div>
        <div className="relative z-10">
          <ExchangesSection />
        </div>
        <div className="relative z-20">
          <OverviewSection />
        </div>
        <div className="relative z-10">
          <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <OverviewSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

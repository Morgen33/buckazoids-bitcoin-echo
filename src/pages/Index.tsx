
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhitePaperSection from "@/components/WhitePaperSection";
import CallToActionSection from "@/components/CallToActionSection";
import OverviewSection from "@/components/OverviewSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <OverviewSection />
        <AboutSection />
        <WhitePaperSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

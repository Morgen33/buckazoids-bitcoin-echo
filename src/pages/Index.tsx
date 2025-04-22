
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CallToActionSection from "@/components/CallToActionSection";
import OverviewSection from "@/components/OverviewSection";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <OverviewSection />
        <AboutSection />
        <VideoSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

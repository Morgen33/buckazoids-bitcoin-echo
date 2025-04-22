
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import OverviewSection from "@/components/OverviewSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import CallToActionSection from "@/components/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CountdownSection />
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

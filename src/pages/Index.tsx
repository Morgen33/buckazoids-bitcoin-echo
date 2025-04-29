
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const Index = () => {
  const [lastRefresh, setLastRefresh] = useState<string>("");

  // Simple refresh function without any complex logic or dependencies
  const handleRefreshClick = () => {
    // Clear browser cache for images by appending timestamp to URLs
    document.querySelectorAll('img').forEach(img => {
      if (img.src) {
        const cleanSrc = img.src.split('?')[0]; // Remove any existing query params
        img.src = `${cleanSrc}?v=${Date.now()}`;
      }
    });

    // Set local storage flag to indicate this is a fresh load
    localStorage.setItem('buckazoids_last_refresh', new Date().toISOString());
    setLastRefresh(new Date().toISOString());

    console.log('Manual cache refresh attempted:', new Date().toISOString());
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Header />
      <main className="flex-grow relative">
        <div className="fixed bottom-4 right-4 z-50">
          <Button 
            onClick={handleRefreshClick}
            className="bg-buckazoids-orange hover:bg-buckazoids-yellow flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" /> Refresh Page
          </Button>
        </div>
        <div className="relative z-10">
          <HeroSection />
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

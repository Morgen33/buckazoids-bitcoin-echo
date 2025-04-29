
import { useState, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

// Lazy load non-critical sections
const OverviewSection = lazy(() => import("@/components/OverviewSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));

const Index = () => {
  const [lastRefresh, setLastRefresh] = useState<string>("");

  // Optimized refresh function that doesn't force reload of all images
  const handleRefreshClick = () => {
    // Create a unique timestamp for cache-busting only critical images
    const timestamp = Date.now();
    
    // Only refresh images that need to be updated (could be specific ones that change often)
    document.querySelectorAll('img[data-refresh="true"]').forEach(img => {
      // Cast the HTML element to HTMLImageElement to access the src property safely
      const imgElement = img as HTMLImageElement;
      if (imgElement.src) {
        const cleanSrc = imgElement.src.split('?')[0]; // Remove any existing query params
        imgElement.src = `${cleanSrc}?v=${timestamp}`;
      }
    });

    // Set local storage flag to indicate this is a fresh load
    localStorage.setItem('buckazoids_last_refresh', new Date().toISOString());
    setLastRefresh(new Date().toISOString());

    console.log('Selective cache refresh at:', new Date().toISOString());
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
        
        <Suspense fallback={
          <div className="h-[400px] flex items-center justify-center bg-gray-100">
            <div className="animate-pulse w-12 h-12 rounded-full bg-gray-300"></div>
          </div>
        }>
          <div className="relative z-20">
            <OverviewSection />
          </div>
        </Suspense>
        
        <Suspense fallback={
          <div className="h-[400px] flex items-center justify-center bg-white">
            <div className="animate-pulse w-12 h-12 rounded-full bg-gray-100"></div>
          </div>
        }>
          <div className="relative z-10">
            <AboutSection />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

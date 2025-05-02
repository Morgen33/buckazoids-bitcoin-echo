
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection"; // Direct import instead of lazy loading
import OverviewSection from "@/components/OverviewSection"; // Direct import instead of lazy loading
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { SEO } from "@/components/seo/SEO";
import { pageSeoData } from "@/config/seo-metadata";

// Global type declaration for the cache buster
declare global {
  interface Window {
    CACHE_BUSTER: string;
  }
}

const Index = () => {
  const [lastRefresh, setLastRefresh] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [refreshCount, setRefreshCount] = useState(0);

  // Set loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Super aggressive refresh function that forces a complete reload
  const handleRefreshClick = () => {
    // Create a unique timestamp for cache-busting all assets
    const timestamp = Date.now();
    
    // Update global cache buster
    window.CACHE_BUSTER = `force-${timestamp}`;
    
    // Update all images with data-refresh attribute
    document.querySelectorAll('img[data-refresh="true"]').forEach(img => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.src) {
        const cleanSrc = imgElement.src.split('?')[0]; // Remove any existing query params
        imgElement.src = `${cleanSrc}?v=${timestamp}`;
      }
    });

    // Force reload of CSS files by adding a new timestamp
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const linkElement = link as HTMLLinkElement;
      const href = linkElement.href;
      if (href) {
        const newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = `${href.split('?')[0]}?v=${timestamp}`;
        document.head.appendChild(newLink);
        
        // Remove the old link after the new one is loaded
        newLink.onload = () => linkElement.remove();
      }
    });

    // Set local storage flag to indicate this is a fresh load
    localStorage.setItem('buckazoids_last_refresh', new Date().toISOString());
    localStorage.setItem('buckazoids_cache_version', `force-${timestamp}`);
    setLastRefresh(new Date().toISOString());

    // Reset loading state to force re-render components
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 100);
    
    // Increment refresh count
    setRefreshCount(prev => prev + 1);
    
    // Show toast message
    toast({
      title: "Cache refresh triggered",
      description: "Content has been refreshed from server. If still seeing old content, try hard-refreshing (Ctrl+F5)",
    });
    
    console.log('Aggressive cache refresh at:', new Date().toISOString());
    
    // If clicked multiple times, suggest hard refresh
    if (refreshCount >= 2) {
      if (confirm("Still seeing old content? Would you like to perform a hard refresh of the entire page?")) {
        window.location.reload();
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <SEO {...pageSeoData.home} />
      <Header />
      <main className="flex-grow relative">
        <div className="fixed bottom-4 right-4 z-50">
          <Button 
            onClick={handleRefreshClick}
            className="bg-buckazoids-orange hover:bg-buckazoids-yellow flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" /> Refresh Content
          </Button>
        </div>
        
        {/* Always load the hero section immediately */}
        <div className="relative z-10">
          <HeroSection key={`hero-${lastRefresh || 'initial'}`} />
        </div>
        
        {isLoading ? (
          <>
            <div className="h-[400px] flex items-center justify-center bg-gray-100">
              <div className="animate-pulse w-12 h-12 rounded-full bg-gray-300"></div>
            </div>
            <div className="h-[400px] flex items-center justify-center bg-white">
              <div className="animate-pulse w-12 h-12 rounded-full bg-gray-100"></div>
            </div>
          </>
        ) : (
          <>
            <div className="relative z-20">
              <OverviewSection key={`overview-${lastRefresh || 'initial'}`} />
            </div>
            <div className="relative z-10">
              <AboutSection key={`about-${lastRefresh || 'initial'}`} />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

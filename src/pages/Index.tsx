
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { RefreshCw } from "lucide-react";

const Index = () => {
  const [lastRefresh, setLastRefresh] = useState<string>("");
  
  // Super aggressive cache refresh strategy
  const forceRefresh = () => {
    // Clear browser cache for images by appending timestamp to URLs
    document.querySelectorAll('img').forEach(img => {
      if (img.src) {
        const cleanSrc = img.src.split('?')[0]; // Remove any existing query params
        img.src = `${cleanSrc}?v=${Date.now()}`;
      }
    });
    
    // Force refresh styles
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      try {
        const sheet = styleSheets[i];
        if (sheet.href) {
          // Create a new link element with updated URL
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          const cleanHref = sheet.href.split('?')[0]; // Remove any existing query params
          link.href = `${cleanHref}?v=${Date.now()}`;
          document.head.appendChild(link);
        }
      } catch (e) {
        console.error('Error processing stylesheet:', e);
      }
    }
    
    // Set local storage flag to indicate this is a fresh load
    localStorage.setItem('buckazoids_last_refresh', new Date().toISOString());
    setLastRefresh(new Date().toISOString());
    
    // Show a toast notification
    toast({
      title: "Page refreshed",
      description: "All cached content has been refreshed.",
    });
    
    console.log('Cache refresh attempted for images:', new Date().toISOString());
  };
  
  useEffect(() => {
    // Define a function for the event handler
    const handleLoad = () => {
      forceRefresh();
    };
    
    // Try to refresh immediately after component mounts
    forceRefresh();
    
    // Also try after everything has fully loaded
    window.addEventListener('load', handleLoad);
    
    // And periodically check for updates (every 30 seconds)
    // Fix: Using arrow function to wrap forceRefresh to avoid timer ID being passed automatically
    const intervalId = setInterval(() => {
      forceRefresh();
    }, 30000);
    
    // Check if this is the first load after a deploy
    const lastVersion = localStorage.getItem('buckazoids_version');
    const currentVersion = "2025-04-29"; // Updated to today's date
    
    if (lastVersion !== currentVersion) {
      // New version detected, force hard refresh
      localStorage.setItem('buckazoids_version', currentVersion);
      window.location.reload(true);
    }
    
    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Header />
      <main className="flex-grow relative">
        <div className="fixed bottom-4 right-4 z-50">
          <Button 
            onClick={() => {
              forceRefresh();
              window.location.reload(true);
            }}
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

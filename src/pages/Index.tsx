
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  // Enhanced cache refresh strategy
  useEffect(() => {
    // Clear browser cache for images by appending timestamp to URLs
    const refreshImages = () => {
      document.querySelectorAll('img').forEach(img => {
        if (img.src && !img.src.includes('?v=')) {
          img.src = `${img.src}?v=${Date.now()}`;
        }
      });
      
      // Force refresh styles
      const styleSheets = document.styleSheets;
      for (let i = 0; i < styleSheets.length; i++) {
        try {
          const sheet = styleSheets[i];
          if (sheet.href && !sheet.href.includes('?v=')) {
            // Create a new link element with updated URL
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${sheet.href}?v=${Date.now()}`;
            document.head.appendChild(link);
          }
        } catch (e) {
          console.error('Error processing stylesheet:', e);
        }
      }
      
      console.log('Enhanced cache refresh attempted:', new Date().toISOString());
    };
    
    // Try to refresh immediately after component mounts
    refreshImages();
    
    // Also try after everything has fully loaded
    window.addEventListener('load', refreshImages);
    
    // And periodically check for updates (every 60 seconds)
    const intervalId = setInterval(refreshImages, 60000);
    
    return () => {
      window.removeEventListener('load', refreshImages);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Header />
      <main className="flex-grow relative">
        <div className="relative z-10">
          <HeroSection />
        </div>
        <div className="relative z-20">
          <OverviewSection />
        </div>
        <div className="relative z-10">
          <AboutSection />
        </div>
        <div className="relative z-20">
          <VideoSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

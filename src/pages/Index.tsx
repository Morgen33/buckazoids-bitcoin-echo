
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  // Force cache refresh strategy
  useEffect(() => {
    // Clear browser cache for images by appending timestamp to URLs
    const refreshImages = () => {
      document.querySelectorAll('img').forEach(img => {
        if (img.src && !img.src.includes('?v=')) {
          img.src = `${img.src}?v=${Date.now()}`;
        }
      });
      
      console.log('Cache refresh attempted for images:', new Date().toISOString());
    };
    
    // Try to refresh after component mounts
    refreshImages();
    
    // Also try after everything has fully loaded
    window.addEventListener('load', refreshImages);
    return () => window.removeEventListener('load', refreshImages);
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;

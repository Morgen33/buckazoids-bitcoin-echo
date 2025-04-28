
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import BuyInstructions from "@/components/BuyInstructions";

const Buy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <VideoSection />
        <BuyInstructions />
      </main>
      <Footer />
    </div>
  );
};

export default Buy;


import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import BuyInstructions from "@/components/BuyInstructions";
import { SEO } from "@/components/seo/SEO";
import { pageSeoData } from "@/config/seo-metadata";

const Buy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO {...pageSeoData.buy} pageName="Buy Buckazoids" />
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

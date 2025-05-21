
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
        <div className="pt-6 md:pt-10 px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-buckazoid-navy">Buy Buckazoids</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Follow these simple steps to purchase Buckazoids on the Solana blockchain.</p>
        </div>
        <VideoSection />
        <BuyInstructions />
      </main>
      <Footer />
    </div>
  );
};

export default Buy;

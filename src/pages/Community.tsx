
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { pageSeoData } from "@/config/seo-metadata";
import CommunityPlatforms from "@/components/community/CommunityPlatforms";

const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO {...pageSeoData.community} pageName="Community" />
      <Header />
      <main className="flex-grow">
        <section className="py-24 bg-[#FFF5E6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#02314d] mb-4">
                Join Our Community
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with fellow Buckazoid enthusiasts, developers, and crypto historians to explore this rediscovered piece of digital currency history.
              </p>
            </div>

            <CommunityPlatforms />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;

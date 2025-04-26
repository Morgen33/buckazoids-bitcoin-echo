
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import DiscoverySection from "@/components/about/DiscoverySection";
import ContributorsSection from "@/components/about/ContributorsSection";
import TokenFeatures from "@/components/about/TokenFeatures";
import CallToActionSection from "@/components/about/CallToActionSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <HeroSection />
          <JourneyTimeline />
          <DiscoverySection />
          <ContributorsSection />
          <TokenFeatures />
          <CallToActionSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

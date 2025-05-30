
import React from 'react';
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import DiscoverySection from "@/components/about/DiscoverySection";
import ContributorsSection from "@/components/about/ContributorsSection";
import TokenFeatures from "@/components/about/TokenFeatures";
import CallToActionSection from "@/components/about/CallToActionSection";
import { SEO } from "@/components/seo/SEO";
import { pageSeoData } from "@/config/seo-metadata";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO {...pageSeoData.about} pageName="About" />
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

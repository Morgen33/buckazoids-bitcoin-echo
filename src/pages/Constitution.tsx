
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { pageSeoData } from "@/config/seo-metadata";

const ConstitutionPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <SEO {...pageSeoData.constitution} pageName="Constitution" />
      <Header />
      <main className="flex-grow py-10 bg-[#000222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
            The Constitution of Buckazoids
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/9e99bc57-104a-4916-adcf-1ace2fe48074.png" 
                alt="Articles I-V of the Buckazoids Constitution" 
                className="w-full max-w-2xl shadow-2xl rounded-lg"
              />
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/3f1d23f2-d0cb-4041-b5d5-45eba24afa10.png" 
                alt="The 10 Commandments of the Buckazoids Community" 
                className="w-full max-w-2xl shadow-2xl rounded-lg"
              />
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/88460c69-0e87-450a-9dc4-40d9adaa6734.png" 
                alt="Preamble to the Buckazoids Constitution" 
                className="w-full max-w-2xl shadow-2xl rounded-lg"
              />
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/19951a2f-559f-4abd-baf7-211338ad3153.png" 
                alt="Core Values of the Buckazoids Community" 
                className="w-full max-w-2xl shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConstitutionPage;

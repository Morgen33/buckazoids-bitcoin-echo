
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHeader from "@/components/contact/ContactHeader";
import TwitterCard from "@/components/contact/TwitterCard";
import { SEO } from "@/components/seo/SEO";
import { pageSeoData } from "@/config/seo-metadata";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff9f2]">
      <SEO {...pageSeoData.contact} pageName="Contact Us" />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <ContactHeader 
            title="Contact Us"
            description="Connect with fellow Buckazoid enthusiasts, developers, and crypto historians to explore this rediscovered piece of digital currency history."
          />

          <div className="max-w-xl mx-auto mb-16 space-y-8">
            {/* Email Contact */}
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-buckazoids-blue mb-3">Email Us</h3>
              <a href="mailto:Buckazoids@ProjectB59.com" 
                 className="text-buckazoids-orange hover:text-buckazoids-blue transition-colors text-lg font-medium">
                Buckazoids@ProjectB59.com
              </a>
            </div>
            
            <TwitterCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;

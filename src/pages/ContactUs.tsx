
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHeader from "@/components/contact/ContactHeader";
import TwitterCard from "@/components/contact/TwitterCard";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff9f2]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <ContactHeader 
            title="Contact Us"
            description="Connect with fellow Buckazoid enthusiasts, developers, and crypto historians to explore this rediscovered piece of digital currency history."
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <TwitterCard />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;

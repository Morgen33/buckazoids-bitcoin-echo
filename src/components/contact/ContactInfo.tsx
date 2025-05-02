
import { Mail, MessageSquare } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="md:col-span-1 bg-[#f7931a] p-8 rounded-2xl text-white space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Connect With Us</h2>
        <p className="text-white/90">
          Join our growing community and stay updated with the latest news and developments.
        </p>
        <p className="text-white/90 mt-4">
          Find us on X {" "}
          <a 
            href="https://x.com/BuckazoidsWorld" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            @BuckazoidsWorld
          </a>
          {" "} and send a DM for faster response.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="space-y-2">
          <MessageSquare className="w-5 h-5 text-white" />
          <h3 className="font-medium">Community Support</h3>
          <p className="text-gray-100 text-sm">
            Join our Discord for real-time support.
          </p>
        </div>
        <div className="space-y-2">
          <Mail className="w-5 h-5 text-white" />
          <h3 className="font-medium">Email Support</h3>
          <p className="text-gray-100 text-sm">
            We respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

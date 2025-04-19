
import { Link } from "react-router-dom";
import { ExternalLink, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="Buckazoids Logo" className="h-8 w-8" />
              <span className="ml-2 text-lg font-bold text-buckazoids-blue">
                BUCKAZOIDS
              </span>
            </div>
            <p className="text-sm text-gray-500">
              A Digital Currency from 1989... Rediscovered in 2025
            </p>
          </div>
          
          <div>
            <h3 className="text-buckazoids-blue font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#whitepaper" className="text-gray-600 hover:text-buckazoids-orange text-sm flex items-center">
                  <span>White Paper</span>
                  <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-buckazoids-blue font-medium mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#discord" className="text-gray-600 hover:text-buckazoids-orange text-sm">
                  Discord
                </Link>
              </li>
              <li>
                <Link to="#twitter" className="text-gray-600 hover:text-buckazoids-orange text-sm flex items-center">
                  <span>Twitter</span>
                  <Twitter size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-buckazoids-blue font-medium mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#about" className="text-gray-600 hover:text-buckazoids-orange text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-buckazoids-orange text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-xs text-gray-500 space-y-6 mb-8">
            <p className="leading-relaxed">
              Buckazoids is not affiliated with, endorsed by, or in any way connected to Sierra On-Line, Universe, or any other gaming entities. All trademarks, logos, and intellectual property related to Sierra On-Line, Universe, or other gaming entities are the property of their respective owners. Our products and services are independently developed and are not associated with or sponsored by any gaming companies or entities.
            </p>
            <p className="leading-relaxed">
              Buckazoids is a memecoin created for entertainment and community purposes only. It is not a financial instrument, security, or investment product. Buckazoids has no intrinsic value, is not backed by any assets, and should not be considered a means of financial gain or a substitute for traditional currencies. Any participation in Buckazoids is at your own risk, and we make no representations or warranties regarding its value, stability, or future performance. Always conduct your own research and consult with a qualified financial advisor before engaging with any cryptocurrency or digital asset.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">
              © 2025 Buckazoids. All rights reserved. Not affiliated with the original creators of Star Control.
            </p>
            <div className="flex space-x-6">
              <a href="#twitter" className="text-gray-500 hover:text-buckazoids-orange">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

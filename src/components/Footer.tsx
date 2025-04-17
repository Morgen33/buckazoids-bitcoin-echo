
import { Link } from "react-router-dom";
import { ExternalLink, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-buckazoid-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="Buckazoid Logo" className="h-8 w-8" />
              <span className="ml-2 text-lg font-bold text-buckazoid-yellow">
                BUCKAZOID
              </span>
            </div>
            <p className="text-sm text-gray-400">
              A Digital Currency from 1989... Rediscovered in 2025
            </p>
          </div>
          
          <div>
            <h3 className="text-buckazoid-yellow font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#whitepaper" className="text-gray-400 hover:text-buckazoid-orange text-sm flex items-center">
                  <span>White Paper</span>
                  <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="#developers" className="text-gray-400 hover:text-buckazoid-orange text-sm">
                  Developers
                </Link>
              </li>
              <li>
                <Link to="#roadmap" className="text-gray-400 hover:text-buckazoid-orange text-sm">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-buckazoid-yellow font-medium mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#discord" className="text-gray-400 hover:text-buckazoid-orange text-sm">
                  Discord
                </Link>
              </li>
              <li>
                <Link to="#twitter" className="text-gray-400 hover:text-buckazoid-orange text-sm flex items-center">
                  <span>Twitter</span>
                  <Twitter size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="#github" className="text-gray-400 hover:text-buckazoid-orange text-sm flex items-center">
                  <span>GitHub</span>
                  <Github size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-buckazoid-yellow font-medium mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#about" className="text-gray-400 hover:text-buckazoid-orange text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="#faq" className="text-gray-400 hover:text-buckazoid-orange text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-gray-400 hover:text-buckazoid-orange text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">
              © 2025 Buckazoid. All rights reserved. Not affiliated with the original creators of Star Control.
            </p>
            <div className="flex space-x-6">
              <a href="#twitter" className="text-gray-400 hover:text-buckazoid-orange">
                <Twitter size={20} />
              </a>
              <a href="#github" className="text-gray-400 hover:text-buckazoid-orange">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

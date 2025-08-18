
import { Link } from "react-router-dom";
import { X, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h3 className="text-buckazoids-blue font-semibold text-lg">About Buckazoids</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
              Buckazoids is an innovative memecoin inspired by classic gaming culture, 
              bridging nostalgia with modern blockchain technology. Join our growing 
              community and be part of the future of digital currency.
            </p>
            <div className="mt-4">
              <a href="mailto:Buckazoids@ProjectB59.com" 
                 className="text-buckazoids-blue hover:text-buckazoids-orange transition-colors font-semibold">
                Buckazoids@ProjectB59.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-buckazoids-blue font-semibold text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://linktr.ee/Buckazoids"
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group font-bold italic"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Linktree
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Buckazoidscto/Buckazoids-white-paper-CTO-/wiki/Buckazoids-white-paper-English(CTO)" 
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group"
                   target="_blank" 
                   rel="noopener noreferrer">
                  White Paper
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://pump.fun/coin/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump"
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Pump.fun
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku"
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Dexscreener
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://reddit.com/r/buckazoids"
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Reddit
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://projectb59.github.io/buckazoids-site/index.html"
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Project B59
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-buckazoids-blue font-semibold text-lg">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/community" className="text-sm text-gray-600 hover:text-buckazoids-orange">
                  Join Community
                </Link>
              </li>
              <li>
                <a href="https://x.com/BuckazoidsWorld"
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group"
                   target="_blank" 
                   rel="noopener noreferrer">
                  X (Twitter)
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://t.me/+c5SAfu7rI2tiMmYx"
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 mr-1"
                  >
                    <path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
                  </svg>
                  Telegram
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://discord.com/invite/AfqZENqbuJ"
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Discord
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@DocumentingBuckazoids"
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group"
                   target="_blank" 
                   rel="noopener noreferrer">
                  YouTube
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@buckazoids1991?_t=ZT-8v8v4WBLwmU&_r=1"
                   className="text-sm text-gray-600 hover:text-buckazoids-orange flex items-center gap-1 group"
                   target="_blank" 
                   rel="noopener noreferrer">
                  TikTok
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-gray-200 py-8">
          <div className="text-xs text-gray-500 space-y-6 mb-8">
            <p className="leading-relaxed">
              Buckazoids is not affiliated with, endorsed by, or in any way connected to Sierra On-Line, Universe, or any other gaming entities. All trademarks, logos, and intellectual property related to Sierra On-Line, Universe, or other gaming entities are the property of their respective owners. Our products and services are independently developed and are not associated with or sponsored by any gaming companies or entities.
            </p>
            <p className="leading-relaxed">
              Buckazoids is a memecoin created for entertainment and community purposes only. It is not a financial instrument, security, or investment product. Buckazoids has no intrinsic value, is not backed by any assets, and should not be considered a means of financial gain or a substitute for traditional currencies. Any participation in Buckazoids is at your own risk, and we make no representations or warranties regarding its value, stability, or future performance. Always conduct your own research and consult with a qualified financial advisor before engaging with any cryptocurrency or digital asset.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2025 Buckazoids. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

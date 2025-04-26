import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
const Footer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status when component mounts
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };
    checkAuth();

    // Subscribe to auth changes
    const {
      data: {
        subscription
      }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });
    return () => subscription.unsubscribe();
  }, []);
  return <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              
            </div>
            <div className="text-sm text-gray-600 space-y-4 max-w-2xl">
              
              
              
            </div>
          </div>
          
          <div>
            <h3 className="text-buckazoids-blue font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/Buckazoidscto/Buckazoids-white-paper-CTO-/wiki/Buckazoids-white-paper-English(CTO)" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-buckazoids-orange text-sm">
                  White Paper
                </a>
              </li>
              <li>
                <a href="https://pump.fun/coin/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-buckazoids-orange text-sm">
                  Pump.fun
                </a>
              </li>
              <li>
                <a href="https://reddit.com/r/buckazoids" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-buckazoids-orange text-sm">
                  Reddit
                </a>
              </li>
              <li>
                <a href="https://medium.com/@viam_/the-mystery-surrounding-bitcoins-creator-may-soon-be-solved-c7e110ed31d4" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-buckazoids-orange text-sm">
                  Medium
                </a>
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
                <a href="https://x.com/BuckazoidsSOL" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-buckazoids-orange text-sm">
                  X
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@DocumentingBuckazoids" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-buckazoids-orange text-sm">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@buckazoids1991?_t=ZT-8v8v4WBLwmU&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-buckazoids-orange text-sm">
                  TikTok
                </a>
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
              © 2025 Buckazoids. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://x.com/BuckazoidsSOL" className="text-gray-500 hover:text-buckazoids-orange">
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
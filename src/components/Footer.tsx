
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status when component mounts
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };
    checkAuth();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-[1230px] mx-auto px-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="mb-2.5">
              <img src="https://i.imgur.com/6Xv0m5H.png" alt="Buckazoids Logo" className="h-10 object-contain" />
            </div>
            <p className="text-sm text-gray-500">A Digital Currency from 1986... Rediscovered in 2025</p>
          </div>
          
          <div>
            <h3 className="text-[#0056B3] font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/Buckazoidscto/Buckazoids-white-paper-CTO-/wiki/Buckazoids-white-paper-English(CTO)" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#444] hover:text-[#f7931a] text-sm flex items-center"
                >
                  <span>White Paper</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#0056B3] font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#discord" className="text-[#444] hover:text-[#f7931a] text-sm">
                  Discord
                </Link>
              </li>
              <li>
                <a href="https://x.com/BuckazoidsSOL" target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-[#f7931a] text-sm">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#0056B3] font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#about" className="text-[#444] hover:text-[#f7931a] text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#444] hover:text-[#f7931a] text-sm">
                  Contact
                </Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link to="/admin" className="text-[#444] hover:text-[#f7931a] text-sm">
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="mt-[60px] pt-[30px] border-t border-gray-200">
          <div className="text-xs text-gray-500 space-y-6 mb-8">
            <p className="leading-relaxed">
              Buckazoids is not affiliated with, endorsed by, or in any way connected to Sierra On-Line...
            </p>
            <p className="leading-relaxed">
              Buckazoids is a memecoin created for entertainment and community purposes only...
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-[#999] mb-4 md:mb-0">
              © 2025 Buckazoids. All rights reserved.
            </p>
            <a href="https://x.com/BuckazoidsSOL" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#f7931a]">
              Follow us on X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

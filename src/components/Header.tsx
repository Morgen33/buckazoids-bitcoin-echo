
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./header/DesktopNav";
import { MobileNav } from "./header/MobileNav";
import { navigationItems } from "./header/NavigationItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const [cacheBuster, setCacheBuster] = useState(`?v=${Date.now()}`);
  
  // Refresh cacheBuster frequently to ensure fresh content
  useEffect(() => {
    // Initialize with any global cache buster if available
    if (window.CACHE_BUSTER) {
      setCacheBuster(`?v=${window.CACHE_BUSTER}`);
    }
    
    const interval = setInterval(() => {
      setCacheBuster(`?v=${Date.now()}`);
    }, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  
  return (
    <header className="w-full">
      {location.pathname === "/" && (
        <div className="bg-[#f7931a] text-white py-3 sm:py-6 text-center text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="https://x.com/buckazoidssol/status/1915622276986527770?s=42"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold hover:underline"
            >
              Buckazoids.world needs your support!
            </Link>
          </div>
        </div>
      )}

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 sm:h-20">
            <div className="mr-auto">
              <Link to="/" className="font-bold italic text-2xl md:text-3xl">
                Buckazoids
              </Link>
            </div>

            <DesktopNav 
              navigation={navigationItems} 
              activeDropdown={activeDropdown} 
              toggleDropdown={toggleDropdown} 
            />

            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-700" 
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileNav 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        navigation={navigationItems} 
        activeDropdown={activeDropdown} 
        toggleDropdown={toggleDropdown} 
      />
    </header>
  );
};

export default Header;

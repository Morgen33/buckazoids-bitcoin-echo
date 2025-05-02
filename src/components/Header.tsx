
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./header/DesktopNav";
import { MobileNav } from "./header/MobileNav";
import { navigationItems } from "./header/NavigationItems";
import MatrixRain from "./ui/MatrixRain";

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
    <header className="w-full relative">
      {location.pathname === "/" && (
        <div className="bg-[#f7931a] text-white py-3 sm:py-6 text-center text-sm relative z-20">
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

      <div className="bg-transparent relative z-10">
        {/* Matrix Rain Background for Header - Updated background color */}
        <div className="absolute inset-0 w-full h-full z-0 bg-[#01153e] overflow-hidden">
          <MatrixRain 
            color="#F97316" // Bright orange color
            characters="01BUCKAZOIDS" 
            fontSize={16}
            fadeOpacity={0.15}
            speed={0.8}
            bgColor="#01153e" // New background color
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center h-16 sm:h-20">
            <div className="mr-auto">
              <Link to="/" className="font-bold italic text-2xl md:text-3xl text-white">
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
                className="text-white" 
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


import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./header/DesktopNav";
import { MobileNav } from "./header/MobileNav";
import { navigationItems } from "./header/NavigationItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  
  // Generate a cache-busting timestamp for images
  const cacheBuster = `?v=${new Date().getTime()}`;
  
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
          <div className="flex justify-end items-center h-24 sm:h-36 gap-4" style={{minHeight: "6rem"}}>
            <div className="mr-auto my-2 sm:mt-4 sm:mb-4">
              <img 
                src={`/lovable-uploads/be75368e-69e2-4230-89af-142d8bd0dd33.png${cacheBuster}`}
                alt="Buckazoids Logo" 
                className="h-20 sm:h-32 w-auto"
                data-refresh="true"
                style={{
                  height: "5rem",
                  maxHeight: "5rem",
                  objectFit: "contain",
                  display: "block"
                }}
                srcSet={`
                  /lovable-uploads/be75368e-69e2-4230-89af-142d8bd0dd33.png${cacheBuster} 2x,
                  /lovable-uploads/be75368e-69e2-4230-89af-142d8bd0dd33.png${cacheBuster} 1x
                `}
                loading="eager"
              />
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

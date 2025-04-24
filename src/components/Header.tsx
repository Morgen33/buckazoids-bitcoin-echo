
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
  
  return (
    <header className="w-full">
      {location.pathname === "/" && (
        <div className="bg-[#F7931A] text-white py-0 text-center text-base font-semibold h-[55px] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-extrabold">Buckazoids.org needs your support!</span>
          </div>
        </div>
      )}

      <div className="bg-white border-b border-[#eee]">
        <div className="max-w-[1230px] mx-auto px-[30px]">
          <div className="flex items-center h-[60px] justify-between">
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/6Xv0m5H.png" 
                alt="Buckazoids Logo" 
                className="h-[30px] mr-5"
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
                className="text-[#13161F]"
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

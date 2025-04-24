
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
        <div className="bg-[#f7931a] text-white py-[17px] text-center text-base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-extrabold">Buckazoids.world needs your support!</span>
          </div>
        </div>
      )}

      <div className="bg-white border-b border-[#eee]">
        <div className="max-w-[1230px] mx-auto px-[30px]">
          <div className="flex items-center h-[60px] justify-between">
            <img 
              src="https://bitcoin.org/img/icons/logotop.svg?1743181677" 
              alt="Buckazoids" 
              className="h-[29px]"
            />
            
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

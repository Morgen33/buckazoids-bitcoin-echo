
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
        <div className="bg-[#f7931a] text-white py-6 text-center text-sm font-medium">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            Buckazoids.org needs your support!
          </div>
        </div>
      )}

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-16">
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

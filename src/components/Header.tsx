
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./header/DesktopNav";
import { MobileNav } from "./header/MobileNav";
import { navigationItems } from "./header/NavigationItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-[#f7931a] text-white py-6 text-center text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          Buckazoids.org needs your support!
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  className="h-12 w-auto object-contain"
                  src="/lovable-uploads/3b9a9f9c-6eca-49a5-9221-91a3212aa3e5.png"
                  alt="Buckazoids Logo"
                  style={{ maxWidth: 210 }}
                />
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

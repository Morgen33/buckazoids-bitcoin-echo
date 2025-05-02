
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { type NavigationItem } from "./NavigationItems";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navigation: NavigationItem[];
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
  isHomePage?: boolean;
}

export const MobileNav = ({ 
  isOpen,
  setIsOpen,
  navigation,
  activeDropdown,
  toggleDropdown,
  isHomePage = true
}: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className={`md:hidden ${isHomePage ? 'bg-[#000222]' : 'bg-white'} border-t ${isHomePage ? 'border-white/10' : 'border-gray-200'} relative z-[1500]`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map((item) => (
          <div key={item.name}>
            {item.href ? (
              <Link
                to={item.href}
                className={`block px-3 py-2 ${isHomePage ? 'text-white hover:text-buckazoids-orange' : 'text-gray-800 hover:text-buckazoids-orange'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`w-full text-left px-3 py-2 ${isHomePage ? 'text-white hover:text-buckazoids-orange' : 'text-gray-800 hover:text-buckazoids-orange'} flex items-center justify-between`}
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-4 bg-white rounded-md my-1 shadow-inner z-[1500]">
                    {item.submenu?.map((subItem) => (
                      subItem.href.startsWith('/') ? (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-black hover:bg-gray-200"
                          onClick={() => {
                            toggleDropdown(item.name);
                            setIsOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ) : (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-black hover:bg-gray-200"
                          onClick={() => {
                            toggleDropdown(item.name);
                            setIsOpen(false);
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {subItem.name}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
        <div className="pt-2">
          <Button 
            className="w-full bg-buckazoids-orange hover:bg-buckazoids-yellow text-white"
            onClick={() => {
              setIsOpen(false);
              window.location.href = '/buy';
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

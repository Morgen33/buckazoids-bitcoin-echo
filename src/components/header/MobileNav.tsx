
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
}

export const MobileNav = ({ 
  isOpen,
  setIsOpen,
  navigation,
  activeDropdown,
  toggleDropdown,
}: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#000222] border-t border-white/10 relative z-20">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map((item) => (
          <div key={item.name}>
            {item.href ? (
              <Link
                to={item.href}
                className="block px-3 py-2 text-white hover:text-buckazoids-orange"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full text-left px-3 py-2 text-white hover:text-buckazoids-orange flex items-center justify-between"
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-4 bg-[#020530] rounded-md my-1">
                    {item.submenu?.map((subItem) => (
                      item.submenu && subItem.href.startsWith('/') ? (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-white hover:text-buckazoids-orange"
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
                          className="block px-3 py-2 text-sm text-white hover:text-buckazoids-orange"
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

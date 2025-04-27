
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
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map((item) => (
          <div key={item.name}>
            {item.href ? (
              <Link
                to={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-buckazoids-orange"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-buckazoids-orange flex items-center justify-between"
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-4">
                    {item.submenu?.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          toggleDropdown(item.name);
                          setIsOpen(false);
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
        <div className="pt-2">
          <Button className="w-full bg-buckazoids-orange hover:bg-buckazoids-yellow text-white">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

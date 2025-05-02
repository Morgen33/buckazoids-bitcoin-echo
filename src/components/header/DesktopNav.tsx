
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { type NavigationItem } from "./NavigationItems";

interface DesktopNavProps {
  navigation: NavigationItem[];
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
  isHomePage?: boolean;
}

export const DesktopNav = ({
  navigation,
  activeDropdown,
  toggleDropdown,
  isHomePage = false
}: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex space-x-4 items-center">
      {navigation.map(item => (
        <div key={item.name} className="relative group">
          {item.href ? (
            <Link 
              to={item.href} 
              className={`px-3 py-2 ${isHomePage ? 'text-white hover:text-buckazoids-orange' : 'text-buckazoids-blue hover:text-buckazoids-orange'}`}
            >
              {item.name}
            </Link>
          ) : (
            <button 
              onClick={() => toggleDropdown(item.name)} 
              className={`px-3 py-2 ${isHomePage ? 'text-white hover:text-buckazoids-orange' : 'text-buckazoids-blue hover:text-buckazoids-orange'} flex items-center`}
            >
              {item.name}
              <ChevronDown size={16} className="ml-1" />
            </button>
          )}

          {!item.href && activeDropdown === item.name && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1">
                {item.submenu?.map(subItem => (
                  subItem.href.startsWith('/') ? (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {subItem.name}
                    </Link>
                  ) : (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => toggleDropdown(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subItem.name}
                    </a>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

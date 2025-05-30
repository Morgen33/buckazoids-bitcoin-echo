
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { type NavigationItem } from "./NavigationItems";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navigation: NavigationItem[];
  isHomePage?: boolean;
}

export const MobileNav = ({ 
  isOpen,
  setIsOpen,
  navigation,
  isHomePage = true
}: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className={`md:hidden ${isHomePage ? 'bg-[#000222]' : 'bg-[#000222]'} border-t ${isHomePage ? 'border-white/10' : 'border-gray-200'} relative z-[9999]`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map((item) => (
          <div key={item.name}>
            {item.href.startsWith('/') ? (
              <Link
                to={item.href}
                className="block px-3 py-2 text-white hover:text-buckazoids-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                href={item.href}
                className="block px-3 py-2 text-white hover:text-buckazoids-orange transition-colors"
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
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

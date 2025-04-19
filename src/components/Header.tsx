import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navigation = [
    {
      name: "Introduction",
      submenu: [
        { name: "Start Here", href: "#intro" },
        { name: "White Paper", href: "#whitepaper" },
        { name: "Resources", href: "#resources" },
      ],
    },
    {
      name: "News",
      submenu: [
        { name: "Latest Updates", href: "/news" },
        { name: "Announcements", href: "/news#announcements" },
        { name: "Press Releases", href: "/news#press" },
      ],
    },
    {
      name: "Community",
      submenu: [
        { name: "Join Us", href: "#community" },
        { name: "Discord", href: "#discord" },
        { name: "Twitter", href: "https://x.com/BuckazoidsSOL" },
      ],
    },
    {
      name: "Documentation",
      submenu: [
        { name: "Tokenomics", href: "#tokenomics" },
        { name: "FAQ", href: "#faq" },
        { name: "Development", href: "#development" },
      ],
    },
    {
      name: "Contact",
      submenu: [
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-12 w-12 object-contain"
                src="/lovable-uploads/0cfa1a1f-d025-4c12-9b77-2970252ee0c8.png"
                alt="Buckazoids Coin"
              />
              <span className="ml-2 text-xl font-bold text-buckazoids-blue">
                BUCKAZOIDS
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-4 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="px-3 py-2 text-gray-700 hover:text-buckazoids-orange flex items-center"
                >
                  {item.name}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button className="ml-4 bg-buckazoids-orange hover:bg-buckazoids-yellow text-white">
              Get Started
            </Button>
          </nav>

          {/* Mobile button */}
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-buckazoids-orange flex items-center justify-between"
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsOpen(false);
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
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
      )}
    </header>
  );
};

export default Header;
